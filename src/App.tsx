import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  FileText,
  CheckCircle,
  TrendingUp,
  Users,
  DollarSign,
  Upload,
  Cpu,
  FileCheck,
  ChevronRight,
  Mail,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-orange-300 to-orange-500">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/">
                <img src="/grye-ai-logo.png" alt="GryeAI Logo" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-bold text-gray-900">GryeAI</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1WLaWrBv8zKbxjMrojixmSRrYHNxh2kUop0_qV3IA2Xz16YLjOPrSfjGlXBBBIld9X3UP9YRo7"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              AI-Powered Speech and Text Analytics Tool
            </h1>
            <p className="mt-6 text-xl text-gray-800">
              Let AI fetch insights from your customer calls and emails.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1WLaWrBv8zKbxjMrojixmSRrYHNxh2kUop0_qV3IA2Xz16YLjOPrSfjGlXBBBIld9X3UP9YRo7"
                className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
              >
                Request a Demo
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-500 font-medium rounded-lg hover:bg-orange-50 transition"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-400/20 to-orange-600/20 rounded-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000"
              alt="AI Analytics Dashboard"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white wave-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              The Future of Interaction Insights
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Use AI to extract insights from your customer interactions and data to improve compliance,
              processes, and drive revenue growth.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition group"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Unlock the Full Potential of Your Customer Interaction Data
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Use AI to understand your customer needs better to serve your customers better.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="mt-2 text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Proven Process for Driving Outcomes
            </h2>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workflow.map((step, index) => (
                <div key={index} className="text-center bg-orange-50 p-8 rounded-2xl">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your customer insights?</h2>
          <p className="mt-4 text-xl text-orange-100">
            Get started with AI-powered analytics today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1WLaWrBv8zKbxjMrojixmSRrYHNxh2kUop0_qV3IA2Xz16YLjOPrSfjGlXBBBIld9X3UP9YRo7"
              className="inline-flex items-center px-6 py-3 bg-white text-orange-900 font-medium rounded-lg hover:bg-orange-50 transition"
            >
              Request a Demo
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <img src="/grye-ai-logo.png" alt="GryeAI Logo" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-bold text-gray-900">GryeAI</span>
              </div>
              <p className="mt-4 text-gray-600">
                AI-powered speech and text analytics for better customer insights.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-orange-500 transition">Home</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-orange-500 transition">Blog</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-orange-500 transition">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-600 hover:text-orange-500 transition">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-orange-500 transition">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
              <p className="text-gray-600">
                <a href="mailto:hello@gryeai.com" className="hover:text-orange-500 transition">
                  hello@gryeai.com
                </a>
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-gray-600">
            <p>© GryeAI Labs by Offerrush</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: <MessageSquare className="h-6 w-6 text-orange-500 group-hover:text-white transition" />,
    title: 'Organization-level Suggestions',
    description: 'AI-driven actionable recommendations to improve your business processes.',
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-orange-500 group-hover:text-white transition" />,
    title: 'Call and Email Summarization',
    description: 'Automated summarization of all customer interactions for quick insights.',
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-orange-500 group-hover:text-white transition" />,
    title: '100% Automated QA',
    description: 'Fully automated quality assurance for all customer interactions.',
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-orange-500 group-hover:text-white transition" />,
    title: 'Deep Insights',
    description: 'Comprehensive analysis of trends, sentiments, and opportunities.',
  },
  {
    icon: <Users className="h-6 w-6 text-orange-500 group-hover:text-white transition" />,
    title: 'Agent Insights',
    description: 'Personalized feedback and coaching recommendations for agents.',
  },
  {
    icon: <DollarSign className="h-6 w-6 text-orange-500 group-hover:text-white transition" />,
    title: 'Upsell and Cross-sell',
    description: 'Identify and capitalize on revenue opportunities in real-time.',
  },
];

const benefits = [
  {
    title: 'Automated Quality Assurance',
    description: 'Ensure consistent quality across all customer conversations with AI-powered QA.',
  },
  {
    title: 'Personalized Agent Training',
    description: 'Analyze conversation quality and provide targeted training recommendations.',
  },
  {
    title: 'Revenue Growth',
    description: 'Identify and act on qualified upsell and cross-sell opportunities.',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Improve customer experience through data-driven insights and recommendations.',
  },
];

const workflow = [
  {
    icon: <Upload className="h-8 w-8 text-orange-500" />,
    title: 'Upload Data',
    description: 'Simply upload your call recordings or email transcripts.',
  },
  {
    icon: <Cpu className="h-8 w-8 text-orange-500" />,
    title: 'AI Analysis',
    description: 'Our advanced AI engine analyzes your data.',
  },
  {
    icon: <FileCheck className="h-8 w-8 text-orange-500" />,
    title: 'Get Insights',
    description: 'Receive detailed QA and insights reports.',
  },
];

const testimonials = [
  {
    name: 'Naval Lad',
    role: 'CTO, Axis Finance',
    quote: 'GryeAI has transformed how we handle customer interactions. The insights we get are invaluable.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
  },
  {
    name: 'Ashish Sharma',
    role: 'DVP, AU Small Finance Bank',
    quote: 'The automated QA has improved our customer service quality by 40%. A game-changer for our operations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
  },
];

export default App;