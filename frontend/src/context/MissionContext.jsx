import { createContext, useReducer, useContext } from "react";
import { missionReducer, initialState } from "./missionReducer";

const MissionContext = createContext();

export function MissionProvider({ children }) {
  const [state, dispatch] = useReducer(
    missionReducer,
    initialState
  );

  return (
    <MissionContext.Provider value={{ state, dispatch }}>
      {children}
    </MissionContext.Provider>
  );
}

export function useMission() {
  return useContext(MissionContext);
}