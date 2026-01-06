import { useState, useEffect, useRef } from "react";
import { galleryImages } from "../data/gallery";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* ===============================
     AUTO SCROLL STRIP
  =============================== */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPos = 0;
    const interval = setInterval(() => {
      scrollPos += 1;
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  /* ===============================
     MODAL CONTROLS
  =============================== */
  const openImage = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage]);

  const doubledImages = [...galleryImages, ...galleryImages];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Our Gallery
            </span>
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Witness the beauty of traditional temple architecture and divine craftsmanship
          </p>
        </div>

        {/* ================= AUTO SCROLL STRIP ================= */}
        <div className="mb-16 overflow-hidden rounded-xl shadow-xl bg-white">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden px-4 py-6"
          >
            {doubledImages.map((img, index) => (
              <div
                key={`${img.id}-${index}`}
                className="flex-shrink-0 w-72 sm:w-80 h-52 bg-gray-50 rounded-lg flex items-center justify-center p-3"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="max-w-full max-h-full object-contain rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= IMAGE GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openImage(index)}
              className="group bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition"
            >
              <div className="w-full h-64 flex items-center justify-center p-4">
                <img
                  src={image.url}
                  alt={image.title}
                  className="max-w-full max-h-full object-contain transition-transform group-hover:scale-105"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">
                  {image.title}
                </h3>
                {/* <p className="text-amber-500 text-sm capitalize">
                  {image.category}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL (NO CROP – FINAL FIX) ================= */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-3"
          onClick={closeImage}
        >
          {/* PREV */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-3 sm:left-6 text-white p-3 bg-black/40 rounded-full"
          >
            <ChevronLeft size={32} />
          </button>

          {/* NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 sm:right-6 text-white p-3 bg-black/40 rounded-full"
          >
            <ChevronRight size={32} />
          </button>

          {/* IMAGE CONTAINER – CRITICAL */}
          <div
            className="relative inline-flex max-w-[95vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON ON IMAGE */}
            <button
              onClick={closeImage}
              className="absolute top-2 right-2 text-white hover:text-amber-400 z-10"
            >
              <X size={32} />
            </button>

            {/* IMAGE – NEVER CROPS */}
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />

            {/* INFO */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
              <h3 className="text-white text-lg sm:text-xl font-semibold">
                {galleryImages[selectedImage].title}
              </h3>
             {/*  <p className="text-amber-400 capitalize text-sm">
                {galleryImages[selectedImage].category}
              </p> */}
            </div>
          </div>

          {/* COUNTER */}
          <div className="absolute bottom-4 text-white bg-black/50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
