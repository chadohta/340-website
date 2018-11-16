import React, { Component } from 'react';

export class About extends Component {
    render() {
        return ( 
            <div className="container text-center">
                <div>
                    HI, I'M CHAD
                    <br></br>
                    <br></br>
                    I am currently a student at the Univerity of Washington studying Informatics. 
                    I was born in Honolulu, HI where I spent the first 20 years of my life.
                    After living on an island for such a long time I decided it was time for a change in scenery. 
                    So I packed up and headed to beautiful Seattle. 
                    <br></br>
                    <br></br>
                    Some of my hobbies include taking pictures and traveling.
                    My favorite camera of all time is hands down the Olympus Stylus Epic. 
                    It combines the fun of old school film with the ease of an automotic point and shoot.
                    I don't think it can get any better than that! 
                    <br></br>
                    <br></br>
                    If you haven't already, be sure to check out my "Favorite Places" page!
                    The first three pictures on there were shot with the Olympus! 
                </div>    

                <div className="card mb-4">
                    <img className="card-img-top" src = 'imgs/filmcam.JPG' alt = 'myself' />
                </div>        
            </div>
        )
    }
}