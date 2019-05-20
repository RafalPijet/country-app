import {GET_COUNTRIES} from "../actions/actions-countries";
import countriesData from "../data/countries";

const initialState = {
    countries: countriesData
};

const countriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRIES:
            return {...state, countries: state.countries};
        default:
            return state
    }
};

export default countriesReducer;