// _runtime/06673_useEnsureGestureHandlerRootView.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import noop from "00019_noop.js";
import noopDefault from "06674_noop.js";

const use = noop.use;
const Platform = get_ActivityIndicator.Platform;

export const useEnsureGestureHandlerRootView = function useEnsureGestureHandlerRootView() {
  use(noopDefault);
};
