import Image from "next/image";

export default function ContactForm() {
  return (
    <section className="py-16 bg-[#f7f9fa]">
      <div className="container px-4 lg:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-[1440px] mx-auto">
        <div className="space-y-8 max-w-2xl w-full">
          <h2 className="text-4xl font-bold text-[#011F43] leading-tight w-3/4">
            Have Questions? Contact Us Using The Inquiry Form
          </h2>
          <form className="space-y-2">
            <div className="flex items-center gap-2">
              <label
                htmlFor="full-name"
                className="text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                id="full-name"
                type="text"
                className="flex-1 p-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
              />
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="email" className="text-sm text-gray-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="flex-1 p-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
              />
            </div>

            <div className="flex items-center gap-2">
              <label
                htmlFor="subject"
                className="text-sm text-gray-600"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="flex-1 p-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
              />
            </div>

            <div className="flex gap-2">
              <label
                htmlFor="message"
                className="text-sm text-gray-600  pt-3"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="flex-1 p-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600 resize-none"
              />
            </div>

            <div className="pl-32 md:pl-16">
              <button
                type="submit"
                className="bg-[#011F43] text-white px-8 py-3 rounded-md hover:bg-blue-900 transition-colors duration-200 font-medium flex items-center gap-2"
              >
                <span>Send Now</span>
                <div className="w-2 h-2 rounded-full bg-white" />
              </button>
            </div>
          </form>
        </div>

        <div className="relative flex items-center justify-center lg:max-w-xl mx-auto w-full">
          <div
            className="relative w-full aspect-square rounded-full overflow-hidden"
            style={{ zIndex: 20 }}
          >
            <Image
              src="/images/dubai.png"
              alt="Dubai cityscape with mosque"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute top-0 right-[-2rem] md:right-[0rem] z-10">
            <span className="bg-[#EEE8E1] text-white text-xs w-40 h-40 flex items-center justify-center rounded-full shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
