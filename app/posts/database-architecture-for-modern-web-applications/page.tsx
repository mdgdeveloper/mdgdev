'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  Clock,
  Calendar,
  User,
  Share2,
  Heart,
  Eye,
  ChevronRight,
  Code,
  ExternalLink,
  ArrowUp,
  Twitter,
  Linkedin,
  Facebook,
  Copy,
  Check,
  Database,
  Server,
  GitBranch,
  Scale,
  Shield,
  Layers
} from 'lucide-react';

export default function DatabaseArchitecturePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [readingProgress, setReadingProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(98);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress((scrollTop / docHeight) * 100);
      setShowScrollTop(scrollTop > 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => (isLiked ? prev - 1 : prev + 1));
  };

  const handleShare = async (platform: 'copy' | 'twitter' | 'linkedin' | 'facebook') => {
    const url = window.location.href;
    const title = 'Database Architecture for Modern Web Applications';

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(url);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } catch {
        console.error('Failed to copy link');
      }
      return;
    }

    const routes = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    } as const;
    window.open(routes[platform]);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const relatedPosts = [
    {
      title: 'React Performance Optimization: Advanced Techniques',
      excerpt: 'Deep dive into React optimization for enterprise applications.',
      readTime: '10 min read',
      category: 'Development',
      image: '⚡'
    },
    {
      title: 'Building Micro-SaaS: A Complete Guide for Entrepreneurs',
      excerpt: 'Learn how to build and scale successful micro-SaaS products.',
      readTime: '12 min read',
      category: 'Business',
      image: '💼'
    },
    {
      title: 'The Future of Web Development: AI-Assisted Coding in 2025',
      excerpt: 'Explore how AI is reshaping modern development workflows.',
      readTime: '8 min read',
      category: 'Technology',
      image: '🤖'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background gradient */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,.1), transparent 40%)`
        }}
      />

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 md:px-12 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center space-x-6">
          <Link href="/">
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-sm">
              M
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              MDGDev
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${isLiked
                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            <span className="text-sm">{likes}</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20">
            <Share2 className="w-4 h-4" />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`relative z-10 px-6 md:px-12 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="inline-flex items-center space-x-2 bg-indigo-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-indigo-500/30">
            <span className="text-sm text-indigo-400 font-medium">Backend</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Database Architecture:
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              {' '}Modern Web Applications
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            A comprehensive guide to choosing the right database architecture for your web application. From SQL vs NoSQL to scalability patterns and performance optimization.
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center space-x-6 text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Mike Chen</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>March 10, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>15 min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>1.5k views</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900/50 to-violet-900/50 border border-white/10 mb-12">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-8xl">🗄️</div>
            </div>
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative z-10 px-6 md:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-8 text-gray-300 leading-relaxed">
              {/* Introduction */}
              <p className="text-xl text-gray-200 font-medium">
                The database architecture you choose can make or break your web application.
                As systems grow more complex and data requirements evolve, understanding the
                nuances of different database solutions becomes crucial for success.
              </p>

              <p>
                In this guide, we&apos;ll explore modern database architectures, comparing different
                approaches and providing concrete guidance on when to use each solution. Whether
                you&apos;re building a startup MVP or scaling an enterprise application, these insights
                will help you make informed architectural decisions.
              </p>

              {/* Section 1 */}
              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                SQL vs NoSQL: Beyond the Basics
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-indigo-400 mb-3 flex items-center">
                    <Database className="w-5 h-5 mr-2" />
                    SQL Databases
                  </h3>
                  <p>
                    Perfect for complex queries and relationships. Choose when you need ACID
                    compliance and data consistency is critical.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-indigo-400 mb-3 flex items-center">
                    <GitBranch className="w-5 h-5 mr-2" />
                    NoSQL Solutions
                  </h3>
                  <p>
                    Ideal for rapid development and horizontal scaling. Best when schema flexibility
                    and write performance matter most.
                  </p>
                </div>
              </div>

              {/* Code Example */}
              <div className="bg-black/40 rounded-xl p-6 border border-white/10 my-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-indigo-400" />
                    <span className="text-sm text-gray-400">Comparison Example</span>
                  </div>
                </div>
                <pre className="text-sm overflow-x-auto">
                  <code className="text-green-400">
                    {`// SQL Example - Structured Data with Relations
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  total DECIMAL(10,2)
);

// NoSQL Example - Flexible Document Structure
{
  "_id": "user123",
  "name": "John Doe",
  "email": "john@example.com",
  "orders": [
    {
      "id": "order789",
      "total": 99.99,
      "items": [...]
    }
  ]
}`}
                  </code>
                </pre>
              </div>

              {/* Section 2 */}
              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Scalability Patterns
              </h2>

              <p>
                Modern web applications need to handle growing data volumes and user bases.
                Let&apos;s explore proven scalability patterns that keep your database performant
                under load.
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-indigo-400 mb-3 flex items-center">
                    <Scale className="w-5 h-5 mr-2" />
                    Horizontal Scaling
                  </h3>
                  <ul className="space-y-2">
                    <li>• Sharding strategies for distributed data</li>
                    <li>• Read replicas for query optimization</li>
                    <li>• Multi-region deployment considerations</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-indigo-400 mb-3 flex items-center">
                    <Server className="w-5 h-5 mr-2" />
                    Vertical Scaling
                  </h3>
                  <ul className="space-y-2">
                    <li>• Index optimization techniques</li>
                    <li>• Query performance tuning</li>
                    <li>• Resource allocation strategies</li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Security & Data Protection
              </h2>

              <p>
                Security isn&apos;t an afterthought—it&apos;s a fundamental aspect of database architecture.
                Here&apos;s how to protect your data effectively.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-indigo-400 mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Access Control
                  </h3>
                  <ul className="space-y-2">
                    <li>• Role-based access control (RBAC)</li>
                    <li>• Row-level security policies</li>
                    <li>• Audit logging implementation</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-indigo-400 mb-3 flex items-center">
                    <Layers className="w-5 h-5 mr-2" />
                    Data Protection
                  </h3>
                  <ul className="space-y-2">
                    <li>• Encryption at rest and in transit</li>
                    <li>• Backup and recovery strategies</li>
                    <li>• Compliance considerations</li>
                  </ul>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-indigo-900/50 to-violet-900/50 rounded-xl p-8 border border-white/10 my-12">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Need Database Architecture Consulting?
                </h3>
                <p className="text-gray-300 mb-6">
                  Let our experts help you design and optimize your database architecture for performance,
                  scalability, and reliability.
                </p>
                <button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center space-x-2">
                  <span>Schedule a Consultation</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Share Section */}
      <section className="relative z-10 px-6 md:px-12 py-12 bg-black/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Found this helpful?</h3>
              <p className="text-gray-400">Share it with fellow developers!</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full hover:bg-blue-500/30 transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full hover:bg-blue-600/30 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center space-x-2 bg-blue-700/20 text-blue-400 px-4 py-2 rounded-full hover:bg-blue-700/30 transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="flex items-center space-x-2 bg-gray-500/20 text-gray-400 px-4 py-2 rounded-full hover:bg-gray-500/30 transition-colors"
              >
                {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Related{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <article
                key={index}
                className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{post.image}</div>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <span className="bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center text-indigo-400 group-hover:text-violet-400 transition-colors">
                  <span className="text-sm">Read More</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative z-10 px-6 md:px-12 py-20 bg-black/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Database Trends
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join 3,000+ developers getting our weekly insights on database architecture, performance, and scalability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
            />
            <button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-full flex items-center justify-center transition-all transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
