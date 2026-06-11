import { getCourses } from "@/lib/supabase";
import { BentoGrid } from "@/components/bento-grid";

export async function CoursePanel() {
  const query = await getCourses();

  return <BentoGrid query={query} />;
}
