import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
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

      {/* Contact Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
            <p className="mt-4 text-xl text-gray-800">
              Get in touch with us. We're here to help you transform your business with AI.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Email</h3>
              <p className="mt-2 text-gray-600">
                For any inquiries, please send us an email. Our team will get back to you as soon as possible.
              </p>
              <a
                href="mailto:hello@gryeai.com"
                className="mt-4 inline-block text-orange-500 hover:text-orange-600"
              >
                hello@gryeai.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
              <p className="mt-2 text-gray-600">
                You can reach us by phone during business hours. We're here to help.
              </p>
              <a
                href="tel:+919462655089"
                className="mt-4 inline-block text-orange-500 hover:text-orange-600"
              >
                +91 94626 55089
              </a>
            </div>

            {/* Office Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Office</h3>
              <p className="mt-2 text-gray-600">
                Visit our office at the address below. We look forward to meeting you.
              </p>
              <address className="mt-4 text-orange-500 not-italic">
                Incubation Center, SKIT Jaipur<br />
                Jagatpura, Jaipur<br />
                Rajasthan, India 302017
              </address>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.888714582574!2d75.84843797529697!3d26.77494467660855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc91e898380fd%3A0xeee859ae1f1b64b0!2sSwami%20Keshvanand%20Institute%20of%20Technology%2C%20Management%20%26%20Gramothan!5e0!3m2!1sen!2sin!4v1710861435099!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Link to="/">
                  <img src="/grye-ai-logo.png" alt="GryeAI Logo" className="h-8 w-auto" />
                  <span className="ml-2 text-xl font-bold text-gray-900">GryeAI</span>
                </Link>
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

export default Contact;