/* --------------------------------------------------------------------------  
   app/blog/react-performance-optimization-advanced-techniques/page.tsx  
-------------------------------------------------------------------------- */
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
  Zap,
  TrendingUp
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                         React-Performance Article Page                     */
/* -------------------------------------------------------------------------- */
export default function ReactPerformancePost() {
  /* ------------------------------ UI state -------------------------------- */
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [readingProgress, setReadingProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(122);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  /* ---------------------------- Life-cycle -------------------------------- */
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

  /* ------------------------------ Actions --------------------------------- */
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => (isLiked ? prev - 1 : prev + 1));
  };

  const handleShare = async (platform: 'copy' | 'twitter' | 'linkedin' | 'facebook') => {
    const url = window.location.href;
    const title = 'React Performance Optimization: Advanced Techniques';

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(url);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } catch {
        console.error('Failed to copy');
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

  /* ---------------------------- Related posts ----------------------------- */
  const relatedPosts = [
    {
      title: 'Building Micro-SaaS: A Complete Guide for Entrepreneurs',
      excerpt: 'Learn how to validate, build, and scale a profitable micro-SaaS product.',
      readTime: '12 min read',
      category: 'Business',
      image: '💼'
    },
    {
      title: 'Database Architecture for Modern Web Applications',
      excerpt: 'Compare SQL vs NoSQL solutions and choose the right DB for your project.',
      readTime: '15 min read',
      category: 'Backend',
      image: '🗄️'
    },
    {
      title: 'The Future of Web Development: AI-Assisted Coding in 2025',
      excerpt: 'Explore how AI is reshaping the day-to-day workflow of developers.',
      readTime: '8 min read',
      category: 'Technology',
      image: '🤖'
    }
  ];

  /* ==============================  Render  ================================= */
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">

      {/* ------------------- Animated radial background -------------------- */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,.1), transparent 40%)`
        }}
      />

      {/* ----------------------- Reading progress bar ---------------------- */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* ----------------------------- NAV --------------------------------- */}
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

          <button
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20">
            <Share2 className="w-4 h-4" />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </nav>

      {/* --------------------------- HERO ---------------------------------- */}
      <section
        className={`relative z-10 px-6 md:px-12 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="max-w-4xl mx-auto">

          {/* Category badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-500/30">
            <span className="text-sm text-blue-400 font-medium">Development</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            React Performance Optimization:
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {' '}Advanced Techniques
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover proven strategies, patterns, and tools to make your React applications blazingly fast—without sacrificing DX or maintainability.
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center space-x-6 text-gray-400 mb-8">
            <div className="flex items-center space-x-2"><User className="w-4 h-4" /><span>Sarah Chen</span></div>
            <div className="flex items-center space-x-2"><Calendar className="w-4 h-4" /><span>February 14, 2025</span></div>
            <div className="flex items-center space-x-2"><Clock className="w-4 h-4" /><span>10 min read</span></div>
            <div className="flex items-center space-x-2"><Eye className="w-4 h-4" /><span>2.1 k views</span></div>
          </div>

          {/* Featured image */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/50 to-teal-900/50 border border-white/10 mb-12">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-8xl">⚡</div>
            </div>
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

      {/* ---------------------- ARTICLE CONTENT ----------------------------- */}
      <article className="relative z-10 px-6 md:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="space-y-8 text-gray-300 leading-relaxed">

              {/* --- intro --- */}
              <p className="text-xl text-gray-200 font-medium">
                Performance in React is less about raw speed and more about perceived responsiveness.
                This guide walks through advanced profiling, memoization patterns, and architectural
                decisions that keep your UI silky-smooth—even as your codebase scales.
              </p>

              {/* --- Section 1 ------------------------------------------------- */}
              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                1 • Measure First: The Profiler Workflow
              </h2>

              <p>
                Optimization without data is guesswork. React DevTools, the Chrome DevTools Performance
                panel, and user-timing APIs form a trifecta for pinpointing slow renders at the component level.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center">
                    <Zap className="w-5 h-5 mr-2" /> Real-world Metrics
                  </h3>
                  <p>Track Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Total Blocking Time (TBT) in production, not just locally.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" /> Continuous Profiling
                  </h3>
                  <p>Integrate <code>@vercel/analytics</code> or <code>LogRocket</code> to surface slow re-renders automatically.</p>
                </div>
              </div>

              {/* --- Section 2 ------------------------------------------------ */}
              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                2 • Render Cost Reduction Techniques
              </h2>
              <p>
                The simplest optimization is preventing a render you don’t need. let’s look at <code>React.memo</code>,
                <code>useCallback</code>, and <code>useMemo</code>—but also when <i>not</i> to use them.
              </p>

              {/* code block style card */}
              <div className="bg-black/40 rounded-xl p-6 border border-white/10 my-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-gray-400">Quick pattern</span>
                </div>
                {`  
const Expensive = React.memo(function Expensive({data}) {  
  /* heavy child tree */  
});  
  
// Bad: recreated each parent render  
const bad = <Expensive onClick={() => doSomething()} />;  
  
// Good: stable reference with useCallback  
const click = React.useCallback(() => doSomething(), []);  
const good  = <Expensive onClick={click} />;  
`}
              </div>

              {/* --- Section 3 ------------------------------------------------ */}
              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                3 • Virtualization, Off-main-thread Work & Streaming
              </h2>
              <p>
                When datasets explode, virtualization libraries like <b>react-window</b> shave off TTI.
                Combine with <b>web-workers</b> and React 18’s <i>streaming SSR</i> for instant time-to-interactive.
              </p>

              {/* call-out */}
              <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-200 bg-blue-500/10 py-4 rounded-r-lg">
                &quot;Premature optimization is the root of all evil—unless you ship to millions of users.&quot;
              </blockquote>

              {/* --- more sections / outro as needed ------------------------- */}
              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                TL;DR — Your Optimization Checklist
              </h2>

              <div className="space-y-4 my-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">✅ Measure with React DevTools</h3>
                  <p>Look for purple bars—those are wasted renders.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">✅ Avoid unnecessary re-renders</h3>
                  <p>Use <code>memo</code>, <code>useCallback</code>, and <code>useMemo</code> wisely.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">✅ Defer heavy work</h3>
                  <p>Virtualize long lists, batch network calls, and leverage Suspense + streaming.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/50 to-teal-900/50 rounded-xl p-8 border border-white/10 my-12">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Want hands-on performance audits?
                </h3>
                <p className="text-gray-300 mb-6">
                  MDGDev offers drop-in React perf consulting—guaranteed 20% runtime win or
                  your money back.
                </p>
                <button
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center space-x-2">
                  <span>Book an Audit</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </article>

      {/* --------------------- SHARE SECTION ------------------------------ */}
      <section className="relative z-10 px-6 md:px-12 py-12 bg-black/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Found this helpful?</h3>
            <p className="text-gray-400">Share it with your dev friends.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => handleShare('twitter')}
              className="flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full hover:bg-blue-500/30 transition-colors">
              <Twitter className="w-4 h-4" /><span>Twitter</span>
            </button>
            <button onClick={() => handleShare('linkedin')}
              className="flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full hover:bg-blue-600/30 transition-colors">
              <Linkedin className="w-4 h-4" /><span>LinkedIn</span>
            </button>
            <button onClick={() => handleShare('facebook')}
              className="flex items-center space-x-2 bg-blue-700/20 text-blue-400 px-4 py-2 rounded-full hover:bg-blue-700/30 transition-colors">
              <Facebook className="w-4 h-4" /><span>Facebook</span>
            </button>
            <button onClick={() => handleShare('copy')}
              className="flex items-center space-x-2 bg-gray-500/20 text-gray-400 px-4 py-2 rounded-full hover:bg-gray-500/30 transition-colors">
              {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* -------------------- RELATED POSTS ------------------------------- */}
      <section className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Related <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Articles</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, i) => (
              <article
                key={i}
                className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{post.image}</div>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">{post.category}</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" /><span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center text-blue-400 group-hover:text-teal-400 transition-colors">
                  <span className="text-sm">Read More</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ NEWSLETTER CTA -------------------------------- */}
      <section className="relative z-10 px-6 md:px-12 py-20 bg-black/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Level-up your
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              React Knowledge
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join 5 k+ developers getting our monthly performance tips and real-world audits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20" />
            <button
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ------------------- Scroll-to-top FAB ----------------------------- */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 rounded-full flex items-center justify-center transition-all transform hover:scale-110 z-50">
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}