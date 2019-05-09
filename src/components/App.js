import React from 'react';
// import { Router, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';


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
        </div>
      {/* </Router> */}
    </div>
  );
};

export default App;
