import React, { Component } from 'react';
import './App.css';
import CountryStyling from "./components/CountryStyling"

class App extends Component {
    constructor(props) {
        super(props);
        this.state=
            {
                data:[],
                displayData: []
            }

    }

    getData = () =>
    {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(data => data.json())
            .then(convertedData => this.setState({data:convertedData}))
    };
    componentDidMount() {
        this.getData()
    }

    ChangeListed =(e)=>
    {
        var filteredData = [];
        this.state.data.map((country)=>
        {

           if(country.region === e.target.value)
           {
               filteredData.push(country);
           }
        });
        this.setState({displayData: filteredData});
    };
    render() {
    return (
      <div className="App">
          <button value={"Americas"} onClick={this.ChangeListed}>Americas</button>
          <button value={"Europe"} onClick={this.ChangeListed}>Europe</button>
          <button value={"Africa"} onClick={this.ChangeListed}>Africa</button>
          <button value={"Oceania"} onClick={this.ChangeListed}>Oceania</button>
          <button value={"Asia"} onClick={this.ChangeListed}>Asia</button>
          <button value={"Polar"} onClick={this.ChangeListed}>Polar</button>
          <h3>Click a button to find out all countrys inhabiting it</h3>
          <CountryStyling data ={this.state.displayData}/>
      </div>
    );
  }
}

export default App;
