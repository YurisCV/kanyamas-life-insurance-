// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/about">{t('about')}</Link></li>
          <li><Link to="/services">{t('services')}</Link></li>
          <li><Link to="/contact">{t('contact')}</Link></li>
        </ul>
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;