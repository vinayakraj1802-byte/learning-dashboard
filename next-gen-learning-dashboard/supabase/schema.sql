create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamptz not null default now()
);

alter table public.courses enable row level security;

create policy "Courses are readable by anon users"
on public.courses
for select
to anon
using (true);

insert into public.courses (title, progress, icon_name)
values
  ('Advanced React Patterns', 76, 'Component'),
  ('Motion Systems for Product UI', 58, 'Orbit'),
  ('Server Components in Practice', 83, 'Server'),
  ('Postgres for Frontend Engineers', 44, 'Database');
