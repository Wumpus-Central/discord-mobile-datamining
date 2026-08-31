// === Module 1540: context ===

// Module 1540 (context)
import context12 from "context1" /* 1541 */;
import NavigationContext from "NavigationContext" /* 1543 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let context = importAllResult.createContext(undefined);

export const NavigationRouteContext = context;
export const NamedRouteContextListContext = importAllResult.createContext(undefined);
export const NavigationProvider = function NavigationProvider(route) {
  route = route.route;
  ({ navigation, children } = route);
  context = importAllResult.useContext(context12.IsFocusedContext);
  let tmp5 = null != context;
  const context1 = importAllResult.useContext(context12.FocusedRouteKeyContext);
  if (tmp5) {
    tmp5 = !context;
  }
  let tmp6 = !tmp5;
  if (!tmp5) {
    tmp6 = context1 === route.key;
  }
  let obj = { value: route, children: null };
  obj = { value: navigation, children: jsx(tmp(1541).IsFocusedContext.Provider, { value: tmp6, children }) };
  obj[1] = jsx(NavigationContext.NavigationContext.Provider, { value: navigation, children: jsx(tmp(1541).IsFocusedContext.Provider, { value: tmp6, children }) });
  return <context.Provider value={navigation}>{jsx(tmp(1541).IsFocusedContext.Provider, { value: tmp6, children })}</context.Provider>;
};