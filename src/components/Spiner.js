import React, { Component } from 'react'
import loading from './loading.gif'
import App from '../App.css'
export default class Spiner extends Component {
  render() {
    return (
            <div className='text-center spinner' > 
                <img src={loading} alt="loading" style={{ width: "2.4rem" }}></img>
            </div>
    )
  }
}