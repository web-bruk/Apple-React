import React, { Component } from 'react'

class Fourth extends Component {
    render() {
        return (
            <div>
                <div className=" left-side-wrapper col-sm-12 col-md-6 col-lg-6 "  >
                    <div className={this.props.InnerClassName}>
                            <div className="description-wraper">{this.props.descriptionWrapper} </div>
                            <div className="links_wrapper">
                            <ul>
                            <li><a href="">learn now</a></li>
                            <li><a href="">Buy</a></li>
                            </ul>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Fourth;
  // InnerWrapper="right-side-wrapper col-sm-12 col-md-6"
        // InnerClassName="right-side-container"
        // title="Get the latest CDC response to COVID-19. "