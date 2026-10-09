// === Module 1546: ? ===

// Module 1546
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1534 */;
import NavigationContext from "NavigationContext" /* 1547 */;
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