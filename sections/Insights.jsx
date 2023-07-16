'use client';
import { useState } from 'react';
import {motion} from 'framer-motion';
import  styles from '../styles';
import {staggerContainer}   from '../utils/motion';
import { InsightCard,TitleText, TypingText } from '../components'; 
import { insights} from '../constants';


const Insights = () => (

  <section className={`${styles.paddings} relative  
  z-10`}>
    <motion.div
     variants={staggerContainer}
     inherit="hidden"
     whileInView="show"
     viewport={{once:'false',amount:0.25}}
     className={`${styles.innerWidth} mx-auto 
     flex flex-col `}
    >
   <TypingText  title="| Stats"
   textStyle="text-center"
   />
   <TitleText title="Stats of Lionel Messi"
    textStyle="text-center"
   />
   <div className='mt-[50px] flex flex-col gap-[30px]'>
     {insights.map((insight,index)=>(
      <InsightCard key={`insight-${index}`} 
      {...insight} 
      index={index+1}
      />
     ))}
   </div>
     
     </motion.div>
  </section>
);

export default Insights;
