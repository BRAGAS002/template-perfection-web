const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Create Account",
      description: "Sign up with your email and create a secure account to get started with our platform."
    },
    {
      step: "02", 
      title: "Search Doctor",
      description: "Browse through our list of qualified doctors and specialists based on your needs."
    },
    {
      step: "03",
      title: "Schedule Appointment", 
      description: "Choose a convenient time slot and book your appointment with your preferred doctor."
    },
    {
      step: "04",
      title: "Start Consultation",
      description: "Connect with your doctor through video call and get professional medical advice."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-medical-blue-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-medical-dark mb-4">
            How it Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get started with our simple 4-step process to receive quality healthcare from the comfort of your home.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-hero transition-smooth h-full">
                {/* Step Number */}
                <div className="w-16 h-16 bg-medical-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                
                {/* Step Title */}
                <h3 className="text-xl font-bold text-medical-dark mb-4">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;