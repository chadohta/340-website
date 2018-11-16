import React, { Component } from 'react';

export class Homepage extends Component {
    render() {
        return (
            <div className="container text-center">
                <div>
                    Hey there, welcome to my page! 
                    <br></br>
                    <br></br>
                    Check out "Favorite Places" to see some cool pictures of 
                    some cool places or "About Me" to learn a little more about me (: 
                    <br></br>
                    <br></br>
                    Thanks for stopping by! 
                    <br></br>
                    p.s. scroll down for a surprise (:
                </div>

                <div className="card mb-4">
                    <img className="card-img-top" src = 'imgs/doggo.jpg' alt = 'husky' />
                </div>
                <div className="card mb-4">
                    <img className="card-img-top" src = 'imgs/doggoclose.jpg' alt = 'husky' />
                </div>
                
            </div>
        )
    }
}