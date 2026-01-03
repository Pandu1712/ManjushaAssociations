import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo_(1).jpg"
                alt="Stapati Logo"
                className="h-16 w-auto object-contain bg-white rounded-lg p-1"
              />
            </div>
            <h3 className="text-xl font-bold text-amber-400 mb-3">Manjusha Associates</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Traditional temple architecture and sculpture with divine precision.
              Creating sacred spaces with authenticity and devotion.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-amber-400 mb-4 border-b-2 border-amber-600 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-amber-400 mb-4 border-b-2 border-amber-600 pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Temples & Sculptures</li>
              <li>Stone Construction</li>
              <li>Fiber Works</li>
              <li>Wood Works</li>
              <li>Metal Works</li>
              <li>Consultancy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-amber-400 mb-4 border-b-2 border-amber-600 pb-2 inline-block">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-400 flex-shrink-0 mt-1" size={18} />
                <p className="text-sm text-gray-300">
                  House no 4-126A, Sri Guru Nilayam<br />
                  Mutyalapalli, Mogalturu Mandal<br />
                  West Godavari - 534281<br />
                  Andhra Pradesh, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-400 flex-shrink-0" size={18} />
                <a href="tel:9885051999" className="text-sm text-gray-300 hover:text-amber-400 transition-colors">
                  +91 98850 51999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-amber-400 flex-shrink-0" size={18} />
                <a href="mailto:Srinivasu.nsp@gmail.com" className="text-sm text-gray-300 hover:text-amber-400 transition-colors">
                  Srinivasu.nsp@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Manjusha Associates. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
