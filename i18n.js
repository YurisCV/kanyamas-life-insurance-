// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "about": "About Us",
      "services": "Our Services",
      "contact": "Contact Us",
      "welcome": "Welcome to Life Insurance Services",
      "comprehensive_plans": "Comprehensive Plans",
      "expert_advice": "Expert Advice",
      "affordable_rates": "Affordable Rates",
      "meet": "Meet [Your Wife’s Name], a dedicated life insurance agent with [X] years of experience in the industry.",
      "background": "With a background in [Relevant Background], [Your Wife’s Name] offers personalized advice and exceptional service to ensure that you and your loved ones are protected.",
      "explore_plans": "Explore our range of insurance plans tailored to your needs."
    }
  },
  es: {
    translation: {
      "home": "Inicio",
      "about": "Sobre Nosotros",
      "services": "Nuestros Servicios",
      "contact": "Contáctanos",
      "welcome": "Bienvenido a Servicios de Seguro de Vida",
      "comprehensive_plans": "Planes Integrales",
      "expert_advice": "Asesoramiento Experto",
      "affordable_rates": "Tarifas Asequibles",
      "meet": "Conozca a [Nombre de tu Esposa], una agente de seguros de vida dedicada con [X] años de experiencia en la industria.",
      "background": "Con una formación en [Antecedentes Relevantes], [Nombre de tu Esposa] ofrece asesoramiento personalizado y un servicio excepcional para asegurar que usted y sus seres queridos estén protegidos.",
      "explore_plans": "Explore nuestra gama de planes de seguros adaptados a sus necesidades."
    }
  },
  th: {
    translation: {
      "home": "หน้าแรก",
      "about": "เกี่ยวกับเรา",
      "services": "บริการของเรา",
      "contact": "ติดต่อเรา",
      "welcome": "ยินดีต้อนรับสู่บริการประกันชีวิต",
      "comprehensive_plans": "แผนประกันที่ครอบคลุม",
      "expert_advice": "คำแนะนำจากผู้เชี่ยวชาญ",
      "affordable_rates": "อัตราค่าบริการที่ไม่แพง",
      "meet": "พบกับ [ชื่อภรรยาของคุณ] ตัวแทนประกันชีวิตที่มีประสบการณ์ [X] ปีในอุตสาหกรรม",
      "background": "ด้วยพื้นฐานใน [พื้นฐานที่เกี่ยวข้อง] [ชื่อภรรยาของคุณ] ให้คำแนะนำที่เป็นส่วนตัวและบริการที่ยอดเยี่ยมเพื่อให้แน่ใจว่าคุณและคนที่คุณรักได้รับการคุ้มครอง",
      "explore_plans": "สำรวจแผนประกันที่หลากหลายของเราที่ปรับให้เหมาะกับความต้องการของคุณ"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;