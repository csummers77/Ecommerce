import React from 'react';

function MiniNav(props){
    const categories = [
        'NES',
        'DreamCast',
        'N64',
        'PlayStation',
        'Atari',
        'Odessey',
    ]
    return(
        <nav>
        <div class="nav-wrapper black">
          <ul class="left hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li class="active"><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    )
}
export default MiniNav;