"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Building2, School, Car, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";


const featuredListings = [
  {
    id: 1,
    title: "Luxury Villa",
    address: "123 Example Street, City",
    price: "$1,250,000",
    beds: "4 beds",
    baths: "3 baths",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
  },
  {
    id: 2,
    title: "Modern Apartment",
    address: "456 Another Street, City",
    price: "$850,000",
    beds: "3 beds",
    baths: "2 baths",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
  },
  {
    id: 3,
    title: "Cozy Family Home",
    address: "789 Cozy Lane, City",
    price: "$620,000",
    beds: "3 beds",
    baths: "2 baths",
    imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3",
  },
];


export default function Home() {
  return (
    <div>
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3"
            alt="Luxury Home"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Your Perfect Home
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Make data-driven decisions with comprehensive neighborhood insights
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Input 
                placeholder="Enter an address, neighborhood, city, or ZIP code"
                className="pl-10 h-12 w-full bg-white/95 text-black"
              />
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Search Properties
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Make Informed Decisions
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: "Flight Proximity", desc: "Know your distance to nearest airports" },
              { icon: Car, title: "Traffic Data", desc: "Real-time traffic and commute insights" },
              { icon: Shield, title: "Crime Statistics", desc: "Detailed neighborhood safety metrics" },
              { icon: School, title: "School Ratings", desc: "Access to education quality data" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Properties
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Link href={`/listings/${listing.id}`}>
                  <img
                    src={listing.imageUrl}
                    alt={listing.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
                    <p className="text-gray-600 mb-4">{listing.address}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{listing.price}</span>
                      <div className="flex gap-4 text-gray-600">
                        <span>{listing.beds}</span>
                        <span>{listing.baths}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </main>
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2025 Maverick Estate. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/contact" className="text-sm hover:underline">Contact Us</a>
            <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
            <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
