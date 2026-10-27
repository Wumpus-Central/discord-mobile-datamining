// === Module 1569: NavigationIndependentTree ===

// Module 1569 (NavigationIndependentTree)
import NavigationIndependentTreeContext from "NavigationIndependentTreeContext" /* 1521 */;
import _mod1543 from "module_1543" /* 1543 */;
import context1 from "context1" /* 1544 */;
import NavigationContext from "NavigationContext" /* 1546 */;
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1570 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  const obj = { value: "Array", children: false };
  const obj2 = { value: "Array", children: false };
  const obj3 = { value: "Array", children: false };
  const obj4 = { value: "Array", children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) };
  obj3.children = jsx(context1.IsFocusedContext.Provider, { value: "Array", children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) });
  obj2.children = jsx(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext.Provider, { value: "Array", children: false });
  obj.children = jsx(NavigationContext.NavigationContext.Provider, { value: "Array", children: false });
  return jsx(_mod1543.NavigationRouteContext.Provider, { value: "Array", children: false });
};