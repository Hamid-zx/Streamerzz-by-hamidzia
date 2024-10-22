import { motion } from "framer-motion";
import { HOW_IT_WORKS_CONTENT } from "../constants";

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.6,
      duration: 0.6,
    },
  }),
};

const HowItWorks = () => {
  return (
    <section id="works">
      <div className="max-w-7xl mx-auto mt-20 px-4">
        <div className="text-center mb-12 border-t border-neutral-800">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-b from-neutral-600 via-neutral-300 to-neutral-50 bg-clip-text text-transparent text-center"
          >
            {HOW_IT_WORKS_CONTENT.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-4 text-neutral-400 max-w-xl mx-auto"
          >
            {HOW_IT_WORKS_CONTENT.sectionDescription}
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
            <motion.div
              custom={index}
              variants={stepVariants}
              key={index}
              className="bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-neutral-400 mb-4">{step.description}</p>
              </div>
              <div className="flex justify-center">
                <img
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  className="rounded-lg"
                />
              </div>
              {step.users && (
                <div className="flex justify-between items-center mt-4">
                  <div className="flex -space-x-2">
                    {step.users.map((user, userIndex) => (
                      <img
                        key={userIndex}
                        src={user}
                        className="h-8 w-8 rounded-full border-2 border-black"
                      />
                    ))}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg">
                    Connect
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
