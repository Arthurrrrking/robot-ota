import { Upload, Package, Calendar, Users } from 'lucide-react';
import { useState } from 'react';

export function OTAUpdates() {
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null);

  const updates = [
    {
      version: 'v2.4.1',
      releaseDate: '2026-01-20',
      status: 'stable',
      deployed: 1098,
      total: 1247,
      features: ['Performance improvements', 'Bug fixes for navigation', 'Enhanced battery management'],
      size: '45.2 MB',
    },
    {
      version: 'v2.4.0',
      releaseDate: '2026-01-15',
      status: 'stable',
      deployed: 1180,
      total: 1247,
      features: ['New obstacle detection algorithm', 'Improved path planning', 'UI enhancements'],
      size: '48.7 MB',
    },
    {
      version: 'v2.3.9',
      releaseDate: '2026-01-10',
      status: 'deprecated',
      deployed: 35,
      total: 1247,
      features: ['Security patches', 'Minor bug fixes'],
      size: '42.1 MB',
    },
    {
      version: 'v2.5.0-beta',
      releaseDate: '2026-01-21',
      status: 'beta',
      deployed: 12,
      total: 1247,
      features: ['AI-powered decision making', 'Multi-robot coordination', 'Advanced telemetry'],
      size: '52.3 MB',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable':
        return 'bg-green-100 text-green-700';
      case 'beta':
        return 'bg-blue-100 text-blue-700';
      case 'deprecated':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">OTA Updates</h2>
          <p className="text-gray-600 mt-1">Manage firmware versions and deployment</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Upload size={20} />
          <span>Upload New Version</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {updates.map((update) => (
          <div
            key={update.version}
            className={`bg-white rounded-lg border-2 p-6 cursor-pointer transition-all ${
              selectedVersion === update.version
                ? 'border-blue-500 shadow-md'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedVersion(update.version)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Package className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{update.version}</h3>
                  <p className="text-sm text-gray-500">{update.size}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(update.status)}`}>
                {update.status}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar size={16} />
                <span>Released: {update.releaseDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users size={16} />
                <span>
                  Deployed: {update.deployed} / {update.total} robots (
                  {Math.round((update.deployed / update.total) * 100)}%)
                </span>
              </div>
            </div>

            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${(update.deployed / update.total) * 100}%` }}
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Features:</p>
              <ul className="space-y-1">
                {update.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                Deploy to Fleet
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
