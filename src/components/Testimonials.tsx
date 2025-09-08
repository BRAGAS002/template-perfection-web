const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York",
      rating: 5,
      comment: "The online consultation was incredibly convenient and the doctor was very professional. I received excellent care from home."
    },
    {
      name: "Michael Chen", 
      location: "California",
      rating: 5,
      comment: "Quick response time and accurate diagnosis. The platform made it easy to get medical help when I needed it most."
    },
    {
      name: "Emma Wilson",
      location: "Texas", 
      rating: 5,
      comment: "Outstanding service! The doctors are knowledgeable and caring. I highly recommend this platform to everyone."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-medical-blue-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-medical-dark mb-4">
            What Clients say<br />about Us
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-hero transition-smooth">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-medical-blue-light rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-medical-blue/30 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-medical-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;