import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-transparent relative z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Section: Logo and Text */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              src="/images/logo.png"
              alt="Government of Sharjah - Sharjah Social Security Fund"
              width={420}
              height={64}
              className="h-16 object-contain"
            />
          </div>
        </div>

        {/* Right Section: Contact and Navigation */}
        <div className="flex flex-col items-end justify-center">
          {/* Contact Info */}
          <div className="text-white mb-4 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm">065122000</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">info@sssf.shj.ae</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-8">
            {[
              "Home",
              "About Us",
              "Fund Services",
              "Law",
              "Media Center",
              "Contact Us",
              "Search"
            ].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white text-sm font-medium hover:text-gray-200 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}