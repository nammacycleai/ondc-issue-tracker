
import React, { useState } from "react";
import { SidebarNav } from "./SidebarNav";
import { MobileHeader } from "./MobileHeader";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {isMobile && <MobileHeader onMenuToggle={toggleSidebar} />}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`
            bg-ondc-blue text-white
            ${isMobile ? 'fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out w-64' : 'w-64'}
            ${isMobile && !isSidebarOpen ? '-translate-x-full' : ''}
          `}
        >
          <SidebarNav />
        </div>

        {/* Mobile sidebar overlay */}
        {isMobile && isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Main content */}
        <main
          className={`
            flex-1 overflow-y-auto
            ${isMobile ? 'w-full' : isSidebarOpen ? 'ml-0' : ''}
            transition-all duration-300 ease-in-out
          `}
        >
          <div className="container px-4 sm:px-6 mx-auto py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
