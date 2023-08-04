import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header.jsx';
import MainBanner from './components/MainBanner.jsx';
import Footer from './components/Footer.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './components/style.css';
import './components/mediaStyle.css';

function App() {
  const menuItems = [
    { text: 'Главная', link: '#' },
    { text: 'О нас', link: '#' },
    { text: 'Блог', link: '#' },
  ];
  return (
    <div className="App">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Ubuntu+Condensed&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header menuItems={menuItems} />
      <MainBanner />
      <Footer menuItems={menuItems} />
    </div>
  );
}

export default App;
