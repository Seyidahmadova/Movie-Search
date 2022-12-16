import { ACTION_TYPES } from "../actionTypes";

const initialState = {
  movies: [],
//   error: null,
//   status: "IDLE",
};

// const initalStateBasket = {
//   movies: [],
// };


export function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_Movie:
            return { ...state, movies:[ ...action.payload ]}

        default:
            return state
    }
};


// export function moviesReducer(state = initialState, action) {
//   switch (action.type) {
//     case ACTION_TYPES.GET_DATA.PENDING:
//       return {
//         ...state,
//         movies: [],
//         status: "PENDING",
//       };

//     case ACTION_TYPES.GET_DATA.SUCCESS:
//       return {
//         ...state,
//         movies: [...action.payload],
//         status: "SUCCESS",
//       };

//     case ACTION_TYPES.GET_DATA.ERROR:
//       return { data: [], movies: [], status: "ERROR" };

//     default:
//       return state;
//   }
// }

// export function basketReducer(state = initalStateBasket, action) {
//   const findMovie =
//     !!state.movies.length &&
//     state.movies.find((item) => item.imdbID !== action.payload.imdbID);
//   switch (action.type) {
//     case "ADD_TO_BASKET":
//       if (findMovie) {
//         return state;
//       } else {
//         return { ...state, movies: [...state.movies, action.payload] };
//       }

//     default:
//       return state;
//   }
// }
