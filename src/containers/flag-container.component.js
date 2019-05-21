import React, {Component} from 'react';
import {connect } from "react-redux";
import CountryFlagList from '../presentational/flag-list.component';
import {getCountries, searchCountries, deleteCountry} from '../actions/actions-countries'

class CountryFlagContainer  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        }
    }

    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }

    search(event) {
        this.props.dispatch(searchCountries(event.target.value));
    }

    deleteCountry(id) {
        const removeCountry = () => new Promise(resolve => resolve(
            this.props.dispatch(deleteCountry(id))
        ));
        removeCountry()
            .then(() => this.props.dispatch(getCountries()))
            .then(() => this.props.visibleCountries.length === 0 ? this.setState({hidden: false}) : [])
    };


    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)}/>
                    <h1 hidden={this.state.hidden}>Wyczyściłeś całą listę państw, Oskar :)</h1>
                </div>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)}/>
            </div>
        )
    }
}

const MapStateToProps = (store) => {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries
    }
};

export default connect(MapStateToProps)(CountryFlagContainer);