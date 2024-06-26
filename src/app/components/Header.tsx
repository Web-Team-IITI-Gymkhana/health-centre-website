import React from "react";

const Top = () => {
  return (
    <div id="about" className="max-w-screen-lg mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Logo and Text */}
        <div className="flex items-center w-full md:w-auto relative md:relative mb-4 md:mb-0">
          {/* Image */}
          <div className="mr-4 md:mr-6">
            <img
              src="/logo.jpg"
              alt="provider_img"
              className="rounded-xl object-cover w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 align-text-top"
            />
          </div>
          {/* Text */}
          <div className="md:ml-4">
            <h4 className="capitalize font-bold text-base sm:text-lg md:text-2xl lg:text-3xl">
              Indian Institute of Technology, Indore
            </h4>
            <h4 className="capitalize font-bold leading-tight py-2 text-sm sm:text-base md:text-lg lg:text-xl">
              भारतीय प्रौद्योगिकी संस्थान इंदौर
            </h4>
            <div className="bg-blue-900 h-0.5 w-full md:w-60"></div>
            <p className="leading-6 font-bold text-base sm:text-lg md:text-xl lg:text-2xl pt-2 pb-2">
              Health Center-स्वास्थ्य केंद्र
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
