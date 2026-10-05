// === Module 1531: ? ===

// Module 1531
import Fragment from "Fragment" /* 21 */;
import _mod1532 from "module_1532" /* 1532 */;
import react2 from "react" /* 1534 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;
let context = react.createContext(undefined);

export const NavigationRouteContext = context;
export const NamedRouteContextListContext = react.createContext(undefined);
export const NavigationProvider = function NavigationProvider(route) {
  let children;
  route = route.route;
  ({ navigation, children } = route);
  context = react.useContext(_mod1532.IsFocusedContext);
  let tmp5 = null != context;
  const context1 = react.useContext(_mod1532.FocusedRouteKeyContext);
  if (tmp5) {
    tmp5 = !context;
  }
  const Provider = context.Provider;
  const Provider2 = react2.NavigationContext.Provider;
  return <Provider value={route}>{null}</Provider>;
};