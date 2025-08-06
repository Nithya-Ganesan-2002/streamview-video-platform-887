import React from "react";
import "./Sidebar.css";

// PUBLIC_INTERFACE
function Sidebar() {
  /**
   * App left sidebar with navigation and category & settings blocks.
   * This is a non-interactive, static version for now.
   */
  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar-section">
          <li><span className="icon sidebar-icon" title="Home"></span>Accueil</li>
          <li><span className="icon sidebar-icon" title="Compass"></span>Explorer</li>
          <li><span className="icon sidebar-icon" title="Shorts"></span>Shorts</li>
          <li><span className="icon sidebar-icon" title="Subscriptions"></span>Abonnements</li>
        </ul>
        <ul className="sidebar-section">
          <li><span className="icon sidebar-icon" title="Library"></span>Bibliothèque</li>
          <li><span className="icon sidebar-icon" title="History"></span>Historique</li>
        </ul>
        <div className="sidebar-connect">
          <div style={{ marginBottom: 10, fontSize: 13 }}>
            Connectez-vous à YouTube pour cliquer sur "J'aime", ajouter un commentaire et vous abonner.
          </div>
          <button className="filter-pill active sidebar-connect-btn">
            <span className="icon" style={{
              background: "var(--color-ffffff)",
              width: 20,
              height: 20,
              borderRadius: "50%",
              marginRight: 8,
              display: "inline-block"
            }}></span>
            Se connecter
          </button>
        </div>
        <div className="sidebar-footer">
          <div style={{color:'var(--color-606060)',fontSize:11, marginTop:28}}>© 2022 Google LLC</div>
        </div>
      </nav>
    </aside>
  );
}
export default Sidebar;
