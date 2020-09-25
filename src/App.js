import React from 'react';
import './App.css';
import { StickyContainer, Sticky } from 'react-sticky';
import { Header } from './components/Header/Header';
import { Clients } from './components/Clients/Clients';
import { Consultation } from './components/RequestConsultation/Consultation';
import { Footer } from './components/Footer/Footer';
import  Menu  from './components/responsive-menu/menu';
import './components/Mainnav/Mainnav.scss';
import { Switch, Route } from 'react-router-dom';

//Pages
import { Index } from './pages/Index';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import 'bootstrap/dist/css/bootstrap.min.css';



 const App = () => {
  return (
    <div>
      <Header />
      <StickyContainer>
        <Sticky>
          {({
            style
          }) => (
            <header style={style} className="Mainnav">
              <Menu />
            </header>
          )}
        </Sticky>
        <Switch>
          <Route exact path='/About' component={About}/>
          <Route exact path='/' component={Index} />
          <Route exact path="/Services" component={Services}/>
          <Route exact path="/Resources" component={Resources}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="/FAQ" component={FAQ}/>
          <Route exact path="/Privacy" component={PrivacyPolicy} />
          <Route exact path="/Terms" component={Terms} />
        </Switch>
        <Consultation />
        <Footer />
      </StickyContainer>
    </div>
  )
}

export default App


/*
<StickyContainer>

        <Sticky>
          {({
            style
          }) => (
            <header style={style} className="Mainnav">
              <Menu />
            </header>
          )}
        </Sticky>
            <img src={banner} alt="banner" className="Mainnav-banner"/>
      </StickyContainer> */