"use client";

import { useState } from 'react';
import Image from "next/image";

export default function Services() {
  const [activeTab, setActiveTab] = useState('Individual Services');

  return (
    <section className="py-20 bg-[#f7f9fa]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Discover Our Services
        </h2>
        <div className="flex justify-center gap-6 mb-12 ">
          <div className="flex border w-fit rounded-full bg-white">
            {[
              { name: "All Services" },
              { name: "Business Services" },
              { name: "Individual Services" },
            ].map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-8 py-2 rounded-full text-sm ${
                  activeTab === tab.name
                    ? "bg-blue-900 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {[
            {
              title: "Employer Registration",
              icon: "/icons/registration.png",
            },
            {
              title: "Periodic Review",
              icon: "/icons/review.png",
            },
            {
              title: "Development & Improvement",
              icon: "/icons/development.png",
            },
            {
              title: "Investment",
              icon: "/icons/investment.png",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="mx-auto mb-6 flex justify-center items-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={133}
                  height={118}
                  className="object-contain"
                />
              </div>
              <h3 className="font-medium text-gray-900">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}