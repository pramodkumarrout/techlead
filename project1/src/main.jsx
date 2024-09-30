import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';


import Nav from '../src/component/nav/Nav.jsx';
import Hero from '../src/component/hero/Hero.jsx';
import Offer from '../src/component/offer/Offer.jsx';
import Creative from '../src/component/creative/Creative.jsx';
import Industry from '../src/component/industry/Industry.jsx';
import Client from '../src/component/client/Client.jsx';
import Price from '../src/component/price/Price.jsx';
import Workflow from '../src/component/workflow/Workflow.jsx';
import Footer from '../src/component/footer/Footer.jsx'; 









createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Hero />
    <Offer />
    <Creative />
    <Industry />
    <Client />
    <Price />
    <Workflow />
    <Footer />
  </StrictMode>,
)
