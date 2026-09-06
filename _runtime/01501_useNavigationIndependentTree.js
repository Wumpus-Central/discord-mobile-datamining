// _runtime/01501_useNavigationIndependentTree.js
import NavigationIndependentTreeContext from "01502_NavigationIndependentTreeContext.js";
import closure_2 from "00019_noop.js";

require = arg1;

export const useNavigationIndependentTree = function useNavigationIndependentTree() {
  return React.useContext(NavigationIndependentTreeContext.NavigationIndependentTreeContext);
};
