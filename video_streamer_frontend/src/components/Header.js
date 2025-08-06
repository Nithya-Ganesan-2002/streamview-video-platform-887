import React from "react";

// PUBLIC_INTERFACE
function Header({ theme, onToggleTheme }) {
  /**
   * Main Header Navigation bar.
   * Shows burger menu, logo, search, theme-toggle, and "Se connecter".
   * Props:
   *   theme - current theme value e.g., "light"
   *   onToggleTheme - function to switch themes
   */
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid var(--color-e6e6e6)",
        background: "var(--color-ffffff)",
        height: 56,
        padding: "0 24px",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      {/* Burger & Logo */}
      <div style={{ display: "flex", alignItems: "center", width: 134, gap: 8 }}>
        <span
          className="icon"
          title="Menu"
          style={{
            width: 24,
            height: 24,
            background: "var(--color-606060)",
            borderRadius: "var(--radius-md)",
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: 90,
            height: 20,
            background: "var(--color-ff0000)",
            borderRadius: "var(--radius-md)",
            display: "inline-block",
          }}
        />
      </div>

      {/* Search bar */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <form
          style={{
            width: 520,
            display: "flex",
            background: "var(--color-ffffff)",
            border: "1px solid var(--color-e6e6e6)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
          onSubmit={e => e.preventDefault()}
        >
          <input
            aria-label="Search"
            type="search"
            placeholder="Rechercher"
            style={{
              border: "none",
              outline: "none",
              padding: "0 16px",
              fontSize: 16,
              flex: 1,
              height: 40,
              background: "transparent",
            }}
          />
          <button
            type="submit"
            style={{
              border: "none",
              borderLeft: "1px solid var(--color-c6c6c6)",
              background: "var(--color-f0f0f0)",
              width: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <span
              className="icon"
              title="Search"
              style={{
                width: 20,
                height: 20,
                background: "var(--color-606060)",
                display: "inline-block",
              }}
            ></span>
          </button>
        </form>
      </div>

      {/* "User"/Theme/Connect */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginLeft: 24 }}>
        <span
          className="icon"
          title="User"
          style={{
            width: 24,
            height: 24,
            background: "var(--color-606060)",
            borderRadius: "var(--radius-md)",
            display: "inline-block",
          }}
        />
        <button
          className="filter-pill active"
          style={{
            background: "var(--color-065fd4)",
            color: "var(--color-ffffff)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            border: "none",
            borderRadius: "var(--radius-pill)",
            padding: "6px 16px",
            fontWeight: 500,
            fontSize: 14,
            marginLeft: 8
          }}
        >
          <span className="icon"
            style={{
              background: "var(--color-ffffff)",
              width: 20,
              height: 20,
              borderRadius: "50%",
              marginRight: 6,
              display: "inline-block"
            }}
          ></span>
          Se connecter
        </button>
        <button
          className="theme-toggle"
          style={{
            marginLeft: 12,
            background: "var(--button-bg, #0056b3)",
            color: "var(--button-text, #fff)",
            border: "none",
            borderRadius: 8,
            padding: "4px 10px",
            fontWeight: 600,
            cursor: "pointer",
          }}
          title="Switch theme"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}
export default Header;
