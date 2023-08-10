import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header.jsx';
import MainBanner from './components/MainBanner.jsx';
import About from './components/About.jsx';
import LessMore from './components/LessMore.jsx';
import Reviews from './components/Reviews.jsx';
import Footer from './components/Footer.jsx';
import './components/mediaStyle.css';
import './components/style.css';
import './components/commonStyle.css';

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
      <About />
      <LessMore />
      <Reviews />
      <Footer menuItems={menuItems} />
    </div>
  );
}

export default App;
