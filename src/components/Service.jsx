import { motion } from "framer-motion";

const services = [
  {
    title: "Bespoke Joinery",
    desc: "Custom-built joinery solutions tailored to your space, combining precision craftsmanship with refined design.",
  },
  {
    title: "Residential Projects",
    desc: "High-quality building services for homes, from renovations to full interior transformations.",
  },
  {
    title: "Commercial Builds",
    desc: "Professional construction solutions designed to meet business needs with efficiency and durability.",
  },
  {
    title: "Interior Finishing",
    desc: "Detailed finishing work that enhances the overall look and feel of your space with a premium touch.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
            What We Offer <br />
            <span className="text-[#C49A6C]">Crafted Solutions</span>
          </h2>

          <div className="w-16 h-[2px] bg-[#C49A6C] mt-6" />

          <p className="mt-6 text-gray-600">
            We provide a range of high-end joinery and building services, 
            focused on quality, precision, and long-lasting results.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Top Accent Line */}
              <div className="w-8 h-[2px] bg-[#C49A6C] mb-6 transition-all duration-300 group-hover:w-12" />

              {/* Title */}
              <h3 className="text-lg font-semibold text-black mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>

              {/* Hover Arrow */}
              <div className="mt-6 text-sm text-black flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}