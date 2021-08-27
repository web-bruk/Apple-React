import React, { Component } from 'react'
 
class LinkHightlight extends Component {
    render() {
        return (
            <div>
                <section className={this.props.OuterWrapper}>
                        <div className="container">

                            <div className="new-alert">
                            {this.props.New}
                            </div>

                            <div className="title-wraper bold black">
                            {this.props.title} 
                            </div> 

                            <div className="description-wrapper black">
                            {this.props.descriptionWrapper} 
                            </div>

                            <div className="price-wrapper grey">
                            {this.props.priceWrapper} 
                            </div>
		                </div>
	            </section>
            </div>
        )
    }
}
export default LinkHightlight;