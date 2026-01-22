import { Bot, Activity, Download, AlertCircle } from 'lucide-react';
import { StatCard } from './StatCard';
import { RecentActivity } from './RecentActivity';
import { UpdateStatusChart } from './UpdateStatusChart';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
        <p className="text-gray-600 mt-1">Overview of your robot fleet and OTA updates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Robots"
          value="1,247"
          change="+12%"
          trend="up"
          icon={Bot}
          color="blue"
        />
        <StatCard
          title="Active Robots"
          value="1,198"
          change="+5%"
          trend="up"
          icon={Activity}
          color="green"
        />
        <StatCard
          title="Pending Updates"
          value="89"
          change="-23%"
          trend="down"
          icon={Download}
          color="yellow"
        />
        <StatCard
          title="Failed Updates"
          value="14"
          change="+2"
          trend="up"
          icon={AlertCircle}
          color="red"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpdateStatusChart />
        <RecentActivity />
      </div>
    </div>
  );
}
