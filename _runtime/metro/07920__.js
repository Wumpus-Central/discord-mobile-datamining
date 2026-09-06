// _runtime/metro/07920__.js
import _slicedToArray from "00032__.js";
import noop from "00019__.js";

export const useDismissedRouteError = function useDismissedRouteError(state) {
  const setNextDismissedKey = _slicedToArray(noop.useState(null), 2);
  const first = setNextDismissedKey[0];
  let tmp3 = null;
  if (first) {
    const routes = state.routes;
    const found = routes.find((key) => key.key === first);
    let name;
    if (found != null) {
      name = found.name;
    }
    tmp3 = name;
  }
  name = tmp3;
  const items = [tmp3];
  const effect = noop.useEffect(() => {
    if (name) {
      const _HermesInternal = HermesInternal;
      const _console = console;
      console.error(
        "The screen '" +
          tmp +
          "' was removed natively but didn't get removed from JS state. This can happen if the action was prevented in a 'beforeRemove' listener, which is not fully supported in native-stack.\n\nConsider using a 'usePreventRemove' hook with 'headerBackButtonMenuEnabled: false' to prevent users from natively going back multiple screens.",
      );
    }
  }, items);
  return { setNextDismissedKey: setNextDismissedKey[1] };
};
