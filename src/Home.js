import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Appcontext } from "./Context";
const Home = () => {
  let { OpenModal, OnModal, OffModal, Opensidebar, OnSidebar, OffSidebar } =
    useContext(Appcontext);
  let ChangeModal = () => {
    if (OpenModal === false) {
      OnModal();
    } else {
      OffModal();
    }
  };
  let ChangeSidebar = () => {
    if (Opensidebar === false) {
      OnSidebar();
    } else {
      OffSidebar();
    }
  };
  return (
    <>
      <main>
        <button
          className={`sidebar-toggle ${Opensidebar ? "show-logo" : ""}`}
          onClick={ChangeSidebar}
        >
          <FaBars />
        </button>
        <button className="btn" onClick={ChangeModal}>
          Show Modal
        </button>
      </main>
    </>
  );
};

export default Home;
