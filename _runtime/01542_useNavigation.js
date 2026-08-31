// _runtime/01542_useNavigation.js
import NavigationContainerRefContext from "01530_NavigationContainerRefContext.js";
import NavigationContext from "01543_NavigationContext.js";
import closure_2 from "00019_noop.js";

require = arg1;

export const useNavigation = function useNavigation() {
  const context = React.useContext(NavigationContainerRefContext.NavigationContainerRefContext);
  let context1 = React.useContext(NavigationContext.NavigationContext);
  if (undefined === context1) {
    if (undefined === context) {
      const _Error = Error;
      error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    }
  }
  if (context1 == null) {
    context1 = context;
  }
  return context1;
};