import React from "react";
import { useContext } from "react";
import { links } from "./data";
import { FaTimes } from "react-icons/fa";
import { Appcontext } from "./Context";

const Sidebar = () => {
  let { Opensidebar, OffSidebar } = useContext(Appcontext);
  let CloseSidebar = () => {
    OffSidebar();
  };
  return (
    <aside className={`sidebar ${Opensidebar ? "show-sidebar" : ""}`}>
      <div className="sidebar-header">
        <h3>Sidebar</h3>
        <button className="close-btn" onClick={CloseSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <>
              <li key={link.id}>
                <a href={link.url}>
                  {link.icon}
                  {link.text}
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
