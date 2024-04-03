"use client";

import Image from "next/image";
import React from "react";
import { MdOutlineLanguage } from "react-icons/md";
import { TiMicrophoneOutline } from "react-icons/ti";

const LandingPage: React.FC = () => {
  const handleVoiceInput = () => {
    console.log("Voice Input Clicked");
  };
  return (
    <>
      <div className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:gap-12 md:px-6 lg:grid-cols-2 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Airport Kiosk Shopping
              </h1>
              <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Shop conveniently and quickly right from the kiosk. Whether
                you're in a hurry or want to browse, we've got you covered.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="inline-flex items-center space-x-2">
                <TiMicrophoneOutline
                  className="h-6 w-6 gray"
                  onClick={handleVoiceInput}
                />
                <span className="font-medium">Voice Input</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <MdOutlineLanguage className="h-6 w-6 gray" />
                <span className="font-medium">Language</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              width="500"
              height="300"
              src="/banner-image.png"
              alt="Banner Image"
              className="aspect-video overflow-hidden rounded-xl object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
