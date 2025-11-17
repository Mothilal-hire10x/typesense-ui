import { Database, LogOut, Sun, Moon, RefreshCw } from "lucide-react";
import { useApp } from "../context/AppContext";

export function Header() {
  const {
    config,
    disconnect,
    theme,
    toggleTheme,
    refreshCollections,
    isLoading,
  } = useApp();

  return (
    <header className="sticky top-0 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-slate-700/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg transform transition-transform duration-300 hover:scale-110">
              <Database className="w-6 h-6 drop-shadow-md" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                Typesense UI
              </h1>
              {config && (
                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono font-medium">
                  {config.protocol}://{config.host}:{config.port}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={refreshCollections}
              disabled={isLoading}
              className="p-2.5 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-slate-800 dark:hover:to-slate-700 transition-all duration-300 disabled:opacity-50 border border-transparent hover:border-blue-200 dark:hover:border-slate-600"
              title="Refresh collections"
            >
              <RefreshCw
                className={`w-5 h-5 text-gray-700 dark:text-gray-200 transition-transform duration-300 ${
                  isLoading ? "animate-spin" : ""
                }`}
              />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-slate-800 dark:hover:to-slate-700 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-slate-600"
              title="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-700 transition-transform duration-300 hover:rotate-12" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300 hover:rotate-180" />
              )}
            </button>

            <button
              onClick={disconnect}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/30 hover:from-red-100 hover:to-red-200 dark:hover:from-red-900/50 dark:hover:to-red-800/40 text-red-700 dark:text-red-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-red-200/50 dark:border-red-800/50"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-tight">
                Disconnect
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
