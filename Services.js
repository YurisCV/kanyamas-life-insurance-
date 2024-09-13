// src/components/Services.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="services">
      <h1>{t('services')}</h1>
      <div className="service-item">
        <h2>{t('comprehensive_plans')}</h2>
        <p>{t('explore_plans')}</p>
      </div>
      <div className="service-item">
        <h2>{t('expert_advice')}</h2>
        <p>{t('expert_advice')}</p>
      </div>
      <div className="service-item">
        <h2>{t('affordable_rates')}</h2>
        <p>{t('affordable_rates')}</p>
      </div>
    </div>
  );
};

export default Services;