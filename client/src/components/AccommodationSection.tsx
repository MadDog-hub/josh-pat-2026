import { motion } from 'framer-motion';

const AccommodationSection = () => {
  const images = [
    { url: "https://res.cloudinary.com/dbciwaal4/image/upload/v1767610264/junior_wpjlu7.jpg", title: "Junior Suite" },
    { url: "https://res.cloudinary.com/dbciwaal4/image/upload/v1767610266/single_deluxe_auzz9o.jpg", title: "Single Deluxe" },
    { url: "https://res.cloudinary.com/dbciwaal4/image/upload/v1767610279/twin_deluxe_dr6no0.jpg", title: "Twin Deluxe" },
    { url: "https://res.cloudinary.com/dbciwaal4/image/upload/v1767610265/premier_uwbctl.jpg", title: "Premier Room" },
    { url: "https://res.cloudinary.com/dbciwaal4/image/upload/v1767610265/other_ameties_gaciru.jpg", title: "Other Amenities" },
    { url: "https://res.cloudinary.com/dbciwaal4/image/upload/v1767610268/terms_f2dghj.jpg", title: "Terms & Conditions" }
  ];

  return (
    <section id="accommodation" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-light text-gold mb-6 italic">
            Hotel Accommodation
          </h2>
          <div className="max-w-3xl mx-auto bg-primary/5 p-8 rounded-2xl border border-primary/10 shadow-sm mb-12 text-center">
            <h3 className="text-2xl font-display text-primary mb-4">LeBlanc Hotel and Resort</h3>
            <p className="text-lg font-body text-foreground/90 leading-relaxed mb-6">
              Guests who prefer to stay overnight or book a room may call the Front Desk directly and mention the bride and groom’s names along with the event date to enjoy an automatic <span className="font-bold text-primary text-xl">45% OFF</span>.
            </p>
            <a 
              href="https://www.leblanc.com.ph" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-semibold hover:underline decoration-2 underline-offset-4"
            >
              Visit www.leblanc.com.ph for more details
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-xl border border-primary/10 hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-primary/5 p-2">
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-auto object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
