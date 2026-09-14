// _runtime/01550_NavigationIndependentTree.js
import NavigationIndependentTreeContext from "01502_NavigationIndependentTreeContext.js";
import _mod1524 from "metro/01524__.js";
import context1 from "01525_context1.js";
import NavigationContext from "01527_NavigationContext.js";
import NavigationFocusedRouteStateContext from "01551_NavigationFocusedRouteStateContext.js";
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
  return jsx(_mod1524.NavigationRouteContext.Provider, { value: "Array", children: 0 });
};
