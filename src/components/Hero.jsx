import heroImg from "../assets/hero.png"; // use a strong craftsmanship image

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Accent Line */}
          <div className="w-12 h-[2px] bg-[#C49A6C] mb-6"></div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight">
            Precision Craftsmanship <br />
            <span className="text-[#C49A6C]">& Timeless Design</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-600 max-w-lg text-lg">
            Bespoke joinery and building services tailored to elevate your space with quality, detail, and lasting results.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-3 text-sm font-medium text-white bg-black rounded-full transition-all duration-300 hover:bg-[#C49A6C] hover:text-black"
            >
              Get a Quote
            </a>

            <a
              href="#projects"
              className="text-sm font-medium text-black border-b border-black hover:border-[#C49A6C] hover:text-[#C49A6C] transition-all duration-300"
            >
              View Projects →
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-full h-full border border-[#C49A6C]"></div>
          
          <img
            src={heroImg}
            alt="Joinery work"
            className="relative w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}