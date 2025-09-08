const Stats = () => {
  const stats = [
    {
      number: "25,356",
      label: "Happy Clients",
      description: "Satisfied patients who received excellent care"
    },
    {
      number: "6,050", 
      label: "Completed Cases",
      description: "Successfully completed medical consultations"
    },
    {
      number: "21",
      label: "Expert Doctors", 
      description: "Qualified medical professionals available 24/7"
    },
    {
      number: "95%",
      label: "Satisfaction",
      description: "Patient satisfaction rate based on reviews"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-stats">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-dark mb-4">
            Our Stats show that we've
          </h2>
          <h3 className="text-4xl font-bold text-medical-blue">
            Happy Patients
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Numbers that reflect our commitment to providing exceptional healthcare services to our patients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-hero transition-smooth">
                <div className="text-4xl lg:text-5xl font-bold text-medical-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-medical-dark mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;