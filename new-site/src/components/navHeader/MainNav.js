import React from 'react';

function MainNav(props){
    return(
        <div className="main-nav">
        <div className="navbar-fixed">
        <nav>
                <div className="nav-wrapper black light 0.9">
                    <ul className="left hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li className="active"><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
        </nav>      
        </div>
            

        </div>
    )
}
export default MainNav;



