import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-medical-blue">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-medical-blue rounded-2xl p-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Subscribe to get updated
          </h2>
          
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Stay informed about the latest health tips, medical advances, and exclusive offers from our platform.
          </p>

          {/* Email Subscription Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <Button variant="secondary" size="lg" className="bg-white text-medical-blue hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;