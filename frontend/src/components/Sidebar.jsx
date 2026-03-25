import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  FileSearch,
  FileText,
  Target,
  MessageSquare,
  Map,
  Building2,
  Briefcase,
  User,
  LogOut,
  Sparkles
} from 'lucide-react';

const navItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', color: 'from-blue-500 to-cyan-500' },
  { path: '/job-analyzer', icon: FileSearch, label: 'Job Analyzer', color: 'from-violet-500 to-purple-500' },
  { path: '/resume-score', icon: FileText, label: 'Resume Score', color: 'from-green-500 to-emerald-500' },
  { path: '/skill-gap', icon: Target, label: 'Skill Gap', color: 'from-purple-500 to-pink-500' },
  { path: '/interview-prep', icon: MessageSquare, label: 'Interview Prep', color: 'from-orange-500 to-red-500' },
  { path: '/roadmap', icon: Map, label: 'Learning Roadmap', color: 'from-pink-500 to-rose-500' },
  { path: '/company-news', icon: Building2, label: 'Company News', color: 'from-indigo-500 to-blue-500' },
  { path: '/job-tracker', icon: Briefcase, label: 'Job Tracker', color: 'from-teal-500 to-cyan-500' },
];

export default function Sidebar() {
  const { user, logout } = useAuth();

  return (
    <aside className="hidden lg:flex lg:flex-col w-72 bg-white border-r border-gray-100 min-h-[calc(100vh-4rem)]">
      {/* User info */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg font-bold">
            {user?.name?.charAt(0)?.toUpperCase() || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 truncate">{user?.name || 'User'}</p>
            <p className="text-sm text-gray-500 truncate">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {navItems.map((item, index) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 stagger-item ${
                isActive
                  ? 'bg-gradient-to-r from-primary-50 to-purple-50 text-primary-700 font-medium shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {({ isActive }) => (
              <>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? `bg-gradient-to-br ${item.color} shadow-md`
                    : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <item.icon size={18} className={isActive ? 'text-white' : 'text-gray-500'} />
                </div>
                <span className="flex-1">{item.label}</span>
                {isActive && (
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Profile & Logout */}
      <div className="p-4 border-t border-gray-100 space-y-2">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-primary-50 to-purple-50 text-primary-700 font-medium'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`
          }
        >
          <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
            <User size={18} className="text-gray-500" />
          </div>
          <span>Profile Settings</span>
        </NavLink>

        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
        >
          <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-red-100">
            <LogOut size={18} />
          </div>
          <span>Logout</span>
        </button>
      </div>

      {/* Pro badge */}
      <div className="p-4">
        <div className="bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={18} />
            <span className="font-semibold">CareerBoost AI</span>
          </div>
          <p className="text-sm text-white/80">AI-powered career tools at your fingertips</p>
        </div>
      </div>
    </aside>
  );
}
