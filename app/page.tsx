'use client';

import { useEffect } from 'react';
import { AppShell } from './components/AppShell';
import { AgentChat } from './components/AgentChat';
import { Button } from './components/Button';
import { Bot, Zap, Users, MessageCircle, ArrowRight, Star } from 'lucide-react';

export default function HomePage() {
  useEffect(() => {
    // Set frame ready for MiniKit integration
    if (typeof window !== 'undefined' && (window as any).MiniKit) {
      (window as any).MiniKit.setFrameReady();
    }
  }, []);

  const features = [
    {
      icon: MessageCircle,
      title: 'Automated Welcome Series',
      description: 'Instantly greet users with personalized messages and guide them through onboarding.',
      color: 'text-green-400'
    },
    {
      icon: Zap,
      title: 'Smart Intent Classifier',
      description: 'AI-powered analysis to understand and categorize user needs automatically.',
      color: 'text-yellow-400'
    },
    {
      icon: Users,
      title: 'Contextual Help Prompts',
      description: 'Proactive assistance based on conversation context and user intent.',
      color: 'text-blue-400'
    },
    {
      icon: ArrowRight,
      title: 'Actionable Responses',
      description: 'Direct links, commands, and solutions tailored to each user\'s specific needs.',
      color: 'text-purple-400'
    }
  ];

  const stats = [
    { label: 'Response Time', value: '<2s', icon: Zap },
    { label: 'Intent Accuracy', value: '94%', icon: Star },
    { label: 'User Satisfaction', value: '4.8/5', icon: Users },
  ];

  return (
    <AppShell>
      {/* Hero Section */}
      <section className="py-12 text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-surface/50 border border-border rounded-full px-4 py-2 text-sm text-muted">
            <Bot className="w-4 h-4" />
            <span>AI-Powered Onboarding</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome Every User
            <br />
            <span className="text-gradient">Instantly & Intelligently</span>
          </h1>
          
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            GmChat automatically greets users, understands their needs, and provides contextual help - 
            making every first impression count in your Farcaster community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto">
              Try GmChat Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-4 text-center rounded-xl">
              <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-fg">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Chat Demo */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-fg mb-4">Experience GmChat</h2>
          <p className="text-muted">Try our AI assistant and see how it handles different types of user interactions.</p>
        </div>
        
        <AgentChat variant="withInput" />
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-fg mb-4">Powerful Features</h2>
          <p className="text-muted">Everything you need to create exceptional user onboarding experiences.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl hover:bg-surface/60 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-fg mb-2">{feature.title}</h3>
                  <p className="text-muted leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-fg mb-4">Simple Pricing</h2>
          <p className="text-muted">Pay only for what you use, with transparent micro-transaction pricing.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="glass-card p-8 rounded-2xl border-2 border-border">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-fg mb-2">Free Tier</h3>
              <div className="text-4xl font-bold text-accent mb-2">$0</div>
              <p className="text-muted">Perfect for getting started</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-fg">
                <div className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                </div>
                Basic greeting responses
              </li>
              <li className="flex items-center text-fg">
                <div className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                </div>
                Intent classification
              </li>
              <li className="flex items-center text-fg">
                <div className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                </div>
                Up to 100 interactions/month
              </li>
            </ul>
            
            <Button variant="outline" className="w-full">
              Get Started Free
            </Button>
          </div>

          {/* Pro Tier */}
          <div className="glass-card p-8 rounded-2xl border-2 border-accent relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-bg px-3 py-1 text-sm font-medium">
              Popular
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-fg mb-2">Pay-as-you-go</h3>
              <div className="text-4xl font-bold text-accent mb-2">$0.01</div>
              <p className="text-muted">per advanced interaction</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-fg">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                Everything in Free
              </li>
              <li className="flex items-center text-fg">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                Custom onboarding flows
              </li>
              <li className="flex items-center text-fg">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                Advanced analytics
              </li>
              <li className="flex items-center text-fg">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                Priority support
              </li>
            </ul>
            
            <Button className="w-full">
              Start Building
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="glass-card p-12 rounded-3xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
          <h2 className="text-3xl font-bold text-fg mb-4">
            Ready to Transform Your Community?
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Join hundreds of Farcaster communities using GmChat to create amazing first impressions 
            and boost user engagement from day one.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Deploy GmChat
              <Bot className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
