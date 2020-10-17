import React from 'react';
import './calendar.css';
import Main from '../Main/Main.js';
import  useLaunches  from '../Hooks/useLaunches.js';

import { Link } from 'react-router-dom';


const Calendar = () => {

	
	const {data} = useLaunches();
	//if(!data) return <div>Загрузка</div>
	return (
		<>
		<Main title='Календарь SpaceX' />
		<section className="calendar">
			<div className="container">
				<ul className="calendar-list">
					{
						data.map(item =>(
							
							<li key={item.date_local} className="calendar-item">
						<article className="launches">
							<div className="launches-image">
								<img src={item.links.patch.small} alt=""></img>
								
							</div>
							<div className="launches-content">
								<h2 className="launches-title">{item.name}</h2>
								<Link to={`/details/${item.id}`} className="button launches-details">Подробнее</Link>
							</div>
						</article>
					</li>

						))
					}
					
	
					
	
					
	
					
	
				</ul>
			</div>
		</section>
		
		</>
		);
}
export default Calendar;