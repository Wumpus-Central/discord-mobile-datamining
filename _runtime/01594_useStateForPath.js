// _runtime/01594_useStateForPath.js
import NavigationFocusedRouteStateContext from "01566_NavigationFocusedRouteStateContext.js";
import closure_2 from "00019_noop.js";

require = arg1;

export const useStateForPath = function useStateForPath() {
  return React.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
};
