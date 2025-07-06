"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, Clock, Calendar, User, Share2, Heart, Eye, ChevronRight, Code, ExternalLink, ArrowUp, Twitter, Linkedin, Facebook, Copy, Check } from 'lucide-react';

export default function BlogPostPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [readingProgress, setReadingProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(127);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setReadingProgress(scrollPercent);
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
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = "The Future of Web Development: AI-Assisted Coding in 2025";

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(url);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } catch {
        console.error('Failed to copy link');
      }
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
    } else if (platform === 'linkedin') {
      window.open(`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
    } else if (platform === 'facebook') {
      window.open(`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const relatedPosts = [
    {
      title: "Building Micro-SaaS: A Complete Guide for Entrepreneurs",
      excerpt: "Learn the essential steps to create, launch, and scale a successful micro-SaaS business.",
      readTime: "12 min read",
      category: "Business",
      image: "💼"
    },
    {
      title: "React Performance Optimization: Advanced Techniques",
      excerpt: "Deep dive into advanced React optimization techniques for enterprise applications.",
      readTime: "10 min read",
      category: "Development",
      image: "⚡"
    },
    {
      title: "Database Architecture for Modern Web Applications",
      excerpt: "Compare different database solutions and learn when to use SQL vs NoSQL.",
      readTime: "15 min read",
      category: "Backend",
      image: "🗄️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background gradient */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1), transparent 40%)`
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
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </button>
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
      <section className={`relative z-10 px-6 md:px-12 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="inline-flex items-center space-x-2 bg-violet-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-violet-500/30">
            <span className="text-sm text-violet-400 font-medium">Technology</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of Web Development:
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}AI-Assisted Coding
            </span>
            {" "}in 2025
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Explore how artificial intelligence is revolutionizing the way we build web applications,
            from code generation to automated testing and deployment.
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center space-x-6 text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Mike Johnson</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>2.3k views</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-violet-900/50 to-purple-900/50 border border-white/10 mb-12">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-8xl">🤖</div>
            </div>
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative z-10 px-6 md:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Article content */}
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p className="text-xl text-gray-200 font-medium">
                The landscape of web development is undergoing a seismic shift. As we advance through 2025,
                artificial intelligence isn&#39;t just changing how we code&#8212;it&#39;s fundamentally transforming what
                it means to be a developer.
              </p>

              <p>
                Gone are the days when developers spent hours debugging syntax errors or writing boilerplate code.
                Today&#39;s AI-powered development tools are sophisticated enough to understand context, predict
                intentions, and generate production-ready code that would have taken human developers days to create.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">The AI Revolution in Development</h2>

              <p>
                The integration of AI into development workflows has accelerated at an unprecedented pace.
                Tools like GitHub Copilot, ChatGPT, and specialized coding assistants have evolved from
                simple autocomplete functions to sophisticated pair programming partners.
              </p>

              {/* Code Example */}
              <div className="bg-black/40 rounded-xl p-6 border border-white/10 my-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-violet-400" />
                    <span className="text-sm text-gray-400">AI-Generated React Hook</span>
                  </div>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  {`const useOptimizedFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });
      
      if (!response.ok) throw new Error('Network response was not ok');
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};`}
                </pre>
              </div>

              <p>
                This custom hook was generated by AI in seconds, complete with error handling,
                loading states, and optimization through useCallback and useEffect. The days of
                writing repetitive data fetching logic are behind us.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Key Benefits of AI-Assisted Development</h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-violet-400 mb-3">🚀 Speed & Efficiency</h3>
                  <p className="text-gray-300">
                    AI can generate complex components and functions in seconds, dramatically reducing
                    development time and allowing developers to focus on architecture and user experience.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-violet-400 mb-3">🎯 Reduced Errors</h3>
                  <p className="text-gray-300">
                    AI-generated code often follows best practices and includes proper error handling,
                    reducing the likelihood of bugs and security vulnerabilities.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-violet-400 mb-3">📚 Learning Accelerator</h3>
                  <p className="text-gray-300">
                    Developers can learn new patterns, libraries, and best practices by observing
                    AI-generated code and understanding the reasoning behind different approaches.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-violet-400 mb-3">🔧 Code Quality</h3>
                  <p className="text-gray-300">
                    AI tools can suggest improvements, refactor existing code, and ensure consistency
                    across large codebases, maintaining high-quality standards.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Human-AI Partnership</h2>

              <p>
                While AI excels at generating code and solving technical problems, the human element
                remains irreplaceable. Developers bring creativity, strategic thinking, and the ability
                to understand complex business requirements that AI cannot fully grasp.
              </p>

              <blockquote className="border-l-4 border-violet-500 pl-6 my-8 italic text-gray-200 bg-violet-500/10 py-4 rounded-r-lg">
                &quot;AI doesn&#39;t replace developers&#8212;it amplifies their capabilities. The best teams are
                those that learn to dance with AI, using it as a powerful instrument in their
                creative orchestra.&quot;
              </blockquote>

              <p>
                The most successful development teams in 2025 are those that have learned to leverage
                AI as a collaborative partner rather than viewing it as a replacement. This partnership
                allows developers to tackle more ambitious projects and deliver higher-quality solutions
                in shorter timeframes.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Looking Ahead: What&#39;s Next?</h2>

              <p>
                As we look toward the future, several trends are emerging that will shape the next
                phase of AI-assisted development:
              </p>

              <ul className="space-y-4 my-8">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-violet-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-violet-400 text-sm">1</span>
                  </div>
                  <div>
                    <strong className="text-white">Contextual AI Assistants:</strong> AI that understands
                    your entire codebase and can make suggestions based on your specific architecture and patterns.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-violet-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-violet-400 text-sm">2</span>
                  </div>
                  <div>
                    <strong className="text-white">Automated Testing:</strong> AI that can generate
                    comprehensive test suites and identify edge cases humans might miss.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-violet-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-violet-400 text-sm">3</span>
                  </div>
                  <div>
                    <strong className="text-white">Performance Optimization:</strong> AI-driven analysis
                    and optimization of application performance in real-time.
                  </div>
                </li>
              </ul>

              <p>
                The future of web development is not about choosing between human creativity and AI
                efficiency&#8212;it&#39;s about creating a symbiotic relationship that leverages the best of both worlds.
              </p>

              <div className="bg-gradient-to-r from-violet-900/50 to-purple-900/50 rounded-xl p-8 border border-white/10 my-12">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Embrace AI-Powered Development?</h3>
                <p className="text-gray-300 mb-6">
                  At MDGDev, we&#39;re at the forefront of this revolution. Our team combines AI efficiency
                  with human creativity to deliver exceptional web applications that push the boundaries
                  of what&#39;s possible.
                </p>
                <button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center space-x-2">
                  <span>Start Your AI-Powered Project</span>
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
              <h3 className="text-2xl font-bold mb-2">Enjoyed this article?</h3>
              <p className="text-gray-400">Share it with your network and help spread the knowledge!</p>
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
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <article
                key={index}
                className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{post.image}</div>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <span className="bg-violet-500/20 text-violet-400 px-2 py-1 rounded">{post.category}</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-violet-400 transition-colors">{post.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center text-violet-400 group-hover:text-purple-400 transition-colors">
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
            Want More{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Insights?
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join 10,000+ developers who receive our weekly newsletter with the latest trends,
            tutorials, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20"
            />
            <button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-full flex items-center justify-center transition-all transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}