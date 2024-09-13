// src/components/Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <h1>{t('welcome')}</h1>
      <p>{t('explore_plans')}</p>
      <div className="features">
        <div className="feature">
          <h2>{t('comprehensive_plans')}</h2>
          <p>{t('explore_plans')}</p>
        </div>
        <div className="feature">
          <h2>{t('expert_advice')}</h2>
          <p>{t('expert_advice')}</p>
        </div>
        <div className="feature">
          <h2>{t('affordable_rates')}</h2>
          <p>{t('affordable_rates')}</p>
        </div>
        <div className="gotome">
            <
        </div>
      </div>
    </div>
  );
};

export default Home;