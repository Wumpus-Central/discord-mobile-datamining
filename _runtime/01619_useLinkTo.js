// === Module 1619: useLinkTo ===

// Module 1619 (useLinkTo)
import noop from "noop" /* 19 */;

const require = arg1;

export const useLinkTo = function useLinkTo() {
  context = React.useContext(context(buildAction[1]).NavigationContainerRefContext);
  buildAction = context(buildAction[2]).useBuildAction();
  const items = [buildAction, context];
  return React.useCallback((arg0) => {
    if (undefined === context) {
      const _Error = Error;
      error = new Error("Couldn't find a navigation object. Is your component inside NavigationContainer?");
      throw error;
    } else {
      context.dispatch(buildAction(arg0));
    }
  }, items);
};