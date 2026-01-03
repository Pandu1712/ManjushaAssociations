import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowRight, Award, Users, Target } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />

      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Our Sacred Services
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Excellence in traditional temple architecture and divine craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center text-amber-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight size={18} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-block bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  About Our Heritage
                </span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Under the expert guidance of <span className="font-bold text-amber-600">P. Srinivasa Rao</span>,
                a distinguished <span className="font-semibold">Stapati (DTSA and BFA)</span>, we bring
                traditional temple architecture to life with divine precision and sacred authenticity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our master craftsmen combine ancient architectural wisdom with modern techniques
                to create temples and sculptures that stand as timeless monuments of devotion.
                Each project is undertaken with deep reverence, ensuring every detail aligns
                with sacred traditions and Vastu Shastra principles.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg p-6 mb-3">
                    <Award className="text-amber-600 mx-auto" size={40} />
                  </div>
                  <p className="font-bold text-2xl text-gray-800">20+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg p-6 mb-3">
                    <Target className="text-amber-600 mx-auto" size={40} />
                  </div>
                  <p className="font-bold text-2xl text-gray-800">100+</p>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg p-6 mb-3">
                    <Users className="text-amber-600 mx-auto" size={40} />
                  </div>
                  <p className="font-bold text-2xl text-gray-800">50+</p>
                  <p className="text-sm text-gray-600">Expert Artisans</p>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-block bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn More About Us
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Temple Architecture"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Stone Carving"
                className="rounded-lg shadow-xl w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Temple Construction"
                className="rounded-lg shadow-xl w-full h-64 object-cover -mt-8"
              />
              <img
                src="https://images.pexels.com/photos/1662770/pexels-photo-1662770.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Traditional Craftsmanship"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Start Your Sacred Project
            </span>
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Let us bring your vision of divine architecture to life with our expert craftsmanship
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
