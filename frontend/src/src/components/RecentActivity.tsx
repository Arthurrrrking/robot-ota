import { CheckCircle, XCircle, Clock, Download } from 'lucide-react';

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      robot: 'RBT-1247',
      action: 'Update completed',
      version: 'v2.4.1',
      time: '5 minutes ago',
      status: 'success',
    },
    {
      id: 2,
      robot: 'RBT-0983',
      action: 'Update failed',
      version: 'v2.4.1',
      time: '12 minutes ago',
      status: 'error',
    },
    {
      id: 3,
      robot: 'RBT-1156',
      action: 'Update in progress',
      version: 'v2.4.1',
      time: '18 minutes ago',
      status: 'pending',
    },
    {
      id: 4,
      robot: 'RBT-0745',
      action: 'Update started',
      version: 'v2.4.0',
      time: '25 minutes ago',
      status: 'downloading',
    },
    {
      id: 5,
      robot: 'RBT-1089',
      action: 'Update completed',
      version: 'v2.4.1',
      time: '32 minutes ago',
      status: 'success',
    },
  ];

  const getIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle size={20} className="text-green-600" />;
      case 'error':
        return <XCircle size={20} className="text-red-600" />;
      case 'pending':
        return <Clock size={20} className="text-yellow-600" />;
      case 'downloading':
        return <Download size={20} className="text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
            <div className="mt-0.5">{getIcon(activity.status)}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.robot}</p>
              <p className="text-sm text-gray-600">{activity.action}</p>
              <p className="text-xs text-gray-500 mt-1">
                {activity.version} • {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
