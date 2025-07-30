import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  FileText, 
  Calendar, 
  CreditCard, 
  CheckCircle,
  User,
  Mail,
  Phone,
  Users,
  BookOpen,
  Award,
  Clock,
  AlertCircle
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';
import HeroSection from '../components/HeroSection';

const Admissions = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    class: '',
    previousSchool: '',
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
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  const admissionSteps = [
    {
      step: 1,
      title: 'Application Submission',
      description: 'Complete the online application form and submit required documents',
      icon: FileText
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Verification of all submitted documents by our admission committee',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Interaction & Assessment',
      description: 'Age-appropriate interaction and academic assessment if required',
      icon: Users
    },
    {
      step: 4,
      title: 'Admission Confirmation',
      description: 'Admission offer letter and fee payment within specified timeline',
      icon: Award
    }
  ];

  const feeStructure = [
    {
      category: 'Nursery to Class II',
      tuition: '₹45,000',
      admission: '₹15,000',
      development: '₹10,000',
      transport: '₹18,000'
    },
    {
      category: 'Classes III to V',
      tuition: '₹55,000',
      admission: '₹15,000',
      development: '₹12,000',
      transport: '₹20,000'
    },
    {
      category: 'Classes VI to VIII',
      tuition: '₹65,000',
      admission: '₹20,000',
      development: '₹15,000',
      transport: '₹22,000'
    },
    {
      category: 'Classes IX to X',
      tuition: '₹75,000',
      admission: '₹25,000',
      development: '₹18,000',
      transport: '₹25,000'
    },
    {
      category: 'Classes XI to XII',
      tuition: '₹85,000',
      admission: '₹30,000',
      development: '₹20,000',
      transport: '₹25,000'
    }
  ];

  const importantDates = [
    { event: 'Registration Opens', date: 'December 1st' },
    { event: 'Last Date for Applications', date: 'February 28th' },
    { event: 'Assessment Period', date: 'March 1st - March 15th' },
    { event: 'Result Declaration', date: 'March 20th' },
    { event: 'Admission Confirmation', date: 'March 25th - April 5th' },
    { event: 'New Session Begins', date: 'April 15th' }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <HeroSection backgroundImage="./Admissions/AdmissionImg1.webp">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          Admissions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-200 max-w-3xl mx-auto"
        >
          Join our vibrant learning community where excellence meets opportunity
        </motion.p>
      </HeroSection>

      {/* Admission Process */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Admission Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our admission process is designed to be transparent, fair, and comprehensive
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full text-center relative">
                  <div className={`w-12 h-12 ${theme.primaryBg} text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg`}>
                    {step.step}
                  </div>
                  <step.icon className={`h-10 w-10 ${theme.primary} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <div className={`w-8 h-0.5 ${theme.primaryBg}`}></div>
                    </div>
                  )}
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Fee Structure */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Fee Structure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent and competitive fee structure ensuring quality education
            </p>
          </div>
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-2 font-semibold text-gray-900">Class</th>
                    <th className="text-left py-4 px-2 font-semibold text-gray-900">Annual Tuition</th>
                    <th className="text-left py-4 px-2 font-semibold text-gray-900">Admission Fee</th>
                    <th className="text-left py-4 px-2 font-semibold text-gray-900">Development Fee</th>
                    <th className="text-left py-4 px-2 font-semibold text-gray-900">Transport Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 px-2 font-medium text-gray-900">{fee.category}</td>
                      <td className="py-4 px-2 text-gray-700">{fee.tuition}</td>
                      <td className="py-4 px-2 text-gray-700">{fee.admission}</td>
                      <td className="py-4 px-2 text-gray-700">{fee.development}</td>
                      <td className="py-4 px-2 text-gray-700">{fee.transport} (optional)</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-semibold mb-1">Payment Options & Discounts:</p>
                  <ul className="space-y-1">
                    <li>• Annual payment with 5% discount</li>
                    <li>• Sibling discount of 15% on tuition fee</li>
                    <li>• Merit scholarships for top performers</li>
                    <li>• Need-based financial assistance available</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Online Admission Form */}
      <AnimatedSection className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Online Admission Enquiry</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Submit your enquiry and our admission counselors will contact you
            </p>
          </div>
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${theme.focusBorder} focus:border-2`}
                      placeholder="Enter student's full name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Parent/Guardian Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${theme.focusBorder} focus:border-2`}
                      placeholder="Enter parent's full name"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${theme.focusBorder} focus:border-2`}
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-2">
                    Class Seeking Admission *
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      id="class"
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      required
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${theme.focusBorder} focus:border-2`}
                    >
                      <option value="">Select Class</option>
                      <option value="nursery">Nursery</option>
                      <option value="lkg">LKG</option>
                      <option value="ukg">UKG</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={`class-${i + 1}`}>Class {i + 1}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700 mb-2">
                    Previous School
                  </label>
                  <input
                    type="text"
                    id="previousSchool"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${theme.focusBorder} focus:border-2`}
                    placeholder="Enter previous school name (if any)"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${theme.focusBorder} focus:border-2`}
                  placeholder="Any specific questions or requirements..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className={`${theme.primaryBg} ${theme.primaryHover} text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto`}
                >
                  Submit Enquiry
                  <FileText className="h-5 w-5" />
                </button>
              </div>
            </form>
          </Card>
        </div>
      </AnimatedSection>

      {/* Important Dates */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Important Dates</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key dates for the admission process - mark your calendar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="flex items-center gap-4">
                  <Calendar className={`h-8 w-8 ${theme.primary} flex-shrink-0`} />
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.event}</h3>
                    <p className="text-gray-600">{item.date}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Note: Dates may vary for different classes and availability of seats</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact for Admissions */}
      <AnimatedSection className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Contact for Admissions</h2>
              <p className="text-gray-600">
                Our admission counselors are available to guide you through the process
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className={`h-6 w-6 ${theme.primary}`} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">Monday to Saturday, 9:00 AM to 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className={`h-6 w-6 ${theme.primary}`} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className={`h-6 w-6 ${theme.primary}`} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 break-all">admissions@greenwoodsinternational.edu</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Admission Counselors</h3>
               <div className="mb-4">
                 <img 
                   src="./Admissions/AdmissionImg2.webp"
                   alt="Admission counselors"
                   className="w-full h-24 object-cover rounded-lg"
                 />
               </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Ms. Rekha Gupta</strong> - Classes I-V
                    <br />
                    <span className="text-gray-600">+91 98765 43220</span>
                  </div>
                  <div>
                    <strong>Mr. Deepak Sharma</strong> - Classes VI-X
                    <br />
                    <span className="text-gray-600">+91 98765 43221</span>
                  </div>
                  <div>
                    <strong>Dr. Anjali Patel</strong> - Classes XI-XII
                    <br />
                    <span className="text-gray-600">+91 98765 43222</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Admissions;