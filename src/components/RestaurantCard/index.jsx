import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Restaurant Name</Title>
      <ReactStars count={5} isHalf value={4} edit={false} activeColor="#E7711C" />
      <Address>Rua do Teste, 1091</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} alt="Foto do Restaurante" width="88" height="88" />
  </Restaurant>
);

export default RestaurantCard;
