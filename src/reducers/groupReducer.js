import { GET_GROUPS, GET_GROUP, DELETE_GROUP } from "../actions/types";

const initialState = {
  groups: [],
  group: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GROUPS:
      return {
        ...state,
        groups: action.payload
      };

    case GET_GROUP:
      return {
        ...state,
        group: action.payload
      };
    case DELETE_GROUP:
      return {
        ...state,
        groups: state.groups.filter(
          group => group.groupIdentifier !== action.payload
        ) //filtruje tego co nie ma za pomoca js6 filter
      };

    default:
      return state;
  }
}
