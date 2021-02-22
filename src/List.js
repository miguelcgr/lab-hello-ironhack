import React, { Component } from 'react'
import './App.css'

export default class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                    <img src="/images/icon1.png" alt="" />
                    <h2>Declarative</h2>
                    <p>React makes it painless to create interactive UIs.</p>
                    </li>
                    <li>
                    <img src="/images/icon2.png" alt="" />
                    <h2>Components</h2>
                    <p>Build encapsulated components that manage their state</p>
                    </li>       
                    <li>
                    <img src="/images/icon3.png" alt="" />
                    <h2>Single-Way</h2>
                    <p>A set of inmutable values are passed to the components</p>
                    </li>
                    <li>
                    <img src="/images/icon4.png" alt="" />
                    <h2>JSX</h2>
                    <p>Statically-typed. Designed to run on modern browsers.</p>
                    </li>

                </ul>
            </div>
        )
    }
}
