import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import Loader from './Loader';

const Home = () => {
  
  const buttonVariants={
    hover:{
      // scale:[1.1,1,1.1,1,1.1], //keyframes
      scale:1.1,
          //x y z color
      textShadow:"0px 0px 8px rgb(255,255,255)",
      boxShadow:" 0px 0px 8px rgb(255,255,255)" ,
      transition:{
        // yoyo:10 //10 times or 5
        duration:0.3,
        yoyo:Infinity
      }      
    }
  }
  const containerVariants={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        delay:1.5,
        duration:1.5
      }
    },
    exit:{
      x:'-100vh',
      transition:{
        ease:'easeInOut'
      }
    }
  }

  return (
    <motion.div className="home container"
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'
    >
      <motion.h2
      animate={{scale:1.5}}
      >
        Welcome to Pizza onTheWay
      </motion.h2>
      <Link to="/base">
        <motion.button
        variants={buttonVariants}
        whileHover='hover'
        // whileHover={{
        //   scale:1.1,
        //   //x y z color
        //   textShadow:"0px 0px 8px rgb(255,255,255)",
        //   boxShadow:" 0px 0px 8px rgb(255,255,255)"
        
        // }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;