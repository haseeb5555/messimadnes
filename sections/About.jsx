'use client';
import {motion} from 'framer-motion';
import  styles from '../styles';
import { TypingText } from '../components';
import {fadeIn,staggerContainer}   from '../utils/motion';
const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
     <div className='gradient-02 z-0'/>
     <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
       viewport={{once:'false',amount:0.25}}
       className={`${styles.innerWidth} mx-auto ${styles.flexCenter}
       flex-col`}
     >

     <TypingText title="| About Messiversus" 
      textStyle="text-center"
     /> 

     <motion.p
     variants={fadeIn('up','tween',0.2,1)}
     className='mt-[8px] font-normal sm:text-[32px]
     text-[20px] text-cener text-secondary-white'
     >
     <span className='font-extrabold text-white'>Lionel Messi-GOAT </span>
    
     is an Argentine soccer player widely
     regarded as one of the greatest of all time.
      He played for FC Barcelona for over two decades,
       winning numerous titles including 10 La Liga championships and
       <span className='font-extrabold text-white'> 4 UEFA Champions League titles.</span>
     Messi's exceptional skills in dribbling,
      ball control, and goal-scoring earned him a record-breaking 
      <span className='font-extrabold text-white'> 7 Ballon d'Or awards.</span>
      In 2021, he left Barcelona and joined Paris Saint-Germain (PSG). Now he is Miami.
      He has also represented the Argentine national team, winning the
      <span className='font-extrabold text-white'> World cup </span>
      in 2022. Messi's impact on soccer is immeasurable, inspiring millions with his talent, consistency,
     and unforgettable moments on the pitch.

     </motion.p>
     <motion.img
      variants={fadeIn('up','tween',0.3,1)}
       src='/arrow-down.svg'
       alt='arrow-down'
       className='w-[18px] h-[28px] object-contain 
       mt-[28px]'
      />

     
     </motion.div>
  </section>
);

export default About;
 