// _runtime/01516_useNavigationIndependentTree.js
import NavigationIndependentTreeContext from "01517_NavigationIndependentTreeContext.js";
import closure_2 from "00019_noop.js";

require = arg1;

export const useNavigationIndependentTree = function useNavigationIndependentTree() {
  return React.useContext(NavigationIndependentTreeContext.NavigationIndependentTreeContext);
};
