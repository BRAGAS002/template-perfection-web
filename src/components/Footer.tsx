const Footer = () => {
  return (
    <footer className="bg-medical-dark text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-medical-blue rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold">E-Consultation</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Providing quality healthcare services through innovative online consultation platform. Available 24/7 for your medical needs.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-medical-blue transition-smooth cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-medical-blue transition-smooth cursor-pointer">
                <span className="text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-medical-blue transition-smooth cursor-pointer">
                <span className="text-sm">i</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">CATEGORIES</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-medical-blue transition-smooth">Surgery</a></li>
              <li><a href="#" className="text-white/70 hover:text-medical-blue transition-smooth">Women's Health</a></li>
              <li><a href="#" className="text-white/70 hover:text-medical-blue transition-smooth">Radiology</a></li>
              <li><a href="#" className="text-white/70 hover:text-medical-blue transition-smooth">Cardiology</a></li>
              <li><a href="#" className="text-white/70 hover:text-medical-blue transition-smooth">Psychiatry</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-6">ABOUT</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-medical-blue transition-smooth">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-medical-blue transition-smooth">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-medical-blue transition-smooth">Partnerships</a></li>
              <li><a href="#" className="text-white/70 hover:text-medical-blue transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-medical-blue transition-smooth">Terms of Service</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-medical-blue transition-smooth">Facebook</a></li>
              <li><a href="#" className="text-white/70 hover:text-medical-blue transition-smooth">Twitter</a></li>
              <li><a href="#" className="text-white/70 hover:text-medical-blue transition-smooth">Instagram</a></li>
              <li><a href="#" className="text-white/70 hover:text-medical-blue transition-smooth">LinkedIn</a></li>
              <li><a href="#" className="text-white/70 hover:text-medical-blue transition-smooth">YouTube</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2024 E-Consultation. All rights reserved.
            </p>
            <p className="text-white/70 text-sm">
              Designed with ❤️ for better healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;