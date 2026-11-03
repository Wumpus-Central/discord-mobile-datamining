// _runtime/metro/01618__.js
import BaseNavigationContainer from "../01502_BaseNavigationContainer.js";
import _mod1598 from "01598__.js";
import noop from "00019__.js";

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
