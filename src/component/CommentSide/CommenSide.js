import React, { Component } from 'react'
import CommenSideLink from "./CommenSideLink"
import Applelogo from '../../images/icons/apple-tv-logo.png';
import watch from '../../images/icons/watch-series5-logo.png';
import Banker from '../../images/home/banker.png';
 class CommenSide extends Component {
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
            <section className="fourth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                            <CommenSideLink
                                wrapperClass="left-side-wrapper"
                                innerclassName="left-side-container"
                                title="iPhone 11  "
                                descriptionWrapper="Just the right amount of everything."
                                priceWrapper="From $18.70/mo. or $499 with trade‑in. "
                            />
                            <CommenSideLink 
                                wrapperClass="right-side-wrapper"
                                innerclassName="right-side-container"
                                title="Get the latest CDC response to COVID-19. "
                                LinkName="Watch the PSA"
                                LinkUrl="Watch the PSA"
                            />
                        </div>
                </div> 
            </section>
        </div>
        )
    }
}
export default CommenSide;
// {this.props.rightSideWrapperClass}
