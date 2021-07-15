import { motion } from "framer-motion";
import { ReactNode } from "react";

export type TransitionProps = {
  children: ReactNode;
};

function Transition({ children }: TransitionProps): JSX.Element {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default Transition;
