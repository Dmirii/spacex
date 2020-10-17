import React from 'react';
import { useEffect, useState } from 'react';
import './detailes.css';
import Main from '../Main/Main.js';
import {useHistory} from 'react-router-dom';
import useLaunches from '../Hooks/useLaunches.js';


const Detailes = props => {

	const [launch,setLaunch] = useState(null);
	const {getLaunch} = useLaunches();

	useEffect( () => {
		setLaunch(getLaunch(props.match.params.id));

	}, [getLaunch, props.match.params.id]);

	console.log(launch)

	const history  = useHistory();
	if(!launch) return <div>Загрузка</div>
	return (
		<>
		<Main title={launch.name} /> 
		<main className="details">
			<div className="container">
				<div className="details-row">
					<div className="details-image">
						<img src={launch.links.patch.small} alt={launch.name}></img>
					</div>
					<div className="details-content">
						<p className="details-description">{launch?.details}</p>
					</div>
				</div>
				
			</div>
			<a onClick={history.goBack} className="button button-back">go back</a>
		</main>
		</>
		
		
		);
}
export default Detailes;