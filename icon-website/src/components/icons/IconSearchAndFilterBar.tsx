// components/icons/IconSearchAndFilterBar.tsx
"use client";
import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import { useIconGroups } from "@airqo/icons-react"; // Import hook for groups
import type { IconGroup } from "@airqo/icons-react"; // Import type for group

interface Props {
  value: string;
  onChange: (q: string) => void;
  selectedGroup: string | null; // Receive selected group
  onGroupChange: (group: string | null) => void; // Receive group change handler
}

export default function IconSearchAndFilterBar({
  value,
  onChange,
  selectedGroup,
  onGroupChange,
}: Props) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { groups, isLoading: groupsLoading } = useIconGroups(); // Use hook to get groups

  const handleGroupSelect = (groupName: string | null) => {
    onGroupChange(groupName);
    setIsFilterOpen(false); // Close dropdown after selection
  };

  // Find the currently selected group object for display name
  const currentGroup = groups.find((g) => g.name === selectedGroup);

  return (
    <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-16 z-40">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="relative flex items-center gap-2">
          {/* Search Input */}
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search icons..."
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Search icons"
            />
          </div>

          {/* Filter Button */}
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-1 px-3 py-2 text-sm rounded-md border ${
                selectedGroup
                  ? "bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
              }`}
              aria-haspopup="true"
              aria-expanded={isFilterOpen}
            >
              <Filter className="h-4 w-4" />
              <span>
                {currentGroup
                  ? currentGroup.displayName || currentGroup.name
                  : "All Groups"}
              </span>
            </button>

            {/* Filter Dropdown */}
            {isFilterOpen && (
              <div className="absolute right-0 z-50 mt-1 w-64 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <button
                    onClick={() => handleGroupSelect(null)}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      !selectedGroup
                        ? "bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-200"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                  >
                    All Groups
                  </button>
                  {groupsLoading ? (
                    <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                      Loading groups...
                    </div>
                  ) : (
                    groups.map((group) => (
                      <button
                        key={group.name} // Use unique group name
                        onClick={() => handleGroupSelect(group.name)}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          selectedGroup === group.name
                            ? "bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-200"
                            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                        }`}
                      >
                        {group.displayName || group.name}{" "}
                        {/* Use displayName if available */}
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
