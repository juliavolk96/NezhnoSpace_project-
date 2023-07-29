import React from 'react';
import Header from './components/Header.jsx';
import MainBanner from './components/MainBanner.jsx';
import PriceBanner from './components/PriceBanner.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const menuItems = [
    { text: 'Главная', link: '#' },
    { text: 'О нас', link: '#' },
    { text: 'Блог', link: '#' },
  ];
  return (
    <div className="App">
      <Header menuItems={menuItems} />
      <MainBanner />
      <PriceBanner />
      <Footer menuItems={menuItems} />
    </div>
  );
}

export default App;
