// _runtime/metro/01619__.js
import BaseNavigationContainer from "../01503_BaseNavigationContainer.js";
import _mod1599 from "01599__.js";
import noop from "00019__.js";

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
