import React, { useState } from "react";
import { motion } from "motion/react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Sidebar() {
  const menuItems = ["Home", "Invoices", "Usage", "Profile", "Settings"];

  const [navigationVisible, setNavigationVisible] = useState(false);
  return (
    <>
      <motion.div
        initial="hidden"
        animate={navigationVisible ? "visible" : "hidden"}
        variants={{
          hidden: { width: 75, transition: {staggerChildren: 0.1, staggerDirection: -1 , delay:0.4}},
          visible: { width: 200, transition: { staggerChildren: 0.1 } },
        }}
        className="bg-amber-50 h-screen p-4 text-black flex flex-col justify-start items-start gap-4"
      >
        <button
          className="border-2 border-black p-1 rounded-md cursor-pointer bg-amber-100"
          onClick={() => setNavigationVisible((prev) => !prev)}
        >
          <HamburgerMenuIcon width={32} height={32} />
        </button>
        <nav className="pt-2">
          <ul className="text-black text-lg font-semibold flex justify-start flex-col items-start gap-6">
            {menuItems.map((item) => (
              <motion.li
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -20,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                key={item}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
}
