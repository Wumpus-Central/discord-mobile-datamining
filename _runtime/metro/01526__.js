// === Module 1526: ? ===

// Module 1526
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1514 */;
import NavigationContext from "NavigationContext" /* 1527 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useNavigation = function useNavigation() {
  const context = noop.useContext(NavigationContainerRefContext.NavigationContainerRefContext);
  let context1 = noop.useContext(NavigationContext.NavigationContext);
  if (undefined === context1) {
    if (undefined === context) {
      const _Error = Error;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    }
  }
  if (context1 == null) {
    context1 = context;
  }
  return context1;
};