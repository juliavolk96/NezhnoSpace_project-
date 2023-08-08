import React from 'react';

function PriceBanner() {
  const subscriptionOptions = [
    {
      duration: '1 месяц',
      price: '3000 ₽',
      trial: 'первые 7 дней за 7 ₽',
      pricePerMonth: '3000 ₽ / мес.',
      paymentId: '944',
    },
    {
      duration: '6 месяцев',
      price: '15000 ₽',
      trial: 'первые 7 дней за 7 ₽',
      pricePerMonth: '2500 ₽ / мес.',
      paymentId: '945',
    },
    {
      duration: '1 год',
      price: '25000 ₽',
      trial: 'первые 7 дней за 7 ₽',
      pricePerMonth: '2084 ₽ / мес.',
      paymentId: '946',
    },
  ];

  return (
    <section className="subscriptions" id="subscriptions">
      <div className="subscriptions_wrap">
        <h2 className="subscriptions_title">Начни заботиться о себе с Нежно:</h2>
        <div className="subscription_cnt">
          <ul className="subscriptions_list">
            {subscriptionOptions.map((option) => (
              <li key={option.paymentId} className="subscriptions_item">
                <div className="subscriptions_item-wrap">
                  <p className="subscriptions_item-title"></p>
                  <div className="subscriptions_item-info">
                    <span className="subscriptions_item-duration">{option.duration}</span>
                    <span className="subscriptions_item-price">{option.price}</span>
                    <span className="subscriptions_item-trial">{option.trial}</span>
                    <span className="subscriptions_price-month">{option.pricePerMonth}</span>
                  </div>
                </div>
                <form action="payment" method="post">
                  <input type="hidden" value={option.paymentId} name="payment_id" />
                  <button name="payment_btn" type="submit">хочу подписку</button>
                </form>
              </li>
            ))}
          </ul>
          <p className="ta_center">
            Пока не готовы начать? <span className="main_learn_more">Узнайте больше о подписке Нежно Space</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default PriceBanner;
