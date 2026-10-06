// === Module 7575: _slicedToArray ===

// Module 7575 (_slicedToArray)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;


export const useDismissedRouteError = function useDismissedRouteError(state) {
  let first;
  let setNextDismissedKey;
  [first, setNextDismissedKey] = react.useState(null);
  let tmp4 = null;
  if (first) {
    const routes = state.routes;
    const found = routes.find((key) => key.key === first);
    let name;
    if (found != null) {
      name = found.name;
    }
    tmp4 = name;
  }
  name = tmp4;
  const items = [tmp4];
  const effect = react.useEffect(() => {
    if (name) {
      const _HermesInternal = HermesInternal;
      const _console = console;
      console.error("The screen '" + tmp + "' was removed natively but didn't get removed from JS state. This can happen if the action was prevented in a 'beforeRemove' listener, which is not fully supported in native-stack.\n\nConsider using a 'usePreventRemove' hook with 'headerBackButtonMenuEnabled: false' to prevent users from natively going back multiple screens.");
    }
  }, items);
  return { setNextDismissedKey };
};