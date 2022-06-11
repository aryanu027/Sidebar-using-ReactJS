import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Modal from "./Modal";
function App() {
  return (
    <>
      <Sidebar />
      <Home />
      <Modal data="Modal content which can be modified using props" show="show-modal"/>
    </>
  );
}

export default App;
