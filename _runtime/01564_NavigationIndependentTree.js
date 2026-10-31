// _runtime/01564_NavigationIndependentTree.js
import NavigationIndependentTreeContext from "01516_NavigationIndependentTreeContext.js";
import _mod1538 from "metro/01538__.js";
import context1 from "01539_context1.js";
import NavigationContext from "01541_NavigationContext.js";
import NavigationFocusedRouteStateContext from "01565_NavigationFocusedRouteStateContext.js";
import noop from "metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;

export function NavigationIndependentTree(children) {
  const obj = { value: "Array", children: null };
  const obj2 = { value: "Array", children: null };
  const obj3 = {
    value: "Array",
    children: jsx(context1.IsFocusedContext.Provider, {
      value: "Array",
      children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, {
        value: true,
        children: children.children,
      }),
    }),
  };
  obj2.children = jsx(NavigationFocusedRouteStateContext.NavigationFocusedRouteStateContext.Provider, {
    value: "Array",
    children: jsx(context1.IsFocusedContext.Provider, {
      value: "Array",
      children: jsx(NavigationIndependentTreeContext.NavigationIndependentTreeContext.Provider, {
        value: true,
        children: children.children,
      }),
    }),
  });
  obj.children = jsx(NavigationContext.NavigationContext.Provider, { value: "Array", children: null });
  return jsx(_mod1538.NavigationRouteContext.Provider, { value: "Array", children: null });
}
