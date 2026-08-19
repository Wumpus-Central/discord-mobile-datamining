// === Module 1596: useStateForPath ===

// Module 1596 (useStateForPath)
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1568 */;
import noop from "noop" /* 19 */;

require = arg1;

export const useStateForPath = function useStateForPath() {
  return React.useContext(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext);
};