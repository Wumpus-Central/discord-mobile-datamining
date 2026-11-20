// === Module 1619: ? ===

// Module 1619
import BaseNavigationContainer from "BaseNavigationContainer" /* 1503 */;
import _mod1599 from "module_1599" /* 1599 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useLinkTo() {
  const context = noop.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  const buildAction = _mod1599.useBuildAction();
  items = [buildAction, context];
  return noop.useCallback((arg0) => {
    if (undefined === context) {
      const _Error = Error;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    } else {
      context.dispatch(buildAction(arg0));
    }
  }, items);
}