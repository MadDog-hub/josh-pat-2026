import { motion } from 'framer-motion';
import { optimizeCloudinaryUrl } from '@/lib/cloudinaryOptimize';
import principalSponsorsImage from '@assets/princi_1762584098544.png';
import flower9 from '@assets/flower9_1759741371017.png';
import flower3 from '@assets/flower3_1759741371015.png';
import guestsImage from '@assets/guests_1762584098544.png';

const DressCodeSection = () => {
  const dressCodeColors = [
    { name: '', color: '#be5738', hex: '#be5738' },
    { name: '', color: '#be7f70', hex: '#be7f70' },
    { name: '', color: '#d48246', hex: '#d48246' },
    { name: '', color: '#d48246', hex: '#d48246' }
  ];

  const principalSponsorsColors = [
    { name: '', color: '#0a1833', hex: '#0a1833' },
    { name: '', color: '#b3cfe5', hex: '#b3cfe5' },
    { name: '', color: '#4a7fa7', hex: '#4a7fa7' },
    { name: '', color: '#1a3d63', hex: '#1a3d63' }
  ];

  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue bg-white relative overflow-hidden mt-[10px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          <h2 className="font-display font-light italic text-gold mb-8 text-[48px]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
        </motion.div>

        {/* Modern Dress Code Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Principal Sponsors */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white shadow-teal border border-primary/20 rounded-xl p-8 hover-elegant transition-all duration-500 h-full relative">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.3 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      FOR PRINCIPAL SPONSORS
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-left px-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Gentlemen:</p>
                        <p className="text-sm text-foreground">Barong attire</p>
                        <p className="text-sm text-foreground">Brown or khaki slacks</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Ladies:</p>
                        <p className="text-sm text-foreground">Modern Filipiniana</p>
                        <p className="text-sm text-foreground">or Long Evening Gown</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.img 
                    src="https://res.cloudinary.com/dnib23v4d/image/upload/v1767449384/b201bf04-8571-4ddb-b452-06747e45ea17.png"
                    alt="Gentlemen Principal Sponsors attire"
                    className="w-full object-contain rounded-2xl shadow-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 8.5 }}
                  />
                  <motion.img 
                    src="https://res.cloudinary.com/dnib23v4d/image/upload/v1767451334/49b61cf5-c745-43a5-aaf0-67a815e5e732.png"
                    alt="Ladies Principal Sponsors attire"
                    className="w-full object-contain rounded-2xl shadow-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 8.6 }}
                  />
                </div>
                
                {/* Color Palette for Principal Sponsors Ladies */}
                <motion.div
                  className="mt-6 pt-6 border-t border-primary/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 8.7 }}
                >
                  <p className="text-sm font-semibold text-foreground mb-3">Color Motif (Ladies)</p>
                  <div className="flex justify-center gap-4">
                    {principalSponsorsColors.map((colorItem, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 border-border shadow-soft hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: colorItem.color }}
                        ></div>
                        <p className="text-xs text-foreground mt-1">{colorItem.name}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Guests */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white shadow-teal border border-primary/20 rounded-xl p-8 hover-elegant transition-all duration-500 h-full relative">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.6 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      FOR GUESTS
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-left px-4 mb-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Gentlemen:</p>
                        <p className="text-sm text-foreground">Barong or Polo Barong</p>
                        <p className="text-sm text-foreground">Black slacks</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">Ladies:</p>
                        <p className="text-sm text-foreground">Modern Filipiniana</p>
                        <p className="text-sm text-foreground">or Long Evening Gown</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <motion.img 
                    src="https://res.cloudinary.com/dnib23v4d/image/upload/v1767451360/3225f580-936f-433e-b835-5a72e3aa6ab8.png"
                    alt="Gentlemen Guests attire"
                    className="w-full object-contain rounded-2xl shadow-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 8.8 }}
                  />
                  <motion.img 
                    src="https://res.cloudinary.com/dnib23v4d/image/upload/v1767447581/78cf6737-ea4d-489d-88b0-520ab948ab6a.png"
                    alt="Ladies Guests attire"
                    className="w-full object-contain rounded-2xl shadow-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 8.9 }}
                  />
                </div>
                
                {/* Color Palette for Guest Ladies */}
                <motion.div
                  className="mt-6 pt-6 border-t border-primary/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 9.0 }}
                >
                  <p className="text-sm font-semibold text-foreground mb-3">Color Motif (Ladies)</p>
                  <div className="grid grid-cols-4 gap-2 sm:gap-3">
                    {dressCodeColors.map((colorItem, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl border-2 border-border shadow-soft hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: colorItem.color }}
                        ></div>
                        <p className="text-xs text-foreground mt-1">{colorItem.name}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default DressCodeSection;