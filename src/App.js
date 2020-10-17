import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';

import './style.css';
import Header from './components/header/Header.js';
import Home from './components/Home/Home.js';
import Main from './components/Main/Main';
import Features from './components/features/features';
import Footer from './components/Footer/Footer';
import FetchData from './service/FetchData';
import Calendar from './components/Calendar/Calendar';
import Detailes from './components/Detailes/Detailes';


class App extends React.Component{

  fetchData = new FetchData();

  state ={
    rocket: 'Falcon 1',
    rocketFeatures:null,
    rockets:[],
    company: null,
  }
  componentDidMount(){
    // метод жизненного цикла до рендера
    this.updateRocket();
    this.updateCompany();
  
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
      //console.log('upRocket:',this.state)
      })    
    })
}

changeRocket = rocket =>{
  this.setState({ rocket}, this.updateRocket)  
}

updateCompany = () => {
  this.fetchData.getCompany()
    .then( company =>  this.setState({company : company}, ()=> console.log('State',this.state)))
};
  
  render (){
    return (  
      <BrowserRouter>
        <Header rockets = {this.state.rockets} changeRocket={this.changeRocket} />
        <Route exact path='/'>
            { this.state.company && <Home company={this.state.company}/> }
        </Route>

        {/* способ вызова  */}
        <Route path='/rocket'>
            <Main {...this.state}/>
            { this.state.rocketFeatures && <Features {...this.state.rocketFeatures}/> }
        </Route>

        {/* способ вызова  */}
        <Route path='/calendar' component={Calendar}/> 
        
        <Route path='/details/:id'component={Detailes}/> 
        
        

        { this.state.company && <Footer {...this.state.company.links}/> }
        
      </BrowserRouter>
    )
  }
}

export default App;
