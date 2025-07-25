// components/docs/FlutterSection.tsx
import React from "react";
import DocSection from "./DocSection";
import CodeBlock from "./CodeBlock";

const modernBlue = "#0A84FF";

export default function FlutterSection() {
  return (
    <DocSection id="flutter" title="📱 Flutter Package">
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        AirQo Icons are also available for Flutter applications.
      </p>
      <CodeBlock
        title="pubspec.yaml"
        code={`dependencies:
  airqo_icons_flutter: ^latest_version # Check pub.dev for the latest version`}
        language="yaml"
      />
      <CodeBlock
        title="Usage"
        code={`import 'package:airqo_icons_flutter/airqo_icons_flutter.dart';

Icon(
  AirqoIcons.aq_home_01, // Note: naming convention might differ slightly
  size: 32.0,
  color: Color(0xFF0A84FF),
)`}
        language="dart"
      />
      <div className="mt-4">
        <a
          href="https://pub.dev/packages/airqo_icons_flutter"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-lg shadow hover:shadow-md transition-shadow"
          style={{ backgroundColor: modernBlue }}
        >
          View on pub.dev
        </a>
      </div>
    </DocSection>
  );
}
