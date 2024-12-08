import Link from "next/link";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      {/* Page Header */}
      <div className="h-[286px] bg-[#F6F5FF] flex items-center py-16">
        <div className="container md:w-[1170px] mx-auto px-4">
          <h1 className="text-3xl text-center md:text-left font-bold mb-4">Contact Us</h1>
          <div className="flex justify-center md:justify-start items-center gap-2 text-sm">
            <Link href="/">Home</Link>
            <span>•</span>
            <Link href="/pages">Pages</Link>
            <span>•</span>
            <span className="text-[#FB2E86]">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container md:w-[1170px] mx-auto px-4 py-16">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#151875] mb-4">Information About Us</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices
                mattis aliquam, malesuada diam est.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#151875] mb-6">Contact Way</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Add your contact information here */}
              </div>
            </div>

            <div className="">
              <h2 className="text-2xl font-bold text-[#151875] mb-6">Get In Touch</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices
                tristique amet erat vitae eget dolor lobortis.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 mt-6 md:pl-2 w-full">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    required
                    className="border rounded-[4px] border-gray-500 p-2"
                  />
                  <input
                    type="email"
                    placeholder="Your E-mail*"
                    required
                    className="border rounded-[4px] border-gray-500 p-2"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="border rounded-[4px] border-gray-500 p-2"
                />
                <textarea
                  placeholder="Type Your Message"
                  required
                  className="min-h-[150px] border rounded-[4px] border-gray-500 p-2"
                />
                <button
                  type="submit"
                  className="bg-[#FB2E86] rounded-[4px] px-10 text-white hover:bg-[#FB2E86]/90"
                >
                  Send Mail
                </button>
              </form>
            </div>
          </div>

          <div className="relative">
            <img src="/images/contact.png" alt="Contact illustration" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
