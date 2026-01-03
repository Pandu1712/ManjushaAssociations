import { Phone, MessageCircle } from 'lucide-react';

const StickyContact = () => {
  const phoneNumber = '9885051999';
  const whatsappMessage = encodeURIComponent('Hello, I would like to know more about your temple construction services.');

  return (
    <>
      <a
        href={`tel:${phoneNumber}`}
        className="fixed left-4 bottom-24 z-40 bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>

      <a
        href={`https://wa.me/91${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-24 z-40 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={24} />
      </a>
    </>
  );
};

export default StickyContact;
