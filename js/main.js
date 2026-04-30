document.addEventListener('DOMContentLoaded', () => {
    // --- Inject Mega Menu into all nav#nav-menu elements ---
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        const currentPath = window.location.pathname;
        const isWomen = currentPath.includes('category_women');
        const isMen = currentPath.includes('category_men');
        const isAcc = currentPath.includes('category_accessories');

        navMenu.innerHTML = `
        <ul class="nav-list">
            <li class="nav-item has-mega">
                <a href="category_women.html" class="nav-link${isWomen ? ' active' : ''}">New In <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></a>
                <div class="mega-menu">
                    <div class="mega-inner container">
                        <div class="mega-col">
                            <h4 class="mega-heading">New Arrivals</h4>
                            <ul>
                                <li><a href="category_women.html">New This Week</a></li>
                                <li><a href="category_women.html">Best Sellers</a></li>
                                <li><a href="category_women.html">SS26 Collection</a></li>
                                <li><a href="category_men.html">Men's New In</a></li>
                            </ul>
                        </div>
                        <div class="mega-col">
                            <h4 class="mega-heading">Trending</h4>
                            <ul>
                                <li><a href="category_women.html">Evening Wear</a></li>
                                <li><a href="category_women.html">Casual Essentials</a></li>
                                <li><a href="category_accessories.html">Accessories Edit</a></li>
                                <li><a href="category_men.html">Tailored Fits</a></li>
                            </ul>
                        </div>
                        <div class="mega-featured">
                            <a href="category_women.html" class="mega-feature-card">
                                <img src="assets/images/hero_new.png" alt="New Collection">
                                <div class="mega-feature-label">SS26 Edit</div>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-item has-mega">
                <a href="category_women.html" class="nav-link${isWomen ? ' active' : ''}">Women <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></a>
                <div class="mega-menu">
                    <div class="mega-inner container">
                        <div class="mega-col">
                            <h4 class="mega-heading">Clothing</h4>
                            <ul>
                                <li><a href="product.html?id=midi-dress">Dresses</a></li>
                                <li><a href="product.html?id=silk-blouse">Tops &amp; Blouses</a></li>
                                <li><a href="category_women.html">Knitwear</a></li>
                                <li><a href="product.html?id=trench-coat">Coats &amp; Jackets</a></li>
                                <li><a href="category_women.html">Trousers</a></li>
                            </ul>
                        </div>
                        <div class="mega-col">
                            <h4 class="mega-heading">Collections</h4>
                            <ul>
                                <li><a href="product.html?id=evening-gown">Evening Wear</a></li>
                                <li><a href="category_women.html">Weekend Edit</a></li>
                                <li><a href="category.html?c=women">New Arrivals</a></li>
                                <li><a href="category.html?c=women">Women</a></li>
                                <li><a href="category.html?c=men">Men</a></li>
                                <li><a href="category.html?c=accessories">Accessories</a></li>
                                <li><a href="category.html?c=women">Sale</a></li>        </ul>
                        </div>
                        <div class="mega-featured">
                            <a href="category_women.html" class="mega-feature-card">
                                <img src="assets/images/cat_women.png" alt="Women's Collection">
                                <div class="mega-feature-label">Women's Edit</div>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-item has-mega">
                <a href="category_men.html" class="nav-link${isMen ? ' active' : ''}">Men <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></a>
                <div class="mega-menu">
                    <div class="mega-inner container">
                        <div class="mega-col">
                            <h4 class="mega-heading">Clothing</h4>
                            <ul>
                                <li><a href="product.html?id=navy-suit">Suits</a></li>
                                <li><a href="product.html?id=black-hoodie">Hoodies &amp; Sweatshirts</a></li>
                                <li><a href="product.html?id=trench-coat">Coats &amp; Jackets</a></li>
                                <li><a href="product.html?id=casual-top">Tops</a></li>
                                <li><a href="product.html?id=chinos">Trousers</a></li>
                            </ul>
                        </div>
                        <div class="mega-col">
                            <h4 class="mega-heading">Style Edits</h4>
                            <ul>
                                <li><a href="category_men.html">Smart Casual</a></li>
                                <li><a href="category_men.html">Formal Wear</a></li>
                                <li><a href="category_men.html">Streetwear</a></li>
                                <li><a href="category_accessories.html">Accessories</a></li>
                            </ul>
                        </div>
                        <div class="mega-featured">
                            <a href="category_men.html" class="mega-feature-card">
                                <img src="assets/images/cat_men.png" alt="Men's Collection">
                                <div class="mega-feature-label">Men's Edit</div>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-item has-mega">
                <a href="category_accessories.html" class="nav-link${isAcc ? ' active' : ''}">Accessories <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg></a>
                <div class="mega-menu">
                    <div class="mega-inner container">
                        <div class="mega-col">
                            <h4 class="mega-heading">Shop By Type</h4>
                            <ul>
                                <li><a href="product.html?id=leather-handbag">Bags &amp; Handbags</a></li>
                                <li><a href="product.html?id=aviator-sunglasses">Sunglasses</a></li>
                                <li><a href="product.html?id=silver-watch">Watches</a></li>
                                <li><a href="product.html?id=silk-scarf">Scarves</a></li>
                                <li><a href="product.html?id=pendant-necklace">Jewellery</a></li>
                            </ul>
                        </div>
                        <div class="mega-col">
                            <h4 class="mega-heading">Edits</h4>
                            <ul>
                                <li><a href="category_accessories.html">New Arrivals</a></li>
                                <li><a href="category_accessories.html">Gift Ideas</a></li>
                                <li><a href="category_accessories.html">Under $100</a></li>
                                <li><a href="product.html?id=leather-belt">Belts</a></li>
                            </ul>
                        </div>
                        <div class="mega-featured">
                            <a href="category_accessories.html" class="mega-feature-card">
                                <img src="assets/images/cat_acc.png" alt="Accessories">
                                <div class="mega-feature-label">Accessories Edit</div>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>`;
    }

    // Mobile Menu Toggle — with backdrop overlay + body scroll lock
    const mobileToggle = document.getElementById('mobile-toggle');

    // Inject nav backdrop once
    let navBackdrop = document.getElementById('nav-backdrop');
    if (!navBackdrop) {
        navBackdrop = document.createElement('div');
        navBackdrop.className = 'nav-backdrop';
        navBackdrop.id = 'nav-backdrop';
        document.body.appendChild(navBackdrop);
    }

    function openMobileNav() {
        if (navMenu) navMenu.classList.add('show-menu');
        navBackdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
        if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
    }

    function closeMobileNav() {
        if (navMenu) navMenu.classList.remove('show-menu');
        navBackdrop.classList.remove('show');
        document.body.style.overflow = '';
        if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    }

    if (mobileToggle) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.addEventListener('click', () => {
            const isOpen = navMenu && navMenu.classList.contains('show-menu');
            isOpen ? closeMobileNav() : openMobileNav();
        });
    }

    // Close on backdrop click
    navBackdrop.addEventListener('click', closeMobileNav);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('show-menu')) closeMobileNav();
    });

    // Close menu when clicking a nav link (re-query after mega menu injection)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => closeMobileNav());
    });

    // Sticky Header
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    
    const scrollActive = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    };
    
    window.addEventListener('scroll', scrollActive);

    // Cart Functionality & Persistence
    const cartBtns = document.querySelectorAll('.quick-add-btn');
    const headerCartBtns = document.querySelectorAll('.cart-btn');
    const cartCountEls = document.querySelectorAll('.cart-count');
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    
    // Inject Drawer HTML dynamically
    const drawerHtml = `
        <div class="cart-overlay" id="cart-overlay"></div>
        <div class="cart-drawer" id="cart-drawer">
            <div class="cart-drawer-header">
                <h2>Your Cart</h2>
                <button class="close-cart-btn" id="close-cart-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <div class="cart-drawer-body" id="cart-drawer-items"></div>
            <div class="cart-drawer-footer">
                <div class="drawer-summary-row"><span>Subtotal</span><span id="drawer-subtotal">$0.00</span></div>
                <p style="font-size: 0.8rem; color: #777; margin-bottom: 1.5rem;">Taxes and shipping calculated at checkout</p>
                <a href="checkout.html" class="btn btn-primary" style="width: 100%; text-align: center;">Proceed to Checkout</a>
            </div>
        </div>
    `;
    if (!document.getElementById('cart-drawer')) {
        document.body.insertAdjacentHTML('beforeend', drawerHtml);
    }

    const cartOverlay = document.getElementById('cart-overlay');
    const cartDrawer = document.getElementById('cart-drawer');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const drawerItemsContainer = document.getElementById('cart-drawer-items');
    const drawerSubtotal = document.getElementById('drawer-subtotal');
    
    // Initialize Cart
    let cart = JSON.parse(localStorage.getItem('vendex_cart')) || [];
    
    function updateCartCount() {
        cartCountEls.forEach(el => el.textContent = cart.length);
    }

    function toggleCartDrawer(show) {
        if (show) {
            cartOverlay.classList.add('active');
            cartDrawer.classList.add('active');
            document.body.style.overflow = 'hidden';
            renderDrawer();
        } else {
            cartOverlay.classList.remove('active');
            cartDrawer.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCartDrawer(false));
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => toggleCartDrawer(false));

    // Override header cart buttons
    headerCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!window.location.href.includes('checkout')) {
                e.preventDefault();
                toggleCartDrawer(true);
            }
        });
    });

    function renderDrawer() {
        if (!drawerItemsContainer) return;
        
        if (!cart || !Array.isArray(cart) || cart.length === 0) {
            drawerItemsContainer.innerHTML = '<p class="cart-empty-msg">Your cart is empty.</p>';
            if (drawerSubtotal) drawerSubtotal.textContent = '$0.00';
            return;
        }

        let itemsHtml = '';
        let subtotal = 0;

        cart.forEach((item, index) => {
            const price = typeof item.price === 'number' && !isNaN(item.price) ? item.price : 120.00;
            const name = item.name || 'Vendex Item';
            const image = item.image || 'assets/images/product_trench_coat.png';

            subtotal += price;
            itemsHtml += `
                <div class="summary-item">
                    <img src="${image}" alt="${name}">
                    <div class="item-details">
                        <div class="item-details-title">${name}</div>
                        <div style="color: #777; margin-bottom: 0.25rem;">Size: S</div>
                        <button class="remove-item-btn drawer-remove" data-index="${index}" style="background:none; border:none; color:#dc3545; text-decoration:none; padding:0; font-size:0.8rem; cursor:pointer; font-family:var(--font-sans);">Remove</button>
                    </div>
                    <div class="item-price">$${price.toFixed(2)}</div>
                </div>
            `;
        });

        drawerItemsContainer.innerHTML = itemsHtml;
        if (drawerSubtotal) drawerSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    }

    if (drawerItemsContainer) {
        drawerItemsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('drawer-remove')) {
                const index = parseInt(e.target.getAttribute('data-index'), 10);
                cart.splice(index, 1);
                localStorage.setItem('vendex_cart', JSON.stringify(cart));
                updateCartCount();
                renderDrawer();
            }
        });
    }

    updateCartCount();

    // --- Quick View Modal ---
    const quickViewHtml = `
        <div class="qv-overlay" id="qv-overlay"></div>
        <div class="qv-modal" id="qv-modal" role="dialog" aria-modal="true">
            <button class="qv-close" id="qv-close" aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div class="qv-body">
                <div class="qv-image-col">
                    <img id="qv-img" src="" alt="">
                </div>
                <div class="qv-info-col">
                    <span class="qv-vendor" id="qv-vendor">Vendex</span>
                    <h2 class="qv-title" id="qv-title"></h2>
                    <div class="qv-price" id="qv-price"></div>
                    <div class="qv-sizes">
                        <h4>Select Size</h4>
                        <div class="qv-size-btns">
                            <button class="qv-size active">XS</button>
                            <button class="qv-size">S</button>
                            <button class="qv-size">M</button>
                            <button class="qv-size">L</button>
                            <button class="qv-size">XL</button>
                        </div>
                    </div>
                    <button class="btn btn-primary qv-add-to-cart" id="qv-add-to-cart" style="width:100%; margin-top:1.5rem;">Add to Cart</button>
                    <a href="#" class="qv-full-link" id="qv-full-link">View Full Details →</a>
                </div>
            </div>
        </div>
    `;
    if (!document.getElementById('qv-modal')) {
        document.body.insertAdjacentHTML('beforeend', quickViewHtml);
    }

    const qvOverlay = document.getElementById('qv-overlay');
    const qvModal = document.getElementById('qv-modal');
    const qvClose = document.getElementById('qv-close');
    const qvImg = document.getElementById('qv-img');
    const qvVendor = document.getElementById('qv-vendor');
    const qvTitle = document.getElementById('qv-title');
    const qvPrice = document.getElementById('qv-price');
    const qvAddBtn = document.getElementById('qv-add-to-cart');
    const qvFullLink = document.getElementById('qv-full-link');

    let qvCurrentProduct = {};

    function openQuickView(product) {
        qvCurrentProduct = product;
        qvImg.src = product.image;
        qvImg.alt = product.name;
        qvTitle.textContent = product.name;
        qvPrice.textContent = product.priceDisplay || `$${product.price.toFixed(2)}`;
        if (qvVendor) qvVendor.textContent = product.vendor || 'Vendex';
        if (qvFullLink) qvFullLink.href = product.link || '#';

        qvOverlay.classList.add('active');
        qvModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Reset size buttons
        document.querySelectorAll('.qv-size').forEach(b => b.classList.remove('active'));
        const firstSize = document.querySelector('.qv-size');
        if (firstSize) firstSize.classList.add('active');
    }

    function closeQuickView() {
        qvOverlay.classList.remove('active');
        qvModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (qvOverlay) qvOverlay.addEventListener('click', closeQuickView);
    if (qvClose) qvClose.addEventListener('click', closeQuickView);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && qvModal && qvModal.classList.contains('active')) closeQuickView();
    });

    // Size selection in modal
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('qv-size')) {
            document.querySelectorAll('.qv-size').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        }
    });

    // Add to Cart from Quick View
    if (qvAddBtn) {
        qvAddBtn.addEventListener('click', () => {
            cart.push({
                name: qvCurrentProduct.name,
                price: qvCurrentProduct.price,
                image: qvCurrentProduct.image
            });
            localStorage.setItem('vendex_cart', JSON.stringify(cart));
            updateCartCount();
            closeQuickView();
            toggleCartDrawer(true);
        });
    }

    // Inject Quick View button into every product card
    document.querySelectorAll('.product-card').forEach(card => {
        const actionsEl = card.querySelector('.product-actions');
        if (actionsEl && !actionsEl.querySelector('.quick-view-btn')) {
            const qvBtn = document.createElement('button');
            qvBtn.className = 'quick-view-btn';
            qvBtn.textContent = 'Quick View';
            qvBtn.setAttribute('aria-label', 'Quick View');
            actionsEl.appendChild(qvBtn);

            qvBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const imgEl = card.querySelector('img');
                const nameEl = card.querySelector('.product-title, h3');
                const priceEl = card.querySelector('.current-price');
                const vendorEl = card.querySelector('.product-vendor');
                const linkEl = card.querySelector('a[href]');

                const rawPrice = priceEl ? parseFloat(priceEl.textContent.replace(/[^0-9.]/g, '')) : 120;
                openQuickView({
                    name: nameEl ? nameEl.textContent.trim() : 'Vendex Product',
                    price: isNaN(rawPrice) ? 120 : rawPrice,
                    priceDisplay: priceEl ? priceEl.textContent.trim() : '$120.00',
                    image: imgEl ? imgEl.src : '',
                    vendor: vendorEl ? vendorEl.textContent.trim() : 'Vendex',
                    link: linkEl ? linkEl.href : '#'
                });
            });
        }
    });

    cartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get product details
            const productName = btn.getAttribute('data-name') || 'Item';
            let productPrice = parseFloat(btn.getAttribute('data-price'));
            let productImage = 'assets/images/product_trench_coat.png'; // default fallback

            // Try to find image and price dynamically depending on where the button is
            const card = btn.closest('.product-card');
            if (card) {
                const imgEl = card.querySelector('img');
                if (imgEl) productImage = imgEl.src;
                if (!productPrice) {
                    const priceEl = card.querySelector('.current-price');
                    if (priceEl) productPrice = parseFloat(priceEl.textContent.replace(/[^0-9.]/g, ''));
                }
            } else if (document.getElementById('product-main-image')) {
                productImage = document.getElementById('product-main-image').src;
                if (!productPrice) {
                    const priceEl = document.getElementById('product-price');
                    if (priceEl) productPrice = parseFloat(priceEl.textContent.replace(/[^0-9.]/g, ''));
                }
            }

            if (isNaN(productPrice)) productPrice = 120.00;

            // Add to localStorage cart
            cart.push({ name: productName, price: productPrice, image: productImage });
            localStorage.setItem('vendex_cart', JSON.stringify(cart));
            updateCartCount();

            // Open the beautiful drawer instead of a toast
            toggleCartDrawer(true);

            // Button visual feedback
            const originalText = btn.innerHTML;
            btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Added';
            btn.style.backgroundColor = 'var(--success)';
            btn.style.borderColor = 'var(--success)';
            btn.style.color = 'white';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
                btn.style.borderColor = '';
                btn.style.color = '';
            }, 3000);
        });
    });

    // ---- Checkout Page Rendering ----
    if (window.location.href.includes('checkout')) {
        const cartItemsContainer = document.getElementById('checkout-cart-items');
        const subtotalEl = document.getElementById('checkout-subtotal');
        const taxesEl = document.getElementById('checkout-taxes');
        const totalEl = document.getElementById('checkout-total');
        const payBtnAmount = document.getElementById('pay-button-amount');

        function renderCheckout() {
            if (!cart || !Array.isArray(cart) || cart.length === 0) {
                cartItemsContainer.innerHTML = '<p style="color: #777; margin-bottom: 2rem;">Your cart is empty.</p>';
                if (subtotalEl) subtotalEl.textContent = '$0.00';
                if (taxesEl) taxesEl.textContent = '$0.00';
                if (totalEl) totalEl.textContent = '$0.00';
                if (payBtnAmount) payBtnAmount.textContent = '$0.00';
            } else {
                let itemsHtml = '';
                let subtotal = 0;

                cart.forEach((item, index) => {
                    // Robust fallback for old/invalid localStorage data
                    const price = typeof item.price === 'number' && !isNaN(item.price) ? item.price : 120.00;
                    const name = item.name || 'Vendex Item';
                    const image = item.image || 'assets/images/product_trench_coat.png';

                    subtotal += price;
                    itemsHtml += `
                        <div class="summary-item">
                            <img src="${image}" alt="${name}">
                            <div class="item-details">
                                <div class="item-details-title">${name}</div>
                                <div style="color: #777; margin-bottom: 0.25rem;">Size: S</div>
                                <button class="remove-item-btn" data-index="${index}" style="background:none; border:none; color:#dc3545; text-decoration:none; padding:0; font-size:0.8rem; cursor:pointer; font-family:var(--font-sans);">Remove</button>
                            </div>
                            <div class="item-price">$${price.toFixed(2)}</div>
                        </div>
                    `;
                });

                cartItemsContainer.innerHTML = itemsHtml;
                
                const taxes = subtotal * 0.09; // 9% tax rate
                const total = subtotal + taxes;

                if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
                if (taxesEl) taxesEl.textContent = `$${taxes.toFixed(2)}`;
                if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
                if (payBtnAmount) payBtnAmount.textContent = `$${total.toFixed(2)}`;
            }
        }

        if (cartItemsContainer) {
            renderCheckout();

            // Event delegation for remove buttons
            cartItemsContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('remove-item-btn')) {
                    const index = parseInt(e.target.getAttribute('data-index'), 10);
                    cart.splice(index, 1); // Remove item from array
                    localStorage.setItem('vendex_cart', JSON.stringify(cart)); // Update storage
                    updateCartCount(); // Update header badge
                    renderCheckout(); // Re-render the checkout list
                }
            });
        }
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input[type="email"]');
            
            toastMsg.textContent = 'Thanks for subscribing!';
            toast.classList.add('show');
            
            input.value = '';
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        });
    }

    // Product Gallery Logic
    const thumbs = document.querySelectorAll('.thumb');
    const mainImg = document.querySelector('.main-image img');
    
    if (thumbs.length > 0 && mainImg) {
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Remove active class from all
                thumbs.forEach(t => t.classList.remove('active'));
                // Add active to clicked
                this.classList.add('active');
                // Change main image src
                mainImg.src = this.src;
            });
        });
    }

    // Size Selection Logic
    const sizeBtns = document.querySelectorAll('.size-btn');
    if (sizeBtns.length > 0) {
        sizeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                sizeBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Accordion Logic
    const accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            item.addEventListener('click', function() {
                this.classList.toggle('active');
                // Could expand/collapse content here
            });
        });
    }

    // Category Filter Logic
    const filterInputs = document.querySelectorAll('.filter-list input[type="checkbox"]');
    const productItems = document.querySelectorAll('.filter-item');
    const productCountEl = document.getElementById('product-count');

    if (filterInputs.length > 0 && productItems.length > 0) {
        filterInputs.forEach(input => {
            input.addEventListener('change', updateFilters);
        });

        function updateFilters() {
            // Get active filter categories
            const activeCats = Array.from(document.querySelectorAll('#cat-filters input:checked')).map(cb => cb.value);
            const activePrices = Array.from(document.querySelectorAll('#price-filters input:checked')).map(cb => cb.value);

            let visibleCount = 0;

            productItems.forEach(item => {
                const itemCat = item.getAttribute('data-category');
                const itemPrice = item.getAttribute('data-price');

                // If no filters checked in a group, it passes that group
                const passCat = activeCats.length === 0 || activeCats.includes(itemCat);
                const passPrice = activePrices.length === 0 || activePrices.includes(itemPrice);

                if (passCat && passPrice) {
                    item.style.display = 'block';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });

            if (productCountEl) {
                productCountEl.textContent = `Showing ${visibleCount} results`;
            }
        }
    }

    // Slider Logic (Homepage Lookbook)
    const track = document.getElementById('lookbook-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextBtn = document.querySelector('.next-slide');
        const prevBtn = document.querySelector('.prev-slide');
        let currentSlide = 0;

        function updateSliderPosition() {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSliderPosition();
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSliderPosition();
        });
        
        // Optional auto-slide
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSliderPosition();
        }, 5000);
    }
    // ---- Product Page Logic ----
    const productsDB = {
        'trench-coat': { name: 'Classic Beige Trench Coat', price: '$120.00', image: 'assets/images/product_trench_coat.png', desc: 'A timeless wardrobe staple. This classic beige trench coat features a double-breasted front, belted waist, and is crafted from premium water-resistant cotton-gabardine for versatile, all-weather wear.' },
        'leather-handbag': { name: 'Luxury Leather Handbag', price: '$295.00', image: 'assets/images/product_bag.png', desc: 'Elevate your everyday style with our premium leather handbag. Handcrafted by artisans with top-grain leather, featuring gold-tone hardware and a spacious interior.' },
        'navy-suit': { name: 'Tailored Navy Blue Suit', price: '$340.00', image: 'assets/images/product_suit_folded.png', desc: 'Sharp, sophisticated, and impeccably tailored. Our navy blue suit is designed for the modern gentleman, cut from breathable super 120s wool for year-round comfort.' },
        'silver-watch': { name: 'Silver Chronograph Watch', price: '$185.00', image: 'assets/images/product_watch.png', desc: 'Precision engineering meets classic design. This chronograph watch features a brushed silver stainless steel case, sapphire crystal glass, and reliable quartz movement.' },
        'midi-dress': { name: 'Elegant Summer Midi Dress', price: '$95.00', image: 'assets/images/product_dress.png', desc: 'Flowy, lightweight, and effortlessly chic. This midi dress is perfect for warm weather occasions, featuring a flattering silhouette and delicate floral print.' },
        'black-hoodie': { name: 'Heavyweight Black Hoodie', price: '$85.00', image: 'assets/images/product_hoodie.png', desc: 'The ultimate comfort piece. Constructed from 400gsm heavyweight organic cotton, featuring a relaxed fit, dropped shoulders, and a spacious kangaroo pocket.' },
        'leather-sneakers': { name: 'Minimalist Leather Sneakers', price: '$140.00', image: 'assets/images/product_sneakers.png', desc: 'Clean lines and premium comfort. These minimalist sneakers are crafted with Italian leather uppers and a durable rubber cupsole for everyday versatility.' },
        'aviator-sunglasses': { name: 'Classic Aviator Sunglasses', price: '$110.00', image: 'assets/images/product_sunglasses.png', desc: 'Timeless aviator styling with modern protection. Features polarized lenses with 100% UV protection and a lightweight, durable metal frame.' },
        'casual-top': { name: 'Modern Streetwear Top', price: '$120.00', image: 'assets/images/cat_men.png', desc: 'A versatile top blending streetwear aesthetics with casual comfort. Perfect for layering or wearing on its own during transitional weather.' },
        'editorial-top': { name: 'Editorial Style Top', price: '$110.00', image: 'assets/images/cat_women.png', desc: 'A statement piece for any wardrobe. This editorial style top brings high fashion to your everyday look with unique textures and an asymmetrical cut.' }
    };

    if (window.location.pathname.includes('product.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        
        if (productId && productsDB[productId]) {
            const product = productsDB[productId];
            
            // Update Title
            document.title = product.name + ' | Vendex';
            
            // Update DOM Elements
            const titleEl = document.getElementById('product-title');
            const priceEl = document.getElementById('product-price');
            const descEl = document.getElementById('product-desc');
            const mainImg = document.getElementById('product-main-image');
            const thumb1 = document.getElementById('product-thumb-1');
            const thumb2 = document.getElementById('product-thumb-2');
            const addBtn = document.querySelector('.add-to-cart-large');
            
            if (titleEl) titleEl.textContent = product.name;
            if (priceEl) priceEl.textContent = product.price;
            if (descEl) descEl.textContent = product.desc;
            
            if (mainImg) {
                mainImg.src = product.image;
                mainImg.alt = product.name;
            }
            if (thumb1) {
                thumb1.src = product.image;
                thumb1.alt = product.name;
            }
            if (thumb2) {
                thumb2.src = product.image;
                thumb2.alt = product.name;
            }
            
            if (addBtn) {
                addBtn.dataset.name = product.name;
            }
        }
        
        // --- Image Magnifier Logic ---
        const mainImg = document.getElementById('product-main-image');
        const zoomResult = document.getElementById('product-zoom-result');
        const zoomContainer = document.querySelector('.img-zoom-container');

        if (mainImg && zoomResult && zoomContainer) {
            zoomContainer.addEventListener('mousemove', (e) => {
                const rect = mainImg.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate percentage
                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;

                zoomResult.style.backgroundImage = `url(${mainImg.src})`;
                zoomResult.style.backgroundSize = `${rect.width * 2}px ${rect.height * 2}px`;
                zoomResult.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
            });
        }

        // --- Cross-Sell Injection Logic ---
        const crossSellGrid = document.getElementById('cross-sell-grid');
        if (crossSellGrid) {
            let availableProducts = Object.entries(productsDB);
            if (productId) {
                availableProducts = availableProducts.filter(([id]) => id !== productId);
            }
            
            // Shuffle and pick 4
            availableProducts.sort(() => 0.5 - Math.random());
            const selectedProducts = availableProducts.slice(0, 4);

            let crossSellHtml = '';
            selectedProducts.forEach(([id, product]) => {
                crossSellHtml += `
                    <div class="product-card reveal">
                        <a href="product.html?id=${id}" class="product-image-link">
                            <img src="${product.image}" alt="${product.name}">
                        </a>
                        <div class="product-info">
                            <h3><a href="product.html?id=${id}">${product.name}</a></h3>
                            <p class="current-price">${product.price}</p>
                        </div>
                        <button class="quick-add-btn" data-name="${product.name}" data-price="${product.price.replace(/[^0-9.]/g, '')}">Add to Cart</button>
                    </div>
                `;
            });
            crossSellGrid.innerHTML = crossSellHtml;
            
            // Re-bind the new Add to Cart buttons
            const newAddBtns = crossSellGrid.querySelectorAll('.quick-add-btn');
            newAddBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const name = btn.getAttribute('data-name');
                    const price = parseFloat(btn.getAttribute('data-price')) || 120;
                    const card = btn.closest('.product-card');
                    let img = 'assets/images/product_trench_coat.png';
                    if (card) {
                        const imgEl = card.querySelector('img');
                        if (imgEl) img = imgEl.src;
                    }
                    
                    let cart = JSON.parse(localStorage.getItem('vendex_cart')) || [];
                    cart.push({ name, price, image: img });
                    localStorage.setItem('vendex_cart', JSON.stringify(cart));
                    
                    const cartCountEls = document.querySelectorAll('.cart-count');
                    cartCountEls.forEach(el => el.textContent = cart.length);
                    
                    if (typeof toggleCartDrawer === 'function') {
                        toggleCartDrawer(true);
                    }
                });
            });
        }
    }

    // ---- Scroll Reveal Animation ----
    const revealElements = document.querySelectorAll('.product-card, .section-header, .feature-box, .category-card, .lookbook-text, .insta-item, .newsletter-content, .checkout-panel, .order-summary, .editorial-campaign, .reveal');
    
    if (revealElements.length > 0) {
        const revealOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach((el, index) => {
            el.classList.add('reveal');
            // Stagger animations slightly for items in a grid
            if (el.classList.contains('product-card') || el.classList.contains('insta-item') || el.classList.contains('feature-box')) {
                const delayIndex = (index % 4) + 1;
                el.style.transitionDelay = `${delayIndex * 0.1}s`;
            }
            revealOnScroll.observe(el);
        });
    }

    // ---- Social Media Interactive Links ----
    const socialItems = document.querySelectorAll('.insta-item');
    if (socialItems.length > 0 && toast && toastMsg) {
        socialItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                toastMsg.textContent = 'Instagram integration coming soon! @VendexOfficial';
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3500);
            });
        });
    }

    // ---- Live Search Overlay ----
    const searchHtml = `
        <div class="search-overlay" id="search-overlay">
            <button class="search-close-btn" id="search-close-btn">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div class="search-input-container">
                <input type="text" id="search-input" placeholder="Search for products, categories..." autocomplete="off">
            </div>
            <div class="search-results" id="search-results">
                <!-- Live results will appear here -->
            </div>
        </div>
    `;
    if (!document.getElementById('search-overlay')) {
        document.body.insertAdjacentHTML('beforeend', searchHtml);
    }

    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchCloseBtn = document.getElementById('search-close-btn');
    
    // The search buttons in the header have aria-label="Search"
    const searchBtns = document.querySelectorAll('button[aria-label="Search"]');

    function toggleSearch(show) {
        if (show) {
            searchOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            setTimeout(() => searchInput.focus(), 100);
        } else {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    }

    searchBtns.forEach(btn => btn.addEventListener('click', () => toggleSearch(true)));
    if (searchCloseBtn) searchCloseBtn.addEventListener('click', () => toggleSearch(false));
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            toggleSearch(false);
        }
    });

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResults.innerHTML = '';

            if (query.length === 0) return;

            let matches = [];
            for (const [id, product] of Object.entries(productsDB)) {
                if (product.name.toLowerCase().includes(query) || product.desc.toLowerCase().includes(query)) {
                    matches.push({ id, ...product });
                }
            }

            if (matches.length > 0) {
                let resultsHtml = '';
                matches.forEach(product => {
                    resultsHtml += `
                        <a href="product.html?id=${product.id}" class="search-result-item">
                            <img src="${product.image}" alt="${product.name}">
                            <div class="search-result-title">${product.name}</div>
                            <div class="search-result-price">${product.price}</div>
                        </a>
                    `;
                });
                searchResults.innerHTML = resultsHtml;
            } else {
                searchResults.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #777; font-size: 1.25rem; margin-top: 2rem;">No products found.</p>';
            }
        });
    }

    // ================================================================
    //  PREMIUM FEATURES JS
    // ================================================================

    // 1. WISHLIST
    let wishlist = JSON.parse(localStorage.getItem('vendex_wishlist')) || [];
    document.querySelectorAll('.product-card').forEach((card) => {
        const imgContainer = card.querySelector('.product-image-container');
        if (!imgContainer || imgContainer.querySelector('.wishlist-btn')) return;
        const nameEl = card.querySelector('.product-title, h3');
        const productId = (nameEl ? nameEl.textContent.trim() : 'item').toLowerCase().replace(/\s+/g, '-');
        const wlBtn = document.createElement('button');
        wlBtn.className = 'wishlist-btn' + (wishlist.includes(productId) ? ' active' : '');
        wlBtn.dataset.id = productId;
        wlBtn.setAttribute('aria-label', 'Save to Wishlist');
        wlBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
        imgContainer.appendChild(wlBtn);
        wlBtn.addEventListener('click', (e) => {
            e.preventDefault(); e.stopPropagation();
            if (wishlist.includes(productId)) {
                wishlist = wishlist.filter(id => id !== productId);
                wlBtn.classList.remove('active');
            } else {
                wishlist.push(productId);
                wlBtn.classList.add('active');
            }
            localStorage.setItem('vendex_wishlist', JSON.stringify(wishlist));
        });
    });

    // 2. SOCIAL PROOF NOTIFICATIONS
    const spProducts = [
        { name: 'Classic Trench Coat', image: 'assets/images/product_trench_coat.png', loc: 'Lagos' },
        { name: 'Luxury Leather Handbag', image: 'assets/images/product_bag.png', loc: 'London' },
        { name: 'Tailored Navy Suit', image: 'assets/images/product_suit_folded.png', loc: 'New York' },
        { name: 'Silver Chronograph Watch', image: 'assets/images/product_watch.png', loc: 'Dubai' },
        { name: 'White Silk Blouse', image: 'assets/images/product_silk_blouse.png', loc: 'Paris' },
        { name: 'Cashmere Sweater', image: 'assets/images/product_cashmere_sweater.png', loc: 'Milan' },
        { name: 'Black Evening Gown', image: 'assets/images/product_evening_gown.png', loc: 'Abuja' },
        { name: 'Aviator Sunglasses', image: 'assets/images/product_sunglasses.png', loc: 'Accra' },
    ];
    const spEl = document.createElement('div');
    spEl.className = 'sp-toast';
    spEl.id = 'sp-toast';
    document.body.appendChild(spEl);
    function showSocialProof() {
        const item = spProducts[Math.floor(Math.random() * spProducts.length)];
        const mins = Math.floor(Math.random() * 14) + 1;
        spEl.innerHTML = `<img src="${item.image}" alt="${item.name}"><div class="sp-toast-text"><strong>Someone in ${item.loc}</strong><span>just bought ${item.name} &bull; ${mins}m ago</span></div>`;
        spEl.classList.add('show');
        setTimeout(() => spEl.classList.remove('show'), 4500);
    }
    if (!window.location.href.includes('checkout')) {
        setTimeout(() => { showSocialProof(); setInterval(showSocialProof, 25000 + Math.random() * 10000); }, 6000);
    }

    // 3. BACK TO TOP BUTTON
    const bttBtn = document.createElement('button');
    bttBtn.className = 'back-to-top';
    bttBtn.setAttribute('aria-label', 'Back to top');
    bttBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 15l-6-6-6 6"/></svg>`;
    document.body.appendChild(bttBtn);
    window.addEventListener('scroll', () => {
        bttBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    bttBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // 4. STICKY ADD TO CART (Product pages)
    if (window.location.pathname.includes('product')) {
        const mainATC = document.querySelector('.add-to-cart-large, .quick-add-btn.btn-primary');
        if (mainATC) {
            const stickyBar = document.createElement('div');
            stickyBar.className = 'sticky-atc-bar';
            const pImg = document.getElementById('product-main-image');
            const pTitle = document.getElementById('product-title');
            const pPrice = document.getElementById('product-price');
            stickyBar.innerHTML = `
                <img id="sticky-img" src="${pImg ? pImg.src : ''}" alt="">
                <div class="sticky-atc-title">${pTitle ? pTitle.textContent : 'Product'}</div>
                <div class="sticky-atc-price">${pPrice ? pPrice.textContent : ''}</div>
                <button class="btn btn-primary" id="sticky-atc-cta" style="white-space:nowrap;">Add to Cart</button>`;
            document.body.appendChild(stickyBar);
            document.getElementById('sticky-atc-cta')?.addEventListener('click', () => mainATC.click());
            new IntersectionObserver(entries => {
                stickyBar.classList.toggle('visible', !entries[0].isIntersecting);
            }, { threshold: 0 }).observe(mainATC);
        }
    }

    // 5. CHECKOUT PROGRESS STEPS
    if (window.location.href.includes('checkout')) {
        const mainEl = document.querySelector('main .container');
        if (mainEl) {
            mainEl.insertAdjacentHTML('afterbegin', `
            <div class="checkout-progress">
                <div class="progress-step done"><span class="step-num">&#10003;</span><span>Your Bag</span></div>
                <div class="progress-line"></div>
                <div class="progress-step active"><span class="step-num">2</span><span>Details</span></div>
                <div class="progress-line"></div>
                <div class="progress-step"><span class="step-num">3</span><span>Payment</span></div>
                <div class="progress-line"></div>
                <div class="progress-step"><span class="step-num">4</span><span>Confirmation</span></div>
            </div>`);
        }
        // 6. TRUST BADGES
        const payBtn = document.querySelector('.btn-pay');
        if (payBtn) {
            payBtn.insertAdjacentHTML('afterend', `
            <div class="trust-badges">
                <div class="trust-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>SSL Secured</div>
                <div class="trust-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>Visa &amp; Mastercard</div>
                <div class="trust-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>30-Day Returns</div>
                <div class="trust-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/></svg>Free Shipping $150+</div>
            </div>`);
        }
    }

    // 7. BREADCRUMBS
    (function() {
        const p = window.location.pathname;
        let crumb = '';
        if (p.includes('category_women')) crumb = `<a href="index.html">Home</a><span class="breadcrumb-sep">/</span><span class="breadcrumb-current">Women</span>`;
        else if (p.includes('category_men')) crumb = `<a href="index.html">Home</a><span class="breadcrumb-sep">/</span><span class="breadcrumb-current">Men</span>`;
        else if (p.includes('category_accessories')) crumb = `<a href="index.html">Home</a><span class="breadcrumb-sep">/</span><span class="breadcrumb-current">Accessories</span>`;
        else if (p.includes('product')) {
            const pName = document.getElementById('product-title')?.textContent || 'Product';
            crumb = `<a href="index.html">Home</a><span class="breadcrumb-sep">/</span><a href="category_women.html">Shop</a><span class="breadcrumb-sep">/</span><span class="breadcrumb-current">${pName}</span>`;
        }
        if (crumb) {
            const nav = document.createElement('nav');
            nav.className = 'breadcrumb-nav container';
            nav.innerHTML = crumb;
            const target = document.querySelector('.page-header .container') || document.querySelector('main');
            if (target) target.insertAdjacentElement('afterbegin', nav);
        }
    })();

    // 8. SKELETON LOADERS
    document.querySelectorAll('.product-image-container').forEach(container => {
        const img = container.querySelector('img');
        if (img && !img.complete) {
            const sk = document.createElement('div');
            sk.className = 'skeleton-overlay';
            container.appendChild(sk);
            img.addEventListener('load', () => sk.remove());
            img.addEventListener('error', () => sk.remove());
        }
    });

    // 9. RECENTLY VIEWED
    if (window.location.pathname.includes('product')) {
        const urlP = new URLSearchParams(window.location.search);
        const curId = urlP.get('id');
        let rv = JSON.parse(localStorage.getItem('vendex_recently_viewed')) || [];
        if (curId && !rv.includes(curId)) { rv.unshift(curId); rv = rv.slice(0, 7); }
        localStorage.setItem('vendex_recently_viewed', JSON.stringify(rv));
        const rvToShow = rv.filter(id => id !== curId).slice(0, 4);
        if (rvToShow.length > 0 && typeof productsDB !== 'undefined') {
            const sec = document.createElement('section');
            sec.className = 'recently-viewed-section container';
            let rvHtml = `<h3 class="recently-viewed-title">Recently Viewed</h3><div class="category-grid">`;
            rvToShow.forEach(id => {
                const pr = productsDB[id];
                if (pr) rvHtml += `<div class="product-card"><a href="product.html?id=${id}" class="product-image-link"><img src="${pr.image}" alt="${pr.name}"></a><div class="product-info"><h3><a href="product.html?id=${id}">${pr.name}</a></h3><p class="current-price">${pr.price}</p></div><button class="quick-add-btn" data-name="${pr.name}" data-price="${pr.price.replace(/[^0-9.]/g,'')}">Add to Cart</button></div>`;
            });
            rvHtml += `</div>`;
            sec.innerHTML = rvHtml;
            document.querySelector('main')?.appendChild(sec);
        }
    }

    // MOBILE FILTER SIDEBAR (Category Pages)
    const filterSidebar = document.querySelector('.sidebar, .filter-sidebar, aside');
    const toolbar = document.querySelector('.toolbar');
    if (filterSidebar && toolbar) {
        // Add class for JS targeting
        filterSidebar.classList.add('filter-sidebar');

        // Inject "Filters" toggle button into toolbar
        const filterToggleBtn = document.createElement('button');
        filterToggleBtn.className = 'mobile-filter-toggle';
        filterToggleBtn.setAttribute('aria-label', 'Toggle filters');
        filterToggleBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="12" y1="18" x2="20" y2="18"/></svg> Filters`;
        toolbar.insertAdjacentElement('afterbegin', filterToggleBtn);

        // Backdrop
        let filterBackdrop = document.getElementById('filter-backdrop');
        if (!filterBackdrop) {
            filterBackdrop = document.createElement('div');
            filterBackdrop.id = 'filter-backdrop';
            filterBackdrop.className = 'nav-backdrop';
            document.body.appendChild(filterBackdrop);
        }

        function openFilterSidebar() {
            filterSidebar.classList.add('open');
            filterBackdrop.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
        function closeFilterSidebar() {
            filterSidebar.classList.remove('open');
            filterBackdrop.classList.remove('show');
            document.body.style.overflow = '';
        }

        filterToggleBtn.addEventListener('click', openFilterSidebar);
        filterBackdrop.addEventListener('click', closeFilterSidebar);
    }

    // ACTIVATE LUXURY ENGINE
    injectLuxuryComponents();
    initRevealAnimations();
    updateCartCount();

    // ----------------------------------------------------------------
    // LUXURY COMPONENTS: CART DRAWER & SEARCH
    // ----------------------------------------------------------------
    function injectLuxuryComponents() {
        const componentsHTML = `
        <!-- Cart Drawer -->
        <div id="cart-drawer-overlay" class="drawer-overlay"></div>
        <div id="cart-drawer" class="drawer">
            <div class="drawer-header">
                <h3>Your Bag</h3>
                <button id="close-cart" class="close-btn">&times;</button>
            </div>
            <div id="cart-drawer-items" class="drawer-content">
                <!-- Items injected here -->
            </div>
            <div class="drawer-footer" id="cart-drawer-footer">
                <div class="drawer-total">
                    <span>Subtotal</span>
                    <span id="drawer-subtotal-val">$0.00</span>
                </div>
                <button onclick="window.location.href='checkout.html'" class="btn btn-primary checkout-btn">Proceed to Checkout</button>
            </div>
        </div>

        <!-- Search Overlay -->
        <div id="search-overlay" class="search-overlay">
            <button id="close-search" class="close-search-btn">&times;</button>
            <div class="search-container">
                <input type="text" id="search-input" placeholder="Search for products, categories..." autofocus>
                <div id="search-results-grid" class="category-grid">
                    <!-- Results injected here -->
                </div>
            </div>
        </div>

        <style>
            /* Drawer Styles */
            .drawer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 2000; opacity: 0; visibility: hidden; transition: 0.3s; backdrop-filter: blur(4px); }
            .drawer-overlay.open { opacity: 1; visibility: visible; }
            .drawer { position: fixed; top: 0; right: -450px; width: 100%; max-width: 450px; height: 100%; background: white; z-index: 2001; transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: -10px 0 30px rgba(0,0,0,0.1); display: flex; flex-direction: column; }
            .drawer.open { transform: translateX(-450px); }
            .drawer-header { padding: 1.5rem 2rem; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; }
            .drawer-content { flex: 1; overflow-y: auto; padding: 2rem; }
            .drawer-footer { padding: 2rem; border-top: 1px solid #eee; background: #fafafa; }
            .drawer-total { display: flex; justify-content: space-between; font-weight: 700; font-size: 1.1rem; margin-bottom: 1.5rem; }
            .close-btn { background: none; border: none; font-size: 2rem; cursor: pointer; color: #999; }
            
            /* Search Overlay Styles */
            .search-overlay { position: fixed; inset: 0; background: white; z-index: 3000; opacity: 0; visibility: hidden; transition: 0.3s; display: flex; flex-direction: column; align-items: center; padding-top: 10vh; }
            .search-overlay.open { opacity: 1; visibility: visible; }
            .search-container { width: 90%; max-width: 1200px; text-align: center; }
            #search-input { width: 100%; max-width: 800px; border: none; border-bottom: 2px solid #111; font-size: 2.5rem; padding: 1rem 0; font-family: var(--font-serif); outline: none; margin-bottom: 4rem; }
            .close-search-btn { position: absolute; top: 2rem; right: 3rem; font-size: 3rem; background: none; border: none; cursor: pointer; }

            /* Reveal Animations */
            .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
            .reveal.active { opacity: 1; transform: translateY(0); }

            /* Cart Item in Drawer */
            .cart-item-row { display: flex; gap: 1.25rem; margin-bottom: 1.5rem; border-bottom: 1px solid #f5f5f5; padding-bottom: 1.5rem; }
            .cart-item-img { width: 80px; height: 100px; object-fit: cover; background: #f9f9f9; }
            .cart-item-info { flex: 1; }
            .cart-item-info h4 { font-size: 0.95rem; margin-bottom: 0.25rem; }
            .cart-item-info p { font-size: 0.85rem; color: #999; }
        </style>`;
        document.body.insertAdjacentHTML('beforeend', componentsHTML);

        // Event Listeners
        const cartBtns = document.querySelectorAll('.cart-btn');
        cartBtns.forEach(btn => btn.onclick = (e) => { e.preventDefault(); openCartDrawer(); });
        document.getElementById('close-cart').onclick = closeCartDrawer;
        document.getElementById('cart-drawer-overlay').onclick = closeCartDrawer;

        const searchIcon = document.querySelector('.action-btn[aria-label="Search"]');
        if(searchIcon) searchIcon.onclick = openSearch;
        document.getElementById('close-search').onclick = closeSearch;
        document.getElementById('search-input').oninput = (e) => handleSearch(e.target.value);
    }

    window.openCartDrawer = function() {
        renderCartDrawer();
        document.getElementById('cart-drawer').classList.add('open');
        document.getElementById('cart-drawer-overlay').classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    window.closeCartDrawer = function() {
        document.getElementById('cart-drawer').classList.remove('open');
        document.getElementById('cart-drawer-overlay').classList.remove('open');
        document.body.style.overflow = '';
    };

    function renderCartDrawer() {
        const cart = JSON.parse(localStorage.getItem('vendex_cart') || '[]');
        const container = document.getElementById('cart-drawer-items');
        const footer = document.getElementById('cart-drawer-footer');
        
        if (cart.length === 0) {
            container.innerHTML = `<div style="text-align:center; padding:4rem 0;"><p style="color:#999;">Your bag is empty</p><a href="category.html" class="btn btn-primary" style="margin-top:1rem;">Shop Now</a></div>`;
            footer.style.display = 'none';
            return;
        }

        footer.style.display = 'block';
        let total = 0;
        container.innerHTML = cart.map((item, index) => {
            total += item.price * (item.qty || 1);
            return `
                <div class="cart-item-row">
                    <img src="${resolveImageUrl(item.image)}" class="cart-item-img">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>Size: ${item.size || 'M'} | Qty: ${item.qty || 1}</p>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.5rem;">
                            <span style="font-weight:600;">$${(item.price * (item.qty || 1)).toFixed(2)}</span>
                            <button onclick="removeFromCart(${index}); renderCartDrawer();" style="background:none; border:none; color:#ff4d4d; font-size:0.8rem; cursor:pointer;">Remove</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        document.getElementById('drawer-subtotal-val').textContent = `$${total.toFixed(2)}`;
    }

    function openSearch() {
        document.getElementById('search-overlay').classList.add('open');
        document.getElementById('search-input').focus();
        document.body.style.overflow = 'hidden';
    }

    function closeSearch() {
        document.getElementById('search-overlay').classList.remove('open');
        document.body.style.overflow = '';
    }

    let searchTimeout;
    async function handleSearch(query) {
        clearTimeout(searchTimeout);
        if (query.length < 2) {
            document.getElementById('search-results-grid').innerHTML = '';
            return;
        }

        searchTimeout = setTimeout(async () => {
            const allProducts = await VendexDB.getProducts();
            const results = allProducts.filter(p => 
                p.name.toLowerCase().includes(query.toLowerCase()) || 
                p.categories?.name?.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 8);

            const grid = document.getElementById('search-results-grid');
            if (results.length === 0) {
                grid.innerHTML = `<p style="grid-column:1/-1; padding:2rem; font-size:1.2rem; color:#999;">No results found for "${query}"</p>`;
            } else {
                grid.innerHTML = results.map(p => renderProductCard(p)).join('');
            }
        }, 300);
    }

    function initRevealAnimations() {
        // Tag products and headings for reveal
        document.querySelectorAll('.product-card, .section-title, .hero-content, .category-card').forEach(el => {
            el.classList.add('reveal');
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    // ----------------------------------------------------------------
    // DYNAMIC ENGINE: PRODUCT PAGE
    // ----------------------------------------------------------------
    window.initDynamicProduct = async function() {
        const params = new URLSearchParams(window.location.search);
        const slug = params.get('slug');
        
        if (!slug) {
            // Check for legacy ID param
            const id = params.get('id');
            if (id) { window.location.href = `product.html?slug=${id}`; return; }
            window.location.href = 'index.html';
            return;
        }

        try {
            const product = await VendexDB.getProduct(slug);
            if (!product) {
                document.getElementById('product-skeleton').innerHTML = '<div style="text-align:center;padding:4rem;"><h2>Product not found</h2><a href="index.html" class="btn btn-primary" style="margin-top:1rem;">Back to Home</a></div>';
                return;
            }

            // Update UI
            document.title = `${product.name} | Vendex`;
            const titleEl = document.getElementById('dynamic-title');
            if(titleEl) titleEl.textContent = product.name;
            
            const catEl = document.getElementById('dynamic-category');
            if(catEl) catEl.textContent = `${product.categories?.name || 'Category'} • New Arrival`;
            
            const descEl = document.getElementById('dynamic-desc');
            if(descEl) descEl.textContent = product.description;
            
            const priceEl = document.getElementById('dynamic-price');
            if(priceEl) priceEl.textContent = `$${parseFloat(product.price).toFixed(2)}`;
            
            const mainImg = document.getElementById('dynamic-main-image');
            if(mainImg) {
                mainImg.src = resolveImageUrl(product.images?.[0]);
                mainImg.alt = product.name;
            }

            // Sizes
            const sizeContainer = document.getElementById('dynamic-sizes');
            if(sizeContainer) {
                sizeContainer.innerHTML = (product.sizes || []).map(s => `<div class="size-btn" onclick="selectSize(this)">${s}</div>`).join('');
                if (sizeContainer.firstChild) sizeContainer.firstChild.classList.add('active');
            }

            // Thumbnails
            const thumbContainer = document.getElementById('dynamic-thumbnails');
            if(thumbContainer) {
                thumbContainer.innerHTML = (product.images || []).map((img, i) => `
                    <img src="${resolveImageUrl(img)}" class="thumb ${i === 0 ? 'active' : ''}" onclick="updateMainImage(this.src, this)" alt="View ${i+1}" style="width:60px; height:80px; object-fit:cover; cursor:pointer; opacity:0.6; transition:0.3s; margin-right:0.5rem;">
                `).join('');
                // Thumb CSS fix
                const style = document.createElement('style');
                style.innerHTML = '.thumb.active { opacity: 1 !important; border: 1px solid #111; } .pulse { animation: pulse 1.5s infinite ease-in-out; } @keyframes pulse { 0% { opacity: 0.6; } 50% { opacity: 0.3; } 100% { opacity: 0.6; } }';
                document.head.appendChild(style);
            }

            // Quantity controls
            let currentQty = 1;
            const qtyInput = document.getElementById('qty-input');
            const btnPlus = document.getElementById('qty-plus');
            const btnMinus = document.getElementById('qty-minus');
            if(btnPlus) btnPlus.onclick = () => { currentQty++; if(qtyInput) qtyInput.value = currentQty; };
            if(btnMinus) btnMinus.onclick = () => { if(currentQty > 1) { currentQty--; if(qtyInput) qtyInput.value = currentQty; } };

            // Add to Cart Logic
            const btnCart = document.getElementById('btn-add-to-cart');
            if(btnCart) {
                btnCart.onclick = () => {
                    const selectedSize = document.querySelector('.size-btn.active')?.textContent;
                    addToCart(product.name, product.price, selectedSize, product.images?.[0], product.id);
                    showToast(`Added ${product.name} to cart!`);
                };
            }

            // Switch from Skeleton to Content
            const skeleton = document.getElementById('product-skeleton');
            const content = document.getElementById('product-content');
            if(skeleton) skeleton.style.display = 'none';
            if(content) {
                content.style.display = 'grid';
                setTimeout(() => content.style.opacity = '1', 50);
            }

            // Cross-sell
            loadCrossSell(product.category_id, product.id);

        } catch (err) {
            console.error('Dynamic Engine Error:', err);
        }
    };

    async function loadCrossSell(catId, currentId) {
        const products = await VendexDB.getProducts();
        const related = products.filter(p => p.category_id === catId && p.id !== currentId).slice(0, 4);
        
        const grid = document.getElementById('cross-sell-grid');
        const container = document.getElementById('cross-sell-container');
        if (related.length > 0 && grid && container) {
            grid.innerHTML = related.map(p => renderProductCard(p)).join('');
            container.style.display = 'block';
        }
    }

    function renderProductCard(p) {
        const img = resolveImageUrl(p.images?.[0]);
        return `
            <div class="product-card">
                <div class="product-image-container">
                    <a href="product.html?slug=${p.slug}">
                        <img src="${img}" alt="${p.name}" class="product-image">
                    </a>
                    ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
                    <button class="quick-add-btn" onclick="addToCart('${p.name.replace(/'/g,"\\'")}', ${p.price}, 'M', '${p.images?.[0]}', '${p.id}')">Quick Add</button>
                </div>
                <div class="product-details">
                    <p class="product-category">${p.categories?.name || ''}</p>
                    <h3 class="product-name"><a href="product.html?slug=${p.slug}">${p.name}</a></h3>
                    <p class="product-price">$${parseFloat(p.price).toFixed(2)}</p>
                </div>
            </div>
        `;
    }

    window.updateMainImage = function(src, el) {
        const mainImg = document.getElementById('dynamic-main-image');
        if(mainImg) mainImg.src = src;
        document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
        el.classList.add('active');
    };

    window.selectSize = function(el) {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        el.classList.add('active');
    };

    // ----------------------------------------------------------------
    // DYNAMIC ENGINE: CATEGORY PAGE
    // ----------------------------------------------------------------
    window.initDynamicCategory = async function() {
        const params = new URLSearchParams(window.location.search);
        const catSlug = params.get('c') || 'women'; // default to women
        
        // Map slug to database IDs (or names)
        const catMap = {
            'women': { id: 1, name: 'Women', desc: 'Elegant essentials for the modern woman.' },
            'men': { id: 2, name: 'Men', desc: 'Tailored luxury and contemporary staples for men.' },
            'accessories': { id: 3, name: 'Accessories', desc: 'The perfect finishing touches for every look.' }
        };

        const currentCat = catMap[catSlug.toLowerCase()] || catMap['women'];

        try {
            // Update UI Header
            document.title = `${currentCat.name} Collection | Vendex`;
            document.getElementById('cat-title').textContent = `${currentCat.name} Collection`;
            document.getElementById('cat-desc').textContent = currentCat.desc;

            // Fetch Products
            const allProducts = await VendexDB.getProducts();
            const filtered = allProducts.filter(p => p.category_id === currentCat.id);

            const grid = document.getElementById('dynamic-product-grid');
            const countEl = document.getElementById('results-count');

            if (countEl) countEl.textContent = `Showing ${filtered.length} items`;
            
            if (filtered.length === 0) {
                grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding:4rem;"><h3>No products found in this category yet.</h3></div>';
            } else {
                grid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
            }

        } catch (err) {
            console.error('Dynamic Category Error:', err);
        }
    };

});
