import './App.css';
import logo from "./assets/logo.png";
import Page from './components/page';
import { useState } from "react";
import { pageData } from "./utils/constants";
import { IActivePage } from './utils/interfaces';

const App = () => {
  const [activePage, setActivePage] = useState(0);
  const totalPages = pageData.length;
  const handleCtaClick = () => {
    if(activePage < totalPages - 1) {
      setActivePage(activePage + 1);
    }
  }
  return (
    <div className="root">
      <div className="logo">
        <img src={logo} alt="logo" height={40} width={40} />
        <h1>Eden</h1>
      </div>
      <div className="stepper">
        {pageData.map((page, index) => <Stepper activePage={activePage} index={index} totalPages={totalPages} />)}
      </div>
      {pageData.map((page, index) => <>{ activePage === index ? <Page key={String(index)} {...page} handleCtaClick={handleCtaClick} /> : <></>}</>)}
    </div>
  );
}

const Stepper = ({ activePage, index, totalPages }: IActivePage) => {
  const getStyles = () => {
    if(index === activePage) return "activeConnector";
    if(index  < activePage) return "completed";
    return "";
  }
  return (
    <>
     <div className={`${activePage >= index && "active"} step`}>{index + 1}</div>
     {index < totalPages - 1 && <span className={`${getStyles()} connector`} />}
    </>
  )
}

export default App;
