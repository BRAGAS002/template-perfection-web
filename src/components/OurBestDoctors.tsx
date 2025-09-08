import { Button } from "@/components/ui/button";

const OurBestDoctors = () => {
  const doctors = [
    {
      name: "Dr. Andrew",
      specialty: "Cardiologist",
      description: "Experienced cardiologist with over 15 years of practice in heart disease treatment and prevention.",
      image: "doctor1.jpg" // Placeholder - user will replace
    },
    {
      name: "Dr. Brown", 
      specialty: "Dermatologist",
      description: "Specialist in skin conditions and cosmetic dermatology with expertise in advanced treatments.",
      image: "doctor2.jpg" // Placeholder - user will replace
    },
    {
      name: "Dr. Shaun",
      specialty: "Neurologist", 
      description: "Leading neurologist specializing in brain and nervous system disorders with cutting-edge treatments.",
      image: "doctor3.jpg" // Placeholder - user will replace
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-medical-dark mb-4">
            Our Best Doctors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our qualified and experienced medical professionals who are dedicated to providing you with the best healthcare services.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-card hover:shadow-hero transition-smooth overflow-hidden">
              {/* Doctor Image */}
              <div className="aspect-[4/3] bg-medical-blue-light">
                <div className="w-full h-full bg-gradient-to-br from-medical-blue/20 to-medical-blue/40 flex items-center justify-center">
                  <div className="text-center text-medical-blue">
                    <div className="w-20 h-20 bg-medical-blue/30 rounded-full mx-auto mb-2"></div>
                    <p className="text-xs font-medium">Doctor Photo</p>
                    <p className="text-xs">Replace with {doctor.image}</p>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-medical-dark mb-1">
                  {doctor.name}
                </h3>
                <p className="text-medical-blue font-medium mb-3">
                  {doctor.specialty}
                </p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {doctor.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="medical" size="sm" className="flex-1">
                    Book an appointment
                  </Button>
                  <Button variant="medical-outline" size="sm">
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBestDoctors;