// === Module 1541: context ===

// Module 1541 (context)
import context12 from "context1" /* 1542 */;
import NavigationContext from "NavigationContext" /* 1544 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
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
  const obj = { value: navigation, children: jsx(context12.IsFocusedContext.Provider, { value: tmp6, children }) };
  obj[1] = jsx(NavigationContext.NavigationContext.Provider, { value: navigation, children: jsx(context12.IsFocusedContext.Provider, { value: tmp6, children }) });
  return <context.Provider value={navigation}>{jsx(context12.IsFocusedContext.Provider, { value: tmp6, children })}</context.Provider>;
};