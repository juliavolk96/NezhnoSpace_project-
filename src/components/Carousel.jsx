import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
  const carouselItems = [
    [
      'я боюсь, что люди отвернутся от меня',
      'я убеждена, что непривлекательная и малоценная в сравнении с кем-то',
      'я заедаю эмоции, будь-то радость, боль, страх или гнев',
      'соглашаюсь с чужим мнением, даже если знаю, что они неправы',
      'я подстраиваюсь под социум, чтобы не столкнуться с неодобрением и критикой',
      'я боюсь, что кто-то заметит мои недостатки',
    ],
    [
      'я постоянно сомневаюсь в себе',
      'я сделаю всё, чтобы не чувствовать себя брошенной или одинокой',
      'я борюсь с проблемами с помощью переедания, сигарет, алкоголя, секса',
      'я постоянно ощущаю тревогу, но не знаю её причину',
      'ем до ощущения дискомфорта',
    ],
    [
      'у меня есть проблемы со здоровьем, нерегулярный цикл',
      'я зациклена на фигуре, обеспокоена своим внешним видом',
      'я стремлюсь к совершенству, озабочена деталями, планами, чёткими установками',
      'часто думаю о весе и форме своего тела',
      'я педантичная, следую правилам социума и своим внутренним',
      'я злюсь на себя, если нарушаю свои пищевые правила',
    ],
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="intro_anxiety-slider">
      <Slider className="slider_sliders" {...settings}>
        {carouselItems.map((itemGroup, index) => (
          <div key={index} className="it_bothers_me_item">
            {itemGroup.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
