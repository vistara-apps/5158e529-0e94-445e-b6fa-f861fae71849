export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto animate-pulse-glow">
          <div className="w-8 h-8 border-2 border-bg border-t-transparent rounded-full animate-spin" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-fg">Loading GmChat</h2>
          <p className="text-muted">Preparing your AI assistant...</p>
        </div>
      </div>
    </div>
  );
}
