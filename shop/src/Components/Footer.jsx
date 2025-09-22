function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Column 1: Brand Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">ShirtShop</h2>
            <p className="text-gray-200">
              High-quality shirts for every occasion delivered right to your doorstep.
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-300">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-300">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-300">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-300">Help Center</a></li>
              <li><a href="#" className="hover:text-yellow-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Email: support@shirtshop.com</li>
              <li>Phone: +1 (234) 567-8901</li>
              <li>Address: 123 Shirt St, Fashion City</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 text-center text-gray-300 text-sm">
          © 2025 ShirtShop. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
