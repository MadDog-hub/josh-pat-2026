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

        <div className="flex flex-col gap-12 items-center">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative w-full max-w-5xl overflow-hidden rounded-xl shadow-2xl border border-primary/20 hover:shadow-3xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-white p-1 md:p-2">
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
