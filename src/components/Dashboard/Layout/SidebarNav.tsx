
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart2,
  Search,
  Settings,
  Users,
  MessageSquare,
  Clock,
  Folder
} from "lucide-react";

export function SidebarNav() {
  const [activeRole, setActiveRole] = useState<string>("admin");

  const roles = [
    { id: "admin", label: "Admin" },
    { id: "buyer", label: "Buyer" },
    { id: "seller", label: "Seller" },
    { id: "odr", label: "ODR Provider" }
  ];

  const navItems = [
    { icon: BarChart2, label: "Dashboard", link: "/" },
    { icon: MessageSquare, label: "Issues", link: "/" },
    { icon: Users, label: "Users", link: "/" },
    { icon: Clock, label: "Timeline", link: "/" },
    { icon: Folder, label: "Reports", link: "/" },
    { icon: Settings, label: "Settings", link: "/" }
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-ondc-blue-light">
        <h2 className="text-xl font-bold flex items-center justify-center py-2">
          ONDC IGM System
        </h2>
      </div>

      <div className="p-4 border-b border-ondc-blue-light">
        <p className="text-sm text-gray-300 mb-2">Switch Role</p>
        <div className="flex flex-wrap gap-2">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`
                px-3 py-1 text-xs rounded-full
                ${
                  activeRole === role.id
                    ? "bg-ondc-accent text-white"
                    : "bg-ondc-blue-light text-gray-300 hover:bg-ondc-blue-light/80"
                }
              `}
            >
              {role.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-2">
        <div className="px-4 py-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-ondc-blue-light rounded-md py-2 pl-10 pr-4 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-ondc-accent"
            />
          </div>
        </div>
        <nav className="mt-2">
          <ul className="space-y-1 px-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className={`
                    flex items-center px-3 py-2 rounded-md text-sm group hover:bg-ondc-blue-light
                    ${index === 0 ? "bg-ondc-blue-light text-white" : "text-gray-300"}
                  `}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-ondc-blue-light">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-ondc-accent flex items-center justify-center text-white font-medium">
            AD
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-gray-400">admin@ondc.org</p>
          </div>
        </div>
      </div>
    </div>
  );
}
