import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./App.css"; // The main CSS file should already handle responsive styles

const Start = () => {
  const [showText, setShowText] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="start-container">
      <div className="flex justify-end p-5">
        <div className="user-stats">User</div>
      </div>
      
      {/* Title Animation */}
      <motion.h1 
        className="logo"
        animate={{ y: showShop ? -20 : 0 }}
        transition={{ duration: 0.5 }}
      >
        Doodle Me!
      </motion.h1>

      {/* Description - Appears on Hover */}
      <AnimatePresence>
        {showText && (
          <motion.h1 
            className="description "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            DoodleMe is a fun and interactive drawing and guessing game where players sketch a word or phrase while others try to guess it.
          </motion.h1>
        )}
      </AnimatePresence>
      <div className="centerbutton">

      {/* Get Started Button */}
      <button 
        className="center-button-start text-xl h-auto py-4"
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
        onClick={() => navigate("/lobby")}
      >
        Get Started!
      </button>
        <br />
      {/* Shopping Button */}
      <button className="center-button-shopping text-xl h-auto py-4" onClick={() => setShowShop(true)}>
        Shopping!
      </button>
      </div>

      

      {/* Shop Modal */}
      <AnimatePresence>
        {showShop && (
          <>
            {/* Background Overlay */}
            <motion.div 
              className="shop-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setShowShop(false)} // Close when clicking outside
            />

            {/* Popup Window */}
            <motion.div 
              className="shop-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="shop-title">Shops</h2>
              <div className="shop-sections">
                <div className="shop-box Avatar-box"><p>Avatars</p></div>
                <div className="shop-box Theme-box"><p>Themes</p></div>
              </div>
              <button className="close-shop" onClick={() => setShowShop(false)}>Close</button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Start;
