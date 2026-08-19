// _runtime/01596_useStateForPath.js
import NavigationFocusedRouteStateContext from "01568_NavigationFocusedRouteStateContext.js";
import noop from "00019_noop.js";

require = arg1;

export const useStateForPath = function useStateForPath() {
  return React.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
};