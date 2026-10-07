// _runtime/metro/01508__.js
import NavigationIndependentTreeContext from "../01509_NavigationIndependentTreeContext.js";
import noop from "00019__.js";

require = arg1;

export const useNavigationIndependentTree = function useNavigationIndependentTree() {
  return noop.useContext(NavigationIndependentTreeContext.NavigationIndependentTreeContext);
};
