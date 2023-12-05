/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Router, Route, Link,  } from 'react-router-dom';
import HomeProducts from './HomeProducts';



const App = () => {
  return (
    
  
    <BrowserRouter>
  <Router>


    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        
          <Route path="/cart">
            
          </Route>
          <Route path="/">
              <HomeProducts />
          </Route>

      </div>
    </Router>
    </BrowserRouter>









    
  )
}

export default App