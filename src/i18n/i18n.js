import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import zh from "./zh.json";

const resources = {
  "zh-TW": {
    translation: zh
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zh-TW",
  fallbackLng: "zh-TW",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
