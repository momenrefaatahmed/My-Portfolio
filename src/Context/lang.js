import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("ar");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  // دالة لتبديل اللغة
  const toggleLanguage = () => {
    const newLang = language === "ar" ? "en" : "ar";
    setLanguage(newLang);
  };

  return (
    <TranslationContext.Provider value={{ t, i18n, language, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useAppTranslation = () => useContext(TranslationContext);