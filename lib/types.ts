export interface User {
  userId: string;
  farcasterHandle: string;
  timestamp: Date;
}

export interface Conversation {
  conversationId: string;
  userId: string;
  timestamp: Date;
}

export interface Message {
  messageId: string;
  conversationId: string;
  senderId: string;
  content: string;
  intent: MessageIntent;
  timestamp: Date;
  isBot?: boolean;
}

export type MessageIntent = 
  | 'greeting'
  | 'help'
  | 'question'
  | 'task'
  | 'feedback'
  | 'unknown';

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  currentIntent?: MessageIntent;
}

export interface IntentClassification {
  intent: MessageIntent;
  confidence: number;
  suggestedActions: string[];
}
