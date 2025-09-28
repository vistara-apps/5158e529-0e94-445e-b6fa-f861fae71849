'use client';

import { useEffect } from 'react';
import { AppShell } from './components/AppShell';
import { Button } from './components/Button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <AppShell>
      <div className="py-16 text-center">
        <div className="glass-card p-12 rounded-3xl max-w-md mx-auto">
          <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
          
          <h2 className="text-2xl font-bold text-fg mb-4">
            Something went wrong!
          </h2>
          
          <p className="text-muted mb-8">
            We encountered an unexpected error. Don't worry, our AI assistant is still learning!
          </p>
          
          <div className="space-y-3">
            <Button 
              onClick={reset}
              className="w-full"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="w-full"
            >
              Go Home
            </Button>
          </div>
          
          {error.digest && (
            <p className="text-xs text-muted mt-6">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </div>
    </AppShell>
  );
}
