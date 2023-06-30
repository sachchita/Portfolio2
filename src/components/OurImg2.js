import { Component } from 'react';
import './OurImg2Styles.css';
import React from 'react'

class OurImg2 extends Component {
    render() {

        return (
          <div className='our-img'>
              <div className='heading'>
                  <h1>{this.props.heading}</h1>
                  <p>{this.props.text}</p>
              </div>
          </div>
        )
    }
}

export default OurImg2