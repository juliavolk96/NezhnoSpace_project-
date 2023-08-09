import React from 'react';

function About() {
  return (
    <section className="about">
      <div className="about__image"></div>
      <div className="about_wrap">
        <h2 className="about_title">Мы здесь, чтобы ты&#160;прошла свой путь нежно</h2>
        <div className="about_description">
          {[
            'Мы знаем, как бывает трудно и одиноко.',
            'Ничего не происходит без поддержки. Наша платформа создана специально, чтобы она у тебя была в доступе 24/7.',
            'Мы здесь, чтобы помочь тебе выйти из тупика эмоционального выгорания, справиться с РПП, повысить самооценку.',
            'Позволь Нежно Space показать тебе, насколько чудесная ты.',
          ].map((paragraph, index) => (
            <div key={index}>
              {paragraph}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default About;
