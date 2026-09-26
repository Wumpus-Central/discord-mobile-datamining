// _runtime/metro/01503__.js
import NavigationIndependentTreeContext from "../01504_NavigationIndependentTreeContext.js";
import noop from "00019__.js";

require = arg1;

export const useNavigationIndependentTree = function useNavigationIndependentTree() {
  return noop.useContext(NavigationIndependentTreeContext.NavigationIndependentTreeContext);
};
