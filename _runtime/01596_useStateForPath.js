// _runtime/01596_useStateForPath.js
import noop from "noop";
import { NavigationFocusedRouteStateContext } from "01568_NavigationFocusedRouteStateContext.js";

const require = arg1;

export const useStateForPath = function useStateForPath() {
  return React.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
};