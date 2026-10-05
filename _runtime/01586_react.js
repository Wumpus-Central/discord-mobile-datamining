// _runtime/01586_react.js
import react2 from "01558_react.js";
import react from "00019_react.js";

export const useStateForPath = function useStateForPath() {
  return react.useContext(react2.NavigationFocusedRouteStateContext);
};
