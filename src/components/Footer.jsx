import lplogo from "../assets/lplogo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">

          {/* BRAND */}
          <div>
            <img
              src={lplogo}
              alt="LP Joinery & Building"
              className="h-10 mb-6"
            />

            <p className="text-sm text-gray-400 leading-relaxed">
              Delivering high-quality joinery and building solutions with a focus 
              on precision, durability, and refined craftsmanship.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold mb-6">Quick Links</h4>

            <ul className="space-y-3 text-sm text-gray-400">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#C49A6C] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold mb-6">Services</h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>Bespoke Joinery</li>
              <li>Residential Projects</li>
              <li>Commercial Builds</li>
              <li>Interior Finishing</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold mb-6">Contact</h4>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>📍 London, UK</li>
            <p>📞 +44 0745 027 8995</p>
            <p>✉️ lpjoinery14@gmail.com</p>
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-block mt-6 px-5 py-2.5 bg-[#C49A6C] text-black text-sm font-medium rounded-full hover:bg-white transition"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} LP Joinery & Building. All rights reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Designed & Built with precision
          </p>

        </div>
      </div>
    </footer>
  );
}