import axios from 'axios';

import * as actionType from './constants';

export const adminSignIn = (data) => {
  return {
    type: actionType.ADMIN_SIGNIN,
    data,
  };
};

export const adminSignInError = (data) => {
  return {
    type: actionType.ADMIN_SIGNIN_ERROR,
    data,
  };
};

export const adminSignInErrorClear = () => {
  return {
    type: actionType.ADMIN_SIGNIN_ERROR_CLEAR,
  };
};


export const adminSignOutReducer = () => {
  return {
    type: actionType.ADMIN_SIGNOUT,
  };
};

export const adminSignOut = () => (dispatch) => {
  console.log('adminSignOut');

  // need to log before clearing out localStorage
  // dispatch(axiosAddActivity(actionType.adminSignOut, 'User sign out'));
  
  localStorage.removeItem('admin_token');
  localStorage.removeItem('admin_id');
  localStorage.removeItem('admin_firstname');
  localStorage.removeItem('admin_lastname');
  localStorage.removeItem('admin_email');

  // router.push('/');
  dispatch(adminSignOutReducer());

  console.log("here");

  // return {
  //   type: actionType.USER_SIGN_OUT,
  // };
};

export const addNewCar = (data) => {
  return {
    type: actionType.CAR_ADD,
    data,
  };
};
export const editCar = (data) => {
  return {
    type: actionType.CAR_EDIT,
    data,
  };
};
export const deleteCar = (data) => {
  return {
    type: actionType.CAR_DELETE,
    data,
  };
};


export const fetchCar = (data) => {
  return {
    type: actionType.FETCH_CAR,
    data,
  };
};

export const searchCar = (data) => {
    return {
        type: actionType.CAR_SEARCH,
        data,
    };
};

export const fetchCarDealer = (data) => {
  return {
    type: actionType.FETCH_CAR_DEALER,
    data,
  };
};

export const fetchCarBillingAll = (data) => {
  return {
    type: actionType.FETCH_CAR_BILLING_ALL,
    data,
  };
};

export const fetchCarBillingCount = (data) => {
  return {
    type: actionType.FETCH_CAR_BILLING_COUNT,
    data,
  };
};

export const fetchCarBillingTotal = (data) => {
  return {
    type: actionType.FETCH_CAR_BILLING_TOTAL,
    data,
  };
};

export const fetchCarBillingCumulative = (data) => {
  return {
    type: actionType.FETCH_CAR_BILLING_CUMULATIVE,
    data,
  };
};

export const fetchCarBillingName = (data) => {
  return {
    type: actionType.FETCH_CAR_BILLING_NAME,
    data,
  };
};

export const fetchCarBillingCity = (data) => {
  return {
    type: actionType.FETCH_CAR_BILLING_CITY,
    data,
  };
};





export const fetchCarBillingSearchDate = (data) => {
  return {
    type: actionType.FETCH_CAR_BILLING_SEARCH_DATE,
    data,
  };
};
export const fetchCarBillingSearchMonth = (data) => {
  return {
    type: actionType.FETCH_CAR_BILLING_SEARCH_MONTH,
    data,
  };
};
export const fetchCarBillingSearchYear = (data) => {
  return {
    type: actionType.FETCH_CAR_BILLING_SEARCH_YEAR,
    data,
  };
};

export const fetchHotelBillingAll = (data) => {
  return {
    type: actionType.FETCH_HOTEL_BILLING_ALL,
    data,
  };
};

export const fetchHotelBillingCount = (data) => {
  return {
    type: actionType.FETCH_HOTEL_BILLING_COUNT,
    data,
  };
};

export const fetchHotelBillingTotal = (data) => {
  return {
    type: actionType.FETCH_HOTEL_BILLING_TOTAL,
    data,
  };
};

export const fetchHotelBillingCustom = (data) => {
  return {
    type: actionType.FETCH_HOTEL_BILLING_CUSTOM,
    data,
  };
};

export const fetchHotelBillingCity = (data) => {
  return {
    type: actionType.FETCH_HOTEL_BILLING_CITY,
    data,
  };
};

export const fetchHotelBillingName = (data) => {
  return {
    type: actionType.FETCH_HOTEL_BILLING_NAME,
    data,
  };
};

export const fetchHotelBillingCumulative = (data) => {
  return {
    type: actionType.FETCH_HOTEL_BILLING_CUMULATIVE,
    data,
  };
};


export const fetchFlightBillingAll = (data) => {
  return {
    type: actionType.FETCH_FLIGHT_BILLING_ALL,
    data,
  };
};

export const fetchFlightBillingCumulative = (data) => {
  return {
    type: actionType.FETCH_FLIGHT_BILLING_CUMULATIVE,
    data,
  };
};

export const fetchFlightBillingName = (data) => {
  return {
    type: actionType.FETCH_FLIGHT_BILLING_NAME,
    data,
  };
};

export const fetchFlightBillingDepAirport = (data) => {
  return {
    type: actionType.FETCH_FLIGHT_BILLING_DEP_AIRPORT,
    data,
  };
};

export const fetchFlightBillingDepCity = (data) => {
  return {
    type: actionType.FETCH_FLIGHT_BILLING_DEP_CITY,
    data,
  };
};

export const fetchFlightBillingArrAirport = (data) => {
  return {
    type: actionType.FETCH_FLIGHT_BILLING_ARR_AIRPORT,
    data,
  };
};

export const fetchFlightBillingArrCity = (data) => {
  return {
    type: actionType.FETCH_FLIGHT_BILLING_ARR_CITY,
    data,
  };
};


export const fetchFlightBillingClass = (data) => {
  return {
    type: actionType.FETCH_FLIGHT_BILLING_CLASS,
    data,
  };
};

export const fetchFlightBillingCustom = (data) => {
  return {
    type: actionType.FETCH_FLIGHT_BILLING_CUSTOM,
    data,
  };
};



// add by NaYue 11/21/2017

export const fetchUser = (data) => {
    return {
        type: actionType.FETCH_USER,
        data,
    };
};

export const editUser = (data) => {
    return {
        type: actionType.EDIT_USER,
        data,
    };
};

export const searchUser = (data) => {
    return {
        type: actionType.USER_SEARCH,
        data,
    };
};




export const addNewFlight = (data) => {
    return {
        type: actionType.FLIGHT_ADD,
        data,
    };
};

export const editFlight = (data) => {
    return {
        type: actionType.FLIGHT_EDIT,
        data,
    };
};

export const deleteFlight = (data) => {
    return {
        type: actionType.FLIGHT_DELETE,
        data,
    };
};

export const fetchFlight = (data) => {
    return {
        type: actionType.FETCH_FLIGHT,
        data,
    };
};

export const searchFlight = (data) => {
    return {
        type: actionType.FLIGHT_SEARCH,
        data,
    };
};

export const fetchAirport = (data) => {
    return {
        type: actionType.FETCH_AIRPORT,
        data,
    };
};

export const fetchAirline = (data) => {
    return {
        type: actionType.FETCH_AIRLINE,
        data,
    };
};


export const addNewHotel = (data) => {
    return {
        type: actionType.HOTEL_ADD,
        data,
    };
};

export const editHotel = (data) => {
    return {
        type: actionType.HOTEL_EDIT,
        data,
    };
};

export const deleteHotel = (data) => {
    return {
        type: actionType.HOTEL_DELETE,
        data,
    };
};

export const fetchHotel = (data) => {
    return {
        type: actionType.FETCH_HOTEL,
        data,
    };
};

export const searchHotel = (data) => {
    return {
        type: actionType.HOTEL_SEARCH,
        data,
    };
};


// export const fetchHotelBillingAll = (data) => {
//     return {
//         type: actionType.FETCH_HOTEL_BILLING_ALL,
//         data,
//     };
// };

// export const fetchHotelBillingCount = (data) => {
//     return {
//         type: actionType.FETCH_HOTEL_BILLING_COUNT,
//         data,
//     };
// };

// export const fetchHotelBillingTotal = (data) => {
//     return {
//         type: actionType.FETCH_HOTEL_BILLING_TOTAL,
//         data,
//     };
// };

//hotel billing search by data month year
export const fetchHotelBillingSearchDate = (data) => {
    return {
        type: actionType.FETCH_HOTEL_BILLING_SEARCH_DATE,
        data,
    };
};
export const fetchHotelBillingSearchMonth = (data) => {
    return {
        type: actionType.FETCH_HOTEL_BILLING_SEARCH_MONTH,
        data,
    };
};
export const fetchHotelBillingSearchYear = (data) => {
    return {
        type: actionType.FETCH_HOTEL_BILLING_SEARCH_YEAR,
        data,
    };
};
//flight billing search by data month year
export const fetchFlightBillingSearchDate = (data) => {
    return {
        type: actionType.FETCH_FLIGHT_BILLING_SEARCH_DATE,
        data,
    };
};
export const fetchFlightBillingSearchMonth = (data) => {
    return {
        type: actionType.FETCH_FLIGHT_BILLING_SEARCH_MONTH,
        data,
    };
};
export const fetchFlightBillingSearchYear = (data) => {
    return {
        type: actionType.FETCH_FLIGHT_BILLING_SEARCH_YEAR,
        data,
    };
};


//-------------------------------------------------------------------

export const fetchLogPages = (data) => {
  return {
    type: actionType.FETCH_LOG_PAGES,
    data,
  };
};

export const fetchLogPagesCount = (data) => {
  return {
    type: actionType.FETCH_LOG_PAGES_COUNT,
    data,
  };
};


export const fetchLogSearches = (data) => {
  return {
    type: actionType.FETCH_LOG_SEARCHES,
    data,
  };
};

export const fetchLogSearchesType = (data) => {
  return {
    type: actionType.FETCH_LOG_SEARCHES_TYPE,
    data,
  };
};

export const fetchLogSearchesDealerCity = (data) => {
  return {
    type: actionType.FETCH_LOG_SEARCHES_DEALERCITY,
    data,
  };
};

export const fetchLogSearchesHotelCity = (data) => {
  return {
    type: actionType.FETCH_LOG_SEARCHES_HOTELCITY,
    data,
  };
};

export const fetchLogSearchesAirportA = (data) => {
  return {
    type: actionType.FETCH_LOG_SEARCHES_AIRPORTA,
    data,
  };
};
export const fetchLogSearchesAirportB = (data) => {
  return {
    type: actionType.FETCH_LOG_SEARCHES_AIRPORTB,
    data,
  };
};
export const fetchLogSearchesSeats = (data) => {
  return {
    type: actionType.FETCH_LOG_SEARCHES_SEATS,
    data,
  };
};
export const fetchLogSearchesClassType = (data) => {
  return {
    type: actionType.FETCH_LOG_SEARCHES_CLASSTYPE,
    data,
  };
};
export const fetchLogSearchesRooms = (data) => {
  return {
    type: actionType.FETCH_LOG_SEARCHES_ROOMS,
    data,
  };
};
export const fetchLogSearchesGuests = (data) => {
  return {
    type: actionType.FETCH_LOG_SEARCHES_GUESTS,
    data,
  };
};




export const axiosSignIn = (data, router) => (dispatch) => {
  axios.post('http://localhost:3010/authadmin/signin', {
    email: data.email,
    password: data.password,
  }).then((res) => {
    // if signin is successful, then save the token in the local storage
    console.log('axiosSignIn done', res);
    console.log('axiosSignIn res.status', res.status);
    localStorage.setItem('admin_token', res.data.token);
    localStorage.setItem('admin_id', res.data.id);
    localStorage.setItem('admin_firstname', res.data.firstname);
    localStorage.setItem('admin_lastname', res.data.lastname);
    localStorage.setItem('admin_email', res.data.email);

    router.push('/dashboardkayak');

    dispatch(adminSignIn(data));

    // dispatch(signInErrorClear());
    // dispatch(signUpErrorClear());
    // dispatch(signUpSuccessClear());
    // dispatch(axiosAddActivity(actionType.USER_SIGN_IN, 'User sign in'));
  }).catch((err) => {
    console.log('Error when signin', err);
    console.log('---err.response.status', err.response.status);
    // display the error message
    dispatch(adminSignInError({ message: 'Sign in failed. Please check your username and password.' }));
  });
};

export const axiosAddNewCar = data => (dispatch) => {
  const admin_token = localStorage.getItem('admin_token');
  console.log('axiosAddNewCar data=', data);
  axios.post('http://localhost:3010/cars', {
    type: data.type,
    make: data.make,
    model: data.model,
    dealer: data.dealer,
    description: data.description,
    price: data.price,
    doorNumber: data.doorNumber,
    capacity: data.capacity,
  }, {
    headers: {
      admin_token,
    },
  })
    .then((res) => {
      console.log('-------------------after axiosAddNewCar');
      console.log(res);

      dispatch(addNewCar(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosEditCar = data => (dispatch) => {
  const admin_token = localStorage.getItem('admin_token');
  console.log('axiosAddNewCar data=', data);

  axios.put(`http://localhost:3010/cars/${data._id}`, {
    type: data.type,
    make: data.make,
    model: data.model,
    dealer: data.dealer,
    description: data.description,
    price: data.price,
    doorNumber: data.doorNumber,
    capacity: data.capacity,
  }, {
    headers: {
      admin_token,
    },
  })
    .then((res) => {
      console.log('-------------------after axiosEditCar');
      console.log(res);

      dispatch(editCar(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosDeleteCar = data => (dispatch) => {
  const admin_token = localStorage.getItem('admin_token');
  console.log('axiosAddNewCar data=', data);

  axios.delete(`http://localhost:3010/cars/${data._id}`, {
    headers: {
      admin_token,
    },
  })
    .then((res) => {
      console.log('-------------------after axiosDeleteCar');
      console.log(res);

      dispatch(deleteCar(data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchCar = () => (dispatch) => {
  //get admin token

  axios.get('http://localhost:3010/cars')
    .then((res) => {
      console.log('--- after axiosFetchCar');
      console.log(res.data);

      dispatch(fetchCar(res.data));
    }).catch((err) => {
      console.log(err);
    });
};


export const axiosFetchCarDealer = () => (dispatch) => {
  //get admin token

  axios.get('http://localhost:3010/cardealers')
    .then((res) => {
      console.log('--- after axiosFetchCarDealer');
      console.log(res.data);

      dispatch(fetchCarDealer(res.data));
    }).catch((err) => {
      console.log(err);
    });
};


export const axiosFetchCarBillingAll = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');
  axios.get('http://localhost:3010/carbillings', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchCarBillingAll');
      console.log(res.data);

      dispatch(fetchCarBillingAll(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchCarBillingCount = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/carbillings/aggregate/count', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchCarBillingCount');
      console.log(res.data);

      dispatch(fetchCarBillingCount(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchCarBillingTotal = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/carbillings/aggregate/total', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchCarBillingTotal');
      console.log(res.data);

      dispatch(fetchCarBillingTotal(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchCarBillingCumulative = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/carbillings/aggregate/cumulative', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchCarBillingCumulative');
      console.log(res.data);

      dispatch(fetchCarBillingCumulative(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchCarBillingName = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/carbillings/aggregate/name', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchCarBillingName');
      console.log(res.data);

      dispatch(fetchCarBillingName(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchCarBillingCity = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/carbillings/aggregate/city', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchCarBillingCity');
      console.log(res.data);

      dispatch(fetchCarBillingCity(res.data));
    }).catch((err) => {
      console.log(err);
    });
};





export const axiosFetchHotelBillingAll = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/hotelbillings', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchHotelBillingAll');
      console.log(res.data);

      dispatch(fetchHotelBillingAll(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchHotelBillingCustom = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/hotelbillings/aggregate/custom', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchHotelBillingCustom');
      console.log(res.data);

      dispatch(fetchHotelBillingCustom(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchHotelBillingName = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/hotelbillings/aggregate/name', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchHotelBillingName');
      console.log(res.data);

      dispatch(fetchHotelBillingName(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchHotelBillingCity = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/hotelbillings/aggregate/city', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchHotelBillingCity');
      console.log(res.data);

      dispatch(fetchHotelBillingCity(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchHotelBillingCumulative = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/hotelbillings/aggregate/cumulative', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchHotelBillingCumulative');
      console.log(res.data);

      dispatch(fetchHotelBillingCumulative(res.data));
    }).catch((err) => {
      console.log(err);
    });
};


// --- Flight
export const axiosFetchFlightBillingAll = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/flightbillings', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchFlightBillingAll');
      console.log(res.data);

      dispatch(fetchFlightBillingAll(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchFlightBillingCumulative = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/flightbillings/aggregate/cumulative', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchFlightBillingCumulative');
      console.log(res.data);

      dispatch(fetchFlightBillingCumulative(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchFlightBillingName = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/flightbillings/aggregate/name', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchFlightBillingName');
      console.log(res.data);

      dispatch(fetchFlightBillingName(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchFlightBillingDepAirport = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/flightbillings/aggregate/departureairport', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchFlightBillingDepAirport');
      console.log(res.data);

      dispatch(fetchFlightBillingDepAirport(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchFlightBillingDepCity = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/flightbillings/aggregate/departurecity', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchFlightBillingDepCity');
      console.log(res.data);

      dispatch(fetchFlightBillingDepCity(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchFlightBillingArrAirport = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/flightbillings/aggregate/arrivalairport', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchFlightBillingArrAirport');
      console.log(res.data);

      dispatch(fetchFlightBillingArrAirport(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchFlightBillingArrCity = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/flightbillings/aggregate/arrivalcity', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchFlightBillingArrCity');
      console.log(res.data);

      dispatch(fetchFlightBillingArrCity(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchFlightBillingClass = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/flightbillings/aggregate/class', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchFlightBillingClass');
      console.log(res.data);

      dispatch(fetchFlightBillingClass(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchFlightBillingCustom = () => (dispatch) => {
  //get admin token
  const token = localStorage.getItem('admin_token');

  axios.get('http://localhost:3010/flightbillings/aggregate/custom', {
    headers: {
      token,
    },
  })
    .then((res) => {
      console.log('--- after axiosFetchFlightBillingCustom');
      console.log(res.data);

      dispatch(fetchFlightBillingCustom(res.data));
    }).catch((err) => {
      console.log(err);
    });
};



export const axiosFetchUser = () => (dispatch) => {
    //get admin token

    axios.get('http://localhost:3010/users')
        .then((res) => {
            console.log('--- after axiosFetchUser');
            console.log(res.data);

            dispatch(fetchUser(res.data));
        }).catch((err) => {
        console.log(err);
    });
};

export const axiosEditUser = user => (dispatch) => {
  //get admin token
  const admin_token = localStorage.getItem('admin_token');
  const id = user.id;
  console.log("before edit user, the id is : "+ id);
  console.log(user);
  axios.put(`http://localhost:3010/users/${id}`, user)
    .then((res) => {
      console.log('-------------- after axiosEditUser--------------');
      console.log(res.data);
      console.log(user);
      dispatch(editUser(user));
    }).catch((err) => {
      console.log(err);
    });

};



export const axiosAddNewFlight = data => (dispatch) => {
    const admin_token = localStorage.getItem('admin_token');
    console.log('axiosAddNewFlight data=', data);
    axios.post('http://localhost:3010/flights', {
        flightNumber: data.flightNumber,
        departureTime: data.departureTime,
        arrivalTime: data.arrivalTime,
        departureAirport: data.departureAirport,
        arrivalAirport:data.arrivalAirport,
        airline: data.airline,
        class: data.class,
        price: data.price,
    }, {
        headers: {
            admin_token,
        },
    })
        .then((res) => {
        console.log('-------------------after axiosAddNewFlight');
    console.log(res);
    console.log("after add new flight, the res.data is: ", res.data);
    dispatch(addNewFlight(res.data));
}).catch((err) => {
        console.log(err);
});
};

export const axiosEditFlight = data => (dispatch) => {
    const admin_token = localStorage.getItem('admin_token');
    console.log('axiosEditCar data=', data);

    axios.put(`http://localhost:3010/flights/${data._id}`, {
        flightNumber: data.flightNumber,
        departureTime: data.departureTime,
        arrivalTime: data.arrivalTime,
        departureAirport: data.departureAirport,
        arrivalAirport:data.arrivalAirport,
        airline: data.airline,
        class: data.class,
        price: data.price,
    }, {
        headers: {
            admin_token,
        },
    })
        .then((res) => {
        console.log('-------------------after axiosEditFlight');
    console.log(res);
    console.log(res.data);

    dispatch(editFlight(res.data));
}).catch((err) => {
        console.log(err);
});
};

export const axiosDeleteFlight = data => (dispatch) => {
    const admin_token = localStorage.getItem('admin_token');
    console.log('axiosDeleteFlight data=', data);

    axios.delete(`http://localhost:3010/flights/${data._id}`, {
        headers: {
            admin_token,
        },
    })
        .then((res) => {
        console.log('-------------------after axiosDeleteFlight');
    console.log(res);

    dispatch(deleteFlight(data));
}).catch((err) => {
        console.log(err);
});
};

export const axiosFetchFlight = () => (dispatch) => {
    //get admin token

    axios.get('http://localhost:3010/flights')
        .then((res) => {
        console.log('--- after axiosFetchfligt');
    console.log(res.data);

    dispatch(fetchFlight(res.data));

}).catch((err) => {
        console.log(err);
});
};

export const axiosFetchAirport = () => (dispatch) => {
    //get admin token

    axios.get('http://localhost:3010/flights/airports')
        .then((res) => {
        console.log('--- after axiosFetchAirport');
    console.log(res.data);

    dispatch(fetchAirport(res.data));
}).catch((err) => {
        console.log(err);
});
};

export const axiosFetchAirline = () => (dispatch) => {
    //get admin token

    axios.get('http://localhost:3010/flights/airlines')
        .then((res) => {
        console.log('--- after axiosFetchAirline');
    console.log(res.data);

    dispatch(fetchAirline(res.data));
}).catch((err) => {
        console.log(err);
});
};





export const axiosAddNewHotel = data => (dispatch) => {
    const admin_token = localStorage.getItem('admin_token');
    console.log('axiosAddNewHotel data=', data);
    axios.post('http://localhost:3010/hotels', {
        name: data.name,
        stars: data.stars,
        address: data.address,
        city: data.city,
        state: data.state,
        country: data.country,
        zipcode: data.zipcode,
        roomType: data.roomType,
        price: data.price,
    }, {
        headers: {
            admin_token,
        },
    })
        .then((res) => {
        console.log('-------------------after axiosAddNewHotel');
    console.log(res);
    console.log("after add new hotel, the res.data is: ", res.data);
    dispatch(addNewHotel(res.data));
}).catch((err) => {
        console.log(err);
});
};

export const axiosEditHotel = data => (dispatch) => {
    const admin_token = localStorage.getItem('admin_token');
    console.log('axiosEditHotel data=', data);

    axios.put(`http://localhost:3010/hotels/${data._id}`, {
        name: data.name,
        stars: data.stars,
        address: data.address,
        city: data.city,
        state: data.state,
        country: data.country,
        zipcode: data.zipcode,
        roomType: data.roomType,
        price: data.price,
    }, {
        headers: {
            admin_token,
        },
    })
        .then((res) => {
        console.log('-------------------after axiosEditHotel');
    console.log(res);
    console.log(res.data);

    dispatch(editHotel(res.data));
}).catch((err) => {
        console.log(err);
});
};

export const axiosDeleteHotel = data => (dispatch) => {
    const admin_token = localStorage.getItem('admin_token');
    console.log('axiosDeleltHotel data=', data);

    axios.delete(`http://localhost:3010/hotels/${data._id}`, {
        headers: {
            admin_token,
        },
    })
        .then((res) => {
        console.log('-------------------after axiosDeleteHotel');
    console.log(res);

    dispatch(deleteHotel(data));
}).catch((err) => {
        console.log(err);
});
};

export const axiosFetchHotel = () => (dispatch) => {
    //get admin token

    axios.get('http://localhost:3010/hotels')
        .then((res) => {
        console.log('--- after axiosFetchHotel-------');
    console.log(res.data);

    dispatch(fetchHotel(res.data));
}).catch((err) => {
        console.log(err);
});
};


// export const axiosFetchHotelBillingAll = () => (dispatch) => {
//     //get admin token
//     const token = localStorage.getItem('admin_token');
//     axios.get('http://localhost:3010/hotelBillings', {
//         headers: {
//             token,
//         },
//     })
//         .then((res) => {
//         console.log('--- after axiosFetchHotelBillingAll');
//     console.log(res.data);

//     dispatch(fetchHotelBillingAll(res.data));
// }).catch((err) => {
//         console.log(err);
// });
// };

export const axiosFetchHotelBillingCount = () => (dispatch) => {
    //get admin token
    const token = localStorage.getItem('admin_token');

    axios.get('http://localhost:3010/hotelBillings/aggregate/count', {
        headers: {
            token,
        },
    })
        .then((res) => {
        console.log('--- after axiosFetchHotelBillingCount');
    console.log(res.data);

    dispatch(fetchHotelBillingCount(res.data));
}).catch((err) => {
        console.log(err);
});
};

export const axiosFetchHotelBillingTotal = () => (dispatch) => {
    //get admin token
    const token = localStorage.getItem('admin_token');

    axios.get('http://localhost:3010/hotelBillings/aggregate/total', {
        headers: {
            token,
        },
    })
        .then((res) => {
        console.log('--- after axiosFetchHotelBillingTotal');
    console.log(res.data);

    dispatch(fetchHotelBillingTotal(res.data));
}).catch((err) => {
        console.log(err);
});
};




export const axiosFetchLogPages = () => (dispatch) => {
  //get admin token

  axios.get('http://localhost:3010/logs/pages')
    .then((res) => {
      console.log('--- after axiosFetchLogPages');
      console.log(res.data);

      dispatch(fetchLogPages(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchLogPagesCount = () => (dispatch) => {
  //get admin token

  axios.get('http://localhost:3010/logs/pages/count')
    .then((res) => {
      console.log('--- after axiosFetchLogPagesCount');
      console.log(res.data);

      dispatch(fetchLogPagesCount(res.data));
    }).catch((err) => {
      console.log(err);
    });
};



export const axiosFetchLogSearches = () => (dispatch) => {
  //get admin token

  axios.get('http://localhost:3010/logs/searches')
    .then((res) => {
      console.log('--- after axiosFetchLogSearches');
      console.log(res.data);

      dispatch(fetchLogSearches(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchLogSearchesType = () => (dispatch) => {
  //get admin token

  axios.get('http://localhost:3010/logs/searches/type')
    .then((res) => {
      console.log('--- after axiosFetchLogSearhesType');
      console.log(res.data);

      dispatch(fetchLogSearchesType(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchLogSearchesDealerCity = () => (dispatch) => {
  //get admin token

  axios.get('http://localhost:3010/logs/searches/dealercity')
    .then((res) => {
      console.log('--- after axiosFetchLogSearchesDealerCity');
      console.log(res.data);

      dispatch(fetchLogSearchesDealerCity(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchLogSearchesHotelCity = () => (dispatch) => {
  //get admin token

  axios.get('http://localhost:3010/logs/searches/hotelcity')
    .then((res) => {
      console.log('--- after axiosFetchLogSearchesHotelCity');
      console.log(res.data);

      dispatch(fetchLogSearchesHotelCity(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchLogSearchesAirportA = () => (dispatch) => {
  //get admin token

  axios.get('http://localhost:3010/logs/searches/airporta')
    .then((res) => {
      console.log('--- after axiosFetchLogSearchesAirportA');
      console.log(res.data);

      dispatch(fetchLogSearchesAirportA(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchLogSearchesAirportB = () => (dispatch) => {
  //get admin token

  axios.get('http://localhost:3010/logs/searches/airportb')
    .then((res) => {
      console.log('--- after axiosFetchLogSearchesAirportB');
      console.log(res.data);

      dispatch(fetchLogSearchesAirportB(res.data));
    }).catch((err) => {
      console.log(err);
    });
};


export const axiosFetchLogSearchesSeats = () => (dispatch) => {
  //get admin token

  axios.get('http://localhost:3010/logs/searches/seats')
    .then((res) => {
      console.log('--- after axiosFetchLogSearchesSeats');
      console.log(res.data);

      dispatch(fetchLogSearchesSeats(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchLogSearchesClassType = () => (dispatch) => {
  //get admin token

  axios.get('http://localhost:3010/logs/searches/classtype')
    .then((res) => {
      console.log('--- after axiosFetchLogSearchesClassType');
      console.log(res.data);

      dispatch(fetchLogSearchesClassType(res.data));
    }).catch((err) => {
      console.log(err);
    });
};
export const axiosFetchLogSearchesRooms = () => (dispatch) => {
  //get admin token

  axios.get('http://localhost:3010/logs/searches/rooms')
    .then((res) => {
      console.log('--- after axiosFetchLogSearchesRooms');
      console.log(res.data);

      dispatch(fetchLogSearchesRooms(res.data));
    }).catch((err) => {
      console.log(err);
    });
};

export const axiosFetchLogSearchesGuests = () => (dispatch) => {
  //get admin token

  axios.get('http://localhost:3010/logs/searches/guests')
    .then((res) => {
      console.log('--- after axiosFetchLogSearchesGuests');
      console.log(res.data);

      dispatch(fetchLogSearchesGuests(res.data));
    }).catch((err) => {
      console.log(err);
    });
};










