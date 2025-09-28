import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MessageIntent, IntentClassification } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function formatTimestamp(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

export function classifyIntent(message: string): IntentClassification {
  const lowerMessage = message.toLowerCase().trim();
  
  // Greeting patterns
  if (/^(gm|good morning|hello|hi|hey|greetings)/.test(lowerMessage)) {
    return {
      intent: 'greeting',
      confidence: 0.9,
      suggestedActions: ['Welcome message', 'Ask how to help']
    };
  }
  
  // Help patterns
  if (/\b(help|assist|support|guide|how to|tutorial)\b/.test(lowerMessage)) {
    return {
      intent: 'help',
      confidence: 0.8,
      suggestedActions: ['Show help menu', 'Connect to support']
    };
  }
  
  // Question patterns
  if (/\?|what|how|when|where|why|can you|is it|do you/.test(lowerMessage)) {
    return {
      intent: 'question',
      confidence: 0.7,
      suggestedActions: ['Provide answer', 'Ask for clarification']
    };
  }
  
  // Task patterns
  if (/\b(create|make|build|setup|configure|install|deploy)\b/.test(lowerMessage)) {
    return {
      intent: 'task',
      confidence: 0.8,
      suggestedActions: ['Show task guide', 'Start workflow']
    };
  }
  
  // Feedback patterns
  if (/\b(feedback|review|rate|opinion|suggest|improve)\b/.test(lowerMessage)) {
    return {
      intent: 'feedback',
      confidence: 0.7,
      suggestedActions: ['Collect feedback', 'Thank user']
    };
  }
  
  return {
    intent: 'unknown',
    confidence: 0.3,
    suggestedActions: ['Ask for clarification', 'Show menu']
  };
}

export function generateBotResponse(intent: MessageIntent, userMessage: string): string {
  switch (intent) {
    case 'greeting':
      return "Gm! 👋 Welcome to the community! I'm here to help you get started. What brings you here today?";
    
    case 'help':
      return "I'd be happy to help! Here are some things I can assist you with:\n\n• Getting started guides\n• Community resources\n• Technical support\n• Connecting with the right people\n\nWhat specific area would you like help with?";
    
    case 'question':
      return "Great question! Let me help you find the answer. Could you provide a bit more context about what you're trying to accomplish?";
    
    case 'task':
      return "I can help you get that done! Let me break this down into steps for you. What's your current experience level with this type of task?";
    
    case 'feedback':
      return "Thank you for wanting to share feedback! Your input helps make our community better. What would you like to tell us about?";
    
    default:
      return "I'm here to help! Could you tell me more about what you're looking for? I can assist with:\n\n• Onboarding and getting started\n• Answering questions\n• Connecting you with resources\n• Technical support";
  }
}

export function getIntentColor(intent: MessageIntent): string {
  switch (intent) {
    case 'greeting':
      return 'text-green-400';
    case 'help':
      return 'text-blue-400';
    case 'question':
      return 'text-yellow-400';
    case 'task':
      return 'text-purple-400';
    case 'feedback':
      return 'text-pink-400';
    default:
      return 'text-gray-400';
  }
}
