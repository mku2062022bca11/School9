import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  Eye,
  Target,
  Users,
  Award,
  BookOpen,
  Heart,
  GraduationCap,
  Star,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import Card from "../components/Card";
import HeroSection from "../components/HeroSection";

const About = () => {
  const { theme } = useTheme();

  const managementTeam = [
    {
      name: "Mr. Rajesh Kumar",
      position: "Chairman",
      description:
        "With over 30 years of experience in education administration, Mr. Kumar provides strategic leadership and vision for the institution's growth and development.",
      icon: Award,
    },
    {
      name: "Mrs. Sunita Patel",
      position: "Vice Chairperson",
      description:
        "An educationist with extensive experience in curriculum development and teacher training, Mrs. Patel oversees academic policies and standards.",
      icon: BookOpen,
    },
    {
      name: "Dr. Amit Singh",
      position: "Director Academics",
      description:
        "PhD in Education, Dr. Singh leads the academic team and ensures the implementation of best practices in teaching and learning.",
      icon: GraduationCap,
    },
    {
      name: "Ms. Kavita Reddy",
      position: "Administrative Director",
      description:
        "MBA in Operations, Ms. Reddy manages the day-to-day operations and ensures smooth functioning of all administrative processes.",
      icon: Users,
    },
    {
      name: "Mr. Vikram Joshi",
      position: "Student Welfare Coordinator",
      description:
        "A certified counselor who focuses on student well-being, personal development, and creating a supportive school environment.",
      icon: Heart,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <HeroSection backgroundImage="./About/AboutImg1.webp">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          About QB365 Public School
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-200 max-w-3xl mx-auto"
        >
          Excellence in Education Since 1995
        </motion.p>
      </HeroSection>

      {/* About the School */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-6 ${theme.primary}`}>
                Our Story
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                Established in 1995, QB365 Public School CBSE School has been a
                beacon of educational excellence for over 25 years. We are
                committed to providing quality education that nurtures academic
                excellence while fostering personal growth and character
                development.
              </p>
              <p className="text-lg mb-6">
                Our institution stands as a testament to progressive education,
                where traditional values meet modern teaching methodologies. We
                believe that education is not just about academic achievement
                but about creating well-rounded individuals who can contribute
                meaningfully to society.
              </p>
              <p className="text-lg">
                Over the years, we have evolved to meet the changing needs of
                education while maintaining our core commitment to excellence,
                integrity, and holistic development. Today, we stand proud as
                one of the leading educational institutions in the region, with
                thousands of successful alumni making their mark in various
                fields around the world.
              </p>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Vision & Mission */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="h-full">
              <div className="text-center mb-6">
                <Eye className={`h-12 w-12 ${theme.primary} mx-auto mb-4`} />
                <h3 className={`text-2xl font-bold ${theme.primary}`}>
                  Our Vision
                </h3>
                <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="./About/AboutImg2.jpeg"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                To be a leading educational institution that empowers students
                to become confident, creative, and compassionate global citizens
                who can excel in an ever-changing world while maintaining strong
                moral values and cultural roots.
              </p>
            </Card>
            <Card className="h-full">
              <div className="text-center mb-6">
                <Target className={`h-12 w-12 ${theme.primary} mx-auto mb-4`} />
                <h3 className={`text-2xl font-bold ${theme.primary}`}>
                  Our Mission
                </h3>
                <div className="w-full h-32 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="./About/AboutImg3.webp"
                    alt="Mission"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Our mission is to provide a nurturing and challenging
                  environment that:
                </p>
                <ul className="space-y-2">
                  <li>• Promotes academic excellence and critical thinking</li>
                  <li>
                    • Develops character, integrity, and social responsibility
                  </li>
                  <li>
                    • Encourages creativity, innovation, and lifelong learning
                  </li>
                  <li>
                    • Celebrates diversity and promotes inclusive education
                  </li>
                  <li>
                    • Prepares students for success in higher education and
                    beyond
                  </li>
                  <li>
                    • Instills values of respect, empathy, and environmental
                    consciousness
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Principal's Message */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-6 ${theme.primary}`}>
                Principal's Message
              </h2>
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src="./About/AboutImg4.webp"
                  alt="Principal Dr. Priya Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Dr. Priya Sharma
              </h3>
              <p className="text-gray-600">Principal</p>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Dear Students, Parents, and Well-wishers,</strong>
              </p>
              <p>
                Welcome to QB365 Public School CBSE School, where we believe
                that every child is unique and has the potential to excel. As
                the Principal of this esteemed institution, I am proud to lead a
                team of dedicated educators who are committed to nurturing young
                minds.
              </p>
              <p>
                In today's rapidly evolving world, education must go beyond
                textbooks and examinations. At Greenwoods, we focus on
                developing critical thinking skills, creativity, and emotional
                intelligence alongside academic excellence. Our holistic
                approach ensures that students are well-prepared for the
                challenges and opportunities that lie ahead.
              </p>
              <p>
                We maintain high standards in all aspects of education – from
                curriculum delivery to extracurricular activities. Our
                experienced faculty members use innovative teaching methods to
                make learning engaging and meaningful. We also emphasize the
                importance of values, ethics, and social responsibility in
                shaping character.
              </p>
              <p>
                I encourage all our students to make the most of the
                opportunities available at Greenwoods. Participate actively in
                classroom discussions, engage in extracurricular activities, and
                always strive for excellence. Remember, success is not just
                about grades – it's about becoming a responsible and
                contributing member of society.
              </p>
              <p>
                I look forward to working with students, parents, and staff to
                continue our tradition of excellence and create a bright future
                for all our students.
              </p>
              <p className="text-right font-semibold">
                Warm regards,
                <br />
                Dr. Priya Sharma
                <br />
                Principal, QB365 Public School CBSE School
              </p>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Management Team */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>
              Management Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced leadership team that guides our institution
              towards excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full text-center overflow-hidden">
                  <div className="h-40 mb-4 -mx-6 -mt-6">
                    <img
                      src={
                        [
                          "./About/AboutImg5.webp",
                          "./About/AboutImg6.webp",
                          "./About/AboutImg7.jpeg",
                          "./About/AboutImg8.jpeg",
                          "./About/AboutImg9.webp",
                        ][index]
                      }
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <member.icon
                    className={`h-12 w-12 ${theme.primary} mx-auto mb-4`}
                  />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {member.name}
                  </h3>
                  <p className={`font-medium mb-4 ${theme.primary}`}>
                    {member.position}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Greenwoods
              International
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "Striving for the highest standards in all endeavors",
              },
              {
                title: "Integrity",
                description: "Maintaining honesty and strong moral principles",
              },
              {
                title: "Innovation",
                description: "Embracing creativity and progressive thinking",
              },
              {
                title: "Compassion",
                description:
                  "Caring for others and building an inclusive community",
              },
            ].map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full text-center">
                  <Star className={`h-10 w-10 ${theme.primary} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;
