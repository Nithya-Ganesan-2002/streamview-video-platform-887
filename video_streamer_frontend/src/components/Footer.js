import React from "react";

// PUBLIC_INTERFACE
function Footer() {
  /**
   * Simple footer for global site links/info.
   */
  return (
    <footer
      style={{
        background: "var(--color-f9f9f9)",
        color: "var(--color-909090)",
        fontSize: 13,
        borderTop: "1px solid var(--color-e6e6e6)",
        padding: "20px 0",
        width: "100%",
        textAlign: "center",
      }}
    >
      © 2022 Google LLC &nbsp;|&nbsp;
      <a href="/" style={{ color: "var(--color-065fd4)", textDecoration: "none" }}>Conditions d'utilisation</a>
    </footer>
  );
}

export default Footer;
