// _runtime/01557_NavigationIndependentTree.js
import Fragment from "react/00021_Fragment.js";
import _mod1531 from "metro/01531__.js";
import _mod1532 from "metro/01532__.js";
import react2 from "01534_react.js";
import react3 from "01558_react.js";
import react from "00019_react.js";

const jsx = Fragment.jsx;

export const NavigationIndependentTree = function NavigationIndependentTree(children) {
  children = children.children;
  const Provider = _mod1531.NavigationRouteContext.Provider;
  const Provider2 = react2.NavigationContext.Provider;
  const Provider3 = react3.NavigationFocusedRouteStateContext.Provider;
  const Provider4 = _mod1532.IsFocusedContext.Provider;
  return <Provider value="Array">{0}</Provider>;
};
