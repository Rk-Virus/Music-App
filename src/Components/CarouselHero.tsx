import React from 'react'

import Carousel from 'react-bootstrap/Carousel';

function CarouselHero() {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/hero1.png"
                        alt="First slide"
                        style={{height:'55vh', borderRadius:10}}
                    />
                    <Carousel.Caption style={{backgroundColor:'rgb(0,0,0, 0.6)', paddingLeft:40, paddingRight:40}}>
                        <h3>Relax</h3>
                        <p>Calm down with soothing music</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{height:'55vh', borderRadius:10}}
                        src="img/hero2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{backgroundColor:'rgb(0,0,0, 0.6)', paddingLeft:40, paddingRight:40}}>
                        <h3>Nostalgia</h3>
                        <p>Experience 'the old is gold'</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/hero3.jpg"
                        alt="Third slide"
                        style={{height:'55vh', borderRadius:10}}
                    />

                    <Carousel.Caption style={{backgroundColor:'rgb(0,0,0, 0.6)', paddingLeft:40, paddingRight:40}}>
                        <h3>Rock & Roll</h3>
                        <p>
                            Get started with the party songs
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselHero