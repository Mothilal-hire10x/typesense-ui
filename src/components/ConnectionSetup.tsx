import React, { useState } from "react";
import { Database, Sun, Moon } from "lucide-react";
import type { TypesenseConfig } from "../types";
import { useApp } from "../context/AppContext";

export function ConnectionSetup() {
  const { setConfig, theme, toggleTheme } = useApp();
  const [formData, setFormData] = useState<TypesenseConfig>({
    apiKey: "",
    host: "localhost",
    port: 8108,
    protocol: "http",
    connectionTimeoutSeconds: 5,
  });
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsConnecting(true);
    setError(null);

    try {
      await setConfig(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to connect");
    } finally {
      setIsConnecting(false);
    }
  };

  const handleChange = (field: keyof TypesenseConfig, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-pink-400/15 dark:bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 p-3 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 z-10 border border-gray-200/50 dark:border-slate-700/50"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5 text-gray-700 transition-transform duration-300" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300 animate-spin-slow" />
        )}
      </button>

      <div className="w-full max-w-md relative z-10 animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white mb-4 shadow-2xl animate-float">
            <Database className="w-10 h-10 drop-shadow-lg" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 tracking-tight">
            Typesense UI
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base font-medium">
            Connect to your Typesense server to get started
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card p-8 space-y-5">
          {error && (
            <div className="p-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/30 border border-red-300 dark:border-red-800 rounded-xl text-red-800 dark:text-red-200 text-sm animate-fade-in shadow-lg">
              <div className="flex items-start space-x-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">{error}</span>
              </div>
            </div>
          )}

          <div>
            <label className="label">API Key *</label>
            <input
              type="password"
              value={formData.apiKey}
              onChange={(e) => handleChange("apiKey", e.target.value)}
              className="input"
              required
              placeholder="Enter your API key"
            />
          </div>

          <div>
            <label className="label">Host / URL *</label>
            <input
              type="text"
              value={formData.host}
              onChange={(e) => handleChange("host", e.target.value)}
              className="input"
              required
              placeholder="e.g., localhost or example.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">Port *</label>
              <input
                type="number"
                value={formData.port}
                onChange={(e) => handleChange("port", parseInt(e.target.value))}
                className="input"
                required
                min="1"
                max="65535"
              />
            </div>

            <div>
              <label className="label">Protocol *</label>
              <select
                value={formData.protocol}
                onChange={(e) =>
                  handleChange("protocol", e.target.value as "http" | "https")
                }
                className="input"
                required
              >
                <option value="http">HTTP</option>
                <option value="https">HTTPS</option>
              </select>
            </div>
          </div>

          <div>
            <label className="label">Connection Timeout (seconds) *</label>
            <input
              type="number"
              value={formData.connectionTimeoutSeconds}
              onChange={(e) =>
                handleChange(
                  "connectionTimeoutSeconds",
                  parseInt(e.target.value)
                )
              }
              className="input"
              required
              min="1"
              max="60"
            />
          </div>

          <button
            type="submit"
            disabled={isConnecting}
            className="btn-primary w-full"
          >
            {isConnecting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Connecting...
              </span>
            ) : (
              "Connect to Typesense"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 font-medium">
          Your connection details are stored securely in your browser
        </p>
      </div>
    </div>
  );
}
