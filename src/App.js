import "./App.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
/* Material Ui */
import useMediaQuery from "@mui/material/useMediaQuery";

/* Components */
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";
import { MediaQuery } from "./Context/mediaQuery";
import { TranslationProvider } from "./Context/lang";
import { AosProvider } from "./Context/Aos";
import Work from "./Components/work/Work";
import About from "./Components/about/About";
import ContactUs from "./Components/contact us/ContactUs";
import ScrollToTopButton from "./Up/function ScrollToTopButton() {";

function App() {
  const isSmallScreen = useMediaQuery("(min-width:670px)");
  const isLargeScreen = useMediaQuery("(min-width:1492px)");
  const [isToggled, setIsToggled] = useState(false);

  const mediaValues = {
    isSmallScreen,
    isLargeScreen,
  };

  return (
    <div className="App">
      <TranslationProvider>
        <MediaQuery.Provider value={mediaValues}>
          <AosProvider>
            <Header isToggled={isToggled} setIsToggled={setIsToggled} />
            <div style={{ margin: isSmallScreen ? "0 100px" : "0 20px" }}>
              <Home marginTop={isToggled ? "200px" : "0px"} />
              <hr
                style={{
                  width: "100%",
                  border: "1px solid #484848",
                  margin: "40px 0",
                }}
              />
              <Work />
              <hr
                style={{
                  width: "100%",
                  border: "1px solid #484848",
                  margin: "40px 0",
                }}
              />
              <About />
              <hr
                style={{
                  width: "100%",
                  border: "1px solid #484848",
                  margin: "40px 0",
                }}
              />
              <ContactUs />
            </div>
            <ScrollToTopButton />
          </AosProvider>
        </MediaQuery.Provider>
      </TranslationProvider>
    </div>
  );
}

export default App;
