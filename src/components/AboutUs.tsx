const AboutUs = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-medical-dark">
              About Us
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are committed to providing world-class healthcare services through our innovative online consultation platform. Our team of experienced doctors and medical professionals are dedicated to ensuring you receive the best possible care from the comfort of your home.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              With years of experience in telemedicine, we have successfully helped thousands of patients get timely medical advice, prescriptions, and follow-up care. Our platform connects you with qualified healthcare providers who are available 24/7 to address your medical concerns.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-medical-blue rounded-full"></div>
                <span className="text-medical-dark font-medium">24/7 Available Doctors</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-medical-blue rounded-full"></div>
                <span className="text-medical-dark font-medium">Secure & Confidential</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-medical-blue rounded-full"></div>
                <span className="text-medical-dark font-medium">Affordable Consultation</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-medical-blue-light rounded-2xl overflow-hidden shadow-card">
              {/* Placeholder for about us image - user will add their own */}
              <div className="w-full h-full bg-gradient-to-br from-medical-blue/10 to-medical-blue/20 flex items-center justify-center">
                <div className="text-center text-medical-blue">
                  <div className="w-20 h-20 bg-medical-blue/30 rounded-full mx-auto mb-4"></div>
                  <p className="text-sm font-medium">Doctor-Patient Image</p>
                  <p className="text-xs">Replace with consultation image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;