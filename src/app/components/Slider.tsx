import React, { useEffect, useState } from "react";
import { images } from "./constants";
import { motion } from "framer-motion";
import Image from "next/image";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const clickPrev = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className="relative w-full h-[80vh] md:h-[70vh] lg:h-[80vh]">
      {images.map((elem, idx) => (
        <motion.div
          key={idx}
          className={`absolute top-0 left-0 w-full h-full ${
            idx === activeImage ? "block" : "hidden"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={elem.src}
            alt=""
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Slider;
