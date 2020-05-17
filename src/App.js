import React from 'react';
import './App.css';
import Menu from './componentes/Menu';
import Rodape from './componentes/footer/Footer';
import Advantages from './componentes/advantages/Advantages';
import AboutWork from './componentes/aboutWork/AboutWork';
import SectionMain from './componentes/sectionMain/SectionMain';

function App() {
  return (
    <React.Fragment>
      <Menu></Menu>
      <SectionMain></SectionMain>
      <Advantages></Advantages>
      <AboutWork></AboutWork>
      <Rodape></Rodape>;
    </React.Fragment>
  );
}

export default App;
