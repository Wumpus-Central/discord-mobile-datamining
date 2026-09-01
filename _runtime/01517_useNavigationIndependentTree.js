// _runtime/01517_useNavigationIndependentTree.js
import NavigationIndependentTreeContext from "01518_NavigationIndependentTreeContext.js";
import closure_2 from "00019_noop.js";

require = arg1;

export const useNavigationIndependentTree = function useNavigationIndependentTree() {
  return React.useContext(NavigationIndependentTreeContext.NavigationIndependentTreeContext);
};
