import { useEffect, useState } from 'react';
import FetchData from '../../service/FetchData.js';



const fetchData = new FetchData();

const useLaunches = () => {

    const [data, setData] =useState([]);

    useEffect( ()=> {
		fetchData.getLaunches()
		.then(  launches =>{
			setData(state => [...launches])
		} )
	// eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    const getLaunch = id => data.find(item => item.id === id);

    return {data , getLaunch}
}

export default useLaunches;