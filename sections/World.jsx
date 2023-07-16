'use client';
import { useState } from 'react';
import {motion} from 'framer-motion';
import  styles from '../styles';
import {staggerContainer,fadeIn,planetVariants}   from '../utils/motion';
import {  TitleText, TypingText } from '../components'; 

const World = () => (
  <section className={`${styles.paddings} relative  
  z-10`}>
    <motion.div
     variants={staggerContainer}
     inherit="hidden"
     whileInView="show"
     viewport={{once:'false',amount:0.25}}
     className={`${styles.innerWidth} mx-auto 
     flex  flex-col `}
    >

      <TypingText title="| Fan all around the World"
      textStyle="text-center"
      />
      <TitleText title={<>
      Messi influence is unreal he has millions of fans all 
      around the world who loves him enternally
      </>} 
      textStyle="text-center"
      />

      <motion.div
      variant={fadeIn('up','tween',0.3,1)}
       className='relative mt-[68px] flex w-full h-[550px]'
      >
     <img src="/map.png" alt="map"
     className='w-full h-full object-cover'
     />

       <div className='absolute bottom-20 right-20 w-[70px]
       h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
      <img 
      src="/people-01.png"
       alt="people" 
        className='w-full h-full '
       />
       </div>
       <div className='absolute top-20 left-20 w-[70px]
       h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
      <img 
      src="/people-02.png"
       alt="people" 
        className='w-full h-full '
       />
       </div>
       <div className='absolute top-1/2 left-[45%] w-[70px]
       h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
      <img 
      src="/people-03.png"
       alt="people" 
        className='w-full h-full '
       />
       </div>
      </motion.div>
      </motion.div>
  </section>
);

export default World;
