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
    //gathers data every time the page is rendered
    getData = () =>
    {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(data => data.json())
            .then(convertedData => this.setState({data:convertedData}))
    };
    componentDidMount() {
        this.getData()
    }
    // filters through the data based on button pressed and feeds it into the state to send down to next component
    // with the desired info to render
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
