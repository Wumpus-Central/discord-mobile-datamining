// _runtime/01576_useStateForPath.js
import noop from "noop";
import { NavigationFocusedRouteStateContext } from "01548_NavigationFocusedRouteStateContext.js";

const require = arg1;

export const useStateForPath = function useStateForPath() {
  return React.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
};