import React, { Component } from 'react'
import { Router, Route, Link} from 'react-router'
import image1 from '../images/image1.svg'

class MovieList extends Component{
    render() {
        return (
            <div className="wrapper">
                <div className="movie">
                    <img src={image1} className="movie__image"/>
                    <h2 className="movie__title">Onward</h2>
                    <h3 className="movie__year">2020</h3>
                </div>
                <div className="movie">
                    <img src={image1} className="movie__image" />
                    <h2 className="movie__title">Onward</h2>
                    <h3 className="movie__year">2020</h3>
                </div>
                <div className="movie"> 
                    <img src={image1} className="movie__image"/>
                    <h2 className="movie__title">Onward</h2>
                    <h3 className="movie__year">2020</h3>
                </div>
                <div className="movie">
                    <img src={image1} className="movie__image"/>
                    <h2 className="movie__title">Onward</h2>
                    <h3 className="movie__year">2020</h3>
                </div>
                <div >
                    <img src={image1} className="movie__image"/>
                    <h2 className="movie__title">Onward</h2>
                    <h3 className="movie__year">2020</h3>
                </div>
                <div>
                    <img src={image1} className="movie__image"/>
                    <h2 className="movie__title">Onward</h2>
                    <h3 className="movie__year">2020</h3>
                </div>
                <div>
                    <img src={image1} className="movie__image"/>
                    <h2 className="movie__title">Onward</h2>
                    <h3 className="movie__year">2020</h3>
                </div>
                <div>
                    <img src={image1} className="movie__image"/>
                    <h2 className="movie__title">Onward</h2>
                    <h3 className="movie__year">2020</h3>
                </div>
            </div>
        )
    }
}

export default MovieList
