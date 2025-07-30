import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  User,
  MessageSquare,
  Send,
  Calendar,
  Users,
  Car,
  Train,
  Navigation
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';
import HeroSection from '../components/HeroSection';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Main Reception',
      details: ['+91-11-98765-43210'],
      description: 'General inquiries and information'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@greenwoodsinternational.edu'],
      description: 'Send us your queries anytime'
    },
    {
      icon: MapPin,
      title: 'School Address',
      details: ['123 Education Street', 'Academic City - 110001', 'Delhi, India'],
      description: 'Visit our beautiful campus'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday to Friday: 8:00 AM to 5:00 PM', 'Saturday: 9:00 AM to 2:00 PM'],
      description: 'We are here to help you'
    }
  ];

  const departments = [
    { dept: 'Admissions Office', phone: '+91-11-98765-43211', email: 'admissions@greenwoodsinternational.edu' },
    { dept: 'Principal\'s Office', phone: '+91-11-98765-43212', email: 'principal@greenwoodsinternational.edu' },
    { dept: 'Academic Office', phone: '+91-11-98765-43213', email: 'academics@greenwoodsinternational.edu' },
    { dept: 'Transport Department', phone: '+91-11-98765-43215', email: 'transport@greenwoodsinternational.edu' }
  ];

  const counselors = [
    { name: 'Ms. Rekha Gupta', specialization: 'Classes I-V admissions', phone: '+91-98765-43220' },
    { name: 'Mr. Deepak Sharma', specialization: 'Classes VI-X admissions', phone: '+91-98765-43221' },
    { name: 'Dr. Anjali Patel', specialization: 'Classes XI-XII admissions', phone: '+91-98765-43222' }
  ];

  const transportOptions = [
    {
      icon: Train,
      title: 'By Metro',
      description: 'Academic City Metro Station (2 km away)',
      details: 'Green Line connectivity to major city areas'
    },
    {
      icon: Car,
      title: 'By Car',
      description: 'Well-connected through major highways',
      details: 'Ample parking space available on campus'
    },
    {
      icon: Users,
      title: 'By Public Transport',
      description: 'Multiple bus routes pass through Education Street',
      details: 'Easy access from all parts of the city'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <HeroSection backgroundImage="./Contact/ContactImg1.webp">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          Contact Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-200 max-w-3xl mx-auto"
        >
          We welcome your inquiries and look forward to connecting with you
        </motion.p>
      </HeroSection>

      {/* Contact Information */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full text-center">
                  <info.icon className={`h-12 w-12 ${theme.primary} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{info.title}</h3>
                  <div className="mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 text-sm mb-1">{detail}</p>
                    ))}
                  </div>
                  <p className="text-gray-600 text-xs">{info.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Send Us a Message</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a question or need more information? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${theme.focusBorder} focus:border-2`}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${theme.focusBorder} focus:border-2`}
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${theme.focusBorder} focus:border-2`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${theme.focusBorder} focus:border-2`}
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="academic">Academic Information</option>
                    <option value="transport">Transport Services</option>
                    <option value="facilities">School Facilities</option>
                    <option value="general">General Query</option>
                    <option value="feedback">Feedback/Suggestions</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${theme.focusBorder} focus:border-2`}
                    placeholder="Please describe your query or message in detail..."
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className={`${theme.primaryBg} ${theme.primaryHover} text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto`}
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </Card>
        </div>
      </AnimatedSection>

      {/* Department Contacts */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Department Contacts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reach out to specific departments for targeted assistance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{dept.dept}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className={`h-4 w-4 ${theme.primary}`} />
                      <span className="text-gray-700">{dept.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className={`h-4 w-4 ${theme.primary}`} />
                      <span className="text-gray-700 break-all text-sm">{dept.email}</span>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Admission Counselors */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Admission Counselors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our counselors are available to guide you through the admission process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {counselors.map((counselor, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="text-center">
                  <Users className={`h-12 w-12 ${theme.primary} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{counselor.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{counselor.specialization}</p>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className={`h-4 w-4 ${theme.primary}`} />
                    <span className="text-gray-700">{counselor.phone}</span>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Location & Directions */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Location & Directions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find us easily with excellent connectivity from all parts of the city
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="./Activities/ActivitiesImg2.webp"
                      alt="School location"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Navigation className={`h-8 w-8 ${theme.primary}`} />
                  <h3 className="text-xl font-bold text-gray-900">How to Reach Us</h3>
                </div>
                <div className="space-y-6">
                  {transportOptions.map((option, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <option.icon className={`h-6 w-6 ${theme.primary} mt-1 flex-shrink-0`} />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{option.title}</h4>
                        <p className="text-gray-700 mb-1">{option.description}</p>
                        <p className="text-gray-600 text-sm">{option.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">GPS Coordinates:</h4>
                  <p className="text-blue-800 text-sm">28.6139° N, 77.2090° E</p>
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="./Activities/ActivitiesImg3.jpeg"
                      alt="School campus"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <MapPin className={`h-8 w-8 ${theme.primary}`} />
                  <h3 className="text-xl font-bold text-gray-900">Nearby Landmarks</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-900">Academic City Hospital</span>
                    <span className="text-gray-600 text-sm">500m</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-900">Education District Library</span>
                    <span className="text-gray-600 text-sm">300m</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-900">Sports Complex</span>
                    <span className="text-gray-600 text-sm">1 km</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-900">Shopping Mall</span>
                    <span className="text-gray-600 text-sm">1.5 km</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* School Visit */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Schedule a School Visit</h2>
              <p className="text-gray-600">
                Experience our campus and educational environment firsthand
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Scheduled Tours</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className={`h-5 w-5 ${theme.primary}`} />
                    <span className="text-gray-700">Every Tuesday and Thursday at 10:00 AM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className={`h-5 w-5 ${theme.primary}`} />
                    <span className="text-gray-700">Every Saturday at 11:00 AM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className={`h-5 w-5 ${theme.primary}`} />
                    <span className="text-gray-700">Duration: 1.5 hours</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">What You'll See</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Smart classrooms and laboratories</li>
                  <li>• Library and sports facilities</li>
                  <li>• Interaction with faculty and students</li>
                  <li>• Campus tour and infrastructure</li>
                  <li>• Q&A session with admissions team</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">To schedule a visit, contact us at:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <Phone className={`h-4 w-4 ${theme.primary}`} />
                  <span className="text-gray-700">+91-11-98765-43211</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className={`h-4 w-4 ${theme.primary}`} />
                  <span className="text-gray-700">visit@greenwoodsinternational.edu</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;