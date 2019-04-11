import React, {Component} from "react";


export default class CountryListing extends Component {

    render() {
        //maps the data for display
        var dataMapping = this.props.data.map((country, index) => {
            let languages = country.languages;
            let spoken = languages.length;
            return (
                <div key={index}>
                    <img src={country.flag} alt="Flag" width={"20%"} height={"30%"}/>
                    <h4>{country.name} ({country.alpha2Code})</h4>
                    <p> {country.capital}</p>
                    <p>Number of spoken languages: {spoken}</p>
                </div>
            )
        });
        return (
            <div className={"InfoContainer"}>
                {dataMapping}
            </div>
        );
    }

}