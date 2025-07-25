// components/docs/InstallationSection.tsx
import React from "react";
import DocSection from "./DocSection";
import CodeBlock from "./CodeBlock";

export default function InstallationSection() {
  return (
    <DocSection id="installation" title="🚀 Installation">
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Install AirQO Icons for React using your preferred package manager:
      </p>
      <div className="grid gap-4">
        <CodeBlock
          title="npm"
          code={`npm install @airqo/icons-react`}
          language="bash"
        />
        <CodeBlock
          title="yarn"
          code={`yarn add @airqo/icons-react`}
          language="bash"
        />
        <CodeBlock
          title="pnpm"
          code={`pnpm add @airqo/icons-react`}
          language="bash"
        />
      </div>

      {/* Optional Fuse.js Installation */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Advanced Search Dependencies
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          To use advanced search utilities like{" "}
          <code>AirQOIconsUtils.searchIcons</code>, install <code>fuse.js</code>
          :
        </p>
        <CodeBlock title="npm" code={`npm install fuse.js`} language="bash" />
      </div>
    </DocSection>
  );
}
