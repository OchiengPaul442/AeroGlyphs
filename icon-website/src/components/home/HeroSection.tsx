// components/home/HeroSection.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
const modernBlue = "#0A84FF";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center pt-24 pb-16 sm:pt-32 sm:pb-24"
    >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
        Beautiful{" "}
        <span style={{ color: modernBlue }}>Multi-Framework Icons</span> for
        Modern&nbsp;Apps
      </h1>
      {/* Updated to showcase multi-framework support */}
      <p className="mx-auto max-w-2xl mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
        High-quality icon components for React, Vue, and Flutter with TypeScript
        support. {/* Updated number */}
        1,383+ icons across 22 categories, fully customizable.
      </p>
      <div className="flex flex-wrap gap-3 justify-center mt-6 mb-8">
        <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
          React
        </span>
        <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
          Vue 3
        </span>
        <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
          Flutter
        </span>
        <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">
          TypeScript
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Link
          href="/icons"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-white shadow-lg hover:scale-105 transition-transform"
          style={{ backgroundColor: modernBlue }}
        >
          Browse Icons <ArrowRight className="h-5 w-5" />
        </Link>
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-lg hover:scale-105 transition-transform"
        >
          <Download className="h-5 w-5" /> Get Started
        </Link>
      </div>
    </motion.section>
  );
}
