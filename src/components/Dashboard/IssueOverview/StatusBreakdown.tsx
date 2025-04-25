
import { getIssueStats } from "@/lib/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export function StatusBreakdown() {
  const stats = getIssueStats();
  
  // Prepare data for the pie chart
  const chartData = stats.byStatus.map((status) => ({
    name: status.status,
    value: status.count
  }));
  
  // Define colors for each status
  const COLORS = {
    'Open': '#ECC94B',        // Yellow
    'In Progress': '#4299E1',  // Blue
    'Resolved': '#38A169',     // Green
    'Escalated': '#E53E3E'     // Red
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Issues by Status</CardTitle>
        <CardDescription>
          Current status distribution of all issues
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.name as keyof typeof COLORS]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value} issues`, 'Count']}
                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
              />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          {stats.byStatus.map((status) => (
            <div key={status.status} className="flex items-center p-3 bg-gray-50 rounded-md">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: COLORS[status.status as keyof typeof COLORS] }}
              ></div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{status.status}</span>
                <span className="text-lg font-bold">{status.count}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
