import { Container, margin } from "@mui/system";
import "./App.css";
import { useState } from "react";
/* Material Ui */
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import useMediaQuery from "@mui/material/useMediaQuery";

/* Components */
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";
import { MediaQuery } from "./Context/mediaQuery";
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
      <MediaQuery.Provider value={mediaValues}>
        <Header isToggled={isToggled} setIsToggled={setIsToggled} />
        <div style={{ margin: isSmallScreen ? "0 100px" : "0 20px" }}>
          <Home marginTop={isToggled ? "150px" : "0px"} />
          <hr
            style={{
              position: "absolute",
              left: "0",
              width: "calc(100% - 2px)",
              border: "1px solid #484848",
            }}
          />
          <Work />
          <hr
            style={{
              position: "absolute",
              left: "0",
              width: "calc(100% - 2px)",
              border: "1px solid #484848",
            }}
          />
          <About />
          <hr
            style={{
              position: "absolute",
              left: "0",
              width: "calc(100% - 2px)",
              border: "1px solid #484848",
            }}
          />
          <ContactUs />
        </div>
        <ScrollToTopButton />
      </MediaQuery.Provider>
    </div>
  );
}

export default App;
