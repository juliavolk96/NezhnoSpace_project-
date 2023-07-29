import React from 'react';
import Carousel from './Carousel.jsx';
import PriceBanner from './PriceBanner.jsx';
import './style.css';

function MainBanner() {
  return (
    <main className="main">
      <div className="bg_item bg_item_1"></div>
      <div className="bg_item bg_item_2"></div>
      <div className="bg_item bg_item_3"></div>
      <div className="bg_item bg_item_4"></div>
      <div className="container main_cnt intro">
        <div className="banner_main_width intro_wrap">
          <h1 className="intro_title">
            Здравствуй, <span>это Нежно Space</span>
          </h1>
          <p className="intro_subtitle">
            Платформа психологической поддержки на&nbsp;основе Искусственного
            Интеллекта. Мы&#160;здесь, чтобы помочь справиться
            с&#160;расстройством пищевого поведения и&#160;выгоранием.
            Наши&#160;алгоритмы формируют подборку упражнений с&#160;учетом
            твоих конкретных тревог и&#160;сложностей.
          </p>
        </div>
      </div>
      <div className="intro_anxiety">
        <h2 className="banner_main_width intro_anxiety-title">
          Меня тревожит:
        </h2>
        <Carousel />
      </div>
      <div className="intro_link-wrap">
        <a href="auth" target="_blank">
          Хочу разобраться в этом!
        </a>
      </div>
      <PriceBanner />
    </main>
  );
}

export default MainBanner;
