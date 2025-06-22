import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6627589/pexels-photo-6627589.jpeg"
                alt="Detailed dental implant restoration showing professional implant work"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />

              {/* Overlay Badge */}
              <div className="absolute top-6 left-6">
                <Badge
                  variant="secondary"
                  className="bg-white/95 backdrop-blur-sm text-dental-blue border border-white/20 shadow-lg px-4 py-2 text-xs md:text-sm font-semibold"
                >
                  Patented Flat-Fee System.
                  <br className="hidden sm:block" />
                  <span className="block sm:inline">
                    {" "}
                    Exclusive to DentalImplantsAtHouston.com
                  </span>
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Brand Logo/Name */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Implant Pricing Is Broken.
                <span className="block text-dental-blue mt-2">
                  ALLONUS™ Fixed It.
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-dental-gray leading-relaxed font-light">
              Restore your smile with a revolutionary flat-fee model where
              implant count doesn't change your cost.
            </p>

            {/* Visual Checklist */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                All Options. One Price.
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Implant Options */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">4️⃣</span>
                    <span className="font-medium text-gray-700">
                      4 Implants
                    </span>
                  </div>
                  <span className="text-gray-400 line-through text-sm">
                    Variable
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">6️⃣</span>
                    <span className="font-medium text-gray-700">
                      6 Implants
                    </span>
                  </div>
                  <span className="text-gray-400 line-through text-sm">
                    Variable
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">8️⃣</span>
                    <span className="font-medium text-gray-700">
                      8 Implants
                    </span>
                  </div>
                  <span className="text-gray-400 line-through text-sm">
                    Variable
                  </span>
                </div>

                {/* Same Price Highlight */}
                <div className="flex items-center justify-center p-4 bg-dental-blue text-white rounded-xl font-bold text-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✅</span>
                    <span>Same Price</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-dental-blue hover:bg-dental-blue-dark text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get a Transparent Quote—Zero Surprises
              </Button>

              <p className="text-sm text-dental-gray mt-3">
                No hidden fees. No surprise costs. Just honest pricing.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-100">
              <div className="flex flex-wrap items-center gap-6 text-sm text-dental-gray">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Licensed Specialists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>FDA Approved Materials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Lifetime Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Section - Value Proposition */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why Choose ALLONUS™?
            </h2>
            <p className="text-lg text-dental-gray mb-8">
              Traditional implant pricing is confusing and expensive. Our
              flat-fee model makes quality dental care accessible and
              predictable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-dental-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💰</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Transparent Pricing
                </h3>
                <p className="text-dental-gray text-sm">
                  No hidden costs or surprise fees. You know exactly what you'll
                  pay upfront.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-dental-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Revolutionary System
                </h3>
                <p className="text-dental-gray text-sm">
                  Our patented flat-fee model disrupts traditional implant
                  pricing.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-dental-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏆</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Premium Quality
                </h3>
                <p className="text-dental-gray text-sm">
                  Top-tier materials and expert craftsmanship at a fair, fixed
                  price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
