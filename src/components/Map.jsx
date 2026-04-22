export default function Map() {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">
            Location
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Find Us in <span className="text-[#C49A6C]">Ellesmere Port</span>
          </h2>

          <div className="w-16 h-[2px] bg-[#C49A6C] mt-4" />
        </div>

        {/* Map */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden border border-gray-200">
          <iframe
            title="Ellesmere Port Map"
            src="https://www.google.com/maps?q=Ellesmere+Port+England&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}