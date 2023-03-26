'use client';

import { motion } from "framer-motion"

import { TypingText, TitleText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} z-10 relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center"/>
      <TitleText title={<>Track friends around you and invite them to play 
        together in the same world</>} textStyles="text-center"/>
      
      <motion.div
        variants={fadeIn('up','tween',0.3,1)}
        className="relative w-full h0[550px] flex mt-[68px]"
      >
        <img 
          src="./map.png" 
          alt="map" 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute bottom-20 right-20 rounded-full w-[70px] h-[70px] p-[6px]
          bg-[#5d6680]">
            <img 
              src="people-01.png" 
              alt="people" 
              className="w-full h-full"
            />
        </div>
        <div className="absolute top-10 left-20 rounded-full w-[70px] h-[70px] p-[6px]
          bg-[#5d6680]">
            <img 
              src="people-02.png" 
              alt="people" 
              className="w-full h-full"
            />
        </div>
        <div className="absolute top-1/2 left-[45%] rounded-full w-[70px] h-[70px] p-[6px]
          bg-[#5d6680]">
            <img  
              src="people-03.png" 
              alt="people" 
              className="w-full h-full"
            />
        </div>
        {/* <div className="absolute bottom-[40%] left-[20%] rounded-[24px] w-[217px] h-[167px] 
          bg-[#323f5d] flex flex-col">
            <div className="mt-[4%] ml-[5%] w-[196px] h-[150px]">
              <img 
                src="./upside-down-tile.png" 
                alt="upside down" 
                className="w-full h-full object-contain"
              />
              <div className="absolute flex flex-row -mt-[80px] ml-[10px]">
                  <img 
                    src="./title-people-1.png" 
                    alt="tile-people1" 
                    className="w-[25px] h-[25px] object-contain"  
                  />
                  <img 
                    src="./title-people-2.png" 
                    alt="title-people2" 
                    className="w-[25px] h-[25px] object-contain -ml-[10px]"
                  />
                  <img 
                    src="./title-people-3.png" 
                    alt="title-people3" 
                    className="w-[25px] h-[25px] object-contain -ml-[10px]"
                  />
                  <p className="m-auto ml-[10px] text-[14px] 
                    text-white font-normal">
                    +246 has joined
                  </p>
                </div>
                <h3 className="absolute -mt-[40px] ml-[20px] font-bold 
                  text-white">
                  The Upside Down
                </h3>
            </div>
        </div>
        <div className="absolute top-[10%] right-[20%] rounded-[24px] w-[217px] h-[167px] 
          bg-[#323f5d] flex flex-col">
            <div className="mt-[4%] ml-[5%] w-[196px] h-[150px]">
              <img 
                src="./hawkins-lab-tile.png" 
                alt="hawkins lab" 
                className="w-full h-full object-contain"
              />
              <div className="absolute flex flex-row -mt-[80px] ml-[10px]">
                  <img 
                    src="./title-people-1.png" 
                    alt="tile-people1" 
                    className="w-[25px] h-[25px] object-contain"  
                  />
                  <img 
                    src="./title-people-2.png" 
                    alt="title-people2" 
                    className="w-[25px] h-[25px] object-contain -ml-[10px]"
                  />
                  <img 
                    src="./title-people-3.png" 
                    alt="title-people3" 
                    className="w-[25px] h-[25px] object-contain -ml-[10px]"
                  />
                  <p className="m-auto ml-[10px] text-[14px] 
                    text-white font-normal">
                    +246 has joined
                  </p>
                </div>
                <h3 className="absolute -mt-[40px] ml-[20px] font-bold 
                  text-white">
                  Hawkins Labs
                </h3>
            </div>
        </div> */}
      </motion.div>
    </motion.div>
  </section>
);

export default World;
