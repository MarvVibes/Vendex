// ================================================================
// VENDEX — Supabase Client & Database Helper Functions
// Requires: config.js + @supabase/supabase-js CDN
// ================================================================

// Initialize Supabase client
const _supabase = window.supabase.createClient(
  VENDEX_CONFIG.supabase.url,
  VENDEX_CONFIG.supabase.anonKey
);

// ----------------------------------------------------------------
// PRODUCTS
// ----------------------------------------------------------------
const VendexDB = {

  // Get all published products (optionally filter by category slug)
  async getProducts(categorySlug = null, limit = 100) {
    let query = _supabase
      .from('products')
      .select(`*, categories(name, slug)`)
      .eq('is_published', true)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (categorySlug && categorySlug !== 'all') {
      const { data: cat } = await _supabase
        .from('categories')
        .select('id')
        .eq('slug', categorySlug)
        .single();
      if (cat) query = query.eq('category_id', cat.id);
    }

    const { data, error } = await query;
    if (error) { console.error('getProducts:', error); return []; }
    return data || [];
  },

  // Get single product by slug
  async getProduct(slug) {
    const { data, error } = await _supabase
      .from('products')
      .select(`*, categories(name, slug)`)
      .eq('slug', slug)
      .eq('is_published', true)
      .single();
    if (error) { console.error('getProduct:', error); return null; }
    return data;
  },

  // Get featured/newest products for homepage
  async getFeaturedProducts(limit = 6) {
    const { data, error } = await _supabase
      .from('products')
      .select(`*, categories(name, slug)`)
      .eq('is_published', true)
      .order('created_at', { ascending: false })
      .limit(limit);
    if (error) { console.error('getFeaturedProducts:', error); return []; }
    return data || [];
  },

  // Get all categories
  async getCategories() {
    const { data, error } = await _supabase
      .from('categories')
      .select('*')
      .order('sort_order');
    if (error) { console.error('getCategories:', error); return []; }
    return data || [];
  },

  // ----------------------------------------------------------------
  // ORDERS
  // ----------------------------------------------------------------
  async placeOrder(orderData) {
    const { data, error } = await _supabase
      .from('orders')
      .insert([orderData])
      .select()
      .single();
    if (error) { console.error('placeOrder:', error); return { success: false, error }; }
    return { success: true, order: data };
  },

  async getMyOrders(userId) {
    const { data, error } = await _supabase
      .from('orders')
      .select('*')
      .eq('customer_id', userId)
      .order('created_at', { ascending: false });
    if (error) { console.error('getMyOrders:', error); return []; }
    return data || [];
  },

  async getOrder(orderId) {
    const { data, error } = await _supabase
      .from('orders')
      .select('*')
      .eq('id', orderId)
      .single();
    if (error) { console.error('getOrder:', error); return null; }
    return data;
  },

  // ----------------------------------------------------------------
  // ADMIN — Products
  // ----------------------------------------------------------------
  async adminGetAllProducts() {
    const { data, error } = await _supabase
      .from('products')
      .select(`*, categories(name, slug)`)
      .order('created_at', { ascending: false });
    if (error) { console.error('adminGetAllProducts:', error); return []; }
    return data || [];
  },

  async adminSaveProduct(product) {
    if (product.id) {
      const { id, ...updates } = product;
      const { data, error } = await _supabase.from('products').update(updates).eq('id', id).select().single();
      if (error) return { success: false, error };
      return { success: true, data };
    } else {
      const { data, error } = await _supabase.from('products').insert([product]).select().single();
      if (error) return { success: false, error };
      return { success: true, data };
    }
  },

  async adminDeleteProduct(id) {
    const { error } = await _supabase.from('products').delete().eq('id', id);
    if (error) return { success: false, error };
    return { success: true };
  },

  async adminTogglePublish(id, isPublished) {
    const { error } = await _supabase.from('products').update({ is_published: isPublished }).eq('id', id);
    if (error) return { success: false, error };
    return { success: true };
  },

  // ----------------------------------------------------------------
  // ADMIN — Orders
  // ----------------------------------------------------------------
  async adminGetAllOrders() {
    const { data, error } = await _supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) { console.error('adminGetAllOrders:', error); return []; }
    return data || [];
  },

  async adminUpdateOrderStatus(id, status) {
    const { error } = await _supabase.from('orders').update({ status }).eq('id', id);
    if (error) return { success: false, error };
    return { success: true };
  },

  // ----------------------------------------------------------------
  // ADMIN — Categories
  // ----------------------------------------------------------------
  async adminGetAllCategories() {
    const { data, error } = await _supabase
      .from('categories')
      .select('*, products(count)')
      .order('sort_order');
    if (error) { console.error('adminGetAllCategories:', error); return []; }
    return data || [];
  },

  async adminSaveCategory(cat) {
    if (cat.id) {
      const { id, ...updates } = cat;
      const { data, error } = await _supabase.from('categories').update(updates).eq('id', id).select().single();
      if (error) return { success: false, error };
      return { success: true, data };
    } else {
      const { data, error } = await _supabase.from('categories').insert([cat]).select().single();
      if (error) return { success: false, error };
      return { success: true, data };
    }
  },

  async adminDeleteCategory(id) {
    const { error } = await _supabase.from('categories').delete().eq('id', id);
    if (error) return { success: false, error };
    return { success: true };
  },

  // ----------------------------------------------------------------
  // ADMIN — Stats
  // ----------------------------------------------------------------
  async adminGetStats() {
    const [products, orders, categories] = await Promise.all([
      _supabase.from('products').select('id, stock, price, is_published'),
      _supabase.from('orders').select('id, total, status, created_at'),
      _supabase.from('categories').select('id')
    ]);

    const productData = products.data || [];
    const orderData = orders.data || [];
    const today = new Date().toISOString().split('T')[0];

    return {
      totalProducts: productData.length,
      publishedProducts: productData.filter(p => p.is_published).length,
      lowStock: productData.filter(p => p.stock < 5 && p.is_published).length,
      totalOrders: orderData.length,
      pendingOrders: orderData.filter(o => o.status === 'pending').length,
      totalRevenue: orderData.filter(o => o.payment_status === 'paid').reduce((s, o) => s + (o.total || 0), 0),
      todayOrders: orderData.filter(o => o.created_at?.startsWith(today)).length,
      totalCategories: (categories.data || []).length
    };
  },

  // ----------------------------------------------------------------
  // STORAGE — Image Upload
  // ----------------------------------------------------------------
  async uploadProductImage(file, filename) {
    const ext = file.name.split('.').pop();
    const path = `${filename || Date.now()}.${ext}`;
    const { data, error } = await _supabase.storage
      .from('product-images')
      .upload(path, file, { upsert: true });
    if (error) return { success: false, error };
    const { data: urlData } = _supabase.storage.from('product-images').getPublicUrl(path);
    return { success: true, url: urlData.publicUrl, path };
  },

  // ----------------------------------------------------------------
  // AUTH
  // ----------------------------------------------------------------
  async signUp(email, password, fullName) {
    const { data, error } = await _supabase.auth.signUp({
      email, password,
      options: { data: { full_name: fullName } }
    });
    if (error) return { success: false, error: error.message };
    return { success: true, user: data.user };
  },

  async signIn(email, password) {
    const { data, error } = await _supabase.auth.signInWithPassword({ email, password });
    if (error) return { success: false, error: error.message };
    return { success: true, user: data.user };
  },

  async signOut() {
    await _supabase.auth.signOut();
  },

  async getSession() {
    const { data } = await _supabase.auth.getSession();
    return data.session;
  },

  async getUser() {
    const { data } = await _supabase.auth.getUser();
    return data.user;
  },

  async getProfile(userId) {
    const { data } = await _supabase.from('profiles').select('*').eq('id', userId).single();
    return data;
  },

  async updateProfile(userId, updates) {
    const { error } = await _supabase.from('profiles').update(updates).eq('id', userId);
    if (error) return { success: false, error };
    return { success: true };
  },

  onAuthChange(callback) {
    return _supabase.auth.onAuthStateChange(callback);
  }
};
