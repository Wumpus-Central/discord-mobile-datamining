// _runtime/01572_NavigationIndependentTree.js
import NavigationIndependentTreeContext from "01524_NavigationIndependentTreeContext.js";
import _mod1546 from "metro/01546__.js";
import context1 from "01547_context1.js";
import NavigationContext from "01549_NavigationContext.js";
import NavigationFocusedRouteStateContext from "01573_NavigationFocusedRouteStateContext.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  const obj = { value: "Array", children: "caboose" };
  const obj2 = { value: "Array", children: "caboose" };
  const obj3 = { value: "Array", children: "caboose" };
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
    children: "caboose",
  });
  obj.children = jsx(NavigationContext.NavigationContext.Provider, { value: "Array", children: "caboose" });
  return jsx(_mod1546.NavigationRouteContext.Provider, { value: "Array", children: "caboose" });
};
