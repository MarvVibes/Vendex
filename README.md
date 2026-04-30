# Vendex — Premium E-commerce & CMS Platform

Vendex is a state-of-the-art, database-driven fashion e-commerce platform built with a focus on luxury aesthetics and high performance. It features a fully responsive storefront, a secure admin CMS, and real-time backend integration.

## 🌟 Key Features

### 🛒 Storefront
- **Dynamic Product Engine:** Reusable templates for products and categories fetching data from Supabase.
- **Luxury UX:** Slide-out Cart Drawer, Full-screen Live Search, and "Reveal on Scroll" animations.
- **Customer Authentication:** Secure login and sign-up with persistent sessions.
- **Paystack Checkout:** Integrated payment gateway with automatic order recording.

### 🛡️ Admin Dashboard (CMS)
- **Inventory Management:** CRUD operations for products (Add, Edit, Delete, Toggle).
- **Image Uploads:** Direct integration with Supabase Storage.
- **Order Tracking:** Real-time monitoring of customer orders and payment statuses.
- **Analytics:** Overview stats for revenue, sales, and inventory health.

## 🛠️ Tech Stack
- **Frontend:** Vanilla HTML5, CSS3 (Custom Design System), JavaScript (ES6+).
- **Backend:** Supabase (PostgreSQL, Auth, Storage).
- **Payments:** Paystack API.

## 🚀 Setup Instructions

### 1. Database Configuration
1. Create a new project on [Supabase](https://supabase.com).
2. Go to the **SQL Editor** and run the contents of `supabase/schema.sql`.
3. Run the contents of `supabase/admin-setup.sql` to enable CMS permissions.

### 2. Storage Setup
1. In Supabase, go to **Storage** and create a new public bucket named `product-images`.

### 3. Environment Variables
Update `js/config.js` with your specific credentials:
- `supabase.url`
- `supabase.anonKey`
- `paystack.publicKey`

### 4. Admin Promotion
Once you register an account, promote it to Admin via the SQL Editor:
```sql
UPDATE public.profiles SET is_admin = true WHERE id = 'YOUR_USER_ID';
```

## 📜 License
© 2026 Vendex Official. All rights reserved.
