
import React, { useState } from "react";
import { mockIssues, filterIssues } from "@/lib/mockData";
import { Card } from "@/components/ui/card";
import { IssueTableFilters } from "./IssueTableFilters";
import { IssueTableRow } from "./IssueTableRow";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Pagination } from "@/components/ui/pagination";

export function IssueTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevels, setSelectedLevels] = useState<number[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Apply filters
  const filteredIssues = filterIssues(mockIssues, {
    searchTerm,
    level: selectedLevels.length > 0 ? selectedLevels : undefined,
    status: selectedStatuses.length > 0 ? selectedStatuses : undefined,
    source: selectedSources.length > 0 ? selectedSources : undefined
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredIssues.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedIssues = filteredIssues.slice(startIndex, startIndex + itemsPerPage);
  
  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <h2 className="text-xl font-bold">Issues</h2>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search issues..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Button>New Issue</Button>
          </div>
        </div>
        
        <IssueTableFilters
          selectedLevels={selectedLevels}
          setSelectedLevels={setSelectedLevels}
          selectedStatuses={selectedStatuses}
          setSelectedStatuses={setSelectedStatuses}
          selectedSources={selectedSources}
          setSelectedSources={setSelectedSources}
        />
        
        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white rounded-md">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Issue
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Level
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Destination
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedIssues.length > 0 ? (
                paginatedIssues.map((issue) => (
                  <IssueTableRow key={issue.issue_id} issue={issue} />
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="px-4 py-4 text-center text-gray-500">
                    No issues found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        {filteredIssues.length > 0 && (
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-gray-500">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredIssues.length)} of {filteredIssues.length} issues
            </p>
            
            <Pagination>
              <Pagination.Content>
                <Pagination.Item>
                  <Pagination.Previous
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  />
                </Pagination.Item>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Pagination.Item key={page}>
                    <Pagination.Link 
                      isActive={page === currentPage}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Pagination.Link>
                  </Pagination.Item>
                ))}
                
                <Pagination.Item>
                  <Pagination.Next
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  />
                </Pagination.Item>
              </Pagination.Content>
            </Pagination>
          </div>
        )}
      </Card>
    </div>
  );
}
