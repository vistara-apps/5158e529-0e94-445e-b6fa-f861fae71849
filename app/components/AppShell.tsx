'use client';

import { ReactNode } from 'react';
import { Bot, Settings2, Palette } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface AppShellProps {
  children: ReactNode;
  variant?: 'default';
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'default', name: 'Finance Pro', color: '#ffd700' },
    { id: 'celo', name: 'Celo', color: '#fbcc5c' },
    { id: 'solana', name: 'Solana', color: '#9945ff' },
    { id: 'base', name: 'Base', color: '#0052ff' },
    { id: 'coinbase', name: 'Coinbase', color: '#0052ff' },
  ] as const;

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="glass-card border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-bg" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">GmChat</h1>
                <p className="text-sm text-muted">AI-Powered Welcome Bot</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {/* Theme Selector */}
              <div className="relative group">
                <button className="p-2 rounded-lg bg-surface border border-border hover:bg-surface/80 transition-colors">
                  <Palette className="w-5 h-5 text-fg" />
                </button>
                <div className="absolute right-0 top-12 bg-surface border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2 space-y-1 min-w-32">
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setTheme(t.id as any)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm hover:bg-border/50 transition-colors flex items-center space-x-2 ${
                          theme === t.id ? 'bg-border/50' : ''
                        }`}
                      >
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: t.color }}
                        />
                        <span>{t.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <button className="p-2 rounded-lg bg-surface border border-border hover:bg-surface/80 transition-colors">
                <Settings2 className="w-5 h-5 text-fg" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-xl mx-auto px-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-border/50 bg-surface/30">
        <div className="max-w-xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted">
            <p>Powered by Base & OnchainKit</p>
            <p className="mt-1">Building the future of Web3 onboarding</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
