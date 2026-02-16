import React from "react";
import "./layout.scss";

// Define types for the Section props
interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={"kto-layout-section" + " " + className}>
      {children}
    </section>
  );
}

// Define types for the Container props
interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className="kto-layout-container">{children}</div>;
}
