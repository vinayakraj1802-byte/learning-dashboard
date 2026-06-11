import {
  BookOpen,
  BrainCircuit,
  Code2,
  Component,
  Database,
  type LucideIcon,
  Orbit,
  Server,
  Sparkles,
  Waypoints
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  BookOpen,
  BrainCircuit,
  Code2,
  Component,
  Database,
  Orbit,
  Server,
  Sparkles,
  Waypoints
};

export function resolveCourseIcon(iconName: string): LucideIcon {
  return icons[iconName] ?? BookOpen;
}
