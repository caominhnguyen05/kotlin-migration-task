import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: {
    noExternal: [
      "@rescui/button",
      "@rescui/card",
      "@rescui/checkbox",
      "@rescui/colors",
      "@rescui/icons",
      "@rescui/input",
      "@rescui/tab-list",
      "@rescui/tooltip",
      "@rescui/typography",
      "@rescui/ui-contexts",
      "@jetbrains/kotlin-web-site-ui",
    ],
  },
});
