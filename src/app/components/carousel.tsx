"use client";

import { Button } from "@heroui/button";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const cards = [
  {
    id: 1,
    img: "/first.png",
    title: "50+ Best creative website themes & templates",
    description:
      "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ",
  },
  {
    id: 2,
    img: "/second.png",
    title: "50+ Best creative website themes & templates",
    description:
      "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ",
  },
  {
    id: 3,
    img: "/third.png",
    title: "50+ Best creative website themes & templates",
    description:
      "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. ",
  },
];

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const duplicatedCards = [...cards, ...cards]; // Duplicate cards for seamless loop

  useEffect(() => {
    controls.start({ x: 0 });
  }, [controls]);

  return (
    <div
      ref={carouselRef}
      className="w-full overflow-hidden cursor-grab active:cursor-grabbing pt-[24px] pb-[48px]"
    >
      <motion.div
        className="flex gap-3"
        drag="x"
        animate={controls}
        dragConstraints={{ left: -cards.length * 370, right: 0 }}
        transition={{ ease: "linear", duration: 0.5 }}
      >
        {duplicatedCards.map((card, index) => (
          <div
            key={index}
            className="overflow-hidden min-w-[370px] bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.15)] rounded-lg"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-[230px] object-cover"
            />
            <div className="px-[35px] py-8 bg-white flex flex-col gap-[28px]">
              <div className="flex flex-col gap-[15px]">
                <h3 className="text-lg font-bold text-center leading-[28px] text-[#111928]">
                  {card.title}
                </h3>
                <p className="text-base text-[#637381] text-center leading-[24px] font-normal">
                  {card.description}
                </p>
              </div>
              <Button
                variant={index === 0 ? "solid" : "bordered"}
                className={`w-fit mx-auto items-center text-base font-medium leading-6 px-[28px] py-3 rounded-[50px] 
                  ${
                    index === 0
                      ? "bg-[#2D68F8] border border-[#3758F9] text-[var(--text-white)]"
                      : "border border-black text-black hover:bg-[#2D68F8] hover:text-[var(--text-white)] hover:border-[#3758F9]"
                  }`}
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
