'use client';

import { Message } from '@/lib/types';
import { formatTimestamp, getIntentColor } from '@/lib/utils';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
  variant?: 'user' | 'bot';
}

export function ChatMessage({ message, variant }: ChatMessageProps) {
  const isBot = message.isBot || variant === 'bot';
  
  return (
    <div className={`flex items-start space-x-3 animate-slide-up ${isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
      {/* Avatar */}
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isBot 
          ? 'bg-gradient-to-br from-accent to-primary' 
          : 'bg-surface border border-border'
      }`}>
        {isBot ? (
          <Bot className="w-4 h-4 text-bg" />
        ) : (
          <User className="w-4 h-4 text-fg" />
        )}
      </div>

      {/* Message Content */}
      <div className={`flex-1 max-w-xs ${isBot ? '' : 'flex flex-col items-end'}`}>
        <div className={`${isBot ? 'chat-bubble-bot' : 'chat-bubble-user'} relative`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {message.content}
          </p>
          
          {/* Intent Badge for Bot Messages */}
          {isBot && message.intent !== 'unknown' && (
            <div className={`inline-flex items-center mt-2 px-2 py-1 rounded-full text-xs font-medium bg-bg/20 ${getIntentColor(message.intent)}`}>
              {message.intent}
            </div>
          )}
        </div>
        
        {/* Timestamp */}
        <div className={`text-xs text-muted mt-1 ${isBot ? 'text-left' : 'text-right'}`}>
          {formatTimestamp(message.timestamp)}
        </div>
      </div>
    </div>
  );
}
