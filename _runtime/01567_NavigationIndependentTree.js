// === Module 1567: NavigationIndependentTree ===

// Module 1567 (NavigationIndependentTree)
import NavigationIndependentTreeContext from "NavigationIndependentTreeContext" /* 1519 */;
import _mod1541 from "module_1541" /* 1541 */;
import context1 from "context1" /* 1542 */;
import NavigationContext from "NavigationContext" /* 1544 */;
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1568 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export function NavigationIndependentTree(children) {
  const obj = { value: "Array", children: false };
  const obj2 = { value: "Array", children: false };
  const obj3 = { value: "Array", children: false };
  const obj4 = { value: "Array", children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) };
  obj3.children = jsx(context1.IsFocusedContext.Provider, { value: "Array", children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) });
  obj2.children = jsx(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext.Provider, { value: "Array", children: false });
  obj.children = jsx(NavigationContext.NavigationContext.Provider, { value: "Array", children: false });
  return jsx(_mod1541.NavigationRouteContext.Provider, { value: "Array", children: false });
}