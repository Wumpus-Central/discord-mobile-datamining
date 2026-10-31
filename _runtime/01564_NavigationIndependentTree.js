// === Module 1564: NavigationIndependentTree ===

// Module 1564 (NavigationIndependentTree)
import NavigationIndependentTreeContext from "NavigationIndependentTreeContext" /* 1516 */;
import _mod1538 from "module_1538" /* 1538 */;
import context1 from "context1" /* 1539 */;
import NavigationContext from "NavigationContext" /* 1541 */;
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1565 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export function NavigationIndependentTree(children) {
  const obj = { value: "Array", children: null };
  const obj2 = { value: "Array", children: null };
  const obj3 = { value: "Array", children: jsx(context1.IsFocusedContext.Provider, { value: "Array", children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) }) };
  obj2.children = jsx(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext.Provider, { value: "Array", children: jsx(context1.IsFocusedContext.Provider, { value: "Array", children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) }) });
  obj.children = jsx(NavigationContext.NavigationContext.Provider, { value: "Array", children: null });
  return jsx(_mod1538.NavigationRouteContext.Provider, { value: "Array", children: null });
}