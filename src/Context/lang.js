import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TranslationContext = createContext();

export const TranslationProvider = ({ children, defaultLang }) => {
  const { t, i18n } = useTranslation();

  // نحدد اللغة الابتدائية: أولوية = prop > i18n.current > "en"
  const initialLang =
    defaultLang || i18n.resolvedLanguage || i18n.language || "en";

  const [language, setLanguage] = useState(initialLang);

  // كل ما language تتغير غيّر i18n لو مش نفس اللغة
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev.startsWith("ar") ? "en" : "ar"));
  };

  return (
    <TranslationContext.Provider value={{ t, i18n, language, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useAppTranslation = () => useContext(TranslationContext);
