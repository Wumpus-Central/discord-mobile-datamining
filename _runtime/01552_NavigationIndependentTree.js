// === Module 1552: NavigationIndependentTree ===

// Module 1552 (NavigationIndependentTree)
import NavigationIndependentTreeContext from "NavigationIndependentTreeContext" /* 1504 */;
import _mod1526 from "module_1526" /* 1526 */;
import context1 from "context1" /* 1527 */;
import NavigationContext from "NavigationContext" /* 1529 */;
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1553 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  const obj = { value: "Array", children: 0 };
  const obj2 = { value: "Array", children: 0 };
  const obj3 = { value: "Array", children: 0 };
  const obj4 = { value: "Array", children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) };
  obj3.children = jsx(context1.IsFocusedContext.Provider, { value: "Array", children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) });
  obj2.children = jsx(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext.Provider, { value: "Array", children: 0 });
  obj.children = jsx(NavigationContext.NavigationContext.Provider, { value: "Array", children: 0 });
  return jsx(_mod1526.NavigationRouteContext.Provider, { value: "Array", children: 0 });
};