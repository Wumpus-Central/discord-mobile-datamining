// _runtime/01596_useStateForPath.js
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1568 */;
import closure_2 from "noop" /* 19 */;

require = arg1;

export const useStateForPath = function useStateForPath() {
  return React.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
};