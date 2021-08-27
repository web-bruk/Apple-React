import React, { Component } from 'react'
import  LinkHightlight from "./LinkHighLight"
import  Applelogo from "./images/icons/apple-tv-logo.png"
import watch from './images/icons/watch-series5-logo.png';
import Banker from './images/home/banker.png';
import Youtube from './YouTube/Youtube';
import NewsFeed from './NewsFeed/NewsFeed';
import Nave from './nave/Nave';
import Footer from './Footer/Footer';
 class Main extends Component {
    constructor(props) {
        super();
        this.state = {
          state1: 0,
          rightSideWrapperClass:"right-side-wrapper",
          leftSideWrapperClass:"left-side-wrapper",
        };
      }

    render() {
        return (
            <div>
                <section>
                <Nave/>
                </section>
                <section className="alert-section top-50">
                    <div className="container">
                        <div className="alert-title">
                            We’re open for you.
                        </div>
                        <div className="alert-text">
                            Our retail stores are closed, but you can buy our products here online and get fast, free delivery. If you need help finding the right product or have a question on your order, chat online with a Specialist or call 1-800-MY-APPLE.<br></br>
                            For service and support, visit <a href="https://support.apple.com/">support.apple.com</a>
                        </div>
                    </div>
	           </section>
                <section className="first-hightlight-wrapper">
                    <div className="container">
                        <LinkHightlight
                        // OuterWrapper="first-hightlight-wrapper"
                        New="New"
                        title="iPad Pro "
                        />
                        <div className="links-wrapper">
                            <ul>
                                <li><a href="">Learn more</a></li>
                                <li><a href="">Order</a></li>
                            </ul> 
                        </div>

                        <div className="ipod-caption row">
                            <div className="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
                            <div className="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
                        </div>
                    </div>
                </section>
                <section className="second-hightlight-wrapper">
                    <div className="container">
                    <LinkHightlight
                        // OuterWrapper="second-hightlight-wrapper"
                        New="New"
                        title="MacBook Air "
                        descriptionWrapper="Twice the speed. Twice the storage."
                        priceWrapper="From $999."
                    />
                        <div className="links-wrapper">
                            <ul>
                                <li><a href="">Learn more</a></li>
                                <li><a href="">Buy</a></li>
                            </ul> 
                        </div>
                    </div>
                </section>
                <section className="third-hightlight-wrapper">
                    <div className="container">
                        <LinkHightlight
                        // OuterWrapper="third-hightlight-wrapper"
                        title="iPhone 11 Pro  "
                        descriptionWrapper="Pro cameras. Pro display. Pro performance."
                        priceWrapper="From $24.95/mo. or $599 with trade‑in."
                        />
                        <div className="links-wrapper">
                            <ul>
                                <li><a href="">Learn more</a></li>
                                <li><a href="">Buy</a></li>
                            </ul> 
                        </div>
                    </div>
                </section>
                <section className="fourth-heghlight-wrapper">
                    <div className="container-fluid">
                        <div className="row">                        
                            <div className="left-side-wrapper col-sm-12 col-md-6">
                                <div className="left-side-container">
                                <div className="title-wraper">
                                    iPhone 11 
                                </div> 
                                <div className="description-wraper">
                                    Just the right amount of everything.
                                </div>
                                <div className="price-wrapper">
                                    From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                                </div>
                                    <div className="links-wrapper">
                                        <ul>
                                            <li><a href="">Learn more</a></li>
                                            <li><a href="">Apply now</a></li>
                                        </ul> 
                                    </div>
                                 </div>
                            </div> 
                             <div className="right-side-wrapper col-sm-12 col-md-6">
                                <div className="right-side-container"> 
                                <div className="title-wraper white">
                                    Get the latest CDC response to COVID-19. 
                                </div> 
                                    <div className="links-wrapper white">
                                        <ul>
                                            <li><a href="">Watch the PSA</a></li>
                                        </ul> 
                                    </div>
                                </div> 
                             </div> 
                        </div> 
                    </div> 
                </section>
                <section className="fifth-heghlight-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="left-side-wrapper col-sm-12 col-md-6">
                                <div className="left-side-container">
                                    <div className="top-logo-wrapper">
                                        <div className="logo-wrapper">
                                            <img src={Applelogo}/>
                                        </div>
                                    </div>

                                    <div className="tvshow-logo-wraper">
                                        <img src={Banker}/>
                                    </div>

                                    <div className="watch-more-wrapper">
                                        <a href="/">Watch now on the Apple TV App</a>
                                    </div>
                                </div>
                            </div>
                            <div className="right-side-wrapper col-sm-12 col-md-6">
                                <div className="right-side-container">
                                    <div className="top-logo-wrapper">
                                        <div className="logo-wrapper">
                                            <img src={watch}/>
                                        </div>
                                    </div>
                                    <div className="description-wraper">
                                        With the Always-On Retina display.<br></br>
                                        You’ve never seen a watch like this.
                                    </div>
                                    <div className="links-wrapper">
                                        <ul>
                                            <li><a href="">Learn more</a></li>
                                            <li><a href="">Buy</a></li>
                                        </ul> 
                                    </div>
                                </div>
                            </div>					
                        </div>
                    </div> 
                </section>
                 <section className="youtubeVideosWrapper top-100">
                 <Youtube />
                </section>
                <section className="newsWrapper top-100">
                 {/* <NewsFeed /> */}
                </section>
                <section>
                    <Footer/>
                </section>
            </div>
        )
    }
}
export default Main;

