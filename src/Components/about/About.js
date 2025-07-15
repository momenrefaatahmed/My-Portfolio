/* Material Ui */
import Grid from "@mui/material/GridLegacy";

export default function About() {
  return (
    <div id="about" style={{ marginTop: "100px", color: "white", }}>
      <h1
        style={{
          fontFamily: "Bebas",
          fontSize: "80px",
          width: "fit-content",
          margin: "auto",
          marginBottom: "25px",
        }}
      >
        About Me
      </h1>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="image/about.png"
              alt="About"
              style={{
                width: "100%",
                maxWidth: "450px",
                height: "auto",
                borderRadius: "16px",
                objectFit: "cover",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
            />
          </div>
          {/* <h1 style={{ fontFamily: "Bebas", fontSize: "80px" }}>About Me</h1> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <h1 style={{ fontFamily: "Manrope", fontWeight: "500" }}>
            "I’m a passionate front-end developer based in Badr City, I
            continuously strive to improve my skills in web development and
            create engaging user experiences."
          </h1>
          <p
            style={{ fontFamily: "Manrope", fontWeight: "400", opacity: "0.7" }}
          >
            Web Developer, Front End, Motivated junior front-end developer based
            in Egypt, with a solid understanding of HTML, CSS, and JavaScript.
            Recently started working with frameworks like React.js and focused
            on building clean, responsive, and user-friendly interfaces.
            Passionate about learning new web technologies and improving my
            skills continuously. Eager to contribute to creative teams and help
            build high-quality digital products with great user experience.
          </p>
          <div>
            <h1
              style={{
                borderBottom: "1px solid #484848",
                paddingBottom: "10px",
              }}
            >
              Skils
            </h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src="image/icons8-html-96.png" alt="About" />
                <img src="image/icons8-css-96.png" alt="About" />
                <img src="image/icons8-bootstrap-96.png" alt="About" />
                <img src="image/icons8-js.gif" alt="About" />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src="image/icons8-react-js-100.png" alt="About" />
                <img src="image/icons8-api-96.png" alt="About" />
                <img style={{margin: "0 5px"}} src="image/icons8-redux-48.png" alt="About" />
                <img src="image/icons8-postman-inc-48.png" alt="About" />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
