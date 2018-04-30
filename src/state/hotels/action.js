import {
  GET_HOTELS_PROGRESS,
  GET_HOTELS_SUCCESS,
  GET_HOTELS_EMPTY,
  REQUEST_FAILED,
  FILTER_HOTELS_BY_NAME,
  FILTER_HOTELS_BY_STARS,
} from './const';

import setMessage from '../generic/action';
import {
  getHotelsApi,
  filterByNameApi,
  filterByStarsApi,
} from '../../api/hotels';

function getHotelsProgress() {
  return {
    type: GET_HOTELS_PROGRESS,
  };
}

function requestFailed() {
  return {
    type: REQUEST_FAILED,
  };
}

function getHotelsSuccess(data) {
  return {
    type: GET_HOTELS_SUCCESS,
    data,
  };
}

function filterHotelsByNameSuccess(data) {
  return {
    type: FILTER_HOTELS_BY_NAME,
    data,
  };
}

function filterHotelsByStarsSuccess(data) {
  return {
    type: FILTER_HOTELS_BY_STARS,
    data,
  };
}

function getHotelsEmpty(data) {
  return {
    type: GET_HOTELS_EMPTY,
    data,
  };
}

export function requestHotels() {
  return dispatch => {
    dispatch(getHotelsProgress());
    getHotelsApi()
      .then(response => {
        if (response.data.length > 0) {
          dispatch(getHotelsSuccess(response.data));
        } else {
          dispatch(getHotelsEmpty(response.data));
        }
      })
      .catch(() => {
        dispatch(requestFailed());
        dispatch(setMessage('Error obteniendo la lista de hoteles', 'error'));
      });
  };
}

export function filterByName(hotel) {
  return dispatch => {
    dispatch(getHotelsProgress());
    filterByNameApi(hotel)
      .then(response => {
        if (response.data.length > 0) {
          dispatch(filterHotelsByNameSuccess(response.data));
        } else {
          dispatch(getHotelsEmpty(response.data));
        }
      })
      .catch(() => {
        dispatch(requestFailed());
        dispatch(setMessage('Error obteniendo la lista de hoteles', 'error'));
      });
  };
}

export function filterByStars(stars) {
  return dispatch => {
    dispatch(getHotelsProgress());
    filterByStarsApi(stars)
      .then(response => {
        if (response.data.length > 0) {
          dispatch(filterHotelsByStarsSuccess(response.data));
        } else {
          dispatch(getHotelsEmpty(response.data));
        }
      })
      .catch(() => {
        dispatch(requestFailed());
        dispatch(setMessage('Error obteniendo la lista de hoteles', 'error'));
      });
  };
}
