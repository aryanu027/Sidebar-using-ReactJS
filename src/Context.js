import React, { useState, useContext } from "react";
const Appcontext = React.createContext();
const AppProvider = ({ children }) => {
  const [Opensidebar, Setisopensidebar] = useState(false);
  const [OpenModal, SetisopenModal] = useState(false);
  const OnSidebar = () => {
    Setisopensidebar(true);
  };
  const OffSidebar = () => {
    Setisopensidebar(false);
  };
  const OnModal = () => {
    SetisopenModal(true);
  };
  const OffModal = () => {
    SetisopenModal(false);
  };
  return (
    <Appcontext.Provider
      value={{
        OpenModal,
        Opensidebar,
        OnSidebar,
        OffSidebar,
        OnModal,
        OffModal,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};
export { AppProvider, Appcontext };
