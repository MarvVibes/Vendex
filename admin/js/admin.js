// ================================================================
// VENDEX ADMIN DASHBOARD — JavaScript
// ================================================================

// Auth guard
(async () => {
    const session = await VendexDB.getSession();
    if (!session) { window.location.href = 'index.html'; return; }
    const profile = await VendexDB.getProfile(session.user.id);
    if (!profile?.is_admin) { await VendexDB.signOut(); window.location.href = 'index.html'; return; }
    document.getElementById('user-name').textContent = profile.full_name || session.user.email;
    document.getElementById('user-avatar').textContent = (profile.full_name || session.user.email)[0].toUpperCase();
    initDashboard();
})();

// ---------------------------------------------------------------- Utils
function showToast(msg, type = 'info') {
    const t = document.getElementById('admin-toast');
    t.textContent = msg; t.className = `admin-toast ${type} show`;
    setTimeout(() => t.classList.remove('show'), 3500);
}

function formatCurrency(n) { return '$' + (Number(n) || 0).toFixed(2); }

function formatDate(d) {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function statusBadge(status) {
    const map = { pending: 'warning', processing: 'info', shipped: 'purple', delivered: 'success', cancelled: 'danger', paid: 'success', failed: 'danger' };
    return `<span class="badge badge-${map[status] || 'gray'}">${status}</span>`;
}

function slugify(str) { return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// Close modals on backdrop click / X button
document.querySelectorAll('.modal-close, [data-close]').forEach(el => {
    el.addEventListener('click', () => closeModal(el.dataset.close || el.closest('.modal-overlay').id));
});
document.querySelectorAll('.modal-overlay').forEach(el => {
    el.addEventListener('click', e => { if (e.target === el) closeModal(el.id); });
});

// ---------------------------------------------------------------- Navigation
function showSection(name) {
    document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(`section-${name}`).classList.add('active');
    document.querySelector(`[data-section="${name}"]`)?.classList.add('active');
    const titles = { overview: 'Overview', products: 'Products', categories: 'Categories', orders: 'Orders' };
    document.getElementById('page-title').textContent = titles[name] || name;
    if (name === 'products') loadProducts();
    if (name === 'categories') loadCategories();
    if (name === 'orders') loadOrders();
}

document.querySelectorAll('.nav-item[data-section]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); showSection(el.dataset.section); });
});

document.getElementById('btn-logout').addEventListener('click', async () => {
    await VendexDB.signOut();
    window.location.href = 'index.html';
});

// ---------------------------------------------------------------- Init
async function initDashboard() {
    loadStats();
    loadRecentOrders();
    loadCategoryFilter();
}

// ---------------------------------------------------------------- STATS
async function loadStats() {
    const stats = await VendexDB.adminGetStats();
    document.getElementById('stat-products').textContent = stats.totalProducts;
    document.getElementById('stat-published').textContent = `${stats.publishedProducts} published`;
    document.getElementById('stat-orders').textContent = stats.totalOrders;
    document.getElementById('stat-pending').textContent = `${stats.pendingOrders} pending`;
    document.getElementById('stat-revenue').textContent = formatCurrency(stats.totalRevenue);
    document.getElementById('stat-today').textContent = `${stats.todayOrders} orders today`;
    document.getElementById('stat-lowstock').textContent = stats.lowStock;
    if (stats.pendingOrders > 0) {
        const badge = document.getElementById('pending-badge');
        badge.textContent = stats.pendingOrders;
        badge.style.display = 'inline-block';
    }
}

// ---------------------------------------------------------------- RECENT ORDERS
async function loadRecentOrders() {
    const orders = await VendexDB.adminGetAllOrders();
    const tbody = document.getElementById('recent-orders-body');
    const recent = orders.slice(0, 8);
    if (!recent.length) { tbody.innerHTML = '<tr class="loading-row"><td colspan="6">No orders yet</td></tr>'; return; }
    tbody.innerHTML = recent.map(o => `
        <tr>
          <td><span style="font-family:monospace;font-size:0.78rem;color:#6b7280">#${o.id.slice(0,8)}</span></td>
          <td><div style="font-weight:500">${o.customer_name}</div><div style="font-size:0.75rem;color:#9ca3af">${o.customer_email}</div></td>
          <td>${Array.isArray(o.items) ? o.items.length : 0} item(s)</td>
          <td style="font-weight:600">${formatCurrency(o.total)}</td>
          <td>${statusBadge(o.status)}</td>
          <td style="color:#6b7280;font-size:0.82rem">${formatDate(o.created_at)}</td>
        </tr>`).join('');
}

// ---------------------------------------------------------------- PRODUCTS
let allProducts = [], allCategories = [];

async function loadProducts() {
    allProducts = await VendexDB.adminGetAllProducts();
    renderProductsTable(allProducts);
}

function renderProductsTable(products) {
    const tbody = document.getElementById('products-table-body');
    if (!products.length) {
        tbody.innerHTML = '<tr class="loading-row"><td colspan="7"><div class="empty-state"><h3>No products found</h3></div></td></tr>';
        return;
    }
    tbody.innerHTML = products.map(p => {
        const img = p.images?.[0] ? resolveImageUrl(p.images[0]) : '';
        const catName = p.categories?.name || '—';
        const stockBadge = p.stock <= 0 ? 'danger' : p.stock < 5 ? 'warning' : 'success';
        return `<tr>
          <td>
            <div class="product-cell">
              ${img ? `<img src="${img}" class="product-thumb" onerror="this.style.display='none'">` : '<div class="product-thumb"></div>'}
              <div><div class="product-name">${p.name}</div><div class="product-slug">${p.slug}</div></div>
            </div>
          </td>
          <td><span class="badge badge-gray">${catName}</span></td>
          <td><strong>${formatCurrency(p.price)}</strong>${p.compare_price ? `<br><span style="color:#9ca3af;text-decoration:line-through;font-size:0.78rem">${formatCurrency(p.compare_price)}</span>` : ''}</td>
          <td><span class="badge badge-${stockBadge}">${p.stock} units</span></td>
          <td>${p.badge ? `<span class="badge badge-purple">${p.badge}</span>` : '—'}</td>
          <td>
            <label class="toggle">
              <input type="checkbox" ${p.is_published ? 'checked' : ''} onchange="togglePublish('${p.id}', this.checked)">
              <span class="toggle-slider"></span>
            </label>
          </td>
          <td>
            <div style="display:flex;gap:0.4rem;">
              <button class="btn btn-outline btn-sm btn-icon" title="Edit" onclick="openEditProduct('${p.id}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </button>
              <button class="btn btn-outline btn-sm btn-icon" title="Delete" onclick="deleteProduct('${p.id}','${p.name.replace(/'/g,"\\'")}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/></svg>
              </button>
            </div>
          </td>
        </tr>`;
    }).join('');
}

// Search & filter
document.getElementById('product-search').addEventListener('input', function() { applyProductFilters(); });
document.getElementById('category-filter').addEventListener('change', function() { applyProductFilters(); });

function applyProductFilters() {
    const q = document.getElementById('product-search').value.toLowerCase();
    const cat = document.getElementById('category-filter').value;
    const filtered = allProducts.filter(p => {
        const matchQ = !q || p.name.toLowerCase().includes(q) || p.slug.includes(q);
        const matchCat = !cat || p.categories?.slug === cat;
        return matchQ && matchCat;
    });
    renderProductsTable(filtered);
}

async function loadCategoryFilter() {
    allCategories = await VendexDB.adminGetAllCategories();
    const sel = document.getElementById('category-filter');
    allCategories.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.slug; opt.textContent = c.name;
        sel.appendChild(opt);
    });
    const pSel = document.getElementById('product-category');
    pSel.innerHTML = '<option value="">Select category</option>';
    allCategories.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id; opt.textContent = c.name;
        pSel.appendChild(opt);
    });
}

// Toggle publish
async function togglePublish(id, val) {
    const res = await VendexDB.adminTogglePublish(id, val);
    if (res.success) showToast(val ? '✓ Product published' : '✓ Product hidden', 'success');
    else showToast('Error: ' + (res.error?.message || 'Failed'), 'error');
}

// Open Add product
document.getElementById('btn-add-product').addEventListener('click', () => {
    document.getElementById('product-modal-title').textContent = 'Add Product';
    document.getElementById('product-id').value = '';
    document.getElementById('product-name').value = '';
    document.getElementById('product-slug').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-compare-price').value = '';
    document.getElementById('product-description').value = '';
    document.getElementById('product-badge').value = '';
    document.getElementById('product-stock').value = '0';
    document.getElementById('product-image-url').value = '';
    document.getElementById('product-published').checked = true;
    document.getElementById('image-preview-grid').innerHTML = '';
    document.querySelectorAll('.size-chip').forEach(c => { c.classList.toggle('selected', ['XS','S','M','L','XL'].includes(c.dataset.size)); });
    const pSel = document.getElementById('product-category');
    pSel.innerHTML = '<option value="">Select category</option>';
    allCategories.forEach(c => { const o = document.createElement('option'); o.value = c.id; o.textContent = c.name; pSel.appendChild(o); });
    openModal('product-modal-overlay');
});

// Auto-slug
document.getElementById('product-name').addEventListener('input', function() {
    if (!document.getElementById('product-id').value) {
        document.getElementById('product-slug').value = slugify(this.value);
    }
});

// Size chips
document.getElementById('sizes-selector').addEventListener('click', e => {
    if (e.target.classList.contains('size-chip')) e.target.classList.toggle('selected');
});

// Open Edit product
function openEditProduct(id) {
    const p = allProducts.find(x => x.id === id);
    if (!p) return;
    document.getElementById('product-modal-title').textContent = 'Edit Product';
    document.getElementById('product-id').value = p.id;
    document.getElementById('product-name').value = p.name;
    document.getElementById('product-slug').value = p.slug;
    document.getElementById('product-price').value = p.price;
    document.getElementById('product-compare-price').value = p.compare_price || '';
    document.getElementById('product-description').value = p.description || '';
    document.getElementById('product-badge').value = p.badge || '';
    document.getElementById('product-stock').value = p.stock || 0;
    document.getElementById('product-published').checked = p.is_published;
    document.getElementById('product-image-url').value = p.images?.[0] || '';
    document.getElementById('image-preview-grid').innerHTML = (p.images || []).map(img =>
        `<img src="${resolveImageUrl(img)}" class="image-preview" onerror="this.style.display='none'">`
    ).join('');
    const sizes = p.sizes || [];
    document.querySelectorAll('.size-chip').forEach(c => c.classList.toggle('selected', sizes.includes(c.dataset.size)));
    const pSel = document.getElementById('product-category');
    pSel.innerHTML = '<option value="">Select category</option>';
    allCategories.forEach(c => {
        const o = document.createElement('option');
        o.value = c.id; o.textContent = c.name;
        if (p.category_id === c.id) o.selected = true;
        pSel.appendChild(o);
    });
    openModal('product-modal-overlay');
}

// Save product
document.getElementById('btn-save-product').addEventListener('click', async () => {
    const btn = document.getElementById('btn-save-product');
    const name = document.getElementById('product-name').value.trim();
    const slug = document.getElementById('product-slug').value.trim();
    const price = parseFloat(document.getElementById('product-price').value);
    if (!name || !slug || isNaN(price)) { showToast('Please fill in Name, Slug, and Price', 'error'); return; }
    btn.innerHTML = '<span class="spinner"></span> Saving...';
    btn.disabled = true;

    // Handle image upload if file selected
    let imageUrl = document.getElementById('product-image-url').value.trim();
    const fileInput = document.getElementById('image-upload-input');
    if (fileInput.files.length > 0) {
        const uploadRes = await VendexDB.uploadProductImage(fileInput.files[0], slug);
        if (uploadRes.success) imageUrl = uploadRes.url;
        else showToast('Image upload failed: ' + (uploadRes.error?.message || ''), 'error');
    }

    const sizes = [...document.querySelectorAll('.size-chip.selected')].map(c => c.dataset.size);
    const productData = {
        name, slug, price,
        compare_price: parseFloat(document.getElementById('product-compare-price').value) || null,
        description: document.getElementById('product-description').value.trim(),
        badge: document.getElementById('product-badge').value.trim() || null,
        stock: parseInt(document.getElementById('product-stock').value) || 0,
        category_id: document.getElementById('product-category').value || null,
        sizes, is_published: document.getElementById('product-published').checked,
        images: imageUrl ? [imageUrl] : []
    };
    const existingId = document.getElementById('product-id').value;
    if (existingId) productData.id = existingId;

    const res = await VendexDB.adminSaveProduct(productData);
    btn.innerHTML = 'Save Product'; btn.disabled = false;
    if (res.success) {
        showToast('✓ Product saved!', 'success');
        closeModal('product-modal-overlay');
        loadProducts();
        loadStats();
    } else {
        showToast('Error: ' + (res.error?.message || 'Could not save'), 'error');
    }
});

// Delete product
async function deleteProduct(id, name) {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return;
    const res = await VendexDB.adminDeleteProduct(id);
    if (res.success) { showToast('✓ Product deleted', 'success'); loadProducts(); loadStats(); }
    else showToast('Error: ' + (res.error?.message || 'Failed'), 'error');
}

// Image upload preview
document.getElementById('image-upload-area').addEventListener('click', () => document.getElementById('image-upload-input').click());
document.getElementById('image-upload-input').addEventListener('change', function() {
    const grid = document.getElementById('image-preview-grid');
    grid.innerHTML = '';
    Array.from(this.files).forEach(f => {
        const url = URL.createObjectURL(f);
        grid.innerHTML += `<img src="${url}" class="image-preview">`;
    });
});

// ---------------------------------------------------------------- CATEGORIES
async function loadCategories() {
    const cats = await VendexDB.adminGetAllCategories();
    const tbody = document.getElementById('categories-table-body');
    if (!cats.length) { tbody.innerHTML = '<tr class="loading-row"><td colspan="5">No categories</td></tr>'; return; }
    tbody.innerHTML = cats.map(c => `<tr>
      <td><strong>${c.name}</strong></td>
      <td><code style="background:#f3f4f6;padding:2px 6px;border-radius:3px;font-size:0.8rem">${c.slug}</code></td>
      <td style="color:#6b7280">${c.description || '—'}</td>
      <td>${c.products?.[0]?.count ?? '—'}</td>
      <td>
        <div style="display:flex;gap:0.4rem;">
          <button class="btn btn-outline btn-sm" onclick="openEditCategory('${c.id}')">Edit</button>
          <button class="btn btn-outline btn-sm" onclick="deleteCategory('${c.id}','${c.name}')">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg>
          </button>
        </div>
      </td>
    </tr>`).join('');
}

document.getElementById('btn-add-category').addEventListener('click', () => {
    document.getElementById('category-modal-title').textContent = 'Add Category';
    document.getElementById('category-id').value = '';
    document.getElementById('category-name').value = '';
    document.getElementById('category-slug').value = '';
    document.getElementById('category-description').value = '';
    document.getElementById('category-sort').value = '0';
    openModal('category-modal-overlay');
});

document.getElementById('category-name').addEventListener('input', function() {
    if (!document.getElementById('category-id').value)
        document.getElementById('category-slug').value = slugify(this.value);
});

function openEditCategory(id) {
    const cats = document.querySelectorAll('#categories-table-body tr');
    // Refetch from server for accuracy
    VendexDB.adminGetAllCategories().then(list => {
        const c = list.find(x => x.id === id); if (!c) return;
        document.getElementById('category-modal-title').textContent = 'Edit Category';
        document.getElementById('category-id').value = c.id;
        document.getElementById('category-name').value = c.name;
        document.getElementById('category-slug').value = c.slug;
        document.getElementById('category-description').value = c.description || '';
        document.getElementById('category-sort').value = c.sort_order || 0;
        openModal('category-modal-overlay');
    });
}

document.getElementById('btn-save-category').addEventListener('click', async () => {
    const name = document.getElementById('category-name').value.trim();
    const slug = document.getElementById('category-slug').value.trim();
    if (!name || !slug) { showToast('Name and Slug are required', 'error'); return; }
    const data = { name, slug, description: document.getElementById('category-description').value.trim(), sort_order: parseInt(document.getElementById('category-sort').value) || 0 };
    const id = document.getElementById('category-id').value;
    if (id) data.id = id;
    const res = await VendexDB.adminSaveCategory(data);
    if (res.success) { showToast('✓ Category saved!', 'success'); closeModal('category-modal-overlay'); loadCategories(); loadCategoryFilter(); }
    else showToast('Error: ' + (res.error?.message || 'Failed'), 'error');
});

async function deleteCategory(id, name) {
    if (!confirm(`Delete category "${name}"? Products in this category will become uncategorised.`)) return;
    const res = await VendexDB.adminDeleteCategory(id);
    if (res.success) { showToast('✓ Category deleted', 'success'); loadCategories(); }
    else showToast('Error: ' + (res.error?.message || 'Failed'), 'error');
}

// ---------------------------------------------------------------- ORDERS
let allOrders = [];

async function loadOrders() {
    allOrders = await VendexDB.adminGetAllOrders();
    renderOrdersTable(allOrders);
}

function renderOrdersTable(orders) {
    const tbody = document.getElementById('orders-table-body');
    if (!orders.length) { tbody.innerHTML = '<tr class="loading-row"><td colspan="8">No orders yet</td></tr>'; return; }
    tbody.innerHTML = orders.map(o => `<tr>
      <td><span style="font-family:monospace;font-size:0.78rem;color:#6b7280">#${o.id.slice(0,8)}</span></td>
      <td><div style="font-weight:500">${o.customer_name}</div><div style="font-size:0.75rem;color:#9ca3af">${o.customer_email}</div></td>
      <td>${Array.isArray(o.items) ? o.items.length : 0}</td>
      <td style="font-weight:600">${formatCurrency(o.total)}</td>
      <td>${statusBadge(o.payment_status || 'pending')}</td>
      <td>
        <select class="form-control" style="padding:0.3rem 0.5rem;font-size:0.78rem;width:130px;" onchange="updateOrderStatus('${o.id}', this.value)">
          ${['pending','processing','shipped','delivered','cancelled'].map(s => `<option value="${s}" ${o.status===s?'selected':''}>${s}</option>`).join('')}
        </select>
      </td>
      <td style="color:#6b7280;font-size:0.82rem">${formatDate(o.created_at)}</td>
      <td><button class="btn btn-outline btn-sm" onclick="openOrderDetail('${o.id}')">View</button></td>
    </tr>`).join('');
}

document.getElementById('order-status-filter').addEventListener('change', function() {
    const val = this.value;
    renderOrdersTable(val ? allOrders.filter(o => o.status === val) : allOrders);
});

async function updateOrderStatus(id, status) {
    const res = await VendexDB.adminUpdateOrderStatus(id, status);
    if (res.success) { showToast(`✓ Order status → ${status}`, 'success'); loadStats(); }
    else showToast('Error updating status', 'error');
}

function openOrderDetail(id) {
    const o = allOrders.find(x => x.id === id); if (!o) return;
    const items = Array.isArray(o.items) ? o.items : [];
    document.getElementById('order-modal-body').innerHTML = `
      <div class="order-meta-grid">
        <div class="order-meta-block"><div class="order-meta-label">Order ID</div><div class="order-meta-value" style="font-family:monospace">${o.id}</div></div>
        <div class="order-meta-block"><div class="order-meta-label">Date</div><div class="order-meta-value">${formatDate(o.created_at)}</div></div>
        <div class="order-meta-block"><div class="order-meta-label">Customer</div><div class="order-meta-value">${o.customer_name}<br><span style="color:#6b7280;font-size:0.82rem">${o.customer_email}</span></div></div>
        <div class="order-meta-block"><div class="order-meta-label">Shipping Address</div><div class="order-meta-value">${o.shipping_address || '—'}, ${o.shipping_city || ''}</div></div>
        <div class="order-meta-block"><div class="order-meta-label">Payment Ref</div><div class="order-meta-value" style="font-family:monospace;font-size:0.82rem">${o.payment_ref || '—'}</div></div>
        <div class="order-meta-block"><div class="order-meta-label">Payment Status</div><div class="order-meta-value">${statusBadge(o.payment_status || 'pending')}</div></div>
      </div>
      <table class="order-items-table">
        <thead><tr><th>Item</th><th>Size</th><th>Qty</th><th>Price</th><th>Subtotal</th></tr></thead>
        <tbody>${items.map(i => `<tr>
          <td><div style="display:flex;align-items:center;gap:0.75rem;">${i.image ? `<img src="${resolveImageUrl(i.image)}" class="order-item-img" onerror="this.style.display='none'">` : ''}<span>${i.name}</span></div></td>
          <td>${i.size || '—'}</td><td>${i.qty}</td>
          <td>${formatCurrency(i.price)}</td>
          <td>${formatCurrency((i.price||0)*(i.qty||1))}</td>
        </tr>`).join('')}</tbody>
      </table>
      <div style="margin-top:1.5rem;text-align:right">
        <div style="display:flex;justify-content:flex-end;gap:3rem;font-size:0.875rem;color:#6b7280;margin-bottom:0.5rem"><span>Subtotal</span><span>${formatCurrency(o.subtotal)}</span></div>
        <div style="display:flex;justify-content:flex-end;gap:3rem;font-size:0.875rem;color:#6b7280;margin-bottom:0.75rem"><span>Shipping</span><span>${formatCurrency(o.shipping_cost)}</span></div>
        <div style="display:flex;justify-content:flex-end;gap:3rem;font-size:1.1rem;font-weight:700"><span>Total</span><span>${formatCurrency(o.total)}</span></div>
      </div>`;
    openModal('order-modal-overlay');
}

window.togglePublish = togglePublish;
window.openEditProduct = openEditProduct;
window.deleteProduct = deleteProduct;
window.openEditCategory = openEditCategory;
window.deleteCategory = deleteCategory;
window.updateOrderStatus = updateOrderStatus;
window.openOrderDetail = openOrderDetail;
window.showSection = showSection;
