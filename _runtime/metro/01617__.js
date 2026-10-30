// === Module 1617: ? ===

// Module 1617
import BaseNavigationContainer from "BaseNavigationContainer" /* 1501 */;
import _mod1597 from "module_1597" /* 1597 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useLinkTo() {
  const context = noop.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  const buildAction = _mod1597.useBuildAction();
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
}