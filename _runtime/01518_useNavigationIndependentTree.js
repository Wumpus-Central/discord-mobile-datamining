// _runtime/01518_useNavigationIndependentTree.js
import NavigationIndependentTreeContext from "01519_NavigationIndependentTreeContext.js";
import closure_2 from "00019_noop.js";

require = arg1;

export const useNavigationIndependentTree = function useNavigationIndependentTree() {
  return React.useContext(NavigationIndependentTreeContext.NavigationIndependentTreeContext);
};