import type { Route } from "./+types/home";
import { useEffect } from "react";
import "@rescui/typography/lib/font-jb-sans-auto.css";

import hljs from "highlight.js/lib/core";
import kotlin from "highlight.js/lib/languages/kotlin";
import "highlight.js/styles/github.css";
hljs.registerLanguage("kotlin", kotlin);

// Components
import { HeaderSection } from "~/components/header-section/header-section";
import { LatestFromKotlinSection } from "~/components/latest-from-kotlin-section/latest-from-kotlin-section";
import { StartSection } from "~/components/start-section/start-section";
import { UsageSection } from "~/components/usage-section/usage-section";
import { WhyKotlinSection } from "~/components/why-kotlin-section/why-kotlin-section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function OverviewPage() {
  useEffect(() => {
    // Initialize Highlight.js
    if (!hljs.getLanguage("kotlin")) {
      hljs.registerLanguage("kotlin", kotlin);
    }
    hljs.highlightAll();
  }, []);

  return (
    <div className="overview-page">
      <HeaderSection />
      <LatestFromKotlinSection />
      <WhyKotlinSection />
      <UsageSection />
      <StartSection />
    </div>
  );
}
