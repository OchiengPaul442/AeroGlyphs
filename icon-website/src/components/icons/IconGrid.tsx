// components/icons/IconGrid.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useIconsByGroup } from "@airqo/icons-react"; // Import hook for group icons
import type { IconMetadata } from "@airqo/icons-react";
import IconCard from "./IconCard";

interface Props {
  icons: IconMetadata[]; // Icons from search
  isLoading: boolean; // Loading state from search hook
  selectedGroup: string | null; // Group filter state
  onSelect: (icon: IconMetadata) => void;
}

export default function IconGrid({
  icons,
  isLoading,
  selectedGroup,
  onSelect,
}: Props) {
  // Use the hook to get icons for the selected group when no search query is active
  const { icons: groupIcons, isLoading: isGroupLoading } = useIconsByGroup(
    selectedGroup || "",
    "name"
  );

  // Determine which icons to display:
  // 1. If searching, show search results
  // 2. If filtered by group (and not searching), show group icons
  // 3. If neither, show search results (which might be all icons if query is empty)
  const displayIcons = isLoading ? [] : icons; // Prioritize search results/loading
  const isDisplayingGroupIcons =
    !isLoading && selectedGroup && groupIcons.length > 0 && icons.length === 0;

  // Show loading state if either search or group loading is active
  if (
    isLoading ||
    (selectedGroup && isGroupLoading && !isDisplayingGroupIcons)
  ) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-3 text-gray-600 dark:text-gray-400">
          Loading icons...
        </span>
      </div>
    );
  }

  // Handle case where group is selected but has no icons (after loading)
  if (isDisplayingGroupIcons) {
    // This case should ideally not be reached because groupIcons will be used below
    // But added for clarity in logic flow.
  }

  // Handle case where search yields no results
  if (displayIcons.length === 0 && !isDisplayingGroupIcons) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          No icons found
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Try a different search or filter.
        </p>
      </motion.div>
    );
  }

  // Determine the icons to map over
  const iconsToRender = selectedGroup ? groupIcons : displayIcons;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-7xl px-4 py-8 flex-grow" // Added flex-grow
    >
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-4">
        {iconsToRender.map((icon, i) => (
          <motion.div
            key={icon.name} // Ensure key is based on unique icon name
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.01 }} // Reduced delay for smoother feel
          >
            <IconCard icon={icon} onClick={() => onSelect(icon)} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
