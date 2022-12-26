import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import CarouselFadeExample from './carousel';
import Layout from './Layout/layout';
import Sidenav from './Layout/sidenav';

function App(){ 
  return (
    
      <>
        <div className="w-100" style={{maxWidth : '100%'}}>
          <Router>
      
            <Routes>
            <Route  path="/" element={<Sidenav />}>
              <Route exact path="gallery" element={<CarouselFadeExample />}/>
              </Route>
            

              
            </Routes>
           
             
          </Router>
        </div>
      </>
    

  );
}

export default App;