import Moment from 'moment';

import * as actionType from '../actions/constants';

const initialState = {
  admin: {},
  is_authenticated: false,
  signInErrorMsg: '',
  carBillingAll: [],
  carBillingCount: [],
  carBillingTotal: [],
  carBillingSearch: [],
  hotelBillingAll: [],

  hotelBillingCount: [],
  hotelBillingTotal: [],
  hotelBillingSearch: [],

  hotelBillingCustom: [],
  hotelBillingName: [],
  hotelBillingCity: [],
  hotelBillingCumulative: {},

  flightBillingAll: [],
  flightBillingCumulative: {},
  flightBillingName: [],
  flightBillingDepAirport: [],
  flightBillingDepCity: [],
  flightBillingArrAirport: [],
  flightBillingArrCity: [],
  flightBillingClass: [],
  flightBillingCustom: [],

  logPages: [],
  logPagesCount: [],
  logSearches: [],
  logSearchesType: [],
  logSearchesDealerCity: [],
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADMIN_SIGNIN: {
      // not sure what to do here
      return {
        ...state,
        is_authenticated: true,
      };
    }
    case actionType.ADMIN_SIGNIN_ERROR: {
      // not sure what to do here
      return {
        ...state,
        signInErrorMsg: action.data.message,
      };
    }
    case actionType.ADMIN_SIGNIN_ERROR_CLEAR: {
      // not sure what to do here
      return {
        ...state,
        signInErrorMsg: '',
      };
    }
    case actionType.ADMIN_SIGNOUT: {
      return {
        ...state,
        is_authenticated: false,
      };
    }
    case actionType.FETCH_CAR_BILLING_ALL: {
      return {
        ...state,
        carBillingAll: [...action.data],
        carBillingSearch: [...action.data],
      };
    }
    case actionType.FETCH_CAR_BILLING_COUNT: {
      return {
        ...state,
        carBillingCount: [...action.data],
      };
    }
    case actionType.FETCH_CAR_BILLING_TOTAL: {
      return {
        ...state,
        carBillingTotal: [...action.data],
      };
    }
    case actionType.FETCH_HOTEL_BILLING_ALL: {
      return {
        ...state,
        hotelBillingAll: [...action.data],
        hotelBillingSearch: [...action.data],
      };
    }
    case actionType.FETCH_HOTEL_BILLING_CUSTOM: {
      return {
        ...state,
        hotelBillingCustom: [...action.data],
      };
    }
    case actionType.FETCH_HOTEL_BILLING_NAME: {
      return {
        ...state,
        hotelBillingName: [...action.data],
      };
    }
    case actionType.FETCH_HOTEL_BILLING_CITY: {
      return {
        ...state,
        hotelBillingCity: [...action.data],
      };
    }
    case actionType.FETCH_HOTEL_BILLING_CUMULATIVE: {
      return {
        ...state,
        hotelBillingCumulative: action.data,
      };
    }

    case actionType.FETCH_FLIGHT_BILLING_ALL: {
      return {
        ...state,
        flightBillingAll: [...action.data],
      };
    }
    case actionType.FETCH_FLIGHT_BILLING_CUMULATIVE: {
      return {
        ...state,
        flightBillingCumulative: action.data,
      };
    }
    case actionType.FETCH_FLIGHT_BILLING_NAME: {
      return {
        ...state,
        flightBillingName: [...action.data],
      };
    }
    case actionType.FETCH_FLIGHT_BILLING_DEP_AIRPORT: {
      return {
        ...state,
        flightBillingDepAirport: [...action.data],
      };
    }
    case actionType.FETCH_FLIGHT_BILLING_DEP_CITY: {
      return {
        ...state,
        flightBillingDepCity: [...action.data],
      };
    }
    case actionType.FETCH_FLIGHT_BILLING_ARR_AIRPORT: {
      return {
        ...state,
        flightBillingArrAirport: [...action.data],
      };
    }
    case actionType.FETCH_FLIGHT_BILLING_ARR_CITY: {
      return {
        ...state,
        flightBillingArrCity: [...action.data],
      };
    }
    case actionType.FETCH_FLIGHT_BILLING_CLASS: {
      return {
        ...state,
        flightBillingClass: [...action.data],
      };
    }
    case actionType.FETCH_FLIGHT_BILLING_CUSTOM: {
      return {
        ...state,
        flightBillingCustom: [...action.data],
      };
    }





    case actionType.FETCH_CAR_BILLING_SEARCH_DATE: {
      let updated = [];
      let date = action.data;
      if(date) {
        console.log('   date = ', Moment(date).format('L'));
        updated = state.carBillingAll.filter((item) => {
          console.log(`${item.createdAt}-->`, Moment(item.createdAt).format('L'));
          return Moment(item.createdAt).format('L') === Moment(date).format('L');
        });
        console.log('------------ updated=', updated);
      } else {
        updated = [...state.carBillingAll];
      }
  
      return {
        ...state,
        carBillingSearch: updated,
      }
    }
    case actionType.FETCH_CAR_BILLING_SEARCH_MONTH: {
      let updated = [];
      let date = action.data;
      if(date) {
        console.log('   date = ', Moment(date).format('MMM YY'));
        updated = state.carBillingAll.filter((item) => {
          console.log(`${item.createdAt}-->`, Moment(item.createdAt).format('MMM YY'));
          return Moment(item.createdAt).format('MMM YY') === Moment(date).format('MMM YY');
        });
        console.log('------------ updated=', updated);
      } else {
        updated = [...state.carBillingAll];
      }
  
      return {
        ...state,
        carBillingSearch: updated,
      }
    }
    case actionType.FETCH_CAR_BILLING_SEARCH_YEAR: {
      let updated = [];
      let date = action.data;
      if(date) {
        console.log('   date = ', Moment(date).format('YY'));
        updated = state.carBillingAll.filter((item) => {
          console.log(`${item.createdAt}-->`, Moment(item.createdAt).format('YY'));
          return Moment(item.createdAt).format('YY') === Moment(date).format('YY');
        });
        console.log('------------ updated=', updated);
      } else {
        updated = [...state.carBillingAll];
      }
      return {
        ...state,
        carBillingSearch: updated,
      };
    }

    case actionType.FETCH_HOTEL_BILLING_COUNT: {
          return {
              ...state,
              hotelBillingCount: [...action.data],
      };
    }
    case actionType.FETCH_HOTEL_BILLING_TOTAL: {
          return {
              ...state,
              hotelBillingTotal: [...action.data],
      };
    }
    case actionType.FETCH_HOTEL_BILLING_SEARCH_DATE: {
          let updated = [];
          let date = action.data;
          if(date) {
              console.log('   date = ', Moment(date).format('L'));
              updated = state.hotelBillingAll.filter((item) => {
                  console.log(`${item.createdAt}-->`, Moment(item.createdAt).format('L'));
              return Moment(item.createdAt).format('L') === Moment(date).format('L');
          });
              console.log('------------ updated=', updated);
          } else {
              updated = [...state.hotelBillingAll];
          }

          return {
              ...state,
              hotelBillingSearch: updated,
      }
    }
    case actionType.FETCH_HOTEL_BILLING_SEARCH_MONTH: {
          let updated = [];
          let date = action.data;
          if(date) {
              console.log('   date = ', Moment(date).format('MMM YY'));
              updated = state.hotelBillingAll.filter((item) => {
                  console.log(`${item.createdAt}-->`, Moment(item.createdAt).format('MMM YY'));
              return Moment(item.createdAt).format('MMM YY') === Moment(date).format('MMM YY');
          });
              console.log('------------ updated=', updated);
          } else {
              updated = [...state.hotelBillingAll];
          }

          return {
              ...state,
              hotelBillingSearch: updated,
      }
    }
    case actionType.FETCH_HOTEL_BILLING_SEARCH_YEAR: {
          let updated = [];
          let date = action.data;
          if(date) {
              console.log('   date = ', Moment(date).format('YY'));
              updated = state.hotelBillingAll.filter((item) => {
                  console.log(`${item.createdAt}-->`, Moment(item.createdAt).format('YY'));
              return Moment(item.createdAt).format('YY') === Moment(date).format('YY');
          });
              console.log('------------ updated=', updated);
          } else {
              updated = [...state.hotelBillingAll];
          }
          return {
              ...state,
              hotelBillingSearch: updated,
      };
    }

    case actionType.FETCH_LOG_PAGES: {
      return {
        ...state,
        logPages: [...action.data],
      };
    }
    case actionType.FETCH_LOG_PAGES_COUNT: {
      return {
        ...state,
        logPagesCount: [...action.data],
      };
    }
    case actionType.FETCH_LOG_SEARCHES: {
      return {
        ...state,
        logSearches: [...action.data],
      };
    }
    case actionType.FETCH_LOG_SEARCHES_TYPE: {
      return {
        ...state,
        logSearchesType: [...action.data],
      };
    }
    case actionType.FETCH_LOG_SEARCHES_DEALERCITY: {
      return {
        ...state,
        logSearchesDealerCity: [...action.data],
      };
    }

    default:
      return state;
  }
};

export default AdminReducer;
