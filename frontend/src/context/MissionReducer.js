export const initialState = {
  missions: []
};

export function missionReducer(state, action) {
  switch (action.type) {
    case "SET_MISSIONS":
      return {
        ...state,
        missions: action.payload
      };

    case "ADD_MISSION":
      return {
        ...state,
        missions: [...state.missions, action.payload]
      };

    case "UPDATE_MISSION":
      return {
        ...state,
        missions: state.missions.map((mission) =>
          mission.id === action.payload.id ? action.payload : mission
        )
      };

    case "DELETE_MISSION":
      return {
        ...state,
        missions: state.missions.filter(
          (mission) => mission.id !== action.payload
        )
      };

    default:
      return state;
  }
}