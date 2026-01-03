import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { X } from 'lucide-react';

// Local prenup photos
import prenup1 from '@assets/prenup1_1762584613683.jpg';
import prenup2 from '@assets/prenup2_1762584613684.jpg';
import prenup3 from '@assets/prenup3_1762584613685.jpg';
import prenup5 from '@assets/prenup5_1762584613686.jpg';
import prenup6 from '@assets/prenup6_1762584613686.jpg';
import prenup8 from '@assets/prenup8_1762584613686.jpg';
import prenup9 from '@assets/prenup9_1762584613687.jpg';
import prenup10 from '@assets/prenup10_1762584613687.jpg';
import prenup13 from '@assets/prenup13_1762584613687.jpg';
import prenup14 from '@assets/prenup14_1762584613688.jpg';
import prenup16 from '@assets/prenup16_1762584613688.jpg';
import prenup17 from '@assets/prenup17_1762584613691.jpg';
import prenup18 from '@assets/prenup18_1762584613691.jpg';
import prenup19 from '@assets/prenup19_1762584613692.jpg';
import prenup20 from '@assets/prenup20_1762584613693.jpg';

const MemorableMomentsSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436691/11_nibg4o.jpg", fullSrc: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436691/11_nibg4o.jpg", alt: "Prenup photo 11", height: "h-64" },
    { src: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436691/10_wziact.jpg", fullSrc: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436691/10_wziact.jpg", alt: "Prenup photo 10", height: "h-80" },
    { src: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436692/12_ksutcj.jpg", fullSrc: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436692/12_ksutcj.jpg", alt: "Prenup photo 12", height: "h-72" },
    { src: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436692/1_inqnmv.jpg", fullSrc: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436692/1_inqnmv.jpg", alt: "Prenup photo 1", height: "h-64" },
    { src: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436692/4_dwh8ia.jpg", fullSrc: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436692/4_dwh8ia.jpg", alt: "Prenup photo 4", height: "h-80" },
    { src: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436693/9_lh7dh5.jpg", fullSrc: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436693/9_lh7dh5.jpg", alt: "Prenup photo 9", height: "h-72" },
    { src: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436693/8_mwt08q.jpg", fullSrc: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436693/8_mwt08q.jpg", alt: "Prenup photo 8", height: "h-96" },
    { src: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436693/2_vx8dgj.jpg", fullSrc: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436693/2_vx8dgj.jpg", alt: "Prenup photo 2", height: "h-80" },
    { src: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436693/7_ykzxee.jpg", fullSrc: "https://res.cloudinary.com/dc36azfgf/image/upload/v1767436693/7_ykzxee.jpg", alt: "Prenup photo 7", height: "h-72" }
  ];

  return (
    <motion.section 
      id="prenup-photos" 
      className="section-hard-blue bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <h2 className="text-5xl font-display font-light italic text-gold-bright mb-8" data-testid="text-prenup-photos-title">
            Save the Date Photos
          </h2>
          <p className="text-xl font-script italic max-w-2xl mx-auto leading-relaxed text-[#0d0d0d]">
            Captured moments before forever begins
          </p>
        </motion.div>

        {/* Pinterest-style Masonry Grid */}
        <motion.div 
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid mb-4 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(index)}
              data-testid={`img-prenup-${index}`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto group-hover:brightness-90 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-script text-lg">View Photo</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none">
            <DialogTitle className="sr-only">Prenup Photo Gallery</DialogTitle>
            <DialogDescription className="sr-only">View prenup photo in full size</DialogDescription>
            
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-200"
                data-testid="button-close-lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main Image */}
              {selectedImage !== null && (
                <motion.img
                  src={images[selectedImage].fullSrc}
                  alt={images[selectedImage].alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  data-testid={`img-lightbox-${selectedImage}`}
                />
              )}

              {/* Navigation Buttons */}
              {selectedImage !== null && selectedImage > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage - 1);
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
                  data-testid="button-prev-image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {selectedImage !== null && selectedImage < images.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage + 1);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
                  data-testid="button-next-image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Image Counter */}
              {selectedImage !== null && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                  <span className="text-sm font-script">
                    {selectedImage + 1} of {images.length}
                  </span>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </motion.section>
  );
};

export default MemorableMomentsSection;
