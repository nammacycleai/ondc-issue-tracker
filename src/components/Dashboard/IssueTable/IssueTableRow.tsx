
import React from "react";
import { Issue } from "@/lib/mockData";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, Eye, MessageSquare, ArrowUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface IssueTableRowProps {
  issue: Issue;
}

export function IssueTableRow({ issue }: IssueTableRowProps) {
  const { toast } = useToast();
  
  const handleAction = (action: string) => {
    toast({
      title: `Action: ${action}`,
      description: `${action} action triggered for issue ${issue.issue_id}`,
    });
  };
  
  // Format the date
  const formattedDate = format(new Date(issue.created_at), "MMM d, yyyy");
  
  // Determine status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-yellow-100 text-yellow-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Resolved":
        return "bg-green-100 text-green-800";
      case "Escalated":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  // Determine level color
  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-blue-100 text-blue-800";
      case 2:
        return "bg-green-100 text-green-800";
      case 3:
        return "bg-yellow-100 text-yellow-800";
      case 4:
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-3 text-sm font-medium text-gray-900">
        {issue.issue_id}
      </td>
      
      <td className="px-4 py-3">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
            {issue.title}
          </span>
          <span className="text-xs text-gray-500 truncate max-w-[200px]">
            {issue.description}
          </span>
        </div>
      </td>
      
      <td className="px-4 py-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className={`level-badge ${getLevelColor(issue.level)}`}>
                {issue.level}
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {issue.level === 1 
                  ? "Automated Resolution" 
                  : issue.level === 2 
                  ? "Internal GRO" 
                  : issue.level === 3 
                  ? "ODR Provider" 
                  : "Courts"}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </td>
      
      <td className="px-4 py-3">
        <span className={`status-pill ${getStatusColor(issue.status)}`}>
          {issue.status}
        </span>
      </td>
      
      <td className="px-4 py-3 text-sm text-gray-500">
        {issue.source_type}
      </td>
      
      <td className="px-4 py-3 text-sm text-gray-500 max-w-[120px] truncate">
        {issue.destination_entity}
      </td>
      
      <td className="px-4 py-3 text-sm text-gray-500">
        {formattedDate}
      </td>
      
      <td className="px-4 py-3 text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleAction("View")}>
              <Eye className="mr-2 h-4 w-4" />
              <span>View details</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleAction("Comment")}>
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Add comment</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleAction("Escalate")}>
              <ArrowUp className="mr-2 h-4 w-4" />
              <span>Escalate issue</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </tr>
  );
}
