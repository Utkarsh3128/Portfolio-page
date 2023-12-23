import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex justify-between item-center pt-4 relative z-50 ">
      <div>
        <h1 className="font-bold text-xl">UK</h1>
      </div>
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
          <a href="" className="text-sm font-semibold">
            Home
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
          <a href="" className="text-sm font-semibold">
            Projects
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
          <a href="" className="text-sm font-semibold">
            Skills
          </a>
        </motion.li>
      </ul>
      <div>
        <a href="" className="text-sm font-semibold">
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
