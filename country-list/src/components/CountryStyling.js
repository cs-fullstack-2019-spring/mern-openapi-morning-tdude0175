import React ,{Component} from "react";
import CountryListing from "./CountryListing"
import "../Country.css"
export default class CountryStyling extends Component
{


    render() {
        return (
            <div>
                <h1>STYLE!?!</h1>
                <CountryListing data = {this.props.data}/>
            </div>
        );
    }

}