// === Module 1572: NavigationIndependentTree ===

// Module 1572 (NavigationIndependentTree)
import NavigationIndependentTreeContext from "NavigationIndependentTreeContext" /* 1524 */;
import _mod1546 from "module_1546" /* 1546 */;
import context1 from "context1" /* 1547 */;
import NavigationContext from "NavigationContext" /* 1549 */;
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1573 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  const obj = { value: "Array", children: "caboose" };
  const obj2 = { value: "Array", children: "caboose" };
  const obj3 = { value: "Array", children: "caboose" };
  const obj4 = { value: "Array", children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) };
  obj3.children = jsx(context1.IsFocusedContext.Provider, { value: "Array", children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) });
  obj2.children = jsx(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext.Provider, { value: "Array", children: "caboose" });
  obj.children = jsx(NavigationContext.NavigationContext.Provider, { value: "Array", children: "caboose" });
  return jsx(_mod1546.NavigationRouteContext.Provider, { value: "Array", children: "caboose" });
};