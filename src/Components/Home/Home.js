import React from "react";
import { useAppTranslation } from "../../Context/lang";
import "aos/dist/aos.css";

/* Material Ui */
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useContext } from "react";

/* Components */
import { MediaQuery } from "../../Context/mediaQuery";

export default function Home({ marginTop }) {
  const { isSmallScreen, isLargeScreen } = useContext(MediaQuery);
  const [hoveredInstagram, setHoveredInstagram] = React.useState(false);
  const [hoveredGitHub, setHoveredGitHub] = React.useState(false);
  const { t } = useAppTranslation();

  return (
    <div
      id="home"
      style={{
        minHeight: "calc(100vh - 131px )",
        color: "white",
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop,
        transition: "margin-top 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          width: "100%",
        }}
      >
        <Grid
          container
          spacing={2}
          direction={isLargeScreen ? "row" : "column"}
          sx={{ justifyContent: isLargeScreen ? "space-between" : "center" }}
          alignItems="center"
        >
          {/* المحتوى هنا */}
          <Grid
            data-aos="fade-right"
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: isLargeScreen ? "flex-start" : "center",
              textAlign: isLargeScreen ? "left" : "center",
            }}
          >
            <h1
              className="home-title"
              style={{
                fontFamily: "Bebas",
                fontSize: isSmallScreen ? "60px" : "45px",
                lineHeight: "10px",
                letterSpacing: "2px",
              }}
            >
              {t("Hi, I'm Momen Refaat")}
              <pre /> {t("Front-End Developer")}
            </h1>
            <p
              style={{
                fontFamily: "Manrope",
                fontWeight: "500",
                opacity: "0.7",
              }}
            >
              {t(
                "A cairo based front-end developer passionate about building accessible and user friendly websites."
              )}
            </p>
            <div style={{ margin: "24px 0 22px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <a
                    href="#connect"
                    style={{
                      backgroundColor: "#D3E97A",
                      color: "black",
                      padding: "15px 20px",
                      borderRadius: "20px",
                      border: "none",
                      fontFamily: "Manrope",
                      fontWeight: "600",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ marginRight: "10px" }}>
                      {t("CONTACT ME")}
                    </span>
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: "black",
                      }}
                    ></span>
                  </a>
                </div>
                <button
                  onMouseEnter={() => setHoveredInstagram(true)}
                  onMouseLeave={() => setHoveredInstagram(false)}
                  style={{
                    backgroundColor: hoveredInstagram
                      ? "#D3E97A"
                      : "rgb(34, 34, 34)",
                    color: hoveredInstagram ? "black" : "#D3E97A",
                    border: "none",
                    padding: "10px",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    margin: "0px 10px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: hoveredInstagram ? "0 0 10px #D3E97A" : "none",
                    transform: hoveredInstagram ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <a href="https://www.instagram.com/momen_r_ahmed/">
                    <InstagramIcon />
                  </a>
                </button>
                <button
                  onMouseEnter={() => setHoveredGitHub(true)}
                  onMouseLeave={() => setHoveredGitHub(false)}
                  style={{
                    backgroundColor: hoveredGitHub
                      ? "#D3E97A"
                      : "rgb(34, 34, 34)",
                    color: hoveredGitHub ? "black" : "#D3E97A",
                    border: "none",
                    padding: "10px",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    margin: "0px 10px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: hoveredGitHub ? "0 0 10px #D3E97A" : "none",
                    transform: hoveredGitHub ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <a href="https://github.com/momenrefaatahmed">
                    <GitHubIcon />
                  </a>
                </button>
              </div>
            </div>
          </Grid>
          <Grid
            data-aos="fade-left"
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <div>
              <img
                src="/image/home-image.webp"
                alt="Home"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: isSmallScreen ? "700px" : "400px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
