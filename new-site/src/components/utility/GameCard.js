import React from 'react'

function GameCard(props){
    return(
        <div className="col s3 game-card">
            <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="http://demo.themexpert.com/wordpress/gamez/wp-content/uploads/2016/06/dark-souls-3-cover.jpg" />
            </div>
            <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
            <p><a href="#">This is a link</a></p>
            </div>
            <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>        
    </div>
    )
}

export default GameCard;