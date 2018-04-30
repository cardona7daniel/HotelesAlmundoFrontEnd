import {
  GET_HOTELS_PROGRESS,
  GET_HOTELS_SUCCESS,
  GET_HOTELS_EMPTY,
  REQUEST_FAILED,
  FILTER_HOTELS_BY_NAME,
  FILTER_HOTELS_BY_STARS,
} from './const';

const initialState = {
  data: [],
  loading: false,
};

export default function hotelsApp(state = initialState, action) {
  switch (action.type) {
    case GET_HOTELS_PROGRESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case REQUEST_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_HOTELS_SUCCESS:
    case FILTER_HOTELS_BY_NAME:
    case FILTER_HOTELS_BY_STARS: {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case GET_HOTELS_EMPTY: {
      return {
        ...state,
        data: [],
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}
