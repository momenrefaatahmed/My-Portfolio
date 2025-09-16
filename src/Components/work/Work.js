import { useAppTranslation } from "../../Context/lang";
/* Material Ui */
import Grid from "@mui/material/GridLegacy";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Work() {
  const { t, language, toggleLanguage } = useAppTranslation();
  return (
    <div id="work" style={{ color: "white", marginTop: "100px" }}>
      <div style={{ marginBottom: "20px" }}>
        <h1
          style={{
            fontFamily: "Bebas",
            fontSize: "60px",
            margin: "auto",
          }}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          {t("Featured Projects")}
        </h1>
        <p
          style={{
            fontFamily: "Manrope",
            fontWeight: "500",
            opacity: "0.7",
          }}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          {t(
            "Here are some of the selected projects that showcase my passion for front-end development."
          )}
        </p>
      </div>
      <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
        <Grid
          data-aos="fade-up"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              padding: "50px 50px",
              backgroundColor: "#1A1A1A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "10px",
              }}
              src="/image/Flatlogic.webp"
              alt="Work"
            />
          </div>
        </Grid>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div>
            <div>
              <h2 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
                {t("Flatlogic – E-commerce Web App")}
              </h2>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                {t(
                  "Flatlogic is a responsive e-commerce web application for home decor products like lamps, cushions, and decorative items.It features user feedback system, admin dashboard with product management including add, edit, and delete products, and interactive charts.Built with React.js (Vite), Firebase, Bootstrap, Material UI, and Axios for a modern and user-friendly experience"
                )}
              </p>
            </div>
            <div style={{ fontFamily: "Manrope", fontWeight: "500" }}>
              <h3
                style={{
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                {t("Project Info")}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Year")}</span>
                <span style={{ opacity: "0.7" }}>2025</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Role")}</span>
                <span style={{ opacity: "0.7" }}>
                  {t("Front-end Developer")}
                </span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="hoverBox">
                <a href="https://coruscating-llama-31cb88.netlify.app/">
                  {t("LIVE DEMO")}
                </a>
                <ArrowOutwardIcon />
              </div>
              <div className="hoverBox">
                <a href="https://github.com/momenrefaatahmed/Flatlogic">
                  {t("See on Github")}
                </a>
                <GitHubIcon />
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          data-aos="fade-up"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              padding: "50px 50px",
              backgroundColor: "#1A1A1A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "10px",
              }}
              src="/image/BootsTrap.webp"
              alt="Work"
            />
          </div>
        </Grid>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div>
            <div>
              <h2 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
                {t("Bootstrap Practice Project")}
              </h2>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                {t(
                  "This website was developed as a practice project to enhance my front-end skills after learning Bootstrap. I focused on implementing Bootstrap’s grid system, responsive design techniques, and UI components to create a user-friendly and modern layout."
                )}
              </p>
            </div>
            <div style={{ fontFamily: "Manrope", fontWeight: "500" }}>
              <h3
                style={{
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                {t("Project Info")}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Year")}</span>
                <span style={{ opacity: "0.7" }}>2025</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Role")}</span>
                <span style={{ opacity: "0.7" }}>
                  {t("Front-end Developer")}
                </span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="hoverBox">
                <a href="https://heroic-nougat-fdaf18.netlify.app/">
                  {t("LIVE DEMO")}
                </a>
                <ArrowOutwardIcon />
              </div>
              <div className="hoverBox">
                <a href="https://github.com/momenrefaatahmed/Bootstrap">
                  {t("See on Github")}
                </a>
                <GitHubIcon />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
        <Grid
          data-aos="fade-up"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              padding: "50px 50px",
              backgroundColor: "#1A1A1A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "10px",
              }}
              src="/image/Currency.webp"
              alt="Work"
            />
          </div>
        </Grid>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div>
            <div>
              <h2 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
                {t("Currency Converter – Real-Time Exchange Rates")}
              </h2>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                {t(
                  "This Currency Converter web app is designed to make currency conversion simple and fast. Users can select from a wide range of global currencies, such as USD, EUR, GBP, EGP, and more, and instantly see the conversion result. The project demonstrates my skills in JavaScript for dynamic calculations and creating user-friendly, responsive web interfaces."
                )}
              </p>
            </div>
            <div style={{ fontFamily: "Manrope", fontWeight: "500" }}>
              <h3
                style={{
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                {t("Project Info")}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Year")}</span>
                <span style={{ opacity: "0.7" }}>2024</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Role")}</span>
                <span style={{ opacity: "0.7" }}>
                  {t("Front-end Developer")}
                </span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="hoverBox">
                <a href="https://momenrefaatahmed.github.io/Currency-Converter/">
                  {t("LIVE DEMO")}
                </a>
                <ArrowOutwardIcon />
              </div>
              <div className="hoverBox">
                <a href="https://github.com/momenrefaatahmed/Currency-Converter">
                  {t("See on Github")}
                </a>
                <GitHubIcon />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
        <Grid
          data-aos="fade-up"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              padding: "50px 50px",
              backgroundColor: "#1A1A1A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "10px",
              }}
              src="/image/media.webp"
              alt="Work"
            />
          </div>
        </Grid>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div>
            <div>
              <h2 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
                {t("Photo Sharing & Social Interaction Platform")}
              </h2>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                {t(
                  "This project is a photo-sharing platform where users can create accounts, upload photos, and engage with others by leaving comments on posts. Each user has a personal profile, with the ability to edit or delete their own posts and publish new ones. The project demonstrates core functionalities of modern social media platforms, including user authentication, content management, and interactive features."
                )}
              </p>
            </div>
            <div style={{ fontFamily: "Manrope", fontWeight: "500" }}>
              <h3
                style={{
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                {t("Project Info")}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Year")}</span>
                <span style={{ opacity: "0.7" }}>2025</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Role")}</span>
                <span style={{ opacity: "0.7" }}>
                  {t("Front-end Developer")}
                </span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="hoverBox">
                <a href="https://clever-sherbet-fd2c5c.netlify.app/">
                  {t("LIVE DEMO")}
                </a>
                <ArrowOutwardIcon />
              </div>
              <div className="hoverBox">
                <a href="https://github.com/momenrefaatahmed/Media/tree/main">
                  {t("See on Github")}
                </a>
                <GitHubIcon />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
        <Grid
          data-aos="fade-up"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              padding: "50px 50px",
              backgroundColor: "#1A1A1A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "10px",
              }}
              src="/image/seo.webp"
              alt="Work"
            />
          </div>
        </Grid>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div>
            <div>
              <h2 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
                {t("SEO Landing Page – HTML & CSS Project")}
              </h2>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                {t(
                  "This project is a professional SEO-focused landing page developed using only HTML and CSS. It highlights key aspects of Search Engine Optimization with a clean, user-friendly layout and modern design. The page is responsive and structured to demonstrate best practices in web design while providing an engaging presentation of SEO services."
                )}
              </p>
            </div>
            <div style={{ fontFamily: "Manrope", fontWeight: "500" }}>
              <h3
                style={{
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                {t("Project Info")}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Year")}</span>
                <span style={{ opacity: "0.7" }}>2024</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Role")}</span>
                <span style={{ opacity: "0.7" }}>
                  {t("Front-end Developer")}
                </span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="hoverBox">
                <a href="https://momenrefaatahmed.github.io/momenrefaatahmed-momenrefaatahmed-HTML-And-CSS-Template-4/">
                  {t("LIVE DEMO")}
                </a>
                <ArrowOutwardIcon />
              </div>
              <div className="hoverBox">
                <a href="https://github.com/momenrefaatahmed/momenrefaatahmed-momenrefaatahmed-HTML-And-CSS-Template-4?tab=readme-ov-file#httpsmomenrefaatahmedgithubiomomenrefaatahmed-momenrefaatahmed-html-and-css-template-4">
                  {t("See on Github")}
                </a>
                <GitHubIcon />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
        <Grid
          data-aos="fade-up"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              padding: "50px 50px",
              backgroundColor: "#1A1A1A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "10px",
              }}
              src="/image/todo.webp"
              alt="Work"
            />
          </div>
        </Grid>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div>
            <div>
              <h2 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
                {t("React To-Do List App – Task Manager")}
              </h2>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                {t(
                  "This project is a To-Do List application developed using React.js, focusing on efficient task management. The app allows users to add new tasks, edit them, mark tasks as completed or incomplete, and remove tasks as needed. It demonstrates React’s powerful state management and component-based architecture, with a user-friendly and responsive design."
                )}
              </p>
            </div>
            <div style={{ fontFamily: "Manrope", fontWeight: "500" }}>
              <h3
                style={{
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                {t("Project Info")}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Year")}</span>
                <span style={{ opacity: "0.7" }}>2025</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Role")}</span>
                <span style={{ opacity: "0.7" }}>
                  {t("Front-end Developer")}
                </span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="hoverBox">
                <a href="https://chimerical-zabaione-36cbd2.netlify.app/">
                  {t("LIVE DEMO")}
                </a>
                <ArrowOutwardIcon />
              </div>
              <div className="hoverBox">
                <a href="https://github.com/momenrefaatahmed/Todo-List">
                  {t("See on Github")}
                </a>
                <GitHubIcon />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
        <Grid
          data-aos="fade-up"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              padding: "50px 50px",
              backgroundColor: "#1A1A1A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "10px",
              }}
              src="/image/wather.webp"
              alt="Work"
            />
          </div>
        </Grid>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div>
            <div>
              <h2 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
                {t("Cairo Weather App – Dynamic API & Multi-Language Support")}
              </h2>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                "This weather application provides real-time temperature data
                for Cairo using a weather API. It features a dynamic interface
                with the ability to switch between languages, offering a smooth
                and user-friendly experience."
              </p>
            </div>
            <div style={{ fontFamily: "Manrope", fontWeight: "500" }}>
              <h3
                style={{
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                {t("Project Info")}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Year")}</span>
                <span style={{ opacity: "0.7" }}>2025</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Role")}</span>
                <span style={{ opacity: "0.7" }}>
                  {t("Front-end Developer")}
                </span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="hoverBox">
                <a href="https://legendary-sunflower-c61ba0.netlify.app/">
                  {t("LIVE DEMO")}
                </a>
                <ArrowOutwardIcon />
              </div>
              <div className="hoverBox">
                <a href="https://github.com/momenrefaatahmed/Weather">
                  {t("See on Github")}
                </a>
                <GitHubIcon />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
        <Grid
          data-aos="fade-up"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div
            style={{
              padding: "50px 50px",
              backgroundColor: "#1A1A1A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "10px",
              }}
              src="/image/Prayer.webp"
              alt="Work"
            />
          </div>
        </Grid>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div>
            <div>
              <h2 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
                {t("Prayer Times App – Dynamic API for Egyptian Cities")}
              </h2>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                {t(
                  "This project is a web application that displays prayer times for various governorates in Egypt. It dynamically fetches accurate timings using an API, providing users with up-to-date and reliable prayer schedules."
                )}
              </p>
            </div>
            <div style={{ fontFamily: "Manrope", fontWeight: "500" }}>
              <h3
                style={{
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                {t("Project Info")}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Year")}</span>
                <span style={{ opacity: "0.7" }}>2025</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "19px 0",
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                <span>{t("Role")}</span>
                <span style={{ opacity: "0.7" }}>
                  {t("Front-end Developer")}
                </span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="hoverBox">
                <a href="https://illustrious-unicorn-7fbc85.netlify.app/">
                  {t("LIVE DEMO")}
                </a>
                <ArrowOutwardIcon />
              </div>
              <div className="hoverBox">
                <a href="https://github.com/momenrefaatahmed/Prayer-times">
                  {t("See on Github")}
                </a>
                <GitHubIcon />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
