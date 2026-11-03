// === Module 1618: ? ===

// Module 1618
import BaseNavigationContainer from "BaseNavigationContainer" /* 1502 */;
import _mod1598 from "module_1598" /* 1598 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useLinkTo() {
  const context = noop.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  const buildAction = _mod1598.useBuildAction();
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