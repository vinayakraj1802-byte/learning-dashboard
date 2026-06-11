import { createClient } from "@supabase/supabase-js";
import { previewCourses } from "@/lib/preview-courses";
import type { Course, CourseQuery } from "@/lib/types";

export async function getCourses(): Promise<CourseQuery> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      courses: previewCourses,
      error: "Supabase environment variables are missing. Showing preview seed data.",
      isPreview: true
    };
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });

  const { data, error } = await supabase
    .from("courses")
    .select("id,title,progress,icon_name,created_at")
    .order("created_at", { ascending: true })
    .returns<Course[]>();

  if (error) {
    return {
      courses: previewCourses,
      error: error.message,
      isPreview: true
    };
  }

  return {
    courses: data ?? [],
    isPreview: false
  };
}
