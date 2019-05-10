import React from 'react';
// import { Router, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Showcase from './Showcase';
import Footer from './Footer';


// app
const App = () => {
  return (
    // <div className="ui container">
    <div>
      {/* < Router > */}
        <div>
          <Header />
          {/* <Route path="/" exact component={grid} /> */}
          <Hero />
          <Showcase />
          <Footer />
        </div>
      {/* </Router> */}
    </div>
  );
};

export default App;
