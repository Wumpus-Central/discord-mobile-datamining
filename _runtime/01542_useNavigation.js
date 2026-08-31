// === Module 1542: useNavigation ===

// Module 1542 (useNavigation)
import NavigationContainerRefContext from "NavigationContainerRefContext" /* 1530 */;
import NavigationContext from "NavigationContext" /* 1543 */;
import closure_2 from "noop" /* 19 */;

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