import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  Monitor, 
  Microscope, 
  BookOpen, 
  Dumbbell,
  Bus,
  Wifi,
  Building,
  Zap,
  Shield,
  Droplets,
  TreePine,
  Recycle
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';
import HeroSection from '../components/HeroSection';

const Infrastructure = () => {
  const { theme } = useTheme();

  const facilities = [
    {
      title: 'Smart Digital Classrooms',
      description: 'Every classroom equipped with interactive smart boards, high-speed internet, and modern technology',
      features: [
        'Interactive smart boards in all classrooms',
        'Audio-visual systems for multimedia presentations',
        'Climate-controlled environment',
        'Ergonomic furniture for student comfort',
        'Individual charging stations',
        'High-speed WiFi connectivity'
      ],
      icon: Monitor,
      image: 'from-blue-100 to-purple-100'
    },
    {
      title: 'Science & Computer Labs',
      description: 'State-of-the-art laboratories for hands-on learning and practical experience',
      features: [
        'Separate Physics, Chemistry, and Biology labs',
        '3 Computer labs with 120 modern computers',
        'Language lab with 40 stations',
        'Mathematics lab with teaching aids',
        'Latest scientific equipment and instruments',
        'Safety equipment and protocols'
      ],
      icon: Microscope,
      image: 'from-green-100 to-blue-100'
    },
    {
      title: 'Central Library',
      description: 'Comprehensive library with over 25,000 books and digital resources',
      features: [
        'Over 25,000 books across all subjects',
        'Digital resources and e-books',
        'Comfortable reading areas',
        'Computer terminals with internet access',
        'Research databases and online journals',
        'Special sections for different age groups'
      ],
      icon: BookOpen,
      image: 'from-purple-100 to-pink-100'
    },
    {
      title: 'Sports Facilities',
      description: 'Indoor and outdoor sports facilities for comprehensive physical development',
      features: [
        'Multipurpose gymnasium',
        'Swimming pool (25m x 12m)',
        'Football and cricket grounds',
        'Basketball and tennis courts',
        'Athletic track for running events',
        'Indoor games and fitness equipment'
      ],
      icon: Dumbbell,
      image: 'from-orange-100 to-red-100'
    },
    {
      title: 'Transport System',
      description: 'Safe and reliable transportation with GPS tracking and security features',
      features: [
        '12 GPS-enabled buses',
        'CCTV cameras in all vehicles',
        '15 different routes covering the city',
        'Trained drivers and female attendants',
        'Real-time tracking for parents',
        'Emergency communication systems'
      ],
      icon: Bus,
      image: 'from-teal-100 to-cyan-100'
    }
  ];

  const additionalFacilities = [
    {
      title: 'High-Speed Internet',
      description: 'Campus-wide WiFi connectivity for digital learning',
      icon: Wifi
    },
    {
      title: 'Modern Infrastructure',
      description: '5.2 acres campus with 4-floor building',
      icon: Building
    },
    {
      title: 'Power Backup',
      description: 'Uninterrupted power supply with generators',
      icon: Zap
    },
    {
      title: '24/7 Security',
      description: 'Round-the-clock security with CCTV surveillance',
      icon: Shield
    },
    {
      title: 'Water Purification',
      description: 'RO systems throughout campus for safe drinking water',
      icon: Droplets
    },
    {
      title: 'Green Campus',
      description: '30% of campus area under plantation',
      icon: TreePine
    }
  ];

  const sustainability = [
    {
      title: 'Solar Power',
      description: '50 kW solar panel installation for renewable energy',
      icon: Zap
    },
    {
      title: 'Rainwater Harvesting',
      description: '3 collection points for water conservation',
      icon: Droplets
    },
    {
      title: 'Waste Management',
      description: 'Organic and recyclable waste segregation system',
      icon: Recycle
    },
    {
      title: 'Green Cover',
      description: 'Extensive plantation and landscaped gardens',
      icon: TreePine
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <HeroSection backgroundImage="./Infrastructure/InfrastructureImg1.webp">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          World-Class Infrastructure
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-200 max-w-3xl mx-auto"
        >
          Modern facilities designed to inspire learning and foster excellence
        </motion.p>
      </HeroSection>

      {/* Main Facilities */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <Card>
                      <facility.icon className={`h-12 w-12 ${theme.primary} mb-4`} />
                      <div className="h-40 mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={[
                            './Infrastructure/InfrastructureImg2.webp',
                            './Infrastructure/InfrastructureImg3.jpeg',
                            ' ./Infrastructure/InfrastructureImg4.jpeg',
                            './Infrastructure/InfrastructureImg5.webp',
                            './Infrastructure/InfrastructureImg6.webp'
                          ][index]}
                          alt={facility.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className={`text-2xl font-bold mb-4 ${theme.primary}`}>{facility.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{facility.description}</p>
                      <div className="space-y-3">
                        {facility.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Card className="relative overflow-hidden">
                      <img 
                        src={[
                          './Infrastructure/InfrastructureImg7.webp',
                          './Infrastructure/InfrastructureImg8.jpeg',
                          './Infrastructure/InfrastructureImg9.jpeg',
                          ' ./Infrastructure/InfrastructureImg10.webp',
                          './Infrastructure/InfrastructureImg11.webp'
                        ][index]}
                        alt={facility.title}
                        className="h-80 w-full object-cover rounded-lg"
                      />
                    </Card>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Additional Facilities */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Additional Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive infrastructure to support all aspects of student life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFacilities.map((facility, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full text-center">
                  <facility.icon className={`h-12 w-12 ${theme.primary} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Specifications */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Campus Specifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detailed specifications of our infrastructure and facilities
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <h3 className={`text-xl font-bold mb-6 ${theme.primary}`}>Building & Facilities</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Total Land Area:</span>
                  <span className="text-gray-700">5.2 acres</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Built-up Area:</span>
                  <span className="text-gray-700">3.8 acres</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Number of Floors:</span>
                  <span className="text-gray-700">4 floors + ground floor</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Total Classrooms:</span>
                  <span className="text-gray-700">45 classrooms</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Specialized Rooms:</span>
                  <span className="text-gray-700">15 rooms</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Average Class Size:</span>
                  <span className="text-gray-700">25 students</span>
                </div>
              </div>
            </Card>
            <Card>
              <h3 className={`text-xl font-bold mb-6 ${theme.primary}`}>Safety & Security</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">CCTV Cameras:</span>
                  <span className="text-gray-700">45 cameras</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Fire Extinguishers:</span>
                  <span className="text-gray-700">25 units</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Emergency Exits:</span>
                  <span className="text-gray-700">8 clearly marked exits</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">First Aid Stations:</span>
                  <span className="text-gray-700">5 stations</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Security Personnel:</span>
                  <span className="text-gray-700">24/7 coverage</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Medical Staff:</span>
                  <span className="text-gray-700">Qualified nurse on duty</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Sustainability */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Environmental Initiatives</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to sustainability and environmental responsibility
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainability.map((initiative, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full text-center">
                  <initiative.icon className={`h-12 w-12 ${theme.primary} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{initiative.title}</h3>
                  <p className="text-gray-600 text-sm">{initiative.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Health & Hygiene */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Health & Hygiene Facilities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Maintaining the highest standards of health and cleanliness
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className={`h-10 w-10 ${theme.primary} mx-auto mb-3`} />
                <h3 className="font-semibold text-gray-900 mb-2">Medical Room</h3>
                <p className="text-gray-600 text-sm">Qualified nurse on duty with basic medical equipment</p>
              </div>
              <div className="text-center">
                <Droplets className={`h-10 w-10 ${theme.primary} mx-auto mb-3`} />
                <h3 className="font-semibold text-gray-900 mb-2">Water Purification</h3>
                <p className="text-gray-600 text-sm">RO systems throughout campus for safe drinking water</p>
              </div>
              <div className="text-center">
                <Recycle className={`h-10 w-10 ${theme.primary} mx-auto mb-3`} />
                <h3 className="font-semibold text-gray-900 mb-2">Sanitation</h3>
                <p className="text-gray-600 text-sm">Regular cleaning and sanitization protocols</p>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Infrastructure;