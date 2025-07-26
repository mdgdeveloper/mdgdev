"use client";
import React, { useState, useEffect } from "react";
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
  DollarSign,
  Users,
  Zap,
  TrendingUp,
  Target,
  Rocket,
  BarChart3,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function MicroSaaSBlogPost() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [readingProgress, setReadingProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(89);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setReadingProgress(scrollPercent);
      setShowScrollTop(scrollTop > 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = "Building Micro-SaaS: A Complete Guide for Entrepreneurs";

    if (platform === "copy") {
      try {
        await navigator.clipboard.writeText(url);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } catch {
        console.error("Failed to copy link");
      }
    } else if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(url)}`
      );
    } else if (platform === "linkedin") {
      window.open(
        `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`
      );
    } else if (platform === "facebook") {
      window.open(
        `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
      );
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const relatedPosts = [
    {
      title: "The Future of Web Development: AI-Assisted Coding in 2025",
      excerpt:
        "Explore how artificial intelligence is revolutionizing the way we build web applications.",
      readTime: "8 min read",
      category: "Technology",
      image: "🤖",
    },
    {
      title: "React Performance Optimization: Advanced Techniques",
      excerpt:
        "Deep dive into advanced React optimization techniques for enterprise applications.",
      readTime: "10 min read",
      category: "Development",
      image: "⚡",
    },
    {
      title: "Database Architecture for Modern Web Applications",
      excerpt:
        "Compare different database solutions and learn when to use SQL vs NoSQL.",
      readTime: "15 min read",
      category: "Backend",
      image: "🗄️",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background gradient */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1), transparent 40%)`,
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
          <Link href="/" className="">
            <button className="cursor-pointer flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
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
              ? "bg-red-500/20 text-red-400 border border-red-500/30"
              : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
              }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
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
        className={`relative z-10 px-6 md:px-12 py-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-emerald-500/30">
            <span className="text-sm text-emerald-400 font-medium">
              Business
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building Micro-SaaS:
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              A Complete Guide
            </span>{" "}
            for Entrepreneurs
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Learn the essential steps to create, launch, and scale a successful micro-SaaS business. From idea validation to revenue generation, this comprehensive guide covers everything you need to know.
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center space-x-6 text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Sarah Chen</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>January 10, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>1.8k views</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border border-white/10 mb-12">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-8xl">💼</div>
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
                In today&#39;s digital economy, micro-SaaS represents one of the most accessible paths to entrepreneurial success. Unlike traditional SaaS businesses that require massive funding and teams, micro-SaaS focuses on solving specific problems for niche markets with minimal resources.
              </p>

              <p>
                The beauty of micro-SaaS lies in its simplicity and focus. By targeting a specific problem that affects a small but dedicated user base, entrepreneurs can build profitable businesses without the complexity of managing large teams or competing directly with tech giants.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                What is Micro-SaaS?
              </h2>

              <p>
                Micro-SaaS is a software-as-a-service business model that focuses on solving very specific problems for niche markets. These businesses typically:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Small Team
                  </h3>
                  <p className="text-gray-300">
                    Run by 1-5 people, often solo entrepreneurs who wear multiple hats and focus on lean operations.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Niche Focus
                  </h3>
                  <p className="text-gray-300">
                    Target specific use cases or industries rather than trying to be everything to everyone.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3 flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Revenue Focus
                  </h3>
                  <p className="text-gray-300">
                    Aim for $1K-$50K monthly recurring revenue with sustainable profit margins.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Quick Launch
                  </h3>
                  <p className="text-gray-300">
                    Get to market quickly with minimal viable products and iterate based on feedback.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Step 1: Idea Validation & Market Research
              </h2>

              <p>
                Before writing a single line of code, you need to validate that your idea solves a real problem people are willing to pay for. This is where many entrepreneurs fail—they fall in love with their solution before confirming the problem exists.
              </p>

              <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30 my-8">
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                  Validation Framework
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-emerald-400 text-sm">1</span>
                    </div>
                    <div>
                      <strong className="text-white">Problem Interview:</strong> Talk to 20+ potential customers about their pain points before mentioning your solution.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-emerald-400 text-sm">2</span>
                    </div>
                    <div>
                      <strong className="text-white">Solution Validation:</strong> Create mockups or prototypes and get feedback on your proposed solution.
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-emerald-400 text-sm">3</span>
                    </div>
                    <div>
                      <strong className="text-white">Willingness to Pay:</strong> Test if people will pre-order or sign up for a waiting list.
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Step 2: Building Your MVP
              </h2>

              <p>
                Your Minimum Viable Product (MVP) should be the simplest version of your product that solves the core problem. Focus on one primary feature that delivers immediate value to your users.
              </p>

              {/* Tech Stack Example */}
              <div className="bg-black/40 rounded-xl p-6 border border-white/10 my-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Code className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm text-gray-400">
                      Popular Micro-SaaS Tech Stack
                    </span>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="text-emerald-400 font-semibold mb-2">Frontend</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• React/Next.js</li>
                      <li>• Tailwind CSS</li>
                      <li>• Vercel/Netlify</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-semibold mb-2">Backend</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Node.js/Python</li>
                      <li>• PostgreSQL/MongoDB</li>
                      <li>• Railway/Render</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-semibold mb-2">Tools</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Stripe (payments)</li>
                      <li>• Supabase (auth)</li>
                      <li>• Resend (emails)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Step 3: Pricing Strategy
              </h2>

              <p>
                Pricing is one of the most critical decisions for your micro-SaaS. Many entrepreneurs underprice their products, thinking lower prices will attract more customers. However, in B2B micro-SaaS, higher prices often indicate higher value.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-emerald-400">$29</div>
                    <div className="text-gray-400">per month</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Starter</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Core features</li>
                    <li>• Email support</li>
                    <li>• Basic analytics</li>
                    <li>• Up to 1,000 records</li>
                  </ul>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/30 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-emerald-400">$99</div>
                    <div className="text-gray-400">per month</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Professional</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• All Starter features</li>
                    <li>• Priority support</li>
                    <li>• Advanced analytics</li>
                    <li>• Up to 10,000 records</li>
                    <li>• API access</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-emerald-400">$299</div>
                    <div className="text-gray-400">per month</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Enterprise</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• All Professional features</li>
                    <li>• Custom integrations</li>
                    <li>• Unlimited records</li>
                    <li>• Dedicated support</li>
                    <li>• Custom branding</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Step 4: Marketing & Customer Acquisition
              </h2>

              <p>
                Traditional marketing channels often don&#39;t work for micro-SaaS. Instead, focus on channels where your target customers already spend time and trust authentic recommendations over advertisements.
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Content Marketing
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Create valuable content that demonstrates your expertise and attracts your ideal customers naturally.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Blog posts solving customer problems</li>
                    <li>• Case studies and success stories</li>
                    <li>• YouTube tutorials and demos</li>
                    <li>• Podcast appearances</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Community Building
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Build relationships in communities where your target customers gather.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Industry-specific forums and groups</li>
                    <li>• Social media engagement</li>
                    <li>• Online events and webinars</li>
                    <li>• Partnership with complementary tools</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Product-Led Growth
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Let your product itself drive growth through great user experience and word-of-mouth.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Freemium or free trial models</li>
                    <li>• Referral programs</li>
                    <li>• In-app sharing features</li>
                    <li>• Excellent onboarding experience</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Step 5: Scaling & Optimization
              </h2>

              <p>
                Once you&#39;ve achieved product-market fit and have a steady stream of customers, it&#39;s time to optimize and scale. This phase is about improving what&#39;s already working rather than adding new features.
              </p>

              <blockquote className="border-l-4 border-emerald-500 pl-6 my-8 italic text-gray-200 bg-emerald-500/10 py-4 rounded-r-lg">
                &quot;The secret to scaling micro-SaaS isn&#39;t adding more features—it&#39;s doing fewer things exceptionally well and automating everything possible.&quot;
              </blockquote>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3 flex items-center">
                    <Rocket className="w-5 h-5 mr-2" />
                    Automation
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Automate repetitive tasks to free up time for strategic work.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Customer onboarding sequences</li>
                    <li>• Email marketing campaigns</li>
                    <li>• Customer support with chatbots</li>
                    <li>• Billing and payment processing</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Retention Focus
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Keeping existing customers is more profitable than acquiring new ones.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Regular customer check-ins</li>
                    <li>• Usage analytics and insights</li>
                    <li>• Proactive customer success</li>
                    <li>• Loyalty programs and rewards</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">
                Common Pitfalls to Avoid
              </h2>

              <div className="space-y-4 my-8">
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                  <h3 className="text-xl font-semibold text-red-400 mb-3">
                    ❌ Feature Creep
                  </h3>
                  <p className="text-gray-300">
                    Resist the urge to add every feature customers request. Stay focused on your core value proposition.
                  </p>
                </div>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                  <h3 className="text-xl font-semibold text-red-400 mb-3">
                    ❌ Underpricing
                  </h3>
                  <p className="text-gray-300">
                    Don&#39;t compete on price alone. Focus on value and don&#39;t be afraid to charge what you&#39;re worth.
                  </p>
                </div>
                <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/30">
                  <h3 className="text-xl font-semibold text-red-400 mb-3">
                    ❌ Ignoring Customer Feedback
                  </h3>
                  <p className="text-gray-300">
                    Your customers&#39; success is your success. Listen to their feedback and act on it quickly.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 rounded-xl p-8 border border-white/10 my-12">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Build Your Micro-SaaS?
                </h3>
                <p className="text-gray-300 mb-6">
                  At MDGDev, we specialize in helping entrepreneurs turn their ideas into profitable micro-SaaS businesses. From MVP development to scaling strategies, we&#39;ve got you covered.
                </p>
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center space-x-2">
                  <span>Start Your Micro-SaaS Journey</span>
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
              <p className="text-gray-400">
                Share it with other aspiring entrepreneurs!
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleShare("twitter")}
                className="flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full hover:bg-blue-500/30 transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full hover:bg-blue-600/30 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </button>
              <button
                onClick={() => handleShare("facebook")}
                className="flex items-center space-x-2 bg-blue-700/20 text-blue-400 px-4 py-2 rounded-full hover:bg-blue-700/30 transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </button>
              <button
                onClick={() => handleShare("copy")}
                className="flex items-center space-x-2 bg-gray-500/20 text-gray-400 px-4 py-2 rounded-full hover:bg-gray-500/30 transition-colors"
              >
                {copiedLink ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>{copiedLink ? "Copied!" : "Copy Link"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Related{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <article
                key={index}
                className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{post.image}</div>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-emerald-400 group-hover:text-teal-400 transition-colors">
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
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Entrepreneurial Journey?
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join 5,000+ entrepreneurs who receive our weekly newsletter with actionable insights, case studies, and growth strategies for building successful micro-SaaS businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
            />
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full flex items-center justify-center transition-all transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}