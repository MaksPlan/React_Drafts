import React from 'react';
import style from './goodscard.module.scss';

const GoodsCard = ({ title: string, date: string }) => {
  return (
    <div className={style.card_box}>
      <p>{title}</p>
      <p>{date}</p>
    </div>
  );
};

export default GoodsCard;
