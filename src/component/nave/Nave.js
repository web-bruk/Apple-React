import React, { Component } from 'react'
import HeaderLink from './HeaderLink/HeaderLink';
import search from '../../images/icons/search-icon-sm.png';
import cart from '../../images/icons/cart-sm.png';
import logo from '../../images/icons/logo-sm.png';
class Nave extends Component {
    render() {
        return (
          <div className="nav-wrapper fixed-top">
            <div className="container">
              <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                      ☰
                  </button>
                  <a className="navbar-brand mx-auto" href="/"><img src={logo}/></a>
        
                  <div className="navbar-collapse collapse">
                      <ul className="navbar-nav nav-justified w-100 nav-fill">
                        <HeaderLink  LinkName="Mac" UrlLink="/Mac"/>
                        <HeaderLink  LinkName="iphone" UrlLink="/iphone"/>
                        <HeaderLink  LinkName="ipad" UrlLink="/ipad"/>
                        <HeaderLink  LinkName="watch" UrlLink="/watch"/>
                        <HeaderLink  LinkName="tv" UrlLink="/tv"/>
                        <HeaderLink  LinkName="Music" UrlLink="/Music"/>
                        <HeaderLink  LinkName="Support" UrlLink="/Support"/>
                        <li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search}/></a></li>
                        <li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cart}/></a></li>
                      </ul>
                  </div>
            </nav>
          </div>
        </div>
    )
  }
}
export default  Nave;

