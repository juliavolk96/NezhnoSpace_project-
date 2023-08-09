import React from 'react';

function LessMore() {
  const paragraphs = [
    'Мы применяем современные методы психотерапии. Наши алгоритмы подстраиваются под вас, ваш темп и запрос. Цель платформы выстроить ваш индивидуальный маршрут терапии по принципу — ровно столько, сколько нужно',
    'Вы выбираете одну тему месяца, которая у вас страдает, пока вы тревожитесь о еде. Например: карьера, отношения, секс, деньги, семья, и так далее. Таких тем в Нежно Space более 30. Вы можете оставаться в выбранной теме столько, сколько нужно. Это нормально, если вам понадобится больше времени. В Личном Кабинете вы найдете три блока материалов:',
  ];

  const lists = [
    ['Статья от специалиста', 'Психообразование', 'Гайд', 'Терапия'],
    ['Визуализация твоего прогресса', 'Упражнения', 'Медитации', 'Опросники'],
    ['Практики осознанного питания', 'Практики интуитивного питания', 'Дневник питания', 'Дневник эмоций'],
  ];

  const listTitles = ['Общие материалы', 'Умная подборка', 'Тренажеры'];

  return (
    <section className="less-more">
      <h2 className="less-more_title">
        Что ты получишь в Подписке?
      </h2>
      <div className="less-more_subtitle">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <ul className="less-more_list">
        {lists.map((list, index) => (
          <li className="less-more_item" key={index}>
            <p className="less-more_item-title">
              {listTitles[index]} по теме месяца:
            </p>
            <ul>
              {list.map((item, subIndex) => (
                <li key={subIndex}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <a className="less-more_link" href="confirm-anxiety">начать</a>
    </section>
  );
}

export default LessMore;
