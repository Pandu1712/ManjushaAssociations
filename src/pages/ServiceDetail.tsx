import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { services } from "../data/services";
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  MessageCircle,
  X,
} from "lucide-react";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4">
        {/* BACK BUTTON */}
        <Link
          to="/services"
          className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Services
        </Link>

        {/* HERO */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative h-96">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-gray-200">
                {service.description}
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* LEFT */}
              <div className="lg:col-span-2 space-y-12">
                {/* DETAILS */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Service Details
                  </h2>
                  <div className="space-y-4">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2
                          className="text-amber-600 mt-1"
                          size={24}
                        />
                        <p className="text-gray-700 text-lg">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GALLERY (REFERENCE STYLE) */}
                {service.gallery && (
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">
                      Project Gallery
                    </h2>

                    <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
                      {service.gallery.map((img, index) => (
                        <div
                          key={index}
                          className="relative overflow-hidden rounded-xl group cursor-pointer"
                          onClick={() => setActiveImage(img)}
                        >
                          <img
                            src={img}
                            alt={`${service.title} ${index + 1}`}
                            className="w-full rounded-xl transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                            <span className="text-white font-semibold opacity-0 group-hover:opacity-100">
                              View Image
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* WHY CHOOSE */}
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border-l-4 border-amber-600">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    Why Choose This Service?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our expert team blends traditional craftsmanship with
                    modern precision, ensuring every project reflects
                    authenticity, durability, and spiritual excellence.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <div>
                <div className="bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl p-8 text-white sticky top-24">
                  <h3 className="text-2xl font-bold mb-6">
                    Get Started Today
                  </h3>
                  <p className="mb-6 text-amber-50">
                    Contact us for expert consultation and execution.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="tel:9885051999"
                      className="flex items-center justify-center gap-3 bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                      <Phone size={20} />
                      Call Now
                    </a>

                    <a
                      href="https://wa.me/919885051999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                      <MessageCircle size={20} />
                      WhatsApp
                    </a>

                    <Link
                      to="/contact"
                      className="block text-center bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition"
                    >
                      Contact Form
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED SERVICES */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Related Services
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.id}
                  to={`/services/${related.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 group-hover:text-amber-600 transition">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* FULLSCREEN IMAGE MODAL */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          <img
            src={activeImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
