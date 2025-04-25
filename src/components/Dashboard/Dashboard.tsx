
import React from "react";
import { DashboardLayout } from "./Layout/DashboardLayout";
import { StatsCards } from "./IssueOverview/StatsCards";
import { LevelBreakdown } from "./IssueOverview/LevelBreakdown";
import { StatusBreakdown } from "./IssueOverview/StatusBreakdown";
import { IssueTable } from "./IssueTable/IssueTable";
import { IssueTimeline } from "./IssueTimeline/IssueTimeline";

export function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">ONDC Issue & Grievance Management</h1>
          <p className="text-muted-foreground">
            Monitor and manage issues across all resolution levels.
          </p>
        </div>

        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <LevelBreakdown />
          <StatusBreakdown />
        </div>

        <IssueTable />
        
        <IssueTimeline />
      </div>
    </DashboardLayout>
  );
}
