import React, { Component } from 'react'
import image1 from '../images/image1.svg'
import image2 from '../images/image2.svg'
import image3 from '../images/image3.svg'
import image4 from '../images/image4.svg'
import image5 from '../images/image5.svg'
import image6 from '../images/image6.svg'
import image7 from '../images/image7.svg'
import image8 from '../images/image8.svg'

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
