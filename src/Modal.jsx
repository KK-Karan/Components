import { DropdownMenu } from "radix-ui";
import { AnimatePresence, motion } from "motion/react";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

function DropdownComp() {
  const texts = ["Home", "Services", "Contact", "About Us"];
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="inline-flex items-center justify-center cursor-pointer rounded-xl bg-gray-100 outline-none p-1.5 text-lg font-bold"
          aria-label="Customise options"
        >
          Toggle
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <DropdownMenu.Content
              className="min-w-[220px] rounded-lg bg-white pb-[35px] text-gray-900  "
              sideOffset={5}
            >
              {texts.map((text, index) => {
                return (
                  <DropdownMenu.Item
                    className="outline-none cursor-pointer pl-4 pt-2 pb-1"
                    key={index}
                  >
                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                        y: 15,
                      }}
                      transition={{
                        ease: "easeIn",
                        duration: 0.8,
                        y: { duration: 0.4 },
                      }}
                      className="text-lg font-semibold"
                    >
                      {text}
                    </motion.p>
                  </DropdownMenu.Item>
                );
              })}
            </DropdownMenu.Content>
          </motion.div>
        </AnimatePresence>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default DropdownComp;


