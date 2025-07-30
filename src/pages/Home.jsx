import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  BookOpen,
  Users,
  Award,
  Building,
  Calendar,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  Globe,
  Target,
  Heart,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: BookOpen,
      title: "CBSE Affiliation",
      description:
        "Proudly affiliated with CBSE, ensuring quality education that meets national standards and prepares students for competitive examinations.",
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description:
        "Our dedicated team of qualified teachers brings years of experience and expertise to provide personalized attention to every student.",
    },
    {
      icon: Building,
      title: "Modern Infrastructure",
      description:
        "State-of-the-art facilities including smart classrooms, well-equipped laboratories, library, and comprehensive sports facilities.",
    },
    {
      icon: Globe,
      title: "Holistic Development",
      description:
        "We focus on overall personality development through academics, sports, arts, and various extracurricular activities.",
    },
    {
      icon: Target,
      title: "Individual Attention",
      description:
        "Small class sizes ensure personalized attention and support, helping each student reach their full potential.",
    },
    {
      icon: Heart,
      title: "Technology Integration",
      description:
        "Modern technology and digital learning tools enhance education and prepare students for the digital future.",
    },
  ];

  const achievements = [
    "Best CBSE School Award 2023",
    "Excellence in Science Education 2022",
    "Outstanding Sports Achievement 2023",
    "Top Academic Performance in Board Results",
    "Best Infrastructure Award 2021",
    "Excellence in Extracurricular Activities",
  ];

  const quickActions = [
    { title: "Contact Us", path: "/contact-us", icon: Phone },
    { title: "Admissions", path: "/admissions", icon: Users },
    { title: "Academics", path: "/academics", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection showCarousel={true}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        >
          Welcome to QB365 Public School
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-8"
        >
          Excellence in Education Since 1995
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-100 max-w-3xl mx-auto mb-12"
        >
          At QB365 Public School CBSE School, we believe in nurturing young
          minds and shaping future leaders. Our commitment to academic
          excellence, combined with holistic development, makes us one of the
          premier educational institutions in the region.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/admissions"
            className={`${theme.primaryBg} ${theme.primaryHover} text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2`}
          >
            Apply Now <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/about-us"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </Link>
        </motion.div>
      </HeroSection>

      {/* About Preview */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${theme.primary}`}>
                About Our School
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                QB365 Public School is a prestigious CBSE affiliated school that
                has been serving the community for over 25 years. We provide a
                comprehensive educational experience that goes beyond
                traditional classroom learning, focusing on character building,
                critical thinking, and creative expression.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our state-of-the-art facilities, experienced faculty, and
                innovative teaching methodologies ensure that every student
                receives the best possible education. We maintain small class
                sizes to provide personalized attention and create an
                environment where every child can thrive.
              </p>
              <Link
                to="/about-us"
                className={`${theme.primary} hover:underline font-semibold flex items-center gap-2`}
              >
                Read More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <Card className="transform rotate-2 absolute top-4 left-4 z-0 opacity-30">
                <img
                  src="./Home/HomeImg1.webp"
                  alt="Students in classroom"
                  className="h-64 w-full object-cover rounded-lg"
                />
              </Card>
              <Card className="relative z-10">
                <img
                  src="./Home/HomeImg2.jpeg"
                  alt="School building"
                  className="h-64 w-full object-cover rounded-lg"
                />
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Greenwoods */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>
              Why Choose Greenwoods
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes our school the perfect choice for your child's
              educational journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full text-center overflow-hidden">
                  <div className="h-32 mb-4 -mx-6 -mt-6">
                    <img
                      src={
                        [
                          "./Home/HomeImg3.webp",
                          "./Home/HomeImg4.webp",
                          "./Home/HomeImg5.jpeg",
                          "./Home/HomeImg6.webp",
                          "./Home/HomeImg7.jpeg",
                          "./Home/HomeImg8.webp",
                        ][index]
                      }
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <feature.icon
                    className={`h-12 w-12 ${theme.primary} mx-auto mb-4`}
                  />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Achievements */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>
              Achievements & Awards
            </h2>
            <p className="text-gray-600">
              Recognition of our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="flex items-center gap-4">
                  <Award className={`h-8 w-8 ${theme.primary} flex-shrink-0`} />
                  <span className="text-gray-800 font-medium">
                    {achievement}
                  </span>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Quick Access */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>
              Quick Access
            </h2>
            <p className="text-gray-600">
              Ready to join our school community? Get started here
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Link to={action.path}>
                  <Card className="text-center group cursor-pointer">
                    <action.icon
                      className={`h-16 w-16 ${theme.primary} mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {action.title}
                    </h3>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Info */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className={`h-8 w-8 ${theme.primary} mb-3`} />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className={`h-8 w-8 ${theme.primary} mb-3`} />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 break-all">
                  admissions@greenwoodsinternational.edu
                </p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className={`h-8 w-8 ${theme.primary} mb-3`} />
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Education Street, Academic City
                </p>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Mandatory Disclosure */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card>
            <h2 className={`text-2xl font-bold mb-4 ${theme.primary}`}>
              Mandatory Public Disclosure
            </h2>
            <p className="text-gray-600 mb-6">
              As per CBSE guidelines, all mandatory information including
              infrastructure details, academic performance, fee structure, and
              other important documents are available for public viewing.
            </p>
            <Link
              to="/mandatory-disclosure"
              className={`${theme.primaryBg} ${theme.primaryHover} text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2`}
            >
              View Disclosure <ArrowRight className="h-5 w-5" />
            </Link>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
