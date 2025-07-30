import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div>
            <div className="text-2xl font-bold text-travel-teal mb-4">Tripone</div>
            <p className="text-travel-gray text-sm mb-6">
              One travel decision determines your journey. Make your journey together with Tripone.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-travel-gray hover:text-travel-teal cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-travel-gray hover:text-travel-teal cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-travel-gray hover:text-travel-teal cursor-pointer transition-colors" />
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-travel-dark mb-4">About</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-travel-gray hover:text-travel-teal transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-travel-gray hover:text-travel-teal transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-travel-gray hover:text-travel-teal transition-colors text-sm">Press</a></li>
              <li><a href="#" className="text-travel-gray hover:text-travel-teal transition-colors text-sm">Blog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-travel-dark mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-travel-gray hover:text-travel-teal transition-colors text-sm">Why Choose</a></li>
              <li><a href="#" className="text-travel-gray hover:text-travel-teal transition-colors text-sm">Testimonials</a></li>
              <li><a href="#" className="text-travel-gray hover:text-travel-teal transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-travel-gray hover:text-travel-teal transition-colors text-sm">Investor</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-travel-dark mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-travel-gray hover:text-travel-teal transition-colors text-sm">Account</a></li>
              <li><a href="#" className="text-travel-gray hover:text-travel-teal transition-colors text-sm">Support</a></li>
              <li><a href="#" className="text-travel-gray hover:text-travel-teal transition-colors text-sm">Support Center</a></li>
              <li><a href="#" className="text-travel-gray hover:text-travel-teal transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-travel-dark mb-4">Newsletter</h3>
            <p className="text-travel-gray text-sm mb-4">
              Subscribe our newsletter for the latest updates about new events.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-travel-teal"
              />
              <button className="bg-travel-teal text-white px-6 py-2 rounded-r-lg hover:bg-travel-blue transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center space-y-2">
          <p className="text-travel-gray text-sm">
            © 2025 Tripone. All rights reserved.
          </p>
          <p className="text-travel-gray text-sm flex items-center justify-center gap-1">
            Made by SaurabhRana0w0 with <span className="text-red-500">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;