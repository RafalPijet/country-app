export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';

export const getCountries = () => {
    return {
        type: GET_COUNTRIES
    }
};

export const getCountry = id => {
    return {
        type: GET_COUNTRY,
        id
    }
};

export const deleteCountry = id => {
    return {
        type: DELETE_COUNTRY,
        id
    }
};

export const searchCountries = searchText => {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
};

export const setContinent = name => {
    return {
        type: SET_CONTINENT,
        name
    }
};
