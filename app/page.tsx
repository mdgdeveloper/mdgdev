"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Zap,
  Rocket,
  Users,
  ArrowRight,
  Sparkles,
  Globe,
  Brain,
  Calendar,
  User,
  Clock,
  BookOpen,
  Code,
  Lightbulb,
  MessageCircle,
  Star,
} from "lucide-react";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Development",
      description:
        "Leverage cutting-edge AI to accelerate development cycles and deliver superior solutions",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Delivery",
      description:
        "From concept to deployment in record time without compromising on quality",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Elite Developer Team",
      description:
        "Handpicked experts who combine technical excellence with innovative thinking",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Micro-SaaS Specialists",
      description:
        "Focused solutions that solve specific problems with maximum efficiency",
    },
  ];

  const projects = [
    {
      name: "InvoiceGen Pro",
      type: "Financial Web App",
      status: "Live",
      description: "A comprehensive invoicing solution for small businesses",
    },
    {
      name: "NapTime Pro",
      type: "Baby Nap Tracking Web App",
      status: "In Development",
      description: "Smart sleep tracking for infants and toddlers",
    },
    {
      name: "BLW DietGen Lite",
      type: "Baby feeding toolkit",
      status: "In Development",
      description: "Baby-led weaning meal planning assistant",
    },
    {
      name: "PetHolidays",
      type: "Small WebApp to find pet-friendly holidays",
      status: "Beta",
      description: "Discover pet-friendly vacation destinations",
    },
  ];

  const blogPosts = [
    {
      title: "The Future of Web Development: AI-Assisted Coding in 2025",
      excerpt:
        "Explore how artificial intelligence is revolutionizing the way we build web applications, from code generation to automated testing and deployment.",
      author: "Mike Johnson",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Technology",
      image: "🤖",
    },
    {
      title: "Building Micro-SaaS: A Complete Guide for Entrepreneurs",
      excerpt:
        "Learn the essential steps to create, launch, and scale a successful micro-SaaS business. From ideation to monetization strategies.",
      author: "Sarah Chen",
      date: "January 10, 2025",
      readTime: "12 min read",
      category: "Business",
      image: "💼",
    },
    {
      title: "React Performance Optimization: Advanced Techniques",
      excerpt:
        "Deep dive into advanced React optimization techniques including code splitting, lazy loading, and memory management for enterprise applications.",
      author: "Alex Rodriguez",
      date: "January 8, 2025",
      readTime: "10 min read",
      category: "Development",
      image: "⚡",
    },
    {
      title: "UI/UX Design Trends That Will Shape 2025",
      excerpt:
        "Discover the latest design trends including glassmorphism, micro-interactions, and AI-powered user interfaces that are defining modern web experiences.",
      author: "Emma Davis",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Design",
      image: "🎨",
    },
    {
      title: "Database Architecture for Modern Web Applications",
      excerpt:
        "Compare different database solutions and learn when to use SQL vs NoSQL, how to design scalable schemas, and optimize query performance.",
      author: "David Kim",
      date: "January 3, 2025",
      readTime: "15 min read",
      category: "Backend",
      image: "🗄️",
    },
    {
      title: "Securing Your Web Application: Best Practices Guide",
      excerpt:
        "Comprehensive security guide covering authentication, authorization, data protection, and common vulnerabilities in modern web applications.",
      author: "Lisa Thompson",
      date: "December 28, 2024",
      readTime: "11 min read",
      category: "Security",
      image: "🔒",
    },
  ];

  const resources = [
    {
      title: "Web Development Checklist",
      description:
        "Complete checklist for launching production-ready web applications",
      type: "PDF Guide",
      downloads: "2.3k",
    },
    {
      title: "React Component Library",
      description: "Open-source collection of reusable React components",
      type: "Code Repository",
      downloads: "1.8k",
    },
    {
      title: "API Design Best Practices",
      description:
        "Comprehensive guide to designing scalable and maintainable APIs",
      type: "eBook",
      downloads: "1.5k",
    },
    {
      title: "Database Schema Templates",
      description: "Ready-to-use database schemas for common application types",
      type: "Templates",
      downloads: "980",
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      company: "TechStartup Inc.",
      role: "CEO",
      content:
        "MDGDev transformed our idea into a fully functional SaaS platform in just 6 weeks. Their AI-powered development approach is truly revolutionary.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      company: "EcoSolutions",
      role: "CTO",
      content:
        "The quality of code and attention to detail exceeded our expectations. They delivered a scalable solution that handles our growing user base effortlessly.",
      rating: 5,
    },
    {
      name: "Robert Chen",
      company: "FinanceFlow",
      role: "Founder",
      content:
        "Working with MDGDev was seamless. They understood our vision and delivered a product that our customers love. Highly recommended!",
      rating: 5,
    },
  ];

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "resources", label: "Resources" },
    { id: "about", label: "About" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background gradient */}
      <div
        className="fixed inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.1), transparent 40%)`,
        }}
      />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 md:px-12 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
            M
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
            MDGDev
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`hover:text-blue-400 transition-colors ${
                activeSection === item.id ? "text-blue-400" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
          <button className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 px-6 py-2 rounded-full transition-all transform hover:scale-105">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`relative z-10 px-6 md:px-12 py-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm">AI-Powered Development Studio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build the{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">
              Future
            </span>
            <br />
            One App at a Time
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We create lightning-fast web applications and micro-SaaS solutions
            using cutting-edge AI technology and a team of world-class
            developers. From concept to launch in weeks, not months.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2">
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
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                MDGDev
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine human expertise with AI efficiency to deliver
              exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-blue-400 mb-4 group-hover:text-sky-400 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className="relative z-10 px-6 md:px-12 py-20 bg-black/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Latest{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                Insights
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Stay updated with the latest in web development and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{post.image}</div>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{post.author}</span>
                  </div>
                  <div className="flex items-center text-blue-400 group-hover:text-sky-400 transition-colors">
                    <span className="text-sm">Read More</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Free{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                Resources
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Tools and guides to help you build better web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  <span className="text-sm bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {resource.downloads} downloads
                  </span>
                  <button className="text-blue-400 hover:text-sky-400 transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section
        id="projects"
        className="relative z-10 px-6 md:px-12 py-20 bg-black/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Real solutions, real impact - see what we&#39;ve built
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-blue-400 mb-2">{project.type}</p>
                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-400"
                        : project.status === "Beta"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-blue-400 group-hover:text-sky-400 transition-colors">
                    <span className="text-sm">View Details</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                  {project.status === "Live" && (
                    <div className="flex items-center text-green-400">
                      <span className="text-sm">Live Demo</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Real feedback from real customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="relative z-10 px-6 md:px-12 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              How we turn your ideas into reality
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                description:
                  "We analyze your requirements and create a detailed project roadmap",
                icon: <Lightbulb className="w-8 h-8" />,
              },
              {
                step: "2",
                title: "Design",
                description:
                  "Our designers create stunning UI/UX mockups and prototypes",
                icon: <Sparkles className="w-8 h-8" />,
              },
              {
                step: "3",
                title: "Development",
                description:
                  "Our AI-powered development team builds your application",
                icon: <Code className="w-8 h-8" />,
              },
              {
                step: "4",
                title: "Launch",
                description:
                  "We deploy, test, and ensure your app is ready for users",
                icon: <Rocket className="w-8 h-8" />,
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.icon}
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-gray-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              We use the latest technologies to build scalable applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", category: "Frontend" },
              { name: "Next.js", category: "Framework" },
              { name: "TypeScript", category: "Language" },
              { name: "Node.js", category: "Backend" },
              { name: "PostgreSQL", category: "Database" },
              { name: "MongoDB", category: "Database" },
              { name: "AWS", category: "Cloud" },
              { name: "Docker", category: "DevOps" },
              { name: "Tailwind", category: "CSS" },
              { name: "Python", category: "AI/ML" },
              { name: "GraphQL", category: "API" },
              { name: "Redis", category: "Cache" },
            ].map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className="text-lg font-semibold mb-1">{tech.name}</div>
                <div className="text-sm text-gray-400">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 px-6 md:px-12 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about working with us
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to build a web application?",
                answer:
                  "Project timelines vary based on complexity, but most of our applications are completed within 4-8 weeks. We provide detailed timelines during the discovery phase.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "We specialize in React, Next.js, Node.js, and modern web technologies. Our team also has expertise in AI integration, cloud deployment, and database optimization.",
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer:
                  "Yes, we offer comprehensive post-launch support including bug fixes, feature updates, and performance optimization. We provide different support packages to fit your needs.",
              },
              {
                question: "Can you help with existing applications?",
                answer:
                  "Absolutely! We can audit, optimize, and enhance existing applications. Whether it's performance improvements, new features, or modernization, we can help.",
              },
              {
                question: "What makes your AI-powered development different?",
                answer:
                  "We use AI to accelerate development while maintaining human oversight for quality and creativity. This allows us to deliver faster without compromising on code quality or user experience.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-900/50 to-blue-900/50 backdrop-blur-sm border border-white/20">
            <Globe className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&#39;s turn your idea into a powerful web application that
              drives real results. Join hundreds of satisfied customers who
              trust us with their digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>Let&#39;s Talk</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 px-10 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/10">
                Download Free Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative z-10 px-6 md:px-12 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
              Web Development Trends
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join 10,000+ developers who receive our weekly newsletter with the
            latest insights, tutorials, and industry news.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
            />
            <button className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center font-bold">
                  M
                </div>
                <span className="text-xl font-bold">MDGDev</span>
              </div>
              <p className="text-gray-400 mb-4">
                Building the future of web applications with AI-powered
                development and human creativity.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-colors cursor-pointer">
                  <span className="text-sm">T</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-colors cursor-pointer">
                  <span className="text-sm">L</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-colors cursor-pointer">
                  <span className="text-sm">G</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Micro-SaaS Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    AI Integration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Free Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 MDGDev. All rights reserved. Building the future, one app
                at a time.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Made with ❤️ in Barcelona</span>
                <span>•</span>
                <span>Powered by AI & Human Creativity</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
