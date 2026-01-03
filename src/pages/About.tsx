import { Award, BookOpen, Briefcase, Heart, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              About Sri Stapati
            </span>
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Preserving sacred traditions through masterful temple architecture and sculpture
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto">
              <img
                src="https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Temple Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/50 to-transparent"></div>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">P. Srinivasa Rao</h2>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-4 py-2 rounded-full font-semibold">
                    Stapati
                  </span>
                  <span className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-4 py-2 rounded-full font-semibold">
                    DTSA
                  </span>
                  <span className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-4 py-2 rounded-full font-semibold">
                    BFA
                  </span>
                </div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  With a distinguished qualification in <span className="font-bold text-amber-600">Diploma in Traditional
                  Sculpture and Architecture (DTSA)</span> and <span className="font-bold text-amber-600">Bachelor
                  of Fine Arts (BFA)</span>, P. Srinivasa Rao brings unparalleled expertise to
                  the sacred art of temple construction.
                </p>

                <p>
                  As a master Stapati, he carries forward the ancient lineage of temple architects
                  who have dedicated their lives to creating divine spaces. His deep understanding
                  of Vastu Shastra, combined with mastery over traditional sculptural techniques,
                  ensures that every project is a perfect blend of spiritual authenticity and
                  architectural excellence.
                </p>

                <p>
                  Under his guidance, our team has successfully completed numerous temple projects
                  across India, each standing as a testament to our commitment to preserving
                  sacred traditions while embracing modern construction techniques for durability
                  and longevity.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Award className="text-amber-600" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">20+ Years</h3>
            <p className="text-gray-600">Of dedicated service in traditional temple architecture</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Target className="text-amber-600" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">100+ Projects</h3>
            <p className="text-gray-600">Successfully completed temples and sculptures</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Users className="text-amber-600" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">50+ Artisans</h3>
            <p className="text-gray-600">Skilled craftsmen working on every project</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-amber-900 rounded-2xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-amber-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-400">Devotion</h3>
              <p className="text-gray-300">Every project is undertaken with deep spiritual reverence</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-amber-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-400">Tradition</h3>
              <p className="text-gray-300">Preserving ancient wisdom and architectural principles</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-amber-400" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-400">Excellence</h3>
              <p className="text-gray-300">Uncompromising quality in craftsmanship and execution</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </span>
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision of sacred architecture to life
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
