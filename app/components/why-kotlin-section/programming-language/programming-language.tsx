import { useState, useEffect, useMemo } from "react";
import Button from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { TabList, Tab, TabSeparator } from "@rescui/tab-list";
import cn from "classnames";

// Highlight.js
import hljs from "highlight.js/lib/core";
import kotlin from "highlight.js/lib/languages/kotlin";
import "highlight.js/styles/github.css";

import { tabs } from "./data";
import "./programming-language.scss";

if (!hljs.getLanguage("kotlin")) {
  hljs.registerLanguage("kotlin", kotlin);
}

export function ProgrammingLanguage() {
  const textCn = useTextStyles();

  // Start with a fixed index (0) to match server and client
  // Randomize it inside useEffect after the page loads
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Randomize index only after mounting on the client
    const initialIndex = Math.floor(Math.random() * tabs.length);
    setActiveIndex(initialIndex);
  }, []);

  const highlightedCode = useMemo(() => {
    return hljs.highlight(tabs[activeIndex].code, { language: "kotlin" }).value;
  }, [activeIndex]);

  return (
    <div className="kto-grid kto-grid-gap-32 kto-offset-top-96 kto-offset-top-md-48">
      <div className="kto-col-4 kto-col-md-12">
        <h3 className={textCn("rs-h2")}>
          Modern, concise and safe programming language
        </h3>
        <p className={cn(textCn("rs-text-2"), "kto-offset-top-32")}>
          Easy to pick up, so you can create powerful applications immediately.
        </p>
        <div className="kto-offset-top-32">
          <Button mode="outline" size="l" href="/docs/getting-started.html">
            Get started
          </Button>
        </div>
      </div>

      <div className="kto-col-8 kto-col-md-12">
        <TabList value={activeIndex} onChange={(v) => setActiveIndex(v)}>
          {tabs.map((tab, i) => (
            <Tab key={i}>{tab.title}</Tab>
          ))}
        </TabList>
        <TabSeparator />
        <pre className="programming-language__code kto-offset-top-16">
          <code
            className="hljs"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>
    </div>
  );
}
