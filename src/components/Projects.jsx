import { motion } from "framer-motion";

import p1 from "../assets/hero.png";
import p2 from "../assets/hero.png";
import p3 from "../assets/hero.png";
import p4 from "../assets/hero.png";

const projects = [
  {
    title: "Modern Kitchen Renovation",
    category: "Residential",
    image: p1,
  },
  {
    title: "Custom Wardrobe Design",
    category: "Bespoke Joinery",
    image: p2,
  },
  {
    title: "Office Interior Build",
    category: "Commercial",
    image: p3,
  },
  {
    title: "Luxury Living Space",
    category: "Interior Finishing",
    image: p4,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
            Selected Work <br />
            <span className="text-[#C49A6C]">Recent Projects</span>
          </h2>

          <div className="w-16 h-[2px] bg-[#C49A6C] mt-6" />

          <p className="mt-6 text-gray-600">
            A selection of our recent projects showcasing craftsmanship, detail, 
            and high-quality finishes across different spaces.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[320px] md:h-[400px] object-cover transition-transform duration-700 ease-out md:group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="
                absolute inset-0
                bg-gradient-to-t from-black/70 via-black/20 to-transparent
                opacity-100
                md:opacity-0 md:group-hover:opacity-100
                transition duration-300
              " />

              {/* Content */}
              <div className="
                absolute bottom-0 left-0 w-full p-5 md:p-6
                translate-y-0 opacity-100
                md:translate-y-10 md:opacity-0
                md:group-hover:translate-y-0 md:group-hover:opacity-100
                transition duration-300
              ">
                <p className="text-xs text-gray-300 mb-1">
                  {project.category}
                </p>

                <h3 className="text-base md:text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <div className="mt-2 text-sm text-[#C49A6C]">
                  View Project →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-black text-white rounded-full transition-all duration-300 hover:bg-[#C49A6C] hover:text-black"
          >
            Start Your Project
          </a>
        </div>

      </div>
    </section>
  );
}