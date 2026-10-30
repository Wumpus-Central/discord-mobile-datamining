// === Module 1565: NavigationIndependentTree ===

// Module 1565 (NavigationIndependentTree)
import NavigationIndependentTreeContext from "NavigationIndependentTreeContext" /* 1517 */;
import _mod1539 from "module_1539" /* 1539 */;
import context1 from "context1" /* 1540 */;
import NavigationContext from "NavigationContext" /* 1542 */;
import NavigationFocusedRouteStateContext from "NavigationFocusedRouteStateContext" /* 1566 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export function NavigationIndependentTree(children) {
  const obj = { value: "Array", children: 0 };
  const obj2 = { value: "Array", children: 0 };
  const obj3 = { value: "Array", children: 0 };
  const obj4 = { value: "Array", children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) };
  obj3.children = jsx(context1.IsFocusedContext.Provider, { value: "Array", children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, { value: true, children: children.children }) });
  obj2.children = jsx(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext.Provider, { value: "Array", children: 0 });
  obj.children = jsx(NavigationContext.NavigationContext.Provider, { value: "Array", children: 0 });
  return jsx(_mod1539.NavigationRouteContext.Provider, { value: "Array", children: 0 });
}