import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  BookOpen,
  Calendar,
  Award,
  Users,
  Laptop,
  Globe,
  Target,
  CheckCircle,
  Clock,
  FileText,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";

const Academics = () => {
  const { theme } = useTheme();

  const classStructure = [
    {
      title: "Primary Section (Classes I-V)",
      description:
        "Foundation years focusing on basic literacy, numeracy, and life skills.",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Environmental Studies",
        "Computer Science",
        "Art & Craft",
        "Music",
        "Physical Education",
      ],
      icon: BookOpen,
    },
    {
      title: "Middle School (Classes VI-VIII)",
      description:
        "Building on foundational knowledge with introduction to specialized subjects.",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Science",
        "Social Studies",
        "Computer Science",
        "Third Language",
        "Activity Subjects",
      ],
      icon: Users,
    },
    {
      title: "Secondary Section (Classes IX-X)",
      description:
        "Preparation for board examinations with comprehensive CBSE syllabus coverage.",
      subjects: [
        "English",
        "Hindi",
        "Mathematics",
        "Science (Physics, Chemistry, Biology)",
        "Social Studies",
        "Computer Applications",
        "Physical Education",
      ],
      icon: Award,
    },
    {
      title: "Senior Secondary (Classes XI-XII)",
      description:
        "Stream-wise specialization with choice of subjects for career preparation.",
      subjects: [
        "Science Stream",
        "Commerce Stream",
        "Humanities Stream",
        "Computer Science",
        "Physical Education",
      ],
      icon: Target,
    },
  ];

  const teachingMethods = [
    {
      title: "Interactive Learning",
      description:
        "Smart classrooms with audio-visual aids and hands-on experiments",
      icon: Laptop,
    },
    {
      title: "Assessment Methods",
      description:
        "Continuous and comprehensive evaluation with diverse assessment techniques",
      icon: FileText,
    },
    {
      title: "Support Systems",
      description: "Remedial classes, advanced programs, and peer tutoring",
      icon: Users,
    },
    {
      title: "Technology Integration",
      description: "Digital learning platforms and modern educational tools",
      icon: Globe,
    },
  ];

  const achievements = [
    "100% pass rate in Class X board examinations for the last 5 years",
    "98% pass rate in Class XII with 85% students scoring above 80%",
    "Top performers in regional science olympiads and competitions",
    "Excellence in mathematics and science subjects",
    "High success rate in competitive entrance examinations",
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <HeroSection backgroundImage="./Academics/AcademicsImg1.webp">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          Academic Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-200 max-w-3xl mx-auto"
        >
          Comprehensive CBSE curriculum with innovative teaching methodologies
        </motion.p>
      </HeroSection>

      {/* Curriculum Overview */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-6 ${theme.primary}`}>
                Curriculum Overview
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                At QB365 Public School, we offer a comprehensive curriculum that
                balances academic rigor with practical application. Our approach
                integrates theoretical knowledge with hands-on learning
                experiences, ensuring students develop both intellectual and
                practical skills.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${theme.primary}`}>
                    Key Features:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className={`h-5 w-5 ${theme.primary} mt-0.5 flex-shrink-0`}
                      />
                      CBSE affiliated curriculum with modern teaching
                      methodologies
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className={`h-5 w-5 ${theme.primary} mt-0.5 flex-shrink-0`}
                      />
                      Integration of technology in classroom instruction
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className={`h-5 w-5 ${theme.primary} mt-0.5 flex-shrink-0`}
                      />
                      Project-based learning and research opportunities
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className={`h-5 w-5 ${theme.primary} mt-0.5 flex-shrink-0`}
                      />
                      Regular assessments and continuous evaluation
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-4 ${theme.primary}`}>
                    Additional Support:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className={`h-5 w-5 ${theme.primary} mt-0.5 flex-shrink-0`}
                      />
                      Individual learning support and remedial classes
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className={`h-5 w-5 ${theme.primary} mt-0.5 flex-shrink-0`}
                      />
                      Career guidance and counseling services
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className={`h-5 w-5 ${theme.primary} mt-0.5 flex-shrink-0`}
                      />
                      Competitive exam preparation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className={`h-5 w-5 ${theme.primary} mt-0.5 flex-shrink-0`}
                      />
                      Parent-teacher collaboration programs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Class-wise Syllabus */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>
              CBSE Class-wise Syllabus
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured learning progression from foundation to specialization
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {classStructure.map((section, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full overflow-hidden">
                  <div className="h-32 mb-4 -mx-6 -mt-6">
                    <img
                      src={
                        [
                          "./Academics/AcademicsImg2.jpeg",
                          "./Academics/AcademicsImg3.webp",
                          "./Academics/AcademicsImg4.webp",
                          "./Academics/AcademicsImg5.webp",
                        ][index]
                      }
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <section.icon className={`h-12 w-12 ${theme.primary} mb-4`} />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Subjects:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {section.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 ${theme.primaryBg} bg-opacity-10 ${theme.primary} text-sm rounded-full`}
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Academic Calendar */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>
              Academic Calendar
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Well-structured academic year for optimal learning outcomes
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className={`h-8 w-8 ${theme.primary}`} />
                <h3 className="text-xl font-semibold text-gray-900">
                  Term 1 (April - September)
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Clock
                    className={`h-4 w-4 ${theme.primary} mt-1 flex-shrink-0`}
                  />
                  <span>
                    <strong>April:</strong> New session begins, orientation
                    programs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock
                    className={`h-4 w-4 ${theme.primary} mt-1 flex-shrink-0`}
                  />
                  <span>
                    <strong>May-June:</strong> Regular classes, unit tests
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock
                    className={`h-4 w-4 ${theme.primary} mt-1 flex-shrink-0`}
                  />
                  <span>
                    <strong>July:</strong> Mid-term examinations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock
                    className={`h-4 w-4 ${theme.primary} mt-1 flex-shrink-0`}
                  />
                  <span>
                    <strong>August-September:</strong> Regular classes, project
                    work
                  </span>
                </li>
              </ul>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className={`h-8 w-8 ${theme.primary}`} />
                <h3 className="text-xl font-semibold text-gray-900">
                  Term 2 (October - March)
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Clock
                    className={`h-4 w-4 ${theme.primary} mt-1 flex-shrink-0`}
                  />
                  <span>
                    <strong>October-November:</strong> Regular classes,
                    practical exams
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock
                    className={`h-4 w-4 ${theme.primary} mt-1 flex-shrink-0`}
                  />
                  <span>
                    <strong>December:</strong> Winter break, revision classes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock
                    className={`h-4 w-4 ${theme.primary} mt-1 flex-shrink-0`}
                  />
                  <span>
                    <strong>January-February:</strong> Annual examinations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock
                    className={`h-4 w-4 ${theme.primary} mt-1 flex-shrink-0`}
                  />
                  <span>
                    <strong>March:</strong> Result declaration, annual function
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Teaching Methodology */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>
              Teaching Methodology
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Innovative approaches that combine traditional and modern teaching
              methods
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachingMethods.map((method, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full text-center">
                  <method.icon
                    className={`h-12 w-12 ${theme.primary} mx-auto mb-4`}
                  />
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {method.title}
                  </h3>
                  <p className="text-gray-600">{method.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Affiliation Details */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${theme.primary}`}>
                  Affiliation Details
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <strong>School Name:</strong> QB365 Public School CBSE
                    School
                  </div>
                  <div>
                    <strong>CBSE Affiliation Number:</strong> 123456789
                  </div>
                  <div>
                    <strong>School Code:</strong> 12345
                  </div>
                  <div>
                    <strong>Recognition:</strong> Permanent recognition from
                    Department of Education
                  </div>
                  <div>
                    <strong>Accreditation:</strong> ISO 9001:2015 certified for
                    quality management
                  </div>
                </div>
                <p className="text-gray-600 mt-6">
                  The school is regularly inspected by CBSE officials and
                  maintains all required standards for affiliation. We submit
                  annual reports and comply with all CBSE guidelines and
                  regulations.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
                <Award className={`h-20 w-20 ${theme.primary} mx-auto mb-4`} />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    CBSE Affiliated
                  </h3>
                  <p className="text-gray-600">
                    Recognized for maintaining high educational standards
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Academic Achievements */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>
              Academic Achievements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Consistent excellence in academic performance and competitive
              examinations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="flex items-start gap-4">
                  <CheckCircle
                    className={`h-6 w-6 ${theme.primary} flex-shrink-0 mt-1`}
                  />
                  <span className="text-gray-800">{achievement}</span>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Academics;
