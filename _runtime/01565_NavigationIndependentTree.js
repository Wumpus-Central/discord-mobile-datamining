// === Module 1565: NavigationIndependentTree ===

// Module 1565 (NavigationIndependentTree)
import noopAll from "noop" /* 19 */;
import NavigationIndependentTreeContext from "NavigationIndependentTreeContext" /* 1517 */;
import context from "context" /* 1539 */;
import context1 from "context1" /* 1540 */;
import NavigationContext from "NavigationContext" /* 1542 */;
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1566 */;
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