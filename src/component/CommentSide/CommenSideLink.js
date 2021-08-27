import React, { Component } from 'react'
import logo from '../../images/icons/apple-tv-logo.png';
 class CommenSideLink extends Component {
    render() {
        return (
           
                <div className={`col-sm-12 col-md-6 ${this.props.wrapperClass} `}>
					<div className={this.props.innerclassName}>
                            <div className="title-wraper">
                                {this.props.title} 
                            </div> 

                            <div className="description-wraper">
                                {this.props.descriptionWrapper} 
                            </div>

                            <div className="price-wrapper">
                                {this.props.priceWrapper}
                            </div>
                          
                                <li><a href={this.props.LinkUrl}>
                                    {this.props.LinkName}
                                    </a>
                                </li>
                           
                            
                            <div className="links-wrapper">
                                <ul>
                                    <li><a href="">Learn more</a></li>
                                    <li><a href="">Apply now</a></li>
                                </ul> 
                            </div>
					</div>
				</div>
            
        )
    }
}
export default CommenSideLink;

