import { motion } from 'framer-motion';
const storyCoupleImage = 'https://res.cloudinary.com/dc36azfgf/image/upload/v1767436738/she_said_yes_eew6qv.jpg';
import { Heart } from 'lucide-react';

const StorySection = () => {
  return (
    <motion.section 
      id="story" 
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.5 }}
      data-testid="section-story"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 3.8 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-center text-foreground mb-3" data-testid="text-story-title">
          OUR STORY
        </h2>
        <p className="text-center text-sm sm:text-base text-foreground/60 italic">A couple, a spark, and a shared love for adventure</p>
      </motion.div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 4 }}
        >
          {/* Left Side - Text Content */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 relative">
            {/* Decorative Icon */}
            <div className="mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>

            {/* Complete Story */}
            <div className="space-y-6 text-base text-foreground/90 leading-relaxed" data-testid="text-story-content">
              <section>
                <h3 className="font-serif font-bold text-primary mb-2">How We Met</h3>
                <p>
                  Our story began in college at NCBA Fairview back in 2014. Patricia made the first move, noticing Joshua long before he realized she had captured his heart. From that moment, we grew together, sharing laughter, dreams, and the little moments that make life beautiful. Even as our paths led us to different careers—Joshua in the gaming world and Patricia in sales—our hearts stayed intertwined, always finding their way back to each other.
                </p>
              </section>

              <section>
                <h3 className="font-serif font-bold text-primary mb-2">Our Dreams</h3>
                <p>
                  We dream of building a family filled with love, laughter, and warmth, and of embracing life’s adventures together, hand in hand.
                </p>
              </section>

              <section>
                <h3 className="font-serif font-bold text-primary mb-2">Our Decision</h3>
                <p>
                  After years of growing, learning, and loving, we’ve decided to tie the knot. It’s a promise to fully commit to one another and to begin the most beautiful chapter of our lives together.
                </p>
              </section>

              <section>
                <h3 className="font-serif font-bold text-primary mb-2">Our Future</h3>
                <p>
                  We look forward to living life to the fullest, making up for lost moments, and cherishing every experience. Traveling, exploring, and discovering the world together will only bring us closer, deepening our bond with each passing day.
                </p>
              </section>

              <section>
                <h3 className="font-serif font-bold text-primary mb-2">Our Promise</h3>
                <p>
                  Through sunshine and storms, joy and challenges, we vow to stand by each other’s side. For better or worse, we promise to love, support, and never leave each other behind.
                </p>
              </section>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-first lg:order-last">
            <img
              src={storyCoupleImage}
              alt="Our Love Story"
              className="w-full h-auto rounded-2xl shadow-lg"
              data-testid="img-story-background"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorySection;
