import React from 'react';
import axios from 'axios';
import Players from './Players';
import './App.css';

class App extends React.Component  {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios
    .get(`http://localhost:5000/api/players`)
    .then(res => {
      console.log(res.data);
     this.setState({
       data: res.data
     });
    })
    .catch(err => console.log(err));
  }

  render () {
  
    return (
      <div className="App">
      {this.state.data.map(stats => (
        <Players key={stats.id} info={stats}/>
      ))}
        <h1>Women's World Cup Stats!</h1>
      </div>
    );
  }
  
}
  

export default App;
