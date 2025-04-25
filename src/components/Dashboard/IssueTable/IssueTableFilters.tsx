
import React from "react";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface IssueTableFiltersProps {
  selectedLevels: number[];
  setSelectedLevels: React.Dispatch<React.SetStateAction<number[]>>;
  selectedStatuses: string[];
  setSelectedStatuses: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSources: string[];
  setSelectedSources: React.Dispatch<React.SetStateAction<string[]>>;
}

export function IssueTableFilters({
  selectedLevels,
  setSelectedLevels,
  selectedStatuses,
  setSelectedStatuses,
  selectedSources,
  setSelectedSources
}: IssueTableFiltersProps) {
  const levels = [
    { id: 1, name: "Level 1 - Automated Resolution" },
    { id: 2, name: "Level 2 - Internal GRO" },
    { id: 3, name: "Level 3 - ODR Provider" },
    { id: 4, name: "Level 4 - Courts" }
  ];
  
  const statuses = [
    { id: "Open", name: "Open" },
    { id: "In Progress", name: "In Progress" },
    { id: "Resolved", name: "Resolved" },
    { id: "Escalated", name: "Escalated" }
  ];
  
  const sources = [
    { id: "Buyer", name: "Buyer" },
    { id: "Seller", name: "Seller" }
  ];
  
  const handleLevelChange = (levelId: number) => {
    setSelectedLevels(prev => {
      if (prev.includes(levelId)) {
        return prev.filter(id => id !== levelId);
      } else {
        return [...prev, levelId];
      }
    });
  };
  
  const handleStatusChange = (statusId: string) => {
    setSelectedStatuses(prev => {
      if (prev.includes(statusId)) {
        return prev.filter(id => id !== statusId);
      } else {
        return [...prev, statusId];
      }
    });
  };
  
  const handleSourceChange = (sourceId: string) => {
    setSelectedSources(prev => {
      if (prev.includes(sourceId)) {
        return prev.filter(id => id !== sourceId);
      } else {
        return [...prev, sourceId];
      }
    });
  };
  
  const resetFilters = () => {
    setSelectedLevels([]);
    setSelectedStatuses([]);
    setSelectedSources([]);
  };
  
  // Count total active filters
  const activeFiltersCount = selectedLevels.length + selectedStatuses.length + selectedSources.length;
  
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {/* Mobile Filter Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter size={14} />
            <span>Filters</span>
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          
          <div className="py-6 space-y-6">
            {/* Level Filters */}
            <div className="filter-section">
              <h3 className="font-medium mb-3">Issue Level</h3>
              <div className="space-y-2">
                {levels.map(level => (
                  <div key={level.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`level-${level.id}`}
                      checked={selectedLevels.includes(level.id)}
                      onCheckedChange={() => handleLevelChange(level.id)}
                    />
                    <Label htmlFor={`level-${level.id}`} className="text-sm">{level.name}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Status Filters */}
            <div className="filter-section">
              <h3 className="font-medium mb-3">Status</h3>
              <div className="space-y-2">
                {statuses.map(status => (
                  <div key={status.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`status-${status.id}`}
                      checked={selectedStatuses.includes(status.id)}
                      onCheckedChange={() => handleStatusChange(status.id)}
                    />
                    <Label htmlFor={`status-${status.id}`} className="text-sm">{status.name}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Source Filters */}
            <div className="filter-section">
              <h3 className="font-medium mb-3">Source</h3>
              <div className="space-y-2">
                {sources.map(source => (
                  <div key={source.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`source-${source.id}`}
                      checked={selectedSources.includes(source.id)}
                      onCheckedChange={() => handleSourceChange(source.id)}
                    />
                    <Label htmlFor={`source-${source.id}`} className="text-sm">{source.name}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <SheetFooter className="sm:justify-between gap-3 flex-col-reverse sm:flex-row">
            <Button variant="outline" onClick={resetFilters}>
              Reset Filters
            </Button>
            <SheetClose asChild>
              <Button>Apply Filters</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      
      {/* Active Filter Badges */}
      <div className="flex flex-wrap gap-2">
        {selectedLevels.map(level => {
          const levelInfo = levels.find(l => l.id === level);
          return (
            <Badge key={`level-${level}`} variant="outline" className="pl-2 h-7 gap-1">
              Level {level}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1 rounded-full"
                onClick={() => handleLevelChange(level)}
              >
                <span className="sr-only">Remove</span>
                ×
              </Button>
            </Badge>
          );
        })}
        
        {selectedStatuses.map(status => (
          <Badge key={`status-${status}`} variant="outline" className="pl-2 h-7 gap-1">
            {status}
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4 ml-1 rounded-full"
              onClick={() => handleStatusChange(status)}
            >
              <span className="sr-only">Remove</span>
              ×
            </Button>
          </Badge>
        ))}
        
        {selectedSources.map(source => (
          <Badge key={`source-${source}`} variant="outline" className="pl-2 h-7 gap-1">
            {source}
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4 ml-1 rounded-full"
              onClick={() => handleSourceChange(source)}
            >
              <span className="sr-only">Remove</span>
              ×
            </Button>
          </Badge>
        ))}
        
        {activeFiltersCount > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs h-7 ml-1"
            onClick={resetFilters}
          >
            Clear all
          </Button>
        )}
      </div>
    </div>
  );
}
