import { motion } from "framer-motion";
import aboutImg from "../assets/hero.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-100" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT - IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
            
          {/* Gold frame offset */}
          <div className="absolute -bottom-8 -right-8 w-full h-full border border-[#C49A6C]" />

          {/* Image */}
          <img
            src={aboutImg}
            alt="Craftsmanship"
            className="relative w-full h-[520px] object-cover"
          />

          {/* Floating badge */}
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-5 py-3 shadow-sm">
            <p className="text-xs tracking-widest text-gray-500">
              EST. 2019
            </p>
          </div>
        </motion.div>

        {/* RIGHT - CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >


          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-semibold text-black leading-tight"
          >
            Crafted with Precision, <br />
            <span className="text-[#C49A6C]">Built to Last</span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            className="w-16 h-[2px] bg-[#C49A6C] mt-6"
          />

          {/* Paragraphs */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-600 leading-relaxed"
          >
            LP Joinery & Building delivers high-end joinery and construction
            solutions tailored to each client. Our approach combines technical
            precision with refined aesthetics, ensuring every project meets the
            highest standards of quality.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-600 leading-relaxed"
          >
            From bespoke interiors to full-scale renovations, we focus on
            durability, detail, and seamless execution — creating spaces that
            are both functional and visually striking.
          </motion.p>

          {/* Features */}
          <motion.div
            variants={fadeUp}
            className="mt-8 grid grid-cols-2 gap-6"
          >
            {[
              "Bespoke Joinery",
              "Residential Projects",
              "Commercial Builds",
              "Interior Finishing",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-2 h-2 bg-[#C49A6C] transition-all duration-300 group-hover:scale-125" />
                <p className="text-sm text-gray-700 group-hover:text-black transition">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-10"
          >
            {[
              { number: "50+", label: "Projects" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-2xl font-semibold text-black">
                  {item.number}
                </h3>
                <p className="text-xs text-gray-500 tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}