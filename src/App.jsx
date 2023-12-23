import "./App.css";
import img from "../src/assets/images/programmer.jpg";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { motion } from "framer-motion";

function App() {
  // const sentence = "Hi,I am Utkarsh";
  return (
    <>
      <div className="relative h-screen px-12 overflow-hidden">
        <Navbar />

        {/* for blur background */}
        <div className="absolute -top-12 -left-12 w-[300px] h-[300px] bg-red-500 blur-[120px]" />
        <div className="absolute bottom-0 -right-12 w-[300px] h-[300px] bg-blue-500 blur-[100px]" />

        <section className="relative h-[calc(100vh-80px)] flex flex-col items-center">
          <div className="absolute left-[200px] top-[200px] h-[100px] flex items-center overflow-hidden ">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                },
                show: {
                  opacity: 1,
                },
              }}
              initial="hidden"
              animate="show"
              transition={{
                staggerChildren: 0.07,
              }}
              className="flex text-6xl font-bold text-[#5567f2] drop-shadow-lg z-50"
            >
              {Array.from("Hi").map((letter, index) => (
                <motion.span
                  variants={{
                    hidden: {
                      y: 100,
                    },
                    show: {
                      y: 0,
                      transition: {
                        ease: "easeInOut",
                      },
                    },
                  }}
                  key={index}
                >
                  {letter}
                </motion.span>
              ))}
              &nbsp;
              {Array.from("I'm").map((letter, index) => (
                <motion.span
                  variants={{
                    hidden: {
                      y: 100,
                    },
                    show: {
                      y: 0,
                      transition: {
                        ease: "easeInOut",
                      },
                    },
                  }}
                  key={index}
                >
                  {letter}
                </motion.span>
              ))}
              &nbsp;
              {Array.from("Utkarsh").map((letter, index) => (
                <motion.span
                  variants={{
                    hidden: {
                      y: 100,
                    },
                    show: {
                      y: 0,
                      transition: {
                        ease: "easeInOut",
                      },
                    },
                  }}
                  key={index}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div className="w-[600px] m-auto">
            <motion.img
              variants={{
                hidden: {
                  clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                },
                show: {
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  transition: {
                    delay: 1.2,
                    duration: 1.3,
                    ease: "easeInOut",
                  },
                },
              }}
              initial="hidden"
              animate="show"
              src={img}
              alt=""
              className=""
            />
          </div>

          <motion.div
            variants={{
              hidden: {
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                opacity: 0,
                x: 75,
              },
              show: {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                opacity: 1,
                x: 0,
                transition: {
                  delay: 1.3,
                  duration: 1.5,
                  ease: "easeIn",
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="bg-slate-300 p-4 w-[300px] absolute bottom-[120px] right-[200px] drop-shadow-lg z-50 overflow-hidden rounded-lg"
          >
            <p className="text-black text-sm font-medium text-justify">
              Hello Everyone, I am a Full-Stack Web developer. I specialize in
              creating seamless, interactive, and user-centric web applications.
            </p>
          </motion.div>

        </section>
          <Footer />
      </div>
    </>
  );
}

export default App;
