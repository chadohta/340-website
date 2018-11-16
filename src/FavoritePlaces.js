import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText, Col } from 'reactstrap';

export class FavoritePlaces extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv('data/favPlaces.csv').then((data) => {
            this.setState({
                data: data
            })
        });
    }
    render() {
        {console.log(this.state.data)}
        return (
            <div className="container text-center">
                Some of my favorite places:
                <br></br>
                <br></br>
                { this.state.data.map((d, i) => {
                    return (
                        console.log(d.Link),
                        <div className="card mb-4">
                            <img className="card-img-top" src = {d.Link} alt = {d.Description} />
                            <div className="card-body">
                                <h3 className="card-title">{d.Description}</h3>
                                <p className="card-text">{d.State}</p>
                            </div>
                        </div>
                    )
                   
                   }) }
            </div>
        )
    }
}