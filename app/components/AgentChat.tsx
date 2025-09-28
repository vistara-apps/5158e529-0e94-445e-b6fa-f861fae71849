'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { Message, MessageIntent } from '@/lib/types';
import { generateId, classifyIntent, generateBotResponse } from '@/lib/utils';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';

interface AgentChatProps {
  variant?: 'withInput' | 'compact';
}

export function AgentChat({ variant = 'withInput' }: AgentChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Initial greeting
  useEffect(() => {
    const initialMessage: Message = {
      messageId: generateId(),
      conversationId: 'initial',
      senderId: 'bot',
      content: "Gm! 👋 Welcome to GmChat! I'm your AI-powered onboarding assistant. I'm here to help you navigate our community and get you started on the right path.\n\nHow can I assist you today?",
      intent: 'greeting',
      timestamp: new Date(),
      isBot: true,
    };
    setMessages([initialMessage]);
  }, []);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      messageId: generateId(),
      conversationId: 'current',
      senderId: 'user',
      content: inputValue.trim(),
      intent: 'unknown',
      timestamp: new Date(),
      isBot: false,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Classify intent and generate response
    const classification = classifyIntent(userMessage.content);
    const botResponse = generateBotResponse(classification.intent, userMessage.content);

    // Simulate typing delay
    setTimeout(() => {
      const botMessage: Message = {
        messageId: generateId(),
        conversationId: 'current',
        senderId: 'bot',
        content: botResponse,
        intent: classification.intent,
        timestamp: new Date(),
        isBot: true,
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { label: 'Get Started', message: 'I need help getting started' },
    { label: 'Ask Question', message: 'I have a question about the platform' },
    { label: 'Technical Help', message: 'I need technical assistance' },
    { label: 'Community Info', message: 'Tell me about the community' },
  ];

  return (
    <div className={`flex flex-col ${variant === 'compact' ? 'h-96' : 'h-[600px]'} glass-card rounded-2xl overflow-hidden`}>
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/50 bg-surface/50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-bg" />
          </div>
          <div>
            <h3 className="font-semibold text-fg">AI Assistant</h3>
            <p className="text-xs text-muted">Online • Ready to help</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-muted">Active</span>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.messageId} message={message} />
        ))}
        
        {isTyping && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      {messages.length <= 1 && (
        <div className="px-4 pb-2">
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action) => (
              <button
                key={action.label}
                onClick={() => {
                  setInputValue(action.message);
                  inputRef.current?.focus();
                }}
                className="text-xs px-3 py-1.5 bg-surface border border-border rounded-full hover:bg-surface/80 transition-colors text-muted hover:text-fg"
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      {variant === 'withInput' && (
        <div className="p-4 border-t border-border/50 bg-surface/30">
          <div className="flex items-center space-x-3">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-bg border border-border rounded-xl px-4 py-3 text-fg placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center hover:from-accent/90 hover:to-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5 text-bg" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
