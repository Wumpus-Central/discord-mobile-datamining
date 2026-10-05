// _runtime/metro/01609__.js
import BaseNavigationContainer from "../01493_BaseNavigationContainer.js";
import _mod1589 from "01589__.js";
import react from "../00019_react.js";

export const useLinkTo = function useLinkTo() {
  const context = react.useContext(BaseNavigationContainer.NavigationContainerRefContext);
  const obj = _mod1589;
  const buildAction = obj.useBuildAction();
  const items = [buildAction, context];
  return react.useCallback(function (arg0) {
    if (undefined === context) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    } else {
      context.dispatch(buildAction(arg0));
    }
  }, items);
};
