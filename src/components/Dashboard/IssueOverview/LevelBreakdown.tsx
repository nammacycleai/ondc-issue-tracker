
import { getIssueStats } from "@/lib/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function LevelBreakdown() {
  const stats = getIssueStats();
  
  // Prepare data for the bar chart
  const chartData = stats.byLevel.map((level) => ({
    name: `Level ${level.level}`,
    count: level.count,
    description: level.description
  }));
  
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Issues by Resolution Level</CardTitle>
        <CardDescription>
          Distribution of issues across the four resolution levels
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                padding={{ left: 20, right: 20 }}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                formatter={(value, name, props) => [`${value} issues`, `${props.payload.name} - ${props.payload.description}`]}
                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
              />
              <Bar dataKey="count" fill="#4299E1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {stats.byLevel.map((level) => (
            <div key={level.level} className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
              <div className={`
                level-badge mb-2
                ${level.level === 1 ? 'bg-blue-100 text-blue-700' : 
                  level.level === 2 ? 'bg-green-100 text-green-700' :
                  level.level === 3 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'}
              `}>
                {level.level}
              </div>
              <span className="text-sm font-medium">{level.description}</span>
              <span className="text-2xl font-bold mt-1">{level.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
