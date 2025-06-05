"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Rocket, Users, ArrowRight, Sparkles, Globe, Brain } from 'lucide-react';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Development",
      description: "Leverage cutting-edge AI to accelerate development cycles and deliver superior solutions"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Delivery",
      description: "From concept to deployment in record time without compromising on quality"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Elite Developer Team",
      description: "Handpicked experts who combine technical excellence with innovative thinking"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Micro-SaaS Specialists",
      description: "Focused solutions that solve specific problems with maximum efficiency"
    }
  ];

  const projects = [
    { name: "InvoiceGen Pro", type: "Financial Web App", status: "Live" },
    { name: "NapTime Pro", type: "Baby Nap Tracking Web App", status: "In Development" },
    { name: "BLW DietGen Lite", type: "Baby feeding toolkit", status: "In Development" },
    { name: "PetHolidays", type: "Small WebApp to find pet-friendly holidays", status: "Beta" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background gradient */}
      <div
        className="fixed inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1), transparent 40%)`
        }}
      />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 md:px-12">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-xl">
            M
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            MDGDev
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="hover:text-violet-400 transition-colors">Services</a>
          <a href="#projects" className="hover:text-violet-400 transition-colors">Projects</a>
          <a href="#about" className="hover:text-violet-400 transition-colors">About</a>
          <button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 px-6 py-2 rounded-full transition-all transform hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative z-10 px-6 md:px-12 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm">AI-Powered Development Studio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build the{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future
            </span>
            <br />
            One App at a Time
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We create lightning-fast web applications and micro-SaaS solutions using cutting-edge AI technology
            and a team of world-class developers. From concept to launch in weeks, not months.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/10">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                MDGDev
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine human expertise with AI efficiency to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-violet-400 mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recent{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300">Real solutions, real impact</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="text-gray-400">{project.type}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center text-violet-400 group-hover:text-purple-400 transition-colors">
                  <span className="text-sm">View Project</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-violet-900/50 to-purple-900/50 backdrop-blur-sm border border-white/20">
            <Globe className="w-16 h-16 text-violet-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s turn your idea into a powerful web application that drives real results
            </p>
            <button className="group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center font-bold">
                M
              </div>
              <span className="text-xl font-bold">MDGDev</span>
            </div>
            <p className="text-gray-400">© 2025 MDGDev. Building the future, one app at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}