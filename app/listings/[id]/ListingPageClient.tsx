"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Building2, 
  School, 
  Car, 
  Shield,
  BedDouble,
  Bath,
  Square,
  Heart,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function ListingPageClient() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Property Header */}
      <motion.section 
        className="bg-white border-b"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">1213 Avenue Z</h1>
              <p className="text-gray-600 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Brooklyn, NY 11235
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="lg">
                <Heart className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button size="lg">Contact Agent</Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Property Images */}
      <motion.section 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="grid grid-cols-4 gap-4 h-[500px]">
          <div className="col-span-2 row-span-2">
            <Zoom>
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3"
                alt="Property Main"
                className="w-full h-full object-cover rounded-l-xl"
              />
            </Zoom>
          </div>
          <div>
            <Zoom>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3"
                alt="Property"
                className="w-full h-full object-cover"
              />
            </Zoom>
          </div>
          <div>
            <Zoom>
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3"
                alt="Property"
                className="w-full h-full object-cover rounded-tr-xl"
              />
            </Zoom>
          </div>
          <div>
            <Zoom>
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3"
                alt="Property"
                className="w-full h-full object-cover"
              />
            </Zoom>
          </div>
          <div>
            <Zoom>
              <img
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3"
                alt="Property"
                className="w-full h-full object-cover rounded-br-xl"
              />
            </Zoom>
          </div>
        </div>
      </motion.section>

      {/* Property Details */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Property Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <BedDouble className="w-5 h-5 text-gray-500" />
                      <span>3 Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-gray-500" />
                      <span>2 Bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square className="w-5 h-5 text-gray-500" />
                      <span>2,100 sqft</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Beautiful apartment featuring modern amenities, spacious rooms, and stunning views.
                    Recently renovated with high-end finishes throughout.
                  </p>
                </CardContent>
              </Card>

              <Tabs defaultValue="neighborhood" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="neighborhood">Neighborhood</TabsTrigger>
                  <TabsTrigger value="schools">Schools</TabsTrigger>
                  <TabsTrigger value="commute">Commute</TabsTrigger>
                </TabsList>
                <TabsContent value="neighborhood">
                  <Card>
                    <CardHeader>
                      <CardTitle>Neighborhood Insights</CardTitle>
                      <CardDescription>Comprehensive data about the area</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {[
                          { icon: Shield, title: "Crime Rate", value: "Low", desc: "15% below city average" },
                          { icon: School, title: "School Rating", value: "8/10", desc: "Top-rated district" },
                          { icon: Car, title: "Traffic Score", value: "Good", desc: "Average commute: 25 mins" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                            <item.icon className="w-8 h-8 text-primary" />
                            <div>
                              <h3 className="font-semibold">{item.title}</h3>
                              <p className="text-2xl font-bold my-1">{item.value}</p>
                              <p className="text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="schools">
                  <Card>
                    <CardHeader>
                      <CardTitle>Schools Information</CardTitle>
                      <CardDescription>Details about nearby schools</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                          <School className="w-8 h-8 text-primary" />
                          <div>
                            <h3 className="font-semibold">Greenwood High School</h3>
                            <p className="text-gray-600">Rating: 9/10</p>
                            <p className="text-gray-600">Distance: 1.2 miles</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                          <School className="w-8 h-8 text-primary" />
                          <div>
                            <h3 className="font-semibold">Sunnyvale Elementary</h3>
                            <p className="text-gray-600">Rating: 8/10</p>
                            <p className="text-gray-600">Distance: 0.8 miles</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="commute">
                  <Card>
                    <CardHeader>
                      <CardTitle>Commute Options</CardTitle>
                      <CardDescription>Information about local commute options</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                          <Car className="w-8 h-8 text-primary" />
                          <div>
                            <h3 className="font-semibold">Public Transit</h3>
                            <p className="text-gray-600">Bus Stop: 0.3 miles</p>
                            <p className="text-gray-600">Train Station: 1.5 miles</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                          <Car className="w-8 h-8 text-primary" />
                          <div>
                            <h3 className="font-semibold">Driving</h3>
                            <p className="text-gray-600">Average commute: 25 mins</p>
                            <p className="text-gray-600">Traffic: Moderate</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>

          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">$2,400/mo</CardTitle>
                <CardDescription>Est. payment: $3,200/mo</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-4">Schedule a Tour</Button>
                <Button variant="outline" className="w-full">
                  Request Information
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}