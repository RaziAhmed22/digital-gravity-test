import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero-section.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-end gap-4">
            <Image
              src="/images/logo.png"
              alt="Government of Sharjah"
              width={420}
              height={64}
              className="h-auto xl:w-[420px] lg:w-[360px] md:w-[280px] sm:w-[250px] object-contain"
            />
          </div>

          <div className="flex flex-col items-end">
            <div className="flex gap-6 text-white text-sm mb-1 lg:mb-1 md:mb-0 lg:text-sm md:text-xs">
              <span>065122000</span>
              <span>info@sssf.shj.ae</span>
            </div>
            <nav className="flex gap-8 lg:gap-4 md:gap-2 sm:gap-2 text-white text-sm lg:text-sm md:text-xs">
              {[
                "Home",
                "About Us",
                "Fund Services",
                "Law",
                "Media Center",
                "Contact Us",
                "Search",
              ].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-gray-200 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="absolute bottom-6 left-0 right-0 z-10">
        <div className="container mx-auto px-10">
          <h1 className="text-white font-bold text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl lg:mb-6 md:mb-4 mb-6 leading-tight">
            Protect Your Presence Secure Your Future
          </h1>

          <div className="flex gap-40 md:gap-10 lg:gap-36 xl:gap-40 items-start ">
            <div className="flex items-center gap-2 text-white mb-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span className="text-sm">Sharjah Social Security Fund</span>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-white text-sm mb-4 max-w-md">
                {
                  "Security in the Emirate of Sharjah plays an important role in achieving job stability and strengthening the employee's relationship..."
                }
              </p>
              <button className="flex items-center gap-2 bg-[#002A54] text-white px-6 py-3 rounded hover:bg-[#003a75] transition-colors mb-4">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
