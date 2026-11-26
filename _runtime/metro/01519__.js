// _runtime/metro/01519__.js
import NavigationIndependentTreeContext from "../01520_NavigationIndependentTreeContext.js";
import noop from "00019__.js";

require = arg1;

export function useNavigationIndependentTree() {
  return noop.useContext(NavigationIndependentTreeContext.NavigationIndependentTreeContext);
}
