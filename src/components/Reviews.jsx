import React from 'react';
import Slider from 'react-slick';

const reviews = [
  {
    author: 'Анастасия, 29 лет',
    text: 'Спасибо за практику с колесом гедонизма!) ...',
    time: 'Нежно с 12.2022',
  },
  {
    author: 'Катя, 20 лет',
    text: 'Очень круто, что могу выбирать тренажеры для себя. ...',
    time: 'Нежно с 11.2022',
  },
  {
    author: 'Виктория, 39 лет',
    text: 'Понравились упражнения из телесно-ориентированной психотерапии. ...',
    time: 'Нежно с 09.2022',
  },
];

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="reviews">
      <h2 className="trial-title">Отзывы:</h2>
      <div className="reviews_wrap">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div className="reviews_item" key={index}>
              <h3 className="reviews_author">{review.author}</h3>
              <hr />
              <p className="reviews_text">{review.text}</p>
              <span className="reviews_time">{review.time}</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Reviews;
