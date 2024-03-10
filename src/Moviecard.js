// import React from "react";
import {Component} from "react";

class MovieCard extends Component{
    constructor(){
        super();
        this.state = {
            title: "The Avengers",
            plot: "Supernatural powers show in the movie.",
            price: 199,
            rating: 8.9,
            stars: 0,
            fav: true,

        }
        // this.addStars = this.addStars.bind(this);
    }

    addStars = () => {

        if(this.state.stars >= 5){
            return;
        }
        //first 
        this.setState({
            stars: this.state.stars +0.5
        });

        //second
        // this.setState((prevState) => {
        //     return{
        //         stars: prevState.stars +0.5
        //     }
        // });

        // this.state.stars += 0.5;
        // console.log("this: ", this);
    }


    decStars = () => {

        if(this.state.stars <= 0){
            return;
        }
        this.setState({
            stars: this.state.stars -0.5
        });
    }

    handleFav = () => {
        this.setState({
            fav: !this.setState.fav
        })
    }


    render(){
        const {title, plot, price, rating, stars} = this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://rukminim2.flixcart.com/image/416/416/jr6o13k0/poster/j/g/r/medium-avengers-infinity-war-movie-poster-for-room-office-300gsm-original-imafdffwhfnfugqk.jpeg?q=70&crop=false"/>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">

                                <img className="str-btn" 
                                alt="decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                                onClick={this.decStars}/>

                                <img alt="stars" 
                                src="https://cdn-icons-png.flaticon.com/128/477/477406.png" 
                                className="stars"/>

                                <img className="str-btn" 
                                alt="increase" 
                                src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                                onClick={this.addStars}/>

                                <span className="starCount">{stars}</span>
                
                            </div>

                            {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>:
                            <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}
                            
                            {<button className= {fav? "unfavourite-btn":"favourite-btn"} 
                            onClick={this.handleFav}>{fav? "unfavourite-btn":"favourite-btn"}</button>}
                            


                            <button className="cart-btn">Add to cart</button>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default MovieCard;
