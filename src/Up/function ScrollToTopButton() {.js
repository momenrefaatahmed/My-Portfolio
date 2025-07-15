import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 300); // يظهر لما تنزل 300 بكسل
  };

  const scrollToTop = () => {
    const el = document.getElementById("header");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        backgroundColor: "#D3E97A",
        borderRadius: "50%",
        padding: "10px",
        cursor: "pointer",
        zIndex: 999,
        transition: "0.3s",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        color: "black",
      }}
    >
      <KeyboardDoubleArrowUpIcon />
    </div>
  );
}
