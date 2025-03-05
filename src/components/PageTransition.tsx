
import { ReactNode } from "react";
import { motion } from "framer-motion";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
