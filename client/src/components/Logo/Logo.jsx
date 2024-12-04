// src/components/logo/Logo.jsx
import { motion } from "framer-motion";

const Logo = ({ size = "text-4xl", className = "" }) => {
  return (
    <motion.h1
      className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600 tracking-wide z-10 ${size} ${className}`}
      whileHover={{ scale: 1.1 }}
    >
      Lumiroo
    </motion.h1>
  );
};

export default Logo;