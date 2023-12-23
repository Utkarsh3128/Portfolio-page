import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="flex justify-center mb-4">
      <ul className="w-[300px] flex justify-between items-center ">
        <motion.li
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            rotate: [0, 9, -9, 9, 0],
            transition: { duration: 0.3 },
          }}
        >
          <a href="#" className="text-sm font-semibold">
            Instagram
          </a>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            rotate: [0, 9, -9, 9, 0],
            transition: { duration: 0.3 },
          }}
        >
          <a href="#" className="text-sm font-semibold">
            Twitter
          </a>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            rotate: [0, 9, -9, 9, 0],
            transition: { duration: 0.3 },
          }}
        >
          <a href="#" className="text-sm font-semibold">
            Github
          </a>
        </motion.li>
      </ul>
    </footer>
  );
};

export default Footer;
