// components/docs/QuickStartSection.tsx
import React from "react";
import DocSection from "./DocSection";
import CodeBlock from "./CodeBlock";

export default function QuickStartSection() {
  return (
    <DocSection id="quick-start" title="🎯 Quick Start">
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Get up and running in seconds by importing specific icons:
      </p>
      <CodeBlock
        title="Basic Usage"
        code={`import { AqHome01, AqUganda, AqBarChart01 } from '@airqo/icons-react';

function App() {
  return (
    <div className="flex items-center space-x-4">
      <AqUganda size={32} className="text-green-600" />
      <AqHome01 size={24} className="text-blue-600" />
      <AqBarChart01 size={28} className="text-purple-600" />
    </div>
  );
}`}
        language="tsx"
      />
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-700 dark:text-blue-300">
          ✅ Tree-shaking ensures only imported icons are bundled, keeping your
          app lightweight.
        </p>
      </div>
    </DocSection>
  );
}
