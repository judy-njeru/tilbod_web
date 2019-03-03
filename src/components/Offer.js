import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';

class Offer extends Component{
  render(){
    return(
        <a href={this.props.offer.link} className="product_card_link">
          <div className="product_card">
            <Thumbnail src={this.props.offer.image}>
                <h4>{this.props.offer.title}</h4>
                <h3>{this.props.offer.price}</h3>
            </Thumbnail>
          </div>
        </a>
    )
  }
}
export default Offer;
