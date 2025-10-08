import React, { useState } from 'react';
// import Slider from 'react-slick';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import { Container, Carousel, Search, Logo, Wrapper, Map, CarouselTitle } from './styles';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Restaurants Search" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="Sushi" />
            <Card photo={restaurante} title="Hot Roll" />
            <Card photo={restaurante} title="Yakisoba" />
            <Card photo={restaurante} title="Temaki" />
            <Card photo={restaurante} title="Harumaki" />
            <Card photo={restaurante} title="Churrasco Gaúcho" />
          </Carousel>
          {/* <button type="button" onClick={() => setModalOpened(true)}>
            Abrir Modal
          </button> */}
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
