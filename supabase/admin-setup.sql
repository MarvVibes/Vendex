-- ================================================================
-- VENDEX ADMIN SETUP SQL
-- Run this AFTER the main schema.sql
-- Run in: Supabase Dashboard → SQL Editor → New Query → Run
-- ================================================================

-- 1. Add is_admin column to profiles
alter table public.profiles add column if not exists is_admin boolean default false;

-- 2. Drop any conflicting policies
drop policy if exists "products_admin_read"   on public.products;
drop policy if exists "products_admin_insert" on public.products;
drop policy if exists "products_admin_update" on public.products;
drop policy if exists "products_admin_delete" on public.products;
drop policy if exists "categories_admin_insert" on public.categories;
drop policy if exists "categories_admin_update" on public.categories;
drop policy if exists "categories_admin_delete" on public.categories;
drop policy if exists "orders_admin_all"      on public.orders;
drop policy if exists "profiles_admin_all"    on public.profiles;

-- 3. PRODUCTS — Admin can see ALL products (including unpublished)
create policy "products_admin_read"
  on public.products for select
  using (
    is_published = true
    or (select is_admin from public.profiles where id = auth.uid()) = true
  );

-- Products — Admin can insert
create policy "products_admin_insert"
  on public.products for insert
  with check ((select is_admin from public.profiles where id = auth.uid()) = true);

-- Products — Admin can update
create policy "products_admin_update"
  on public.products for update
  using ((select is_admin from public.profiles where id = auth.uid()) = true);

-- Products — Admin can delete
create policy "products_admin_delete"
  on public.products for delete
  using ((select is_admin from public.profiles where id = auth.uid()) = true);

-- 4. CATEGORIES — Admin can write
create policy "categories_admin_insert"
  on public.categories for insert
  with check ((select is_admin from public.profiles where id = auth.uid()) = true);

create policy "categories_admin_update"
  on public.categories for update
  using ((select is_admin from public.profiles where id = auth.uid()) = true);

create policy "categories_admin_delete"
  on public.categories for delete
  using ((select is_admin from public.profiles where id = auth.uid()) = true);

-- 5. ORDERS — Admin can see all orders and update them
create policy "orders_admin_all"
  on public.orders for all
  using ((select is_admin from public.profiles where id = auth.uid()) = true);

-- 6. PROFILES — Admin can see all profiles
create policy "profiles_admin_all"
  on public.profiles for select
  using ((select is_admin from public.profiles where id = auth.uid()) = true);

-- ================================================================
-- AFTER CREATING YOUR ADMIN ACCOUNT:
-- 1. Go to admin/index.html and sign up with your admin email
-- 2. Get your User UUID from: Supabase Dashboard → Authentication → Users
-- 3. Run this query (replace the UUID):
-- ================================================================
-- update public.profiles set is_admin = true where id = 'PASTE-YOUR-UUID-HERE';
