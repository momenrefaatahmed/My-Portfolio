/* Material Ui */
import Grid from "@mui/material/GridLegacy";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Work() {
  return (
    <div id="work" style={{ color: "white", marginTop: "100px" }}>
      <div style={{ marginBottom: "20px" }}>
        <h1
          style={{
            fontFamily: "Bebas",
            fontSize: "60px",
            margin: "auto",
          }}
        >
          Featured Projects
        </h1>
        <p
          style={{
            fontFamily: "Manrope",
            fontWeight: "500",
            opacity: "0.7",
          }}
        >
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>
      <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
        <Grid
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
              src="/image/BootsTrap.png"
              alt="Work"
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <div>
              <h2 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
                Promotional landing page for our favorite show
              </h2>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                Teamed up with a designer to breathe life into a promotional
                webpage for our beloved show, Adventure Time. Delivered a fully
                responsive design with dynamic content capabilities, seamlessly
                integrating a newsletter feature to keep fans updated with the
                latest adventures.
              </p>
            </div>
            <div style={{ fontFamily: "Manrope", fontWeight: "500" }}>
              <h3
                style={{
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                Project Info
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
                <span>Year</span>
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
                <span>Role</span>
                <span style={{ opacity: "0.7" }}>Front-end Developer</span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="hoverBox">
                <a href="https://heroic-nougat-fdaf18.netlify.app/">
                  LIVE DEMO
                </a>
                <ArrowOutwardIcon />
              </div>
              <div className="hoverBox">
                <a href="https://github.com/momenrefaatahmed/Bootstrap">
                  See on Github
                </a>
                <GitHubIcon />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
        <Grid
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
              src="/image/Currency.png"
              alt="Work"
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <div>
              <h2 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
                Promotional landing page for our favorite show
              </h2>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                Teamed up with a designer to breathe life into a promotional
                webpage for our beloved show, Adventure Time. Delivered a fully
                responsive design with dynamic content capabilities, seamlessly
                integrating a newsletter feature to keep fans updated with the
                latest adventures.
              </p>
            </div>
            <div style={{ fontFamily: "Manrope", fontWeight: "500" }}>
              <h3
                style={{
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                Project Info
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
                <span>Year</span>
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
                <span>Role</span>
                <span style={{ opacity: "0.7" }}>Front-end Developer</span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="hoverBox">
                <a href="https://momenrefaatahmed.github.io/Currency-Converter/">
                  LIVE DEMO
                </a>
                <ArrowOutwardIcon />
              </div>
              <div className="hoverBox">
                <a href="https://github.com/momenrefaatahmed/Currency-Converter">
                  See on Github
                </a>
                <GitHubIcon />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
        <Grid
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
              src="/image/media.png"
              alt="Work"
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <div>
              <h2 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
                Promotional landing page for our favorite show
              </h2>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                Teamed up with a designer to breathe life into a promotional
                webpage for our beloved show, Adventure Time. Delivered a fully
                responsive design with dynamic content capabilities, seamlessly
                integrating a newsletter feature to keep fans updated with the
                latest adventures.
              </p>
            </div>
            <div style={{ fontFamily: "Manrope", fontWeight: "500" }}>
              <h3
                style={{
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                Project Info
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
                <span>Year</span>
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
                <span>Role</span>
                <span style={{ opacity: "0.7" }}>Front-end Developer</span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="hoverBox">
                <a href="https://clever-sherbet-fd2c5c.netlify.app/">
                  LIVE DEMO
                </a>
                <ArrowOutwardIcon />
              </div>
              <div className="hoverBox">
                <a href="https://github.com/momenrefaatahmed/Media/tree/main">
                  See on Github
                </a>
                <GitHubIcon />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
        <Grid
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
              src="/image/seo.png"
              alt="Work"
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <div>
              <h2 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
                Promotional landing page for our favorite show
              </h2>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                Teamed up with a designer to breathe life into a promotional
                webpage for our beloved show, Adventure Time. Delivered a fully
                responsive design with dynamic content capabilities, seamlessly
                integrating a newsletter feature to keep fans updated with the
                latest adventures.
              </p>
            </div>
            <div style={{ fontFamily: "Manrope", fontWeight: "500" }}>
              <h3
                style={{
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                Project Info
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
                <span>Year</span>
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
                <span>Role</span>
                <span style={{ opacity: "0.7" }}>Front-end Developer</span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="hoverBox">
                <a href="https://momenrefaatahmed.github.io/momenrefaatahmed-momenrefaatahmed-HTML-And-CSS-Template-4/">
                  LIVE DEMO
                </a>
                <ArrowOutwardIcon />
              </div>
              <div className="hoverBox">
                <a href="https://github.com/momenrefaatahmed/momenrefaatahmed-momenrefaatahmed-HTML-And-CSS-Template-4?tab=readme-ov-file#httpsmomenrefaatahmedgithubiomomenrefaatahmed-momenrefaatahmed-html-and-css-template-4">
                  See on Github
                </a>
                <GitHubIcon />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
        <Grid
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
              src="/image/todo.png"
              alt="Work"
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <div>
              <h2 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
                Promotional landing page for our favorite show
              </h2>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                Teamed up with a designer to breathe life into a promotional
                webpage for our beloved show, Adventure Time. Delivered a fully
                responsive design with dynamic content capabilities, seamlessly
                integrating a newsletter feature to keep fans updated with the
                latest adventures.
              </p>
            </div>
            <div style={{ fontFamily: "Manrope", fontWeight: "500" }}>
              <h3
                style={{
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                Project Info
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
                <span>Year</span>
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
                <span>Role</span>
                <span style={{ opacity: "0.7" }}>Front-end Developer</span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="hoverBox">
                <a href="https://chimerical-zabaione-36cbd2.netlify.app/">
                  LIVE DEMO
                </a>
                <ArrowOutwardIcon />
              </div>
              <div className="hoverBox">
                <a href="https://github.com/momenrefaatahmed/Todo-List">
                  See on Github
                </a>
                <GitHubIcon />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
        <Grid
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
              src="/image/wather.png"
              alt="Work"
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <div>
              <h2 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
                Promotional landing page for our favorite show
              </h2>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                Teamed up with a designer to breathe life into a promotional
                webpage for our beloved show, Adventure Time. Delivered a fully
                responsive design with dynamic content capabilities, seamlessly
                integrating a newsletter feature to keep fans updated with the
                latest adventures.
              </p>
            </div>
            <div style={{ fontFamily: "Manrope", fontWeight: "500" }}>
              <h3
                style={{
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                Project Info
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
                <span>Year</span>
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
                <span>Role</span>
                <span style={{ opacity: "0.7" }}>Front-end Developer</span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="hoverBox">
                <a href="https://legendary-sunflower-c61ba0.netlify.app/">
                  LIVE DEMO
                </a>
                <ArrowOutwardIcon />
              </div>
              <div className="hoverBox">
                <a href="https://github.com/momenrefaatahmed/Weather">
                  See on Github
                </a>
                <GitHubIcon />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
        <Grid
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
              src="/image/Prayer.png"
              alt="Work"
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <div>
              <h2 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
                Promotional landing page for our favorite show
              </h2>
              <p
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  opacity: "0.7",
                }}
              >
                Teamed up with a designer to breathe life into a promotional
                webpage for our beloved show, Adventure Time. Delivered a fully
                responsive design with dynamic content capabilities, seamlessly
                integrating a newsletter feature to keep fans updated with the
                latest adventures.
              </p>
            </div>
            <div style={{ fontFamily: "Manrope", fontWeight: "500" }}>
              <h3
                style={{
                  borderBottom: "1px solid #484848",
                  paddingBottom: "10px",
                }}
              >
                Project Info
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
                <span>Year</span>
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
                <span>Role</span>
                <span style={{ opacity: "0.7" }}>Front-end Developer</span>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="hoverBox">
                <a href="https://illustrious-unicorn-7fbc85.netlify.app/">
                  LIVE DEMO
                </a>
                <ArrowOutwardIcon />
              </div>
              <div className="hoverBox">
                <a href="https://github.com/momenrefaatahmed/Prayer-times">
                  See on Github
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
