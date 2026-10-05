// _runtime/metro/01531__.js
import Fragment from "../react/00021_Fragment.js";
import _mod1532 from "01532__.js";
import react2 from "../01534_react.js";
import react from "../00019_react.js";

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
