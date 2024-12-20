import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="container px-5 py-12 mx-auto ">
        <div className="text-center">
          <h1 className="sm:text-6xl text-3xl font-medium title-font text-gray-900 mb-4">
            Find & Discover Players
          </h1>
          <h1 className="sm:text-6xl text-3xl font-medium title-font text-[#87CEFA] mb-4">
            Near You
          </h1>
          <p className="text-justify leading-relaxed xl:w-2/6 lg:w-3/4 mx-auto text-gray-500s text-[14px] sm:text-[24px]">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
