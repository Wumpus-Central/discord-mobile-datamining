// === Module 1624: ? ===

// Module 1624
import BaseNavigationContainer from "BaseNavigationContainer" /* 1508 */;
import _mod1604 from "module_1604" /* 1604 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useLinkTo = function useLinkTo() {
  const context = noop.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  const buildAction = _mod1604.useBuildAction();
  const items = [buildAction, context];
  return noop.useCallback((arg0) => {
    if (undefined === context) {
      const _Error = Error;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    } else {
      context.dispatch(buildAction(arg0));
    }
  }, items);
};