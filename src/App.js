import React from 'react';

import './style.css';
import Header from './components/header/Header.js';
import Main from './components/Main/Main';
import Features from './components/features/features';
import Footer from './components/Footer/Footer';
import FetchData from './service/FetchData';
// import Calendar from './components/Calendar/Calendar';
// import Detailes from './components/Detailes/Detailes';


class App extends React.Component{

  fetchData = new FetchData();

  state ={
    rocket: 'Falcon 1',
    rocketFeatures:null,
    rockets:[],
  }
  componentDidMount(){
    this.updateRocket();
  
  }

  updateRocket(){
    this.fetchData.getRocket()
    .then(data => {
      this.setState({ rockets : data.map(item => item.name)})
      return data;
    })
    .then( data => data.find(item => item.name === this.state.rocket))
    .then(rocketFeatures => {
    this.setState( {rocketFeatures}  , () => { 
      console.log('>>>>',this.state)
      })    
    })
}

changeRocket = rocket =>{
  this.setState({ rocket}, this.updateRocket)
  
}
  
  render (){
    return (  
      <>
        <Header rockets = {this.state.rockets} changeRocket={this.changeRocket} />
        <Main {...this.state}/>
        <Features {...this.state.rocketFeatures}/> 
        <Footer/>  
      </>
    )
  }
}

export default App;
