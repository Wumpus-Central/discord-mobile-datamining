// _runtime/01567_NavigationIndependentTree.js
import "noop";
import { jsx } from "jsxProd";
import { NavigationIndependentTreeContext } from "01519_NavigationIndependentTreeContext.js";
import { context } from "01541_context.js";
import { context1 } from "01542_context1.js";
import { NavigationContext } from "01544_NavigationContext.js";
import { NavigationFocusedRouteStateContext } from "01568_NavigationFocusedRouteStateContext.js";

const require = arg1;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  let obj = { value: "Array", children: 0 };
  obj = { value: "Array", children: 0 };
  obj = { value: "Array", children: 0 };
  const obj1 = { value: "Array", children: 0 };
  obj1[1] = jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children });
  obj[1] = jsx(context1.IsFocusedContext.Provider, { value: "Array", children: 0 });
  obj[1] = jsx(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext.Provider, { value: "Array", children: 0 });
  obj[1] = jsx(NavigationContext.NavigationContext.Provider, { value: "Array", children: 0 });
  return jsx(context.NavigationRouteContext.Provider, { value: "Array", children: 0 });
};