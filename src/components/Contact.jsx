import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
            Let’s Build Something <br />
            <span className="text-[#C49A6C]">Exceptional</span>
          </h2>

          <div className="w-16 h-[2px] bg-[#C49A6C] mt-6" />

          <p className="mt-6 text-gray-600 max-w-md">
            Have a project in mind? Get in touch today for a free quote. 
            We respond quickly and aim to provide clear, professional advice.
          </p>

          {/* Contact Info */}
          <div className="mt-10 space-y-4 text-sm text-gray-700">
            <p>📍 London, United Kingdom</p>
            <p>📞 +44 0745 027 8995</p>
            <p>✉️ lpjoinery14@gmail.com</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#FAFAFA] p-8 md:p-10 border border-gray-100"
        >
          {/* Name */}
          <div className="mb-6">
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-2 px-4 py-3 bg-white border border-gray-200 focus:border-black outline-none transition"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="text-sm text-gray-600">Email Address</label>
            <input
              type="email"
              placeholder="john@email.com"
              className="w-full mt-2 px-4 py-3 bg-white border border-gray-200 focus:border-black outline-none transition"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="text-sm text-gray-600">Project Details</label>
            <textarea
              rows="4"
              placeholder="Tell us about your project..."
              className="w-full mt-2 px-4 py-3 bg-white border border-gray-200 focus:border-black outline-none transition"
            ></textarea>
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full relative px-6 py-3 bg-black text-white overflow-hidden group"
          >
            <span className="relative z-10">Request a Quote</span>

            <span className="absolute inset-0 bg-[#C49A6C] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}