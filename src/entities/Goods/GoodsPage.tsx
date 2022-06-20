import React, { useState } from 'react';
import IGoods from '../../interfaces/IGoods';
import Goods from '../../mocks/mockedGoods';
import url from '../../mocks/urlGoods';
import GoodsListPage from './components/GoodsListPage';

const GoodsPage = () => {
  const [goodsData, setGoodsData] = useState<IGoods[] | null>(null);
  const getGoodsRequest = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setGoodsData(data);
  };
  return <GoodsListPage arr={Goods} />;
  //   function createGoodsData(arr: Array<IGoods>) {
  //     let goods: Array<IGoods> = [];
  //     goods = arr.map((obj) => {
  //       // eslint-disable-next-line no-return-assign
  //       return (obj.data = JSON.stringify(new Date(2022, 6, 20)));
  //     });
  //     return goods;
  //   }
  //   createGoodsData(goodsData);
};
export default GoodsPage;
