"use client";

import type React from "react";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function ContactCTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, phone, email });
  };

  return (
    <section
      id="contact-section"
      className="bg-[#02090c] py-16 px-4 md:px-8 mt-8"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-semibold font-sofia-sans text-white text-center mb-2">
          LET&apos;S START INVESTING
          <br />
          <span className="inline-flex items-center">
            <span className="w-8 h-8 rounded-full border border-[#52acdc] flex items-center justify-center mr-2">
              <ArrowRight className="w-4 h-4 text-[#52acdc]" />
            </span>
            TOGETHER!
          </span>
        </h2>
        <p className="text-[#52acdc] text-3xl md:text-4xl font-mulish font-semibold text-center mb-12">
          CONTACT US TODAY
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="bg-[#101724] rounded-3xl p-8 font-sofia-sans">
            <Image
              src="/images/logo.png"
              alt="KAL Business Logo"
              width={50}
              height={50}
              className="mb-4"
            />
            <h3 className="text-white text-2xl font-semibold mb-1">
              KAL GENERAL
            </h3>
            <h3 className="text-white text-2xl font-semibold mb-1">BUSINESS</h3>
            <h3 className="text-white text-2xl font-semibold mb-8">CENTER</h3>

            <div className="mb-8">
              <p className="text-[#52acdc] mb-1">PHONE</p>
              <p className="text-white">+251 91 123 45 67</p>
            </div>

            <div className="mb-8">
              <p className="text-[#52acdc] mb-1">EMAIL</p>
              <p className="text-white">INFO@KALBUSINESS.COM</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-[#101724] rounded-3xl p-8">
            <h3 className="text-white text-2xl font-bold mb-4">
              REQUEST A CALL
            </h3>
            <p className="text-[#52acdc] mb-6">
              Fill out the application form and we will call you back
            </p>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border border-[#52acdc] rounded-full px-4 py-2 text-white placeholder-[#52acdc] focus:outline-none focus:ring-2 focus:ring-[#52acdc]"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent border border-[#52acdc] rounded-full px-4 py-2 text-white placeholder-[#52acdc] focus:outline-none focus:ring-2 focus:ring-[#52acdc]"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border border-[#52acdc] rounded-full px-4 py-2 text-white placeholder-[#52acdc] focus:outline-none focus:ring-2 focus:ring-[#52acdc]"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-[#52acdc] text-white rounded-full px-6 py-3 font-semibold flex items-center justify-center hover:bg-[#3d9ed0] transition-colors"
              >
                SEND REQUEST
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
