// _runtime/09938_useDismissedRouteError.js
import _slicedToArray from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";


export const useDismissedRouteError = function useDismissedRouteError(state) {
  const setNextDismissedKey = first(name.useState(null), 2);
  first = setNextDismissedKey[0];
  let tmp3 = null;
  if (first) {
    const routes = state.routes;
    const found = routes.find((item, index) => item.key === first);
    name = undefined;
    if (found != null) {
      name = found.name;
    }
    tmp3 = name;
  }
  name = tmp3;
  const items = [tmp3];
  const effect = name.useEffect(() => {
    if (name) {
      const _HermesInternal = HermesInternal;
      const _console = console;
      console.error("The screen '" + tmp + "' was removed natively but didn't get removed from JS state. This can happen if the action was prevented in a 'beforeRemove' listener, which is not fully supported in native-stack.\n\nConsider using a 'usePreventRemove' hook with 'headerBackButtonMenuEnabled: false' to prevent users from natively going back multiple screens.");
    }
  }, items);
  return { setNextDismissedKey: setNextDismissedKey[1] };
};