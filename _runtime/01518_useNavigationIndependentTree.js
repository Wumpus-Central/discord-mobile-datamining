// _runtime/01518_useNavigationIndependentTree.js
import noop from "noop";
import { NavigationIndependentTreeContext } from "01519_NavigationIndependentTreeContext.js";

const require = arg1;

export const useNavigationIndependentTree = function useNavigationIndependentTree() {
  return React.useContext(NavigationIndependentTreeContext.NavigationIndependentTreeContext);
};