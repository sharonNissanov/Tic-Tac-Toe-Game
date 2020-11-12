import React, { useState } from 'react';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)", 
    transition: {
       duration: 0.7,
      yoyo: Infinity
    }
  }
}

const NewGame = () => {
  return(
    <motion.button 
      variants={buttonVariants}
      animate="hover"
      className="new-game"
      onClick={()=>window.location.reload()}
    >
      NEW GAME
    </motion.button>
  )
}


export default NewGame;
