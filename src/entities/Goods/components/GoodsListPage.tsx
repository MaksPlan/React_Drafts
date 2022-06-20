import React from 'react';
import IGoods from '../../../interfaces/IGoods';
import GoodsCard from './GoodsCard';

const GoodsListPage = (arr: IGoods[]) => {
  return (
    <div>
      {arr.map((stuff) => {
        stuff.date = JSON.stringify(new Date(2022, 6, 20));
        return <GoodsCard title={title} date={date} />;
      })}
    </div>
  );
};

export default GoodsListPage;
