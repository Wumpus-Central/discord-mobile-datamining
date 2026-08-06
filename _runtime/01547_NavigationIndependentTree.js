// _runtime/01547_NavigationIndependentTree.js
import "noop";
import { jsx } from "jsxProd";
import { NavigationIndependentTreeContext } from "01499_NavigationIndependentTreeContext.js";
import { context } from "01521_context.js";
import { context1 } from "01522_context1.js";
import { NavigationContext } from "01524_NavigationContext.js";
import { NavigationFocusedRouteStateContext } from "01548_NavigationFocusedRouteStateContext.js";

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