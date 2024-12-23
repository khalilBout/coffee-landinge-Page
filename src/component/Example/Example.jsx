import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import img4 from "../../assets/Images/4.webp";
import img5 from "../../assets/Images/5.webp";
import img6 from "../../assets/Images/6.webp";
import img7 from "../../assets/Images/7.webp";
import img8 from "../../assets/Images/8.webp";
import img9 from "../../assets/Images/9.webp";
import img10 from "../../assets/Images/10.webp";
import img11 from "../../assets/Images/11.webp";
import img12 from "../../assets/Images/12.webp";
import img13 from "../../assets/Images/13.webp";
import img14 from "../../assets/Images/14.webp";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-160%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: img4,
    title: "Title 1",
    id: 1,
  },
  {
    url: img5,
    title: "Title 2",
    id: 2,
  },
  {
    url: img6,
    title: "Title 3",
    id: 3,
  },
  {
    url: img7,
    title: "Title 4",
    id: 4,
  },
  {
    url: img8,
    title: "Title 5",
    id: 5,
  },
  {
    url: img9,
    title: "Title 6",
    id: 6,
  },
  {
    url: img10,
    title: "Title 7",
    id: 7,
  },
];
