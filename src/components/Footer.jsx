import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className={`h-8 w-8 ${theme.primary}`} />
              <span className="text-xl font-bold">QB365 Public School</span>
            </div>
            <p className="text-gray-300 mb-4">
              A premier CBSE affiliated school committed to providing quality
              education and nurturing young minds for a better tomorrow.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">
                  info@greenwoodsinternational.edu
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">
                  123 Education Street, Academic City
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/about-us"
                className="block text-gray-300 hover:text-white text-sm"
              >
                About Us
              </Link>
              <Link
                to="/academics"
                className="block text-gray-300 hover:text-white text-sm"
              >
                Academics
              </Link>
              <Link
                to="/admissions"
                className="block text-gray-300 hover:text-white text-sm"
              >
                Admissions
              </Link>
              <Link
                to="/contact-us"
                className="block text-gray-300 hover:text-white text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Important</h3>
            <div className="space-y-2">
              <Link
                to="/mandatory-disclosure"
                className="block text-gray-300 hover:text-white text-sm"
              >
                Mandatory Disclosure
              </Link>
              <Link
                to="/infrastructure"
                className="block text-gray-300 hover:text-white text-sm"
              >
                Infrastructure
              </Link>
              <Link
                to="/activities"
                className="block text-gray-300 hover:text-white text-sm"
              >
                Activities
              </Link>
            </div>
          </div>
        </div>

        {/* Theme Switcher */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2025 QB365 Public School CBSE School. All rights reserved.
            </p>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
