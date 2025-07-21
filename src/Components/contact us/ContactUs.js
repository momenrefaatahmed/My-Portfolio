import { useAppTranslation } from "../../Context/lang";
/* Material Ui */
import Grid from "@mui/material/GridLegacy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactUs() {
  const { t, language, toggleLanguage } = useAppTranslation();
  const [state, handleSubmit] = useForm("xeozqgrl");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div
      id="connect"
      style={{ marginTop: "100px", color: "white", paddingBottom: "100px" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h1
            style={{
              fontFamily: "Bebas",
              fontSize: "60px",
              margin: "auto",
            }}
          >
            {t("Let’s connect")}
          </h1>
          <p>
            {t("Say Hello At")}{" "}
            <span style={{ textDecoration: "underline" }}>
              momenrefaat64@gmail.com
            </span>
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              color: "#D3E97A",
            }}
          >
            <a href="https://www.linkedin.com/in/momen-refaat-451a2629b/">
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/momen_r_ahmed/">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/momen.refaat.316937">
              <FacebookIcon />
            </a>
            <a href="https://github.com/momenrefaatahmed">
              <GitHubIcon />
            </a>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              backgroundColor: "#1A1A1A",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            <label
              htmlFor="email"
              style={{ color: "#D3E97A", fontWeight: "bold" }}
              dir= {language === "ar" ? "rtl" : "ltr"}
            >
              {t("Email Address")}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              style={{
                padding: "15px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#333",
                color: "white",
              }}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label
              htmlFor="message"
              style={{ color: "#D3E97A", fontWeight: "bold" }}
              dir= {language === "ar" ? "rtl" : "ltr"}
            >
              {t("Message")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              style={{
                padding: "15px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#333",
                color: "white",
                resize: "vertical",
              }}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              style={{
                backgroundColor: "#D3E97A",
                color: "#1A1A1A",
                padding: "15px",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              {state.submitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
