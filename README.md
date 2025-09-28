# GmChat - AI-Powered Welcome Bot

Your AI-powered welcome bot to onboard any user, instantly. Built for Farcaster communities on Base.

## Features

- **Automated Welcome Series**: Instantly greet users with personalized messages
- **Smart Intent Classifier**: AI-powered analysis to understand user needs
- **Contextual Help Prompts**: Proactive assistance based on conversation context
- **Actionable Responses**: Direct solutions tailored to each user's needs

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (via OnchainKit)
- **Styling**: Tailwind CSS with custom design system
- **AI**: Intent classification and response generation
- **Integration**: Farcaster MiniApp SDK

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   # Add your OnchainKit API key
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Theme Customization

GmChat supports multiple themes:

- **Finance Pro** (default): Professional dark navy with gold accents
- **Celo**: Bold black with bright yellow accents
- **Solana**: Dark purple with vibrant purple/green accents
- **Base**: Clean dark blue with Base brand colors
- **Coinbase**: Professional navy with Coinbase blue

Switch themes via URL parameter: `?theme=celo` or use the theme selector in the app.

## Architecture

### Core Components

- **AppShell**: Main layout with header, navigation, and theme switching
- **AgentChat**: Interactive chat interface with typing indicators
- **ChatMessage**: Individual message components with intent classification
- **Button**: Reusable button component with multiple variants

### Data Models

- **User**: Basic user information and Farcaster handle
- **Conversation**: Chat session management
- **Message**: Individual messages with intent classification

### Intent Classification

The AI system classifies user messages into categories:
- `greeting`: Welcome messages and initial interactions
- `help`: Requests for assistance or support
- `question`: Information requests and inquiries
- `task`: Action-oriented requests
- `feedback`: User feedback and suggestions

## Deployment

### Base MiniApp Deployment

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**:
   - Vercel (recommended for Next.js)
   - Netlify
   - Railway
   - Your own infrastructure

3. **Configure environment variables** in your deployment platform

4. **Set up Farcaster Frame integration** following Base MiniApp guidelines

## Business Model

- **Free Tier**: Basic greeting and intent classification (100 interactions/month)
- **Pay-as-you-go**: $0.01 per advanced interaction
- **Features**: Custom onboarding flows, advanced analytics, priority support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

- Documentation: [Base MiniApp Docs](https://docs.base.org/base-app/build-with-minikit/quickstart)
- Issues: GitHub Issues
- Community: Farcaster channels

---

Built with ❤️ for the Farcaster community on Base
