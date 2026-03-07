import { ReactNode } from "react";

interface SkillProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function Skill({ icon, title, description }: SkillProps) {
  return (
    <div className="group">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-foreground/[0.04] flex items-center justify-center group-hover:bg-foreground/[0.07] transition-colors">
          {icon}
        </div>
        <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}
