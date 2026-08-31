// === Module 1566: NavigationIndependentTree ===

// Module 1566 (NavigationIndependentTree)
import noopAll from "noop" /* 19 */;
import NavigationIndependentTreeContext from "NavigationIndependentTreeContext" /* 1518 */;
import context from "context" /* 1540 */;
import context1 from "context1" /* 1541 */;
import NavigationContext from "NavigationContext" /* 1543 */;
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1567 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  let obj = { value: "Array", children: 0 };
  obj = { value: "Array", children: 0 };
  obj = { value: "Array", children: 0 };
  obj1 = { value: "Array", children: 0 };
  obj1[1] = jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children });
  obj[1] = jsx(context1.IsFocusedContext.Provider, { value: "Array", children: 0 });
  obj[1] = jsx(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext.Provider, { value: "Array", children: 0 });
  obj[1] = jsx(NavigationContext.NavigationContext.Provider, { value: "Array", children: 0 });
  return jsx(context.NavigationRouteContext.Provider, { value: "Array", children: 0 });
};