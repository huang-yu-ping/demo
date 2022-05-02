import * as actionTypes from "../constant";

const defaultPlaceData = {
  place: "",
  information: ""
};

export default (state = defaultPlaceData, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_PLACE: {
      const newState = {
        ...state,
        place: action.data.place,
        information: action.data.data
      };
      return newState;
    }
    default:
      return state;
  }
};
