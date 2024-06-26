import React from "react";
import { images1 } from "./constantse";
import { motion } from "framer-motion";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const DescriptionEvents = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="relative bg-blue-200 rounded-tr-4xl rounded-br-3xl">
      <div className="uppercase text-sm absolute top-2 right-4 underline-offset-4 underline">
        Events Organised By Health Center
      </div>
      {images1.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block py-10 md:px-20 px-10 text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="py-6 md:py-16 text-3xl md:text-5xl font-extrabold">{elem.title}</div>
            <div className="leading-relaxed text-base md:text-lg font-medium tracking-wide italic text-gray-600">
              {elem.desc}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default DescriptionEvents;
