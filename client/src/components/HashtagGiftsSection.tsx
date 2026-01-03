import { motion } from 'framer-motion';
import { optimizeCloudinaryUrl } from '@/lib/cloudinaryOptimize';

const backgroundImage = 'https://res.cloudinary.com/dc36azfgf/image/upload/v1767436693/gift_guide_rys7kd.jpg';

const qrCodeImage = optimizeCloudinaryUrl("https://res.cloudinary.com/dr3xey7h9/image/upload/v1760112758/e0470bd7-d558-4ffc-ab72-05979e344aee.png", { width: 400, quality: 'auto:good' });

const HashtagGiftsSection = () => {
  return (
    <motion.section 
      id="hashtag-gifts" 
      className="section-pastel-blue bg-white relative overflow-hidden py-8 mt-[-34px] mb-[-34px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div 
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Black and White Background Image */}
          <div className="relative h-96 md:h-[500px]">
            <img 
              src={backgroundImage}
              alt="Background"
              className="w-full h-full object-cover grayscale"
              data-testid="img-gifts-background"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
          </div>

          {/* Text Card - Half on image, half outside */}
          <div className="relative -mt-32 md:-mt-40 px-4 md:px-8 pb-8">
            <motion.div 
              className="bg-white backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-teal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.h2 
                className="font-script italic text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                data-testid="text-gifts-title"
              >
                Gift Guide
              </motion.h2>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p 
                  className="text-sm md:text-base text-foreground/80 leading-relaxed mb-8"
                  data-testid="text-gifts-message"
                >
                  Your presence at our wedding is the greatest gift of all. However, should you wish to help us celebrate with a gift,
                  <br /><br />
                  you may want to consider our <span className="font-semibold text-primary">NEWLYWED FUND</span> or <span className="font-semibold text-primary">WISHING WELL</span>, as we look forward to filling
                  <br /><br />
                  in the moments we missed while being apart!
                </p>

                {/* 4 Images Layout */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    "https://res.cloudinary.com/dnib23v4d/image/upload/v1767443318/Newlywed_-_1_rjpza8.jpg",
                    "https://res.cloudinary.com/dnib23v4d/image/upload/v1767443318/Newlywed_-_3_amthho.jpg",
                    "https://res.cloudinary.com/dnib23v4d/image/upload/v1767443318/Newlywed_-_2_c2twzx.jpg",
                    "https://res.cloudinary.com/dnib23v4d/image/upload/v1767443319/Newlywed_-_4_kbuxjq.jpg"
                  ].map((url, idx) => (
                    <div key={idx} className="aspect-[3/4] rounded-lg overflow-hidden shadow-sm border border-border/50">
                      <img 
                        src={optimizeCloudinaryUrl(url, { width: 300, quality: 'auto' })} 
                        alt={`Gift Option ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* QR Code and Bank Details Text */}
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-medium text-foreground/80 italic">Give from the heart,</p>
                  <p className="text-sm font-medium text-foreground/80 italic">Whatever feels right to you!</p>
                  <p className="text-sm font-bold text-primary mt-4 uppercase tracking-wide">QR codes and Bank details</p>
                </div>

                {/* QR Code Card */}
                <div className="max-w-[280px] mx-auto bg-white rounded-xl shadow-lg border border-border/30 p-4">
                  <div className="flex justify-center mb-2">
                    <span className="font-bold text-[#0033A0] text-2xl tracking-tighter">BDO</span>
                  </div>
                  <p className="text-sm font-bold text-foreground mb-1">JoshPatWedding</p>
                  <div className="aspect-square bg-white border-2 border-primary/20 rounded-lg p-2 mb-2">
                    <img 
                      src={optimizeCloudinaryUrl("https://res.cloudinary.com/dnib23v4d/image/upload/v1767443327/giftqr_lvcqoj.jpg", { width: 400, quality: 'auto' })} 
                      alt="BDO QR Code"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-[10px] text-foreground/60 leading-tight">
                    BDO to BDO transfers are free.<br />
                    Fees may apply for non-BDO transfers.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;
