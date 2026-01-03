import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Comprehensive temple construction and sculpture services combining traditional
            craftsmanship with modern precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {service.description}
                </p>

                {service.materials && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Materials:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.materials.slice(0, 3).map((material, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center text-amber-600 font-semibold group-hover:translate-x-2 transition-transform">
                  View Details <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
