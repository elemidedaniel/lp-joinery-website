import { motion } from "framer-motion";

const testimonials = [
  {
    name: "James Walker",
    role: "Homeowner",
    text: "Exceptional craftsmanship from start to finish. The attention to detail and quality of work exceeded expectations.",
  },
  {
    name: "Sarah Mitchell",
    role: "Interior Designer",
    text: "Professional, reliable, and highly skilled. The final result was exactly what we envisioned.",
  },
  {
    name: "Daniel Carter",
    role: "Business Owner",
    text: "Great communication and top-quality execution. Would highly recommend for any building project.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
            What Clients Say <br />
            <span className="text-[#C49A6C]">About Our Work</span>
          </h2>

          <div className="w-16 h-[2px] bg-[#C49A6C] mx-auto mt-6" />
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-14 text-center shadow-sm border border-gray-100"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            “{testimonials[0].text}”
          </p>

          <div className="mt-8">
            <h4 className="text-base font-semibold text-black">
              {testimonials[0].name}
            </h4>
            <p className="text-sm text-gray-500">
              {testimonials[0].role}
            </p>
          </div>
        </motion.div>

        {/* Smaller Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {testimonials.slice(1).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <p className="text-gray-600 leading-relaxed">
                “{item.text}”
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-black">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}