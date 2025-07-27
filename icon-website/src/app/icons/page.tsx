"use client";
import React, { useState, useMemo } from "react";
import IconLibraryHeader from "@/components/icons/IconLibraryHeader";
import IconSearchAndFilterBar from "@/components/icons/IconSearchAndFilterBar";
import IconGrid from "@/components/icons/IconGrid";
import IconPreviewDialog from "@/components/icons/IconPreviewDialog";
import { useIconSearch } from "@airqo/icons-react";
import type { IconMetadata } from "@airqo/icons-react";

export default function IconLibraryPage() {
  const [query, setQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<IconMetadata | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Use the hook correctly - it returns { results, isLoading }
  const { results: searchResults, isLoading: isSearching } = useIconSearch(
    query,
    {
      // You can add search options here if needed
    }
  );

  // Filter results by selected group
  const filteredResults = useMemo(() => {
    if (!selectedGroup) return searchResults;
    return searchResults.filter((icon) => icon.group === selectedGroup);
  }, [searchResults, selectedGroup]);

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <div className="flex flex-col min-h-screen overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <IconLibraryHeader />
      <IconSearchAndFilterBar
        value={query}
        onChange={setQuery}
        selectedGroup={selectedGroup}
        onGroupChange={setSelectedGroup}
        onClearSearch={clearSearch}
      />
      <IconGrid
        icons={filteredResults}
        isLoading={isSearching}
        selectedGroup={selectedGroup}
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
