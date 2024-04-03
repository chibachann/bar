// src/pages/index.js
import * as React from 'react';
import Layout from '../components/layout';
import HeroImage from '../components/HeroImage/HeroImage';
import RestaurantIntroduction from '../components/RestaurantIntroduction/RestaurantIntroduction';
import WhiskyIntroduction from '../components/WhiskyIntroduction/WhiskyIntroduction';
import CocktailIntroduction from '../components/CocktailIntroduction/CocktailIntroduction';
import ShopInfo from '../components/ShopInfo/ShopInfo';

const IndexPage = () => {
  return (
    <Layout>
      <HeroImage /> 
      <RestaurantIntroduction />
      <WhiskyIntroduction />
      <CocktailIntroduction />
      <ShopInfo />
    </Layout>
  );
};

export default IndexPage;