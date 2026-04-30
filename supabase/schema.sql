-- ================================================================
-- VENDEX DATABASE SCHEMA — v2 (Supabase Compatible)
-- Run this entire file in: SQL Editor → New Query → Run
-- ================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ================================================================
-- TABLE: categories
-- ================================================================
create table if not exists public.categories (
  id          uuid primary key default uuid_generate_v4(),
  name        text not null,
  slug        text not null unique,
  description text,
  image_url   text,
  sort_order  integer default 0,
  created_at  timestamptz default now()
);

-- ================================================================
-- TABLE: products
-- ================================================================
create table if not exists public.products (
  id            uuid primary key default uuid_generate_v4(),
  name          text not null,
  slug          text not null unique,
  description   text,
  price         numeric(10,2) not null default 0,
  compare_price numeric(10,2),
  category_id   uuid references public.categories(id) on delete set null,
  images        text[] default array[]::text[],
  sizes         text[] default array['XS','S','M','L','XL'],
  stock         integer default 0,
  badge         text,
  is_published  boolean default true,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- Auto-update updated_at trigger
create or replace function public.update_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists products_updated_at on public.products;
create trigger products_updated_at
  before update on public.products
  for each row execute function public.update_updated_at();

-- ================================================================
-- TABLE: orders
-- ================================================================
create table if not exists public.orders (
  id               uuid primary key default uuid_generate_v4(),
  customer_id      uuid references auth.users(id) on delete set null,
  customer_name    text not null,
  customer_email   text not null,
  customer_phone   text,
  shipping_address text,
  shipping_city    text,
  shipping_country text default 'Nigeria',
  items            jsonb not null default '[]'::jsonb,
  subtotal         numeric(10,2) not null default 0,
  shipping_cost    numeric(10,2) default 0,
  total            numeric(10,2) not null default 0,
  status           text default 'pending',
  payment_ref      text,
  payment_status   text default 'pending',
  notes            text,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

drop trigger if exists orders_updated_at on public.orders;
create trigger orders_updated_at
  before update on public.orders
  for each row execute function public.update_updated_at();

-- ================================================================
-- TABLE: profiles (extends auth.users)
-- ================================================================
create table if not exists public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  full_name  text,
  phone      text,
  address    text,
  city       text,
  country    text default 'Nigeria',
  avatar_url text,
  created_at timestamptz default now()
);

-- Auto-create profile on new user signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', '')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ================================================================
-- ROW LEVEL SECURITY
-- ================================================================

alter table public.categories enable row level security;
alter table public.products   enable row level security;
alter table public.orders     enable row level security;
alter table public.profiles   enable row level security;

-- Drop existing policies to avoid conflicts
drop policy if exists "categories_read"      on public.categories;
drop policy if exists "products_read"        on public.products;
drop policy if exists "orders_insert"        on public.orders;
drop policy if exists "orders_user_read"     on public.orders;
drop policy if exists "profiles_user_read"   on public.profiles;
drop policy if exists "profiles_user_update" on public.profiles;

-- Categories: public read
create policy "categories_read"
  on public.categories for select
  using (true);

-- Products: public read (published only)
create policy "products_read"
  on public.products for select
  using (is_published = true);

-- Orders: anyone can place an order (guest + auth)
create policy "orders_insert"
  on public.orders for insert
  with check (true);

-- Orders: logged-in users can see their own orders
create policy "orders_user_read"
  on public.orders for select
  using (auth.uid() = customer_id);

-- Profiles: users manage their own profile
create policy "profiles_user_read"
  on public.profiles for select
  using (auth.uid() = id);

create policy "profiles_user_update"
  on public.profiles for update
  using (auth.uid() = id);

-- ================================================================
-- SEED DATA: Categories
-- ================================================================
insert into public.categories (name, slug, description, sort_order) values
  ('Women',       'women',       'Curated styles for her',      1),
  ('Men',         'men',         'Sharp tailoring for him',     2),
  ('Accessories', 'accessories', 'The final touch to any look', 3),
  ('New In',      'new-in',      'Fresh arrivals this week',    0)
on conflict (slug) do nothing;

-- ================================================================
-- SEED DATA: Products
-- ================================================================
insert into public.products
  (name, slug, description, price, compare_price, category_id, images, sizes, stock, badge)
select
  p.name, p.slug, p.description, p.price, p.compare_price,
  c.id as category_id,
  p.images, p.sizes, p.stock, p.badge
from (values
  ('Classic Beige Trench Coat',    'trench-coat',       'A timeless wardrobe staple. Double-breasted front, belted waist, crafted from premium water-resistant cotton-gabardine.', 120.00, 150.00, 'women',       array['product_trench_coat.png'],      array['XS','S','M','L','XL'],         25, '-20%'),
  ('Luxury Leather Handbag',       'leather-handbag',   'Crafted from full-grain Italian leather with structured silhouette and gold-tone hardware.',                             295.00, null,   'accessories',  array['product_bag.png'],              array['ONE SIZE'],                    15, null),
  ('Tailored Navy Suit',           'navy-suit',         'Precision-cut two-piece suit in premium wool-blend fabric with slim lapel and double-button closure.',                  380.00, null,   'men',          array['product_suit_folded.png'],      array['S','M','L','XL','XXL'],        12, 'New'),
  ('Silver Chronograph Watch',     'silver-watch',      'Swiss-movement chronograph with brushed stainless steel case and sapphire crystal glass. Water-resistant to 100m.',    185.00, null,   'accessories',  array['product_watch.png'],            array['ONE SIZE'],                    20, null),
  ('White Silk Blouse',            'silk-blouse',       'A fluid silk blouse with relaxed fit and button-front closure. Elevates any outfit from desk to dinner.',              145.00, null,   'women',        array['product_silk_blouse.png'],      array['XS','S','M','L'],              18, null),
  ('Cashmere Crewneck Sweater',    'cashmere-sweater',  'Pure grade-A cashmere in a relaxed crewneck silhouette. Incomparably soft with a slight sheen finish.',               210.00, null,   'women',        array['product_cashmere_sweater.png'], array['XS','S','M','L','XL'],         22, null),
  ('Black Evening Gown',           'evening-gown',      'Floor-length gown with plunging neckline and delicate side slit. Crafted from duchess satin.',                         320.00, null,   'women',        array['product_evening_gown.png'],     array['XS','S','M','L'],               8, 'New'),
  ('Classic Aviator Sunglasses',   'aviator-sunglasses','Timeless aviator styling with polarized lenses and 100% UV protection. Lightweight metal frame.',                      110.00, null,   'accessories',  array['product_sunglasses.png'],       array['ONE SIZE'],                    30, null),
  ('Black Oversized Hoodie',       'black-hoodie',      'Premium heavyweight cotton blend hoodie with relaxed fit and dropped shoulders.',                                        95.00, null,   'men',          array['product_hoodie.png'],           array['XS','S','M','L','XL','XXL'],  40, null),
  ('Wide-Leg Linen Trousers',      'wide-trousers',     'Breathable linen-blend wide-leg trousers with elasticated waist. Perfect for warm-weather dressing.',                  125.00, null,   'women',        array['product_wide_trousers.png'],    array['XS','S','M','L'],              20, null),
  ('Patterned Silk Scarf',         'silk-scarf',        'A hand-rolled silk scarf with original printed pattern. Can be worn multiple ways.',                                    85.00, null,   'accessories',  array['product_silk_scarf.png'],       array['ONE SIZE'],                    25, null),
  ('Full-Grain Leather Belt',      'leather-belt',      'Hand-stitched full-grain leather belt with solid brass buckle. Develops a beautiful patina over time.',                 75.00, null,   'accessories',  array['product_leather_belt.png'],     array['S','M','L','XL'],              35, null),
  ('Minimalist Leather Sneakers',  'leather-sneakers',  'Clean-lined leather sneakers with vulcanised rubber sole. The perfect casual everyday shoe.',                          140.00, null,   'accessories',  array['product_sneakers.png'],         array['39','40','41','42','43','44'], 18, null),
  ('Midi Floral Dress',            'midi-dress',        'Flowy midi dress with cinched waist and delicate floral print. Features adjustable straps and side zip.',              165.00, null,   'women',        array['product_midi_dress.png'],       array['XS','S','M','L'],              14, null),
  ('Gold Pendant Necklace',        'pendant-necklace',  '18k gold-plated pendant necklace with a fine chain. Minimalist design that layers beautifully.',                      150.00, null,   'accessories',  array['product_pendant_necklace.png'], array['ONE SIZE'],                    22, null),
  ('Black Crossbody Bag',          'crossbody-bag',     'Compact crossbody bag in pebbled leather with adjustable strap and silver-tone hardware.',                            195.00, null,   'accessories',  array['product_crossbody_bag.png'],    array['ONE SIZE'],                    17, null),
  ('Slim Chinos',                  'chinos',            'Slim-fit chino trousers in a cotton-stretch blend. Clean lines with a subtle texture.',                                  90.00, null,   'men',          array['product_chinos.png'],           array['S','M','L','XL'],              30, null),
  ('Denim Jacket',                 'denim-jacket',      'Classic washed denim jacket with a relaxed fit. An enduring wardrobe essential.',                                      155.00, null,   'men',          array['product_denim_jacket.png'],     array['XS','S','M','L','XL'],         16, null),
  ('Wool Overcoat',                'overcoat',          'Double-faced wool overcoat with classic silhouette. Unlined for a lighter feel.',                                      290.00, null,   'men',          array['product_overcoat.png'],         array['S','M','L','XL'],              10, null),
  ('Relaxed Linen Shirt',          'linen-shirt',       'A relaxed linen shirt in classic cut. Breathable and versatile for warm seasons.',                                      85.00, null,   'men',          array['product_linen_shirt.png'],      array['XS','S','M','L','XL'],         28, null),
  ('Wide-Leg Linen Trousers (Men)','chinos-linen',      'Relaxed linen trousers for men with drawstring waist and tapered hem.',                                                100.00, null,   'men',          array['product_chinos.png'],           array['S','M','L','XL'],              22, null),
  ('Editorial Style Top',          'editorial-top',     'A statement piece with unique textures and asymmetrical cut. High fashion for everyday.',                              110.00, null,   'women',        array['cat_women.png'],                array['XS','S','M','L'],              15, null)
) as p(name, slug, description, price, compare_price, cat_slug, images, sizes, stock, badge)
join public.categories c on c.slug = p.cat_slug
on conflict (slug) do nothing;
