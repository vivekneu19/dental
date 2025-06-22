import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const Index = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #054773 0%, #0a5a85 25%, #0f6b96 50%, #0a5a85 75%, #054773 100%)",
      }}
    >
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ y, opacity }}
        className="container mx-auto px-4 py-8 md:py-16 lg:py-20 relative z-10"
      >
        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden space-y-8">
          {/* Heading First on Mobile */}
          <motion.div
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl font-black text-gray-900 leading-tight"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Implant Pricing Is Broken.
              </motion.span>
              <motion.span
                className="block text-dental-blue mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                ALLONUS™ Fixed It.
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Image Second on Mobile */}
          <motion.div
            className="relative"
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://images.pexels.com/photos/3946834/pexels-photo-3946834.jpeg"
                alt="Professional dental clinic treatment showing modern dental care"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              {/* Overlay Badge */}
              <motion.div
                className="absolute top-4 left-4"
                initial={{ y: -20, opacity: 0 }}
                animate={
                  heroInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-white/95 backdrop-blur-sm text-dental-blue border border-white/20 shadow-lg px-3 py-1.5 text-xs font-semibold hover:bg-white transition-all duration-300"
                  >
                    Patented Flat-Fee System.
                    <span className="block">
                      Exclusive to DentalImplantsAtHouston.com
                    </span>
                  </Badge>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Rest of Content Third on Mobile */}
          <motion.div
            className="space-y-6"
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {/* Subheading */}
            <motion.p
              className="text-lg text-dental-gray leading-relaxed font-light text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Restore your smile with a revolutionary flat-fee model where
              implant count doesn't change your cost.
            </motion.p>

            {/* Visual Checklist */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.h3
                className="text-lg font-semibold text-gray-800 mb-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                All Options. One Price.
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Implant Options */}
                {[
                  { emoji: "4️⃣", text: "4 Implants", delay: 1.7 },
                  { emoji: "6️⃣", text: "6 Implants", delay: 1.8 },
                  { emoji: "8️⃣", text: "8 Implants", delay: 1.9 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: item.delay }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                        {item.text}
                      </span>
                    </div>
                    <motion.span
                      className="text-gray-400 line-through text-sm"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      Variable
                    </motion.span>
                  </motion.div>
                ))}

                {/* Same Price Highlight */}
                <motion.div
                  className="flex items-center justify-center p-4 bg-dental-blue text-white rounded-xl font-bold text-lg relative overflow-hidden group cursor-pointer sm:col-span-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    heroInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.6, delay: 2.0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-dental-blue-light to-dental-teal opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="flex items-center space-x-3 z-10">
                    <motion.span
                      className="text-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      ✅
                    </motion.span>
                    <motion.span
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Same Price
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="pt-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-dental-blue hover:bg-dental-blue-dark text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-dental-blue-light to-dental-teal"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">
                    Get a Transparent Quote—Zero Surprises
                  </span>
                </Button>
              </motion.div>

              <motion.p
                className="text-sm text-dental-gray mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.4 }}
              >
                No hidden fees. No surprise costs. Just honest pricing.
              </motion.p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="pt-8 border-t border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 2.6 }}
            >
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-dental-gray">
                {[
                  "Licensed Specialists",
                  "FDA Approved Materials",
                  "Lifetime Warranty",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 2.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-green-500 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <span className="hover:text-gray-900 transition-colors">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            initial={{ x: -100, opacity: 0 }}
            animate={
              heroInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl group"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://images.pexels.com/photos/3946834/pexels-photo-3946834.jpeg"
                alt="Professional dental clinic treatment showing modern dental care"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              {/* Overlay Badge */}
              <motion.div
                className="absolute top-6 left-6"
                initial={{ y: -20, opacity: 0 }}
                animate={
                  heroInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-white/95 backdrop-blur-sm text-dental-blue border border-white/20 shadow-lg px-4 py-2 text-sm font-semibold hover:bg-white transition-all duration-300"
                  >
                    Patented Flat-Fee System.
                    <br className="hidden sm:block" />
                    <span className="block sm:inline">
                      {" "}
                      Exclusive to DentalImplantsAtHouston.com
                    </span>
                  </Badge>
                </motion.div>
              </motion.div>

              {/* Floating Animation Dots */}
              <motion.div
                className="absolute top-20 right-6 w-3 h-3 bg-dental-blue rounded-full opacity-60"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-20 right-10 w-2 h-2 bg-dental-teal rounded-full opacity-40"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ x: 100, opacity: 0 }}
            animate={heroInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {/* Brand Logo/Name */}
            <motion.div
              className="mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={
                heroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.h1
                className="text-5xl font-black text-gray-900 leading-tight"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Implant Pricing Is Broken.
                </motion.span>
                <motion.span
                  className="block text-dental-blue mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  whileHover={{ scale: 1.02 }}
                >
                  ALLONUS™ Fixed It.
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              className="text-xl text-dental-gray leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Restore your smile with a revolutionary flat-fee model where
              implant count doesn't change your cost.
            </motion.p>

            {/* Visual Checklist */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.h3
                className="text-lg font-semibold text-gray-800 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                All Options. One Price.
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Implant Options */}
                {[
                  { emoji: "4️⃣", text: "4 Implants", delay: 1.3 },
                  { emoji: "6️⃣", text: "6 Implants", delay: 1.4 },
                  { emoji: "8️⃣", text: "8 Implants", delay: 1.5 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: item.delay }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                        {item.text}
                      </span>
                    </div>
                    <motion.span
                      className="text-gray-400 line-through text-sm"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      Variable
                    </motion.span>
                  </motion.div>
                ))}

                {/* Same Price Highlight */}
                <motion.div
                  className="flex items-center justify-center p-4 bg-dental-blue text-white rounded-xl font-bold text-lg relative overflow-hidden group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    heroInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.6, delay: 1.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-dental-blue-light to-dental-teal opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="flex items-center space-x-3 z-10">
                    <motion.span
                      className="text-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      ✅
                    </motion.span>
                    <motion.span
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Same Price
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-dental-blue hover:bg-dental-blue-dark text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-dental-blue-light to-dental-teal"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">
                    Get a Transparent Quote—Zero Surprises
                  </span>
                </Button>
              </motion.div>

              <motion.p
                className="text-sm text-dental-gray mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.0 }}
              >
                No hidden fees. No surprise costs. Just honest pricing.
              </motion.p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="pt-8 border-t border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              <div className="flex flex-wrap items-center gap-6 text-sm text-dental-gray">
                {[
                  "Licensed Specialists",
                  "FDA Approved Materials",
                  "Lifetime Warranty",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 2.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-green-500 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <span className="hover:text-gray-900 transition-colors">
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Secondary Section - Value Proposition */}
      <motion.section
        className="bg-gray-50 py-16 relative overflow-hidden z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, #1e40af 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, #0891b2 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, #1e40af 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Why Choose ALLONUS™?
            </motion.h2>
            <motion.p
              className="text-lg text-dental-gray mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Traditional implant pricing is confusing and expensive. Our
              flat-fee model makes quality dental care accessible and
              predictable.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: "💰",
                  title: "Transparent Pricing",
                  description:
                    "No hidden costs or surprise fees. You know exactly what you'll pay upfront.",
                  delay: 0.6,
                },
                {
                  icon: "⚡",
                  title: "Revolutionary System",
                  description:
                    "Our patented flat-fee model disrupts traditional implant pricing.",
                  delay: 0.8,
                },
                {
                  icon: "🏆",
                  title: "Premium Quality",
                  description:
                    "Top-tier materials and expert craftsmanship at a fair, fixed price.",
                  delay: 1.0,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-dental-blue rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden group-hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(30, 64, 175, 0)",
                        "0 0 0 10px rgba(30, 64, 175, 0.1)",
                        "0 0 0 0 rgba(30, 64, 175, 0)",
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.4,
                      },
                    }}
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-dental-blue-light to-dental-teal opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <motion.span
                      className="text-2xl text-white z-10"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    >
                      {item.icon}
                    </motion.span>
                  </motion.div>
                  <motion.h3
                    className="font-semibold text-gray-900 mb-2 group-hover:text-dental-blue transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay + 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="text-dental-gray text-sm group-hover:text-gray-700 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay + 0.4 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Index;
