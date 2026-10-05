// _runtime/01508_react.js
import react2 from "01509_react.js";
import react from "00019_react.js";

export const useNavigationIndependentTree = function useNavigationIndependentTree() {
  return react.useContext(react2.NavigationIndependentTreeContext);
};
