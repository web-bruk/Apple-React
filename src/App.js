import logo from './logo.svg';
import './App.css'
import Nave from "./component/nave/Nave"
import Footer from "./component/Footer/Footer"
import Main from "./component/Main"
import Iphone from "./component/Pages/Iphone/Iphone"
import Mac from "./component/Pages/Mac/Mac"
import Productpage from "./component/Pages/ProductPage/Productpage"
import Four04 from "./component/Pages/Four04/Four04"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Router } from 'express';


// import CommenSide from "./component/CommentSide/CommenSide"
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>

//   );
// }

// export default App;

function App() {
  return (
      <div>
        <br/>
        <br/>
        <br/>
        {/* <Nave/>
        <Alert/>
        <Main/>
        <Footer /> */}
        {/* <Nave /> */}
       <Router>
          <div>
            {/* <Nave /> */}
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/mac" exact component={Mac} />
              <Route path="/iphone" exact component={Iphone} />
              <Route path="/iphone/:pid" exact component={Productpage} />
              <Route path="/" component={Four04} />
            </Switch>
            {/* <Footer /> */}
          </div>
      </Router>
      
      </div>
  );
}
export default App;

{/* <Router>
<div>
  <Nave />
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/mac" exact component={Mac} />
    <Route path="/iphone" exact component={Iphone} />
    <Route path="/iphone/:pid" exact component={Productpage} />
    <Route path="/" component={Four04} />
  </Switch>
  <Footer />
</div>
</Router> */}

 {/* <Main/>
            <Iphone/>
            <Mac/>
            <Productpage/>
            <Four04/>
            <Footer/> */}
