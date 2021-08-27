import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import './component/css/styles.css';
import './component/css/bootstrap.css';
import './component/css/styles.css';
import './component/YouTube/styles.css';
import App from './App';
// import Nave from './Nave';
// import Main from './component/Main';
import Productpage from './component/Pages/ProductPage/Productpage';
// import Footer from './component/Footer/Footer';
import reportWebVitals from './reportWebVitals';
import Iphone from './component/Pages/Iphone/Iphone';

ReactDOM.render(
  <React.StrictMode>
    <   App />
   </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
