'use client';

import { AppShell } from '../components/AppShell';
import { AgentChat } from '../components/AgentChat';
import { Button } from '../components/Button';
import { useTheme } from '../components/ThemeProvider';
import { Palette, Check } from 'lucide-react';

export default function ThemePreviewPage() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { 
      id: 'default', 
      name: 'Finance Pro', 
      description: 'Professional finance theme with dark navy and gold accents',
      colors: { bg: '#0a1628', accent: '#ffd700', primary: '#1e40af' }
    },
    { 
      id: 'celo', 
      name: 'Celo', 
      description: 'Bold black background with bright yellow accents',
      colors: { bg: '#000000', accent: '#fbcc5c', primary: '#fbcc5c' }
    },
    { 
      id: 'solana', 
      name: 'Solana', 
      description: 'Dark purple with vibrant purple and green accents',
      colors: { bg: '#1a0d2e', accent: '#9945ff', primary: '#14f195' }
    },
    { 
      id: 'base', 
      name: 'Base', 
      description: 'Clean dark blue with Base brand colors',
      colors: { bg: '#0f172a', accent: '#0052ff', primary: '#0052ff' }
    },
    { 
      id: 'coinbase', 
      name: 'Coinbase', 
      description: 'Professional dark navy with Coinbase blue',
      colors: { bg: '#0c1426', accent: '#0052ff', primary: '#0052ff' }
    },
  ] as const;

  return (
    <AppShell>
      <div className="py-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-surface/50 border border-border rounded-full px-4 py-2 text-sm text-muted mb-4">
            <Palette className="w-4 h-4" />
            <span>Theme Customization</span>
          </div>
          
          <h1 className="text-3xl font-bold text-fg mb-4">Theme Preview</h1>
          <p className="text-muted max-w-2xl mx-auto">
            Explore different visual themes for GmChat. Each theme is carefully crafted to match 
            different blockchain ecosystems and design preferences.
          </p>
        </div>

        {/* Current Theme Display */}
        <div className="glass-card p-6 rounded-2xl">
          <h2 className="text-xl font-semibold text-fg mb-4">Current Theme: {themes.find(t => t.id === theme)?.name}</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl mx-auto mb-2" style={{ backgroundColor: 'var(--color-bg)' }} />
              <p className="text-sm text-muted">Background</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl mx-auto mb-2" style={{ backgroundColor: 'var(--color-accent)' }} />
              <p className="text-sm text-muted">Accent</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl mx-auto mb-2" style={{ backgroundColor: 'var(--color-primary)' }} />
              <p className="text-sm text-muted">Primary</p>
            </div>
          </div>
          
          {/* Sample Components */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
            
            <div className="glass-card p-4 rounded-xl">
              <h3 className="font-semibold text-fg mb-2">Sample Card</h3>
              <p className="text-muted">This is how cards look in the current theme.</p>
            </div>
          </div>
        </div>

        {/* Theme Selector */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-fg">Available Themes</h2>
          <div className="grid gap-4">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id as any)}
                className={`glass-card p-6 rounded-2xl text-left hover:bg-surface/60 transition-all duration-200 ${
                  theme === t.id ? 'ring-2 ring-accent' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-lg font-semibold text-fg">{t.name}</h3>
                      {theme === t.id && (
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-bg" />
                        </div>
                      )}
                    </div>
                    <p className="text-muted mb-4">{t.description}</p>
                    
                    {/* Color Preview */}
                    <div className="flex space-x-2">
                      <div 
                        className="w-8 h-8 rounded-lg border border-border/50" 
                        style={{ backgroundColor: t.colors.bg }}
                        title="Background"
                      />
                      <div 
                        className="w-8 h-8 rounded-lg border border-border/50" 
                        style={{ backgroundColor: t.colors.accent }}
                        title="Accent"
                      />
                      <div 
                        className="w-8 h-8 rounded-lg border border-border/50" 
                        style={{ backgroundColor: t.colors.primary }}
                        title="Primary"
                      />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-fg">Interactive Demo</h2>
          <p className="text-muted">See how the chat interface looks with the current theme:</p>
          <AgentChat variant="compact" />
        </div>

        {/* Implementation Note */}
        <div className="glass-card p-6 rounded-2xl bg-accent/5 border border-accent/20">
          <h3 className="text-lg font-semibold text-fg mb-2">Implementation</h3>
          <p className="text-muted">
            Themes are implemented using CSS variables and can be switched dynamically. 
            The theme preference is saved to localStorage and can also be set via URL parameters 
            (e.g., ?theme=celo).
          </p>
        </div>
      </div>
    </AppShell>
  );
}
