// _runtime/01521_context.js
import importAllResult from "noop";
import { jsx } from "jsxProd";
import { context1 } from "01522_context1.js";
import { NavigationContext } from "01524_NavigationContext.js";

const require = arg1;
let context = importAllResult.createContext(undefined);

export const NavigationRouteContext = context;
export const NamedRouteContextListContext = importAllResult.createContext(undefined);
export const NavigationProvider = function NavigationProvider(route) {
  let children;
  let navigation;
  route = route.route;
  ({ navigation, children } = route);
  const context = importAllResult.useContext(context1.IsFocusedContext);
  let tmp5 = null != context;
  const context1 = importAllResult.useContext(context1.FocusedRouteKeyContext);
  if (tmp5) {
    tmp5 = !context;
  }
  let tmp6 = !tmp5;
  if (!tmp5) {
    tmp6 = context1 === route.key;
  }
  let obj = { value: route, children: null };
  obj = { value: navigation, children: null };
  obj[1] = jsx(context1.IsFocusedContext.Provider, { value: tmp6, children });
  obj[1] = jsx(NavigationContext.NavigationContext.Provider, { value: navigation, children: null });
  return <context.Provider value={navigation}>{null}</context.Provider>;
};