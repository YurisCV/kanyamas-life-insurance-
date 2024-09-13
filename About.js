// src/components/About.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <h1>{t('about')}</h1>
      <p>{t('meet')}</p>
      <p>{t('background')}</p>
    </div>
  );
};

export default About;