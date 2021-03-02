import React, { useState,useEffect } from 'react';
import {motion,AnimatePresence} from 'framer-motion'

const Order = ({ pizza,setShowModal }) => {

  useEffect(() => {
    setTimeout(()=>{
      setShowModal(true)
    },5000)
  },[setShowModal])
  const containerVariants={
    hidden:{
      opacity:0,
      x:'100vw'
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        type:'spring',
        //higher mass means slower and vice versa
        mass:0.4,
        //higher damping means slow strength
        damping:8,
        when:"beforeChildren",
        staggerChildren:0.4 //time delay for the next children
      }
    },
    exit:{
      x:'-100vh',
      transition:{
        ease:'easeInOut'
      }
    }
  }
  const childVariants={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1
    }
  }
  // const [showTitle,setShowTitle]=useState(true);
  // setTimeout(()=>{
  //   setShowTitle(false);
  // },4000)
  return (
    <motion.div className="container order"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit='exit'
    >
      <h2
      >Thank you for your order :)</h2>
      <motion.p 
      variants={childVariants}
      >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div 
      variants={childVariants}
      >
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;