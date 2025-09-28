'use client';

export function TypingIndicator() {
  return (
    <div className="flex items-start space-x-3 animate-fade-in">
      {/* Bot Avatar */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-bg/20" />
      </div>

      {/* Typing Animation */}
      <div className="chat-bubble-bot">
        <div className="typing-indicator">
          <div className="typing-dot" style={{ '--delay': '0ms' } as any} />
          <div className="typing-dot" style={{ '--delay': '150ms' } as any} />
          <div className="typing-dot" style={{ '--delay': '300ms' } as any} />
        </div>
      </div>
    </div>
  );
}
