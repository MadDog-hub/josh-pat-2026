import { motion } from 'framer-motion';

const DressCodeSection = () => {
  const dressCodeColors = [
    { name: '', color: '#be5738', hex: '#be5738' },
    { name: '', color: '#be7f70', hex: '#be7f70' },
    { name: '', color: '#d48246', hex: '#d48246' },
    { name: '', color: '#e7c480', hex: '#e7c480' },
    { name: '', color: '#654321', hex: '#654321' }
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
        <div className="space-y-16 mb-16">
          {/* Guests */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
          >
            <div className="bg-white shadow-teal border border-primary/20 rounded-xl p-8 hover-elegant transition-all duration-500 relative">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.6 }}
                >
                  <div className="mb-10 relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-8 relative z-10">
                      FOR GUESTS
                    </h3>
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 px-4">
                      <div className="text-center">
                        <p className="text-lg font-semibold text-foreground mb-6 uppercase tracking-wider">Gentlemen</p>
                        <motion.img 
                          src="https://res.cloudinary.com/dbciwaal4/image/upload/v1767608850/28abeabf-5c74-45c7-bac8-cfacbfcde4ac_cmro2k.png"
                          alt="Gentlemen Guests attire"
                          className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-lg"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 8.8 }}
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold text-foreground mb-6 uppercase tracking-wider">Ladies</p>
                        <motion.img 
                          src="https://res.cloudinary.com/dnib23v4d/image/upload/v1767447581/78cf6737-ea4d-489d-88b0-520ab948ab6a.png"
                          alt="Ladies Guests attire"
                          className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-lg"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 8.9 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Color Palette for Guests */}
                <motion.div
                  className="mt-10 pt-10 border-t border-primary/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 9.0 }}
                >
                  <p className="text-lg font-semibold text-foreground mb-6">Color Motif</p>
                  <div className="flex justify-center flex-wrap gap-6 sm:gap-8 mb-10">
                    {dressCodeColors.map((colorItem, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-border shadow-soft hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: colorItem.color }}
                        ></div>
                        <p className="text-xs text-foreground mt-1">{colorItem.name}</p>
                      </div>
                    ))}
                  </div>

                  {/* Photo Studio Info */}
                  <motion.div
                    className="max-w-2xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <p className="text-sm md:text-base text-muted-foreground mb-6 italic leading-relaxed">
                      "Kindly dress in accordance with our curated color palette, as our on-site photo studio awaits to capture your most glamorous moments in style."
                    </p>
                    <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-primary/20">
                      <img 
                        src="https://res.cloudinary.com/dbciwaal4/image/upload/v1767618055/9f05aa82-8287-47ca-8283-160b1842fa79.png"
                        alt="On-site photo studio"
                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                        <span className="text-white font-display italic text-lg tracking-wider">Capturing Memories</span>
                      </div>
                    </div>
                  </motion.div>
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
