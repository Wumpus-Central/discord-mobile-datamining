// === Module 1524: ? ===

// Module 1524
import context12 from "context1" /* 1525 */;
import NavigationContext from "NavigationContext" /* 1527 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let context = noop.createContext(undefined);

export const NavigationRouteContext = context;
export const NamedRouteContextListContext = noop.createContext(undefined);
export const NavigationProvider = function NavigationProvider(route) {
  route = route.route;
  ({ navigation, children } = route);
  context = noop.useContext(context12.IsFocusedContext);
  let tmp5 = null != context;
  const context1 = noop.useContext(context12.FocusedRouteKeyContext);
  if (tmp5) {
    tmp5 = !context;
  }
  let tmp6 = !tmp5;
  if (!tmp5) {
    tmp6 = context1 === route.key;
  }
  let obj = { value: route, children: null };
  obj = { value: navigation, children: jsx(context12.IsFocusedContext.Provider, { value: tmp6, children }) };
  obj.children = jsx(NavigationContext.NavigationContext.Provider, { value: navigation, children: jsx(context12.IsFocusedContext.Provider, { value: tmp6, children }) });
  return <context.Provider value={navigation}>{jsx(context12.IsFocusedContext.Provider, { value: tmp6, children })}</context.Provider>;
};