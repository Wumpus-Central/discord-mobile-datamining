// _runtime/metro/01602__.js
import BaseNavigationContainer from "../01486_BaseNavigationContainer.js";
import _mod1582 from "01582__.js";
import noop from "00019__.js";

require = arg1;

export const useLinkTo = function useLinkTo() {
  const context = noop.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  const buildAction = _mod1582.useBuildAction();
  const items = [buildAction, context];
  return noop.useCallback((arg0) => {
    if (undefined === context) {
      const _Error = Error;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    } else {
      obj.dispatch(buildAction(arg0));
    }
    obj = context;
  }, items);
};
