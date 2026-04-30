// ================================================================
// VENDEX — Central Configuration
// Update PAYSTACK_PUBLIC_KEY with your full key from:
// Paystack Dashboard → Settings → API Keys → Test Public Key
// ================================================================

const VENDEX_CONFIG = {
  supabase: {
    url: 'https://giqhtgegwdcbxjdstywj.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpcWh0Z2Vnd2RjYnhqZHN0eXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0NzI5ODgsImV4cCI6MjA5MzA0ODk4OH0.749gnp6XkaAww0-Neh5t9fUU9tWB9zECrcxu_DgD4aA'
  },
  paystack: {
    // ⚠️ REPLACE THIS with your full Paystack test public key (pk_test_...)
    publicKey: 'pk_test_c12274ea4b0a618d4d6e30d2539b019c58ae82ed'
  },
  storage: {
    bucket: 'product-images',
    baseUrl: 'https://giqhtgegwdcbxjdstywj.supabase.co/storage/v1/object/public/product-images/'
  },
  // Local image fallback path (for existing static images)
  localImagePath: 'assets/images/'
};

// Helper: resolve product image URL
function resolveImageUrl(imagePath) {
  if (!imagePath) return VENDEX_CONFIG.localImagePath + 'placeholder.png';
  if (imagePath.startsWith('http')) return imagePath;
  // Check if it's a Supabase storage path
  if (imagePath.startsWith('storage/')) return VENDEX_CONFIG.supabase.url + '/storage/v1/object/public/' + imagePath;
  // Default: local asset
  return VENDEX_CONFIG.localImagePath + imagePath;
}
