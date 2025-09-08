import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-medical-blue-light to-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-medical-dark leading-tight">
              Our Best{" "}
              <span className="text-medical-blue">Doctors</span>{" "}
              Online
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="medical" size="xl">
                Book an Appointment
              </Button>
              <Button variant="medical-outline" size="xl">
                Learn more
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-medical-blue-light rounded-2xl overflow-hidden shadow-hero">
              {/* Placeholder for doctor image - user will add their own */}
              <div className="w-full h-full bg-gradient-to-br from-medical-blue/20 to-medical-blue/40 flex items-center justify-center">
                <div className="text-center text-medical-blue">
                  <div className="w-24 h-24 bg-medical-blue/30 rounded-full mx-auto mb-4"></div>
                  <p className="text-sm font-medium">Doctor Image Placeholder</p>
                  <p className="text-xs">Replace with your doctor image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;