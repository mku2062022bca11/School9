import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  FileText,
  Award,
  Users,
  Building,
  CheckCircle,
  TrendingUp,
  Shield,
  Phone,
  Mail,
  MapPin,
  Calendar,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";

const MandatoryDisclosure = () => {
  const { theme } = useTheme();

  const basicInfo = [
    { label: "School Name", value: "QB365 Public School CBSE School" },
    { label: "Affiliation Number", value: "1234567" },
    { label: "School Code", value: "12345" },
    {
      label: "Complete Address",
      value: "123 Education Street, Academic City - 110001",
    },
    { label: "School Phone", value: "+91-11-98765-43210" },
    { label: "School Email", value: "info@greenwoodsinternational.edu" },
    { label: "Principal Name", value: "Dr. Priya Sharma" },
    {
      label: "Principal Qualification",
      value: "M.A. (Education), Ph.D. (Educational Leadership)",
    },
    { label: "School Status", value: "Private Unaided" },
    { label: "Year of Establishment", value: "1995" },
  ];

  const classXResults = [
    {
      year: "2023-24",
      appeared: 120,
      passed: 120,
      percentage: "100%",
      above90: "45 (37.5%)",
    },
    {
      year: "2022-23",
      appeared: 115,
      passed: 115,
      percentage: "100%",
      above90: "41 (35.7%)",
    },
    {
      year: "2021-22",
      appeared: 108,
      passed: 108,
      percentage: "100%",
      above90: "38 (35.2%)",
    },
    {
      year: "2020-21",
      appeared: 102,
      passed: 102,
      percentage: "100%",
      above90: "35 (34.3%)",
    },
    {
      year: "2019-20",
      appeared: 98,
      passed: 98,
      percentage: "100%",
      above90: "32 (32.7%)",
    },
  ];

  const classXIIResults = [
    {
      year: "2023-24",
      appeared: 95,
      passed: 93,
      percentage: "97.9%",
      above90: "28 (29.5%)",
    },
    {
      year: "2022-23",
      appeared: 88,
      passed: 86,
      percentage: "97.7%",
      above90: "25 (28.4%)",
    },
    {
      year: "2021-22",
      appeared: 85,
      passed: 83,
      percentage: "97.6%",
      above90: "23 (27.1%)",
    },
    {
      year: "2020-21",
      appeared: 82,
      passed: 80,
      percentage: "97.6%",
      above90: "21 (25.6%)",
    },
    {
      year: "2019-20",
      appeared: 79,
      passed: 77,
      percentage: "97.5%",
      above90: "19 (24.1%)",
    },
  ];

  const staffDetails = [
    { category: "Total Teaching Staff", count: "85" },
    { category: "Post Graduate", count: "78 (91.8%)" },
    { category: "B.Ed. Qualified", count: "82 (96.5%)" },
    { category: "M.Ed. Qualified", count: "23 (27.1%)" },
    { category: "Ph.D. Holders", count: "8 (9.4%)" },
    { category: "Administrative Staff", count: "15" },
    { category: "Support Staff", count: "22" },
    { category: "Security Staff", count: "6" },
  ];

  const infrastructureDetails = [
    { item: "Total Land Area", value: "5.2 acres" },
    { item: "Built-up Area", value: "3.8 acres" },
    { item: "Total Classrooms", value: "45" },
    { item: "Science Laboratories", value: "6 labs" },
    { item: "Computer Laboratories", value: "3 labs" },
    { item: "Library Books", value: "25,000+" },
    { item: "Playground Area", value: "2.5 acres" },
    { item: "Number of Buses", value: "12 buses" },
  ];

  const documents = [
    "Certificate of Recognition from Department of Education",
    "CBSE Affiliation Certificate",
    "Society Registration Certificate",
    "Trust Deed/Articles of Association",
    "Building Safety Certificate",
    "Fire Safety Certificate",
    "Water Quality Test Reports",
    "Environmental Clearance Certificate",
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <HeroSection backgroundImage=" ./Disclosure/DisclosureImg1.jpeg">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          Mandatory Public Disclosure
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-200 max-w-3xl mx-auto"
        >
          Transparency and compliance with CBSE guidelines
        </motion.p>
      </HeroSection>

      {/* Basic School Information */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>
              Basic School Information
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential details about our institution as per CBSE requirements
            </p>
          </div>
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {basicInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start py-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="font-medium text-gray-900 flex-shrink-0 w-1/2">
                    {info.label}:
                  </span>
                  <span className="text-gray-700 text-right">{info.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Academic Performance */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>
              Academic Performance Results
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CBSE board examination results for the last 5 years
            </p>
          </div>

          {/* Class X Results */}
          <div className="mb-12">
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className={`h-8 w-8 ${theme.primary}`} />
                <h3 className="text-2xl font-bold text-gray-900">
                  Class X Results (Last 5 Years)
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">
                        Academic Year
                      </th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">
                        Students Appeared
                      </th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">
                        Students Passed
                      </th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">
                        Pass Percentage
                      </th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">
                        90% & Above
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {classXResults.map((result, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-2 font-medium text-gray-900">
                          {result.year}
                        </td>
                        <td className="py-3 px-2 text-gray-700">
                          {result.appeared}
                        </td>
                        <td className="py-3 px-2 text-gray-700">
                          {result.passed}
                        </td>
                        <td className="py-3 px-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                            {result.percentage}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-gray-700">
                          {result.above90}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Class XII Results */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <Award className={`h-8 w-8 ${theme.primary}`} />
              <h3 className="text-2xl font-bold text-gray-900">
                Class XII Results (Last 5 Years)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-2 font-semibold text-gray-900">
                      Academic Year
                    </th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-900">
                      Students Appeared
                    </th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-900">
                      Students Passed
                    </th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-900">
                      Pass Percentage
                    </th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-900">
                      90% & Above
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {classXIIResults.map((result, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-2 font-medium text-gray-900">
                        {result.year}
                      </td>
                      <td className="py-3 px-2 text-gray-700">
                        {result.appeared}
                      </td>
                      <td className="py-3 px-2 text-gray-700">
                        {result.passed}
                      </td>
                      <td className="py-3 px-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                          {result.percentage}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-gray-700">
                        {result.above90}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Staff Details */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>
              Staff Details
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Qualified and experienced faculty ensuring quality education
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <Users className={`h-8 w-8 ${theme.primary}`} />
                <h3 className="text-xl font-bold text-gray-900">
                  Teaching Staff Qualifications
                </h3>
              </div>
              <div className="space-y-4">
                {staffDetails.slice(0, 5).map((staff, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="font-medium text-gray-900">
                      {staff.category}:
                    </span>
                    <span className="text-gray-700 font-semibold">
                      {staff.count}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <Shield className={`h-8 w-8 ${theme.primary}`} />
                <h3 className="text-xl font-bold text-gray-900">
                  Support Staff
                </h3>
              </div>
              <div className="space-y-4">
                {staffDetails.slice(5).map((staff, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="font-medium text-gray-900">
                      {staff.category}:
                    </span>
                    <span className="text-gray-700 font-semibold">
                      {staff.count}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Infrastructure Report */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>
              Infrastructure Report
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive facilities supporting quality education
            </p>
          </div>
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <Building className={`h-8 w-8 ${theme.primary}`} />
              <h3 className="text-xl font-bold text-gray-900">
                Facility Details
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {infrastructureDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="font-medium text-gray-900">
                    {detail.item}:
                  </span>
                  <span className="text-gray-700 font-semibold">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Mandatory Documents */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>
              Mandatory Documents
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All required certificates and clearances are available for public
              inspection
            </p>
          </div>
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <FileText className={`h-8 w-8 ${theme.primary}`} />
              <h3 className="text-xl font-bold text-gray-900">
                Available Documents
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((document, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <CheckCircle
                    className={`h-5 w-5 ${theme.primary} mt-0.5 flex-shrink-0`}
                  />
                  <span className="text-gray-700">{document}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> All documents mentioned above are
                available for inspection during school hours. Parents and
                stakeholders may request copies of relevant documents with prior
                appointment.
              </p>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Contact Information */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>
                Contact Information for Queries
              </h2>
              <p className="text-gray-600">
                For any queries regarding mandatory disclosure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Calendar className={`h-8 w-8 ${theme.primary} mb-3`} />
                <h3 className="font-semibold text-gray-900 mb-2">
                  Office Hours
                </h3>
                <p className="text-gray-600 text-sm">
                  Monday to Saturday
                  <br />
                  9:00 AM to 4:00 PM
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className={`h-8 w-8 ${theme.primary} mb-3`} />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91-11-98765-43210</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className={`h-8 w-8 ${theme.primary} mb-3`} />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 break-all">
                  admin@greenwoodsinternational.edu
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-lg">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">
                  RTI Officer: Mr. Suresh Kumar (+91-98765-43212)
                </span>
              </div>
            </div>
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                This disclosure is updated annually and the latest version is
                always available on our school website and notice board.
              </p>
            </div>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default MandatoryDisclosure;
