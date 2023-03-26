'use client';

import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] bg-[#323f5d] rounded-[24px]`}
    >
      <img src={imgUrl} alt={title} className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1
      className="mt-[26px] font-bold text-[24px] leading-[30px] text-white"
    >
      {title}
    </h1>
    <p
      className="flex-1 mt-[8px] font-normal text-[#B0B0B0] text-[18px]
        leading-[32px]"
    >
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
