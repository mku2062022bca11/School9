import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  Music, 
  Palette, 
  Trophy, 
  BookOpen,
  Calendar,
  Camera,
  Users,
  Star,
  Award,
  Clock,
  MapPin,
  Heart
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';
import HeroSection from '../components/HeroSection';

const Activities = () => {
  const { theme } = useTheme();

  const activities = [
    {
      category: 'Performing Arts',
      icon: Music,
      activities: [
        'Music: Vocal and instrumental training in Indian and Western styles',
        'Dance: Classical, folk, contemporary, and international dance forms',
        'Drama & Theatre: Acting, scriptwriting, stage production, and direction',
        'Public Speaking: Debates, elocution, storytelling, and presentation skills',
        'Poetry & Creative Writing: Literary expression and creative composition'
      ],
      color: 'from-purple-100 to-pink-100'
    },
    {
      category: 'Visual Arts',
      icon: Palette,
      activities: [
        'Painting & Drawing: Various mediums and artistic techniques',
        'Sculpture & Craft: Clay modeling, paper craft, and creative projects',
        'Photography: Digital photography and visual storytelling',
        'Graphic Design: Computer-aided design and multimedia creation',
        'Fashion & Textile: Design concepts and practical skills'
      ],
      color: 'from-blue-100 to-purple-100'
    },
    {
      category: 'Clubs & Societies',
      icon: Users,
      activities: [
        'Science Club: Experiments, projects, and scientific research',
        'Mathematics Club: Problem-solving, puzzles, and mathematical exploration',
        'Robotics Club: Programming, engineering, and technology innovation',
        'Environment Club: Conservation projects and sustainability initiatives',
        'Quiz Club: General knowledge, academic competitions, and brain games'
      ],
      color: 'from-green-100 to-blue-100'
    },
    {
      category: 'Literary Activities',
      icon: BookOpen,
      activities: [
        'School Magazine: Student publications and editorial work',
        'Book Club: Reading programs and literary discussions',
        'Creative Writing: Poetry, stories, and journalistic writing',
        'Language Societies: Hindi, English, and foreign language practice',
        'Calligraphy: Beautiful writing in various scripts and styles'
      ],
      color: 'from-orange-100 to-red-100'
    }
  ];

  const annualEvents = [
    {
      title: 'Annual Day Celebration',
      description: 'A spectacular showcase of student talents featuring cultural performances, academic achievements, and community participation',
      icon: Star,
      highlights: [
        'Cultural performances by all grades',
        'Academic achievement recognition',
        'Sports awards and honors',
        'Parent and community participation',
        'Professional stage production'
      ]
    },
    {
      title: 'Sports Day',
      description: 'A grand celebration of physical fitness and sportsmanship with competitions across all age groups',
      icon: Trophy,
      highlights: [
        'Athletic competitions across all age groups',
        'Inter-house sporting events',
        'Parent-child participation races',
        'Display of physical education activities',
        'Awards ceremony and recognition'
      ]
    },
    {
      title: 'Science Exhibition',
      description: 'Promoting scientific temper and innovation through student research projects and experiments',
      icon: Award,
      highlights: [
        'Student research projects and experiments',
        'Working models and demonstrations',
        'Inter-school science competition',
        'Expert judges and evaluation',
        'Innovation awards and recognition'
      ]
    },
    {
      title: 'Cultural Festival',
      description: 'Celebrating diversity and artistic expression through various cultural performances and exhibitions',
      icon: Music,
      highlights: [
        'Traditional and contemporary performances',
        'Art and craft exhibitions',
        'Food festival representing various cultures',
        'Guest artist performances',
        'Cultural exchange programs'
      ]
    }
  ];

  const upcomingEvents = [
    {
      month: 'January 2025',
      events: [
        { date: '26', title: 'Republic Day Celebration', type: 'Special' },
        { date: '15-20', title: 'Annual Art Exhibition', type: 'Cultural' },
        { date: '10-12', title: 'Inter-house Basketball Tournament', type: 'Sports' },
        { date: '25', title: 'Science Project Fair', type: 'Academic' }
      ]
    },
    {
      month: 'February 2025',
      events: [
        { date: '15', title: 'Annual Sports Day', type: 'Sports' },
        { date: '14', title: 'Friendship Program', type: 'Special' },
        { date: '22-23', title: 'Parent-Teacher Conference', type: 'Academic' },
        { date: '28', title: 'Cultural Evening', type: 'Cultural' }
      ]
    },
    {
      month: 'March 2025',
      events: [
        { date: '10', title: 'Annual Day Celebration', type: 'Special' },
        { date: '5', title: 'Farewell for Graduating Students', type: 'Special' },
        { date: '13', title: 'Holi Celebration', type: 'Cultural' },
        { date: '20', title: 'Spring Festival', type: 'Cultural' }
      ]
    }
  ];

  const galleryCategories = [
    {
      title: 'Academic Moments',
      description: 'Classroom interactions, laboratory experiments, library sessions, and creative expressions',
      icon: BookOpen
    },
    {
      title: 'Sports & Fitness',
      description: 'Athletic events, team sports achievements, yoga sessions, and tournament victories',
      icon: Trophy
    },
    {
      title: 'Cultural Celebrations',
      description: 'Dance performances, musical concerts, drama productions, and festival celebrations',
      icon: Music
    },
    {
      title: 'Community Engagement',
      description: 'Social service programs, environmental activities, and community collaboration projects',
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <HeroSection backgroundImage="./Activities/ActivitiesImg1.webp">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          Beyond Academics
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-200 max-w-3xl mx-auto"
        >
          Holistic development through diverse co-curricular activities and events
        </motion.p>
      </HeroSection>

      {/* Co-curricular Activities */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Co-curricular Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover and nurture your talents through our comprehensive activity program
            </p>
          </div>
          <div className="space-y-12">
            {activities.map((category, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <Card>
                      <category.icon className={`h-12 w-12 ${theme.primary} mb-4`} />
                      <div className="h-32 mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={[
                            './Activities/ActivitiesImg2.webp',
                            './Activities/ActivitiesImg3.jpeg',
                            './Activities/ActivitiesImg4.jpeg',
                            ' ./Activities/ActivitiesImg5.webp'
                          ][index]}
                          alt={category.category}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className={`text-2xl font-bold mb-4 ${theme.primary}`}>{category.category}</h3>
                      <div className="space-y-3">
                        {category.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full ${theme.primaryBg} mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card className="relative overflow-hidden">
                      <img 
                        src={[
                          'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
                          'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
                          'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
                          'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop'
                        ][index]}
                        alt={category.category}
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

      {/* Annual Events */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Annual & Special Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrating learning, creativity, and community spirit throughout the year
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {annualEvents.map((event, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full">
                  <event.icon className={`h-12 w-12 ${theme.primary} mb-4`} />
                  <h3 className={`text-xl font-bold mb-3 ${theme.primary}`}>{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Event Highlights:</h4>
                    <div className="space-y-2">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Star className={`h-4 w-4 ${theme.primary} mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Upcoming Events Calendar */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Upcoming Event Calendar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our exciting lineup of events and activities
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((month, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className={`h-8 w-8 ${theme.primary}`} />
                    <h3 className="text-xl font-bold text-gray-900">{month.month}</h3>
                  </div>
                  <div className="space-y-4">
                    {month.events.map((event, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className={`${theme.primaryBg} text-white px-3 py-1 rounded-full text-sm font-semibold flex-shrink-0`}>
                          {event.date}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{event.title}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            event.type === 'Sports' ? 'bg-green-100 text-green-800' :
                            event.type === 'Cultural' ? 'bg-purple-100 text-purple-800' :
                            event.type === 'Academic' ? 'bg-blue-100 text-blue-800' :
                            'bg-orange-100 text-orange-800'
                          }`}>
                            {event.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Gallery Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Capturing memorable moments from our vibrant school life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryCategories.map((category, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="h-full text-center group cursor-pointer hover:shadow-lg transition-shadow">
                  <Camera className={`h-12 w-12 ${theme.primary} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{category.title}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                  <div className="mt-4">
                    <span className={`${theme.primary} text-sm font-medium group-hover:underline`}>
                      View Gallery →
                    </span>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Participation Opportunities */}
      <AnimatedSection className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Participation Opportunities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every student is encouraged to participate in activities that match their interests and abilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className={`h-12 w-12 ${theme.primary} mx-auto mb-4`} />
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Individual Pursuits</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Music lessons and instrument training</li>
                  <li>Art and craft skill development</li>
                  <li>Creative writing and poetry</li>
                  <li>Public speaking skills</li>
                  <li>Technology programming</li>
                </ul>
              </div>
              <div className="text-center">
                <Trophy className={`h-12 w-12 ${theme.primary} mx-auto mb-4`} />
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Team Activities</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Sports teams and competitions</li>
                  <li>Drama productions</li>
                  <li>Science project collaborations</li>
                  <li>Community service teams</li>
                  <li>Cultural event organization</li>
                </ul>
              </div>
              <div className="text-center">
                <Award className={`h-12 w-12 ${theme.primary} mx-auto mb-4`} />
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Leadership Roles</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Student council positions</li>
                  <li>Club leadership opportunities</li>
                  <li>Event coordination roles</li>
                  <li>Peer mentoring programs</li>
                  <li>Community outreach leadership</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Activities;