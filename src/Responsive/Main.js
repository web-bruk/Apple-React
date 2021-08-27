import React, { Component } from 'react'
import  Fourth from "./Fourth"
 class Main extends Component {
    render() {
        return (
            <div>
                <section className="fourth-heghtlight_wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <Fourth 
                                InnerClassName="left-side-container"
                                descriptionWrapper="powerful. Colorful. Wonderful."
                            />
                            {/* <div className=" left-side-wrapper col-sm-12 col-md-6 col-lg-6 ">
                                <div className="left-side-container">
                                        <div className="powerful">powerful. Colorful. Wonderful.</div>
                                        <div className="links_wrapper">
                                        <ul>
                                        <li><a href="">learn now</a></li>
                                        <li><a href="">Buy</a></li>
                                        </ul>
                                        </div>
                                </div>
                            </div> */}

                            <Fourth 
                                InnerClassName="right-side-container"
                                descriptionWrapper="The future of health is on your wrist."
                            />
                            {/* <div className="right-side-wrapper col-sm-12 col-md-6 col-lg-6 ">
                        
                                 <div className="right-side-container">
                                    <div className="logo_watch"><img src="../Apple bootstrap Project/Logos/watch-series5-logo.png" alt="/"/></div>
                                    <div className="health">The future of health is on your wrist.</div>
                                    <div className="links_wrapper">
                                    <ul>
                                    <li><a href="">learn now</a></li>
                                    <li><a href="">Buy</a></li>
                                    </ul>
                                    </div> 
                                </div> 
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Main;