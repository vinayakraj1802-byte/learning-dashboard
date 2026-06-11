# Astra Learning Dashboard

A high-fidelity student dashboard prototype for the frontend intern challenge. It uses the required stack: Next.js App Router, Supabase, Tailwind CSS, Framer Motion, and Lucide React.

## What is included

- Server-rendered course fetching through `app/page.tsx` -> `components/course-panel.tsx` -> `lib/supabase.ts`
- Client-only animation components for the bento grid, course cards, sidebar highlight, and progress bars
- Responsive layout: full sidebar on desktop, icon-collapse on tablet, bottom nav on mobile
- Suspense and `loading.tsx` skeleton states with subtle pulse treatment
- Graceful Supabase failure handling with preview seed data, so the interface remains reviewable before environment setup
- A Supabase schema and seed script in `supabase/schema.sql`

## Running locally

```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Then run the SQL in `supabase/schema.sql` inside the Supabase SQL editor.

## Architecture notes

Course data is fetched in a React Server Component so the initial payload is prepared before the animated client grid mounts. Framer Motion is isolated to client components (`DashboardShell`, `BentoGrid`, `CourseCard`, and `ActivityTile`), which keeps the server/client split explicit.

Animations use `opacity`, `transform`, and Framer Motion spring transitions. Hover treatments avoid layout-affecting properties; cards scale and translate slightly while the glow layer fades in. The sidebar active state uses a shared `layoutId` highlight for the snap animation requested in the brief.

The project includes preview seed data only as a graceful local fallback. With valid Supabase environment variables, the dashboard reads from the `courses` table.
