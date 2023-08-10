import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        <div className="reviews_list slick-initialized slick-slider">
          <button className="slick-prev slick-arrow" aria-label="Previous">
            Previous
          </button>
          <div className="slick-list draggable">
            <div className="slick-track">
              <Slider {...settings}>
                {reviews.map((review, index) => (
                  <div className="reviews_item slick-slide" key={index}>
                    <h3 className="reviews_author">{review.author}</h3>
                    <hr />
                    <p className="reviews_text">{review.text}</p>
                    <span className="reviews_time">{review.time}</span>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <button className="slick-next slick-arrow" aria-label="Next">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
