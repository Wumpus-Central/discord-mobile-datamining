// === Module 1621: ? ===

// Module 1621
import BaseNavigationContainer from "BaseNavigationContainer" /* 1505 */;
import _mod1601 from "module_1601" /* 1601 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useLinkTo = function useLinkTo() {
  const context = noop.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  const buildAction = _mod1601.useBuildAction();
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