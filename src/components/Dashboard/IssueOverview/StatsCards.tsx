
import { getIssueStats } from "@/lib/mockData";

export function StatsCards() {
  const stats = getIssueStats();
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="stats-card border-ondc-blue">
        <div className="flex justify-between">
          <span className="text-gray-500 font-medium">Total Issues</span>
          <span className="rounded-full bg-ondc-blue/10 p-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ondc-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </span>
        </div>
        <div className="stats-value">{stats.totalIssues}</div>
      </div>
      
      <div className="stats-card border-ondc-green">
        <div className="flex justify-between">
          <span className="text-gray-500 font-medium">Resolved</span>
          <span className="rounded-full bg-green-100 p-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ondc-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>
        <div className="stats-value">{stats.resolved}</div>
      </div>
      
      <div className="stats-card border-ondc-red">
        <div className="flex justify-between">
          <span className="text-gray-500 font-medium">Unresolved</span>
          <span className="rounded-full bg-red-100 p-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ondc-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
        </div>
        <div className="stats-value">{stats.unresolved}</div>
      </div>
      
      <div className="stats-card border-ondc-yellow">
        <div className="flex justify-between">
          <span className="text-gray-500 font-medium">Escalated</span>
          <span className="rounded-full bg-yellow-100 p-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ondc-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </div>
        <div className="stats-value">{stats.escalated}</div>
      </div>
    </div>
  );
}
