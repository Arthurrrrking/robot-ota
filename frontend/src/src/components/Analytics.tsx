import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function Analytics() {
  const updateSuccessData = [
    { date: 'Jan 14', success: 45, failed: 2 },
    { date: 'Jan 15', success: 52, failed: 3 },
    { date: 'Jan 16', success: 48, failed: 1 },
    { date: 'Jan 17', success: 61, failed: 4 },
    { date: 'Jan 18', success: 55, failed: 2 },
    { date: 'Jan 19', success: 58, failed: 1 },
    { date: 'Jan 20', success: 67, failed: 3 },
  ];

  const robotActivityData = [
    { hour: '00:00', active: 120 },
    { hour: '04:00', active: 85 },
    { hour: '08:00', active: 450 },
    { hour: '12:00', active: 680 },
    { hour: '16:00', active: 890 },
    { hour: '20:00', active: 540 },
    { hour: '23:00', active: 220 },
  ];

  const modelDistribution = [
    { model: 'WB-500', count: 487 },
    { model: 'DB-200', count: 324 },
    { model: 'CB-100', count: 198 },
    { model: 'SB-300', count: 156 },
    { model: 'IB-400', count: 82 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Analytics</h2>
        <p className="text-gray-600 mt-1">Monitor fleet performance and update statistics</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Update Success Rate (Last 7 Days)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={updateSuccessData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="success" stroke="#10b981" strokeWidth={2} name="Successful" />
            <Line type="monotone" dataKey="failed" stroke="#ef4444" strokeWidth={2} name="Failed" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Robot Activity (24h)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={robotActivityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="active" stroke="#3b82f6" strokeWidth={2} name="Active Robots" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Fleet Distribution by Model</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={modelDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="model" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" name="Robot Count" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600">Average Update Duration</p>
          <p className="text-3xl font-semibold text-gray-900 mt-2">12.5 min</p>
          <p className="text-sm text-green-600 mt-2">-2.3 min from last week</p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600">Success Rate (30d)</p>
          <p className="text-3xl font-semibold text-gray-900 mt-2">96.8%</p>
          <p className="text-sm text-green-600 mt-2">+1.2% from last month</p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-sm text-gray-600">Average Uptime</p>
          <p className="text-3xl font-semibold text-gray-900 mt-2">99.2%</p>
          <p className="text-sm text-green-600 mt-2">+0.3% from last month</p>
        </div>
      </div>
    </div>
  );
}
