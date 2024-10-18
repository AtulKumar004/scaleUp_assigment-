import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  DATA_FILTER_BY_NAME,
  DATA_FILTER_BY_SCORE,
  DATA_FILTER_BY_ORDER_BY,
  DATA_FILTER_RESET,
} from "./type";

const initialState = {
  loading: false,
  data: [],
  originalData: [],
  error: "",
  filters: {
    name: "",
    minScore: 0,
    orderBy: "",
  },
};

const applyFilters = (data, filters) => {
  let filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filters.name.toLowerCase())
  );

  filteredData = filteredData.filter((item) =>
    Math.round(item.rating / 10) >= filters.minScore
  );

  if (filters.orderBy) {
    filteredData.sort((a, b) => {
      if (filters.orderBy === 'release_date') {
        return a.first_release_date - b.first_release_date;
      } else if (filters.orderBy === 'score') {
        return b.rating - a.rating;
      } else if (filters.orderBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }

  return filteredData;
};

const rooReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        originalData: action.payload,
        error: "",
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case DATA_FILTER_BY_NAME:
      return {
        ...state,
        filters: { ...state.filters, name: action.payload },
        data: applyFilters(state.originalData, { ...state.filters, name: action.payload }),
      };
    case DATA_FILTER_BY_SCORE:
      return {
        ...state,
        filters: { ...state.filters, minScore: action.payload },
        data: applyFilters(state.originalData, { ...state.filters, minScore: action.payload }),
      };
    case DATA_FILTER_BY_ORDER_BY:
      return {
        ...state,
        filters: { ...state.filters, orderBy: action.payload },
        data: applyFilters(state.originalData, { ...state.filters, orderBy: action.payload }),
      };
    case DATA_FILTER_RESET:
      return {
        ...state,
        filters: initialState.filters,
        data: state.originalData,
      };
    default:
      return state;
  }
};

export default rooReducer;
