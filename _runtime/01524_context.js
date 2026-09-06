// _runtime/01524_context.js
import context12 from "01525_context1.js";
import NavigationContext from "01527_NavigationContext.js";
import importAllResult from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

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
  obj = { value: navigation, children: jsx(tmp(1525).IsFocusedContext.Provider, { value: tmp6, children }) };
  obj[1] = jsx(NavigationContext.NavigationContext.Provider, {
    value: navigation,
    children: jsx(tmp(1525).IsFocusedContext.Provider, { value: tmp6, children }),
  });
  return (
    <context.Provider value={navigation}>
      {jsx(tmp(1525).IsFocusedContext.Provider, { value: tmp6, children })}
    </context.Provider>
  );
};
