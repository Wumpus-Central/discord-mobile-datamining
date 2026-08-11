// _runtime/01595_useStateForPath.js
import noop from "noop";
import { NavigationFocusedRouteStateContext } from "01567_NavigationFocusedRouteStateContext.js";

const require = arg1;

export const useStateForPath = function useStateForPath() {
  return React.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
};