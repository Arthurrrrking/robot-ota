import { Search, Filter, MoreVertical, Circle } from 'lucide-react';
import { useState } from 'react';

export function RobotList() {
  const [searchTerm, setSearchTerm] = useState('');

  const robots = [
    { id: 'RBT-1247', name: 'Warehouse Bot Alpha', model: 'WB-500', version: 'v2.4.1', status: 'online', lastSeen: '2 min ago', location: 'Warehouse A' },
    { id: 'RBT-1246', name: 'Warehouse Bot Beta', model: 'WB-500', version: 'v2.4.1', status: 'online', lastSeen: '5 min ago', location: 'Warehouse A' },
    { id: 'RBT-1245', name: 'Delivery Bot 01', model: 'DB-200', version: 'v2.4.0', status: 'online', lastSeen: '1 min ago', location: 'Station 5' },
    { id: 'RBT-1244', name: 'Cleaning Bot Charlie', model: 'CB-100', version: 'v2.3.9', status: 'updating', lastSeen: '10 min ago', location: 'Floor 2' },
    { id: 'RBT-1243', name: 'Security Bot 03', model: 'SB-300', version: 'v2.4.1', status: 'online', lastSeen: '3 min ago', location: 'Entrance' },
    { id: 'RBT-1242', name: 'Warehouse Bot Gamma', model: 'WB-500', version: 'v2.4.1', status: 'offline', lastSeen: '2 hours ago', location: 'Warehouse B' },
    { id: 'RBT-1241', name: 'Delivery Bot 02', model: 'DB-200', version: 'v2.4.1', status: 'online', lastSeen: '7 min ago', location: 'Station 3' },
    { id: 'RBT-1240', name: 'Inspection Bot Delta', model: 'IB-400', version: 'v2.3.8', status: 'error', lastSeen: '1 hour ago', location: 'Bay 12' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'text-green-600';
      case 'offline':
        return 'text-gray-400';
      case 'updating':
        return 'text-blue-600';
      case 'error':
        return 'text-red-600';
      default:
        return 'text-gray-400';
    }
  };

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    robot.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    robot.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Robot List</h2>
        <p className="text-gray-600 mt-1">Manage and monitor all robots in your fleet</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search robots..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter size={20} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Robot ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Version
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Seen
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRobots.map((robot) => (
                <tr key={robot.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {robot.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {robot.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {robot.model}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {robot.version}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Circle size={8} fill="currentColor" className={getStatusColor(robot.status)} />
                      <span className="text-sm capitalize">{robot.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {robot.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {robot.lastSeen}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
