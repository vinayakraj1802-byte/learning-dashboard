import { Suspense } from "react";
import { DashboardShell } from "@/components/dashboard-shell";
import { CoursePanel } from "@/components/course-panel";
import { BentoSkeleton } from "@/components/skeletons";

export default function Page() {
  return (
    <DashboardShell>
      <Suspense fallback={<BentoSkeleton />}>
        <CoursePanel />
      </Suspense>
    </DashboardShell>
  );
}
