import React from "react";
import { images } from "./constants";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  activeImage: number;
};

const Description: React.FC<Props> = ({ activeImage }) => {
  return (
    <div className="relative w-full h-full">
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-[80vh] relative"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="w-full h-full relative"
          >
            <Image
              src={elem.src}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Description;
