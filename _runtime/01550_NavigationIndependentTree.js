// _runtime/01550_NavigationIndependentTree.js
import noopAll from "00019_noop.js";
import NavigationIndependentTreeContext from "01502_NavigationIndependentTreeContext.js";
import context from "01524_context.js";
import context1 from "01525_context1.js";
import NavigationContext from "01527_NavigationContext.js";
import NavigationFocusedRouteStateContext from "01551_NavigationFocusedRouteStateContext.js";
import { jsx } from "react/00021_jsxProd.js";

require = arg1;
noopAll;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  let obj = { value: "Array", children: 0 };
  obj = { value: "Array", children: 0 };
  obj = { value: "Array", children: 0 };
  obj1 = { value: "Array", children: 0 };
  obj1[1] = jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, {
    value: true,
    children: children.children,
  });
  obj[1] = jsx(context1.IsFocusedContext.Provider, { value: "Array", children: 0 });
  obj[1] = jsx(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext.Provider, {
    value: "Array",
    children: 0,
  });
  obj[1] = jsx(NavigationContext.NavigationContext.Provider, { value: "Array", children: 0 });
  return jsx(context.NavigationRouteContext.Provider, { value: "Array", children: 0 });
};
