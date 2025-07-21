import * as React from "react";
import { useAppTranslation } from "../../Context/lang";

/* Material Ui */
import useMediaQuery from "@mui/material/useMediaQuery";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
// import Button from '@mui/material/Button';

export default function Header({ isToggled, setIsToggled }) {
  const isSmallScreen = useMediaQuery("(min-width:600px)");
  const headerRef = React.useRef(null);
  const { t, language, toggleLanguage } = useAppTranslation();

  const handleToggle = (event) => {
    setIsToggled(event.target.checked);
  };

  const handleClose = () => {
    setIsToggled(false);
  };

  return (
    <div
      id="header"
      ref={headerRef}
      style={{ color: "White", padding: "24px 60px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ fontFamily: "Bebas" }}>{t("Momen Refaat")}</h1>
        </div>
        <div
          style={{
            fontFamily: "Inter",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isSmallScreen ? (
            <div
              style={{
                fontFamily: "Inter",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MenuItem href="#">
                <a href="#work">{t("projects")}</a>
              </MenuItem>
              <MenuItem href="#">
                <a href="#about">{t("About")}</a>
              </MenuItem>
              <MenuItem href="#">
                <a href="#connect">{t("Connect us")}</a>
              </MenuItem>

              <Button
                sx={{ backgroundColor: "black", color: "white" }}
                onClick={toggleLanguage}
              >
                {t("English")}
              </Button>
            </div>
          ) : (
            ""
          )}

          {isSmallScreen ? (
            ""
          ) : (
            <div>
              <input
                id="checkbox"
                type="checkbox"
                checked={isToggled}
                onChange={handleToggle}
              />
              <label
                className={`toggle${isToggled ? " active" : ""}`}
                htmlFor="checkbox"
              >
                <div className="bar bar--top"></div>
                <div className="bar bar--middle"></div>
                <div className="bar bar--bottom"></div>
              </label>
              <Menu
                id="basic-menu"
                anchorEl={isToggled ? headerRef.current : null}
                open={isToggled}
                onClose={handleClose}
                disableScrollLock={true}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
                PaperProps={{
                  style: {
                    backgroundColor: "black",
                    width: "100%",
                    color: "white",
                  },
                }}
              >
                <MenuItem
                  sx={{ borderBottom: "1px solid white" }}
                  onClick={() => {
                    handleClose();
                    const el = document.getElementById("work");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <a href="#work">{t("projects")}</a>
                </MenuItem>

                <MenuItem
                  sx={{ borderBottom: "1px solid white" }}
                  onClick={() => {
                    handleClose();
                    const el = document.getElementById("about");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <a href="#about">{t("About")}</a>
                </MenuItem>

                <MenuItem
                  sx={{ borderBottom: "1px solid white" }}
                  onClick={() => {
                    handleClose();
                    const el = document.getElementById("connect");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <a href="#connect">{t("Connect us")}</a>
                </MenuItem>
                <Button
                  onClick={toggleLanguage}
                  sx={{ backgroundColor: "black", color: "white", padding: "6px 16px"  }}
                >
                  {t("English")}
                </Button>
              </Menu>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
