// _runtime/01570_NavigationIndependentTree.js
import NavigationIndependentTreeContext from "01522_NavigationIndependentTreeContext.js";
import _mod1544 from "metro/01544__.js";
import context1 from "01545_context1.js";
import NavigationContext from "01547_NavigationContext.js";
import NavigationFocusedRouteStateContext from "01571_NavigationFocusedRouteStateContext.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  const obj = { value: "Array", children: false };
  const obj2 = { value: "Array", children: false };
  const obj3 = { value: "Array", children: false };
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
    children: false,
  });
  obj.children = jsx(NavigationContext.NavigationContext.Provider, { value: "Array", children: false });
  return jsx(_mod1544.NavigationRouteContext.Provider, { value: "Array", children: false });
};
