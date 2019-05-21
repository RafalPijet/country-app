import React, {Component} from 'react';
import {connect} from "react-redux";
import {setContinent, deleteCountry, getCountries} from "../actions/actions-countries";
import CountryFlagList from '../presentational/flag-list.component';

class ContinentsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            continent: 'Europa'
        }
    }

    chooseContinent(event) {
        this.props.dispatch(setContinent(event.target.value));
        this.setState({
            continent: event.target.value,
            hidden: true
        });
    }

    deleteCountry(id) {
        const removeCountry = () => new Promise(resolve => resolve(
            this.props.dispatch(deleteCountry(id))
        ));
        removeCountry()
            .then(() => this.props.dispatch(getCountries()))
            .then(() => this.props.visibleCountries.length === 0 ? this.setState({hidden: false}) : [])
    }

    componentDidMount() {
        this.props.dispatch(setContinent('Europa'));
    }

    render() {
        return (
            <div>
                <select onChange={event => this.chooseContinent(event)}>
                    <option value="Europa">Europa</option>
                    <option value="Afryka">Afryka</option>
                </select>
                <h1 hidden={this.state.hidden}>
                    Wyczyściłeś całą listę państw z kontynentu {this.state.continent}, Oskar :)
                </h1>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        visibleCountries: state.countriesReducer.visibleCountries
    }
};

export default connect(mapStateToProps)(ContinentsContainer);