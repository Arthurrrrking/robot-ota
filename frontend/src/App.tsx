import { useState, useCallback, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { RobotList } from './components/RobotList';
import { OTAUpdates } from './components/OTAUpdates';
import { Analytics } from './components/Analytics';
import { Settings } from './components/Settings';
import { Menu, X } from 'lucide-react';

export type Page = 'dashboard' | 'robots' | 'updates' | 'analytics' | 'settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  const checkIfMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [checkIfMobile]);

  // Close mobile menu when page changes
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [currentPage]);

  // Handle menu toggle
  const handleMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(prev => !prev);
  };

  // Handle overlay click
  const handleOverlayClick = () => {
    setIsMobileMenuOpen(false);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'robots':
        return <RobotList />;
      case 'updates':
        return <OTAUpdates />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Mobile Header */}
      {isMobile && (
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-50">
          <h1 className="text-xl font-semibold text-gray-900">Robot OTA System</h1>
          <button
            onClick={handleMenuToggle}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {(isMobile ? isMobileMenuOpen : true) && (
          <div className={`
            ${isMobile 
              ? 'fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 shadow-lg' 
              : 'w-64 bg-white border-r border-gray-200'}
            transition-all duration-300 ease-in-out
          `}>
            <Sidebar 
              currentPage={currentPage} 
              onPageChange={setCurrentPage} 
            />
          </div>
        )}

        {/* Mobile Overlay */}
        {isMobile && isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={handleOverlayClick}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
