import React from 'react';
import './main.css';

const video ={
    'Falcon 1':'moon',
    'Falcon 9':'earth',
    'Falcon Heavy': 'mars',
    'other': 'space'
}

const Main = ({rocket,title}) => (<section className="main">
<h1 className="title">
    {rocket ? rocket : title}
</h1>

{rocket && <div className="video-container">
                <video className="video" autoPlay 
                loop muted src={`../spacex/video/${video.hasOwnProperty(rocket) 
                                                        ? video[rocket] : video.other }.mp4`}></video>
            </div>
}


</section>  

)

export default Main;