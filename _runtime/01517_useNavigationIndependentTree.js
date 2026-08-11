// _runtime/01517_useNavigationIndependentTree.js
import noop from "noop";
import { NavigationIndependentTreeContext } from "01518_NavigationIndependentTreeContext.js";

const require = arg1;

export const useNavigationIndependentTree = function useNavigationIndependentTree() {
  return React.useContext(NavigationIndependentTreeContext.NavigationIndependentTreeContext);
};