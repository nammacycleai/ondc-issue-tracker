
import React from "react";
import { mockIssues } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

export function IssueTimeline() {
  // Get the first issue for demonstration
  const issue = mockIssues[0];
  
  // Sort timeline events by date
  const sortedEvents = [...issue.timeline].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span>Issue Timeline</span>
          <span className="text-sm font-normal text-gray-500">
            {issue.issue_id}: {issue.title}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {sortedEvents.map((event, index) => {
            // Format the date
            const formattedDate = format(new Date(event.date), "MMM d, yyyy h:mm a");
            
            // Determine level color
            const getLevelColor = (level: number) => {
              switch (level) {
                case 1:
                  return "bg-blue-500";
                case 2:
                  return "bg-green-500";
                case 3:
                  return "bg-yellow-500";
                case 4:
                  return "bg-red-500";
                default:
                  return "bg-gray-500";
              }
            };
            
            return (
              <div key={event.id} className="relative pl-8 pb-8">
                {/* Vertical line */}
                {index < sortedEvents.length - 1 && (
                  <div className="timeline-line"></div>
                )}
                
                {/* Event marker */}
                <div
                  className={`timeline-marker absolute left-0 top-0 ${getLevelColor(event.level)}`}
                ></div>
                
                {/* Event content */}
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <div className="flex items-center">
                      <span className={`level-badge mr-2 ${getLevelColor(event.level)} text-white`}>
                        {event.level}
                      </span>
                      <span className="font-medium">{event.action}</span>
                    </div>
                    <span className="text-sm text-gray-500">{formattedDate}</span>
                  </div>
                  
                  <div className="text-sm text-gray-600 mt-1">
                    <p>{event.notes}</p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                    <span>By: {event.user}</span>
                    <span>Entity: {event.entity}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
