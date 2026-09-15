// _runtime/01551_NavigationIndependentTree.js
import NavigationIndependentTreeContext from "01503_NavigationIndependentTreeContext.js";
import _mod1525 from "metro/01525__.js";
import context1 from "01526_context1.js";
import NavigationContext from "01528_NavigationContext.js";
import NavigationFocusedRouteStateContext from "01552_NavigationFocusedRouteStateContext.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  const obj = { value: "Array", children: 0 };
  const obj2 = { value: "Array", children: 0 };
  const obj3 = { value: "Array", children: 0 };
  const obj4 = {
    value: "Array",
    children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, {
      value: true,
      children: children.children,
    }),
  };
  obj3.children = jsx(context1.IsFocusedContext.Provider, {
    value: "Array",
    children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, {
      value: true,
      children: children.children,
    }),
  });
  obj2.children = jsx(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext.Provider, {
    value: "Array",
    children: 0,
  });
  obj.children = jsx(NavigationContext.NavigationContext.Provider, { value: "Array", children: 0 });
  return jsx(_mod1525.NavigationRouteContext.Provider, { value: "Array", children: 0 });
};
