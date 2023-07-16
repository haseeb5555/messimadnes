'use client';
import { useState } from 'react';
import {motion} from 'framer-motion';
import  styles from '../styles';
import {staggerContainer,fadeIn,planetVariants}   from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components'; 
import {exploreWorlds, startingFeatures} from '../constants'

const GetStarted = () => (
  <section className={`${styles.paddings} relative  
  z-10`}>
    <motion.div
     variants={staggerContainer}
     inherit="hidden"
     whileInView="show"
     viewport={{once:'false',amount:0.25}}
     className={`${styles.innerWidth} mx-auto 
     flex lg:flex-row flex-col gap-8`}
    >
    <motion.div
    
    
    variants={planetVariants('left')}
     className={`flex-1 ${styles.flexCenter}`}
    >
    <img src="/get-started.png" alt="get-started"
    
    className='w-[90%] h-[90%] object-contain'
    />

    </motion.div>
     <motion.div
     variants={fadeIn('left','tween',0.2,1)}
     className='flex-[0.75] flex flex-center 
     flex-col'
     
     >
    <TypingText title="| Facts About Lionel Messi"/>
   <TitleText title={<>Know About Messi by just few  
    clicks</>}/>
    <div className='mt-[31px] flex flex-col 
    max-w-[370px] gap-[24px]'>
      {startingFeatures.map((feature,index)=>(

        <StartSteps
        key={feature}
        number={index+1}
        text={feature}
        />

      ))}
    </div>
     </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;