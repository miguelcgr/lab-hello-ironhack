import React, { Component } from 'react'
import './App.css'

export default class Welcome extends Component {
    render() {
        return (
            <div className= 'blue-background'>
             
                  <div className="logos">
                     <img src="/images/ironhack-logo.svg" alt="" />
                     <img src="/images/menu-top.svg" alt="" />
                     </div>  
                <div className= 'white'>
                   
                 <h1> Say hello to React JS </h1>
                 <p className= 'white-text'>You will learn how to use the most popular front-end library, and become a super Ninja developer.</p>
                 <button><p>Awesome!</p></button>
             </div>
            </div>
        )
    }
}
