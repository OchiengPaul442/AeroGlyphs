// app/icons/page.tsx (or your page component file)
"use client";
import React, { useState } from "react";
import IconLibraryHeader from "@/components/icons/IconLibraryHeader"; // Ensure path is correct
import IconSearchAndFilterBar from "@/components/icons/IconSearchAndFilterBar"; // Updated component name
import IconGrid from "@/components/icons/IconGrid";
import IconPreviewDialog from "@/components/icons/IconPreviewDialog";
import { useIconSearch } from "@airqo/icons-react";
import type { IconMetadata } from "@airqo/icons-react";

export default function IconLibraryPage() {
  const [query, setQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null); // State for group filter
  const [selectedIcon, setSelectedIcon] = useState<IconMetadata | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Use the hook correctly - it returns { results, isLoading }
  const { results: searchResults, isLoading: isSearching } = useIconSearch(
    query,
    {
      // You can add search options here if needed, e.g., maxResults
    }
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <IconLibraryHeader />
      {/* Pass group filter state and setter to the bar */}
      <IconSearchAndFilterBar
        value={query}
        onChange={setQuery}
        selectedGroup={selectedGroup}
        onGroupChange={setSelectedGroup}
      />
      {/* Pass search results, loading state, and group filter to grid */}
      <IconGrid
        icons={searchResults}
        isLoading={isSearching}
        selectedGroup={selectedGroup} // Pass group filter to grid
        onSelect={(icon) => {
          setSelectedIcon(icon);
          setIsDialogOpen(true);
        }}
      />
      <IconPreviewDialog
        icon={selectedIcon}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}
