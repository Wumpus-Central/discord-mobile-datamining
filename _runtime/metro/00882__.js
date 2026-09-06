// _runtime/metro/00882__.js
import RN_GLOBAL_OBJ from "../00681_RN_GLOBAL_OBJ.js";
import _mod682 from "00682__.js";
import TurboModuleRegistry from "../00862_TurboModuleRegistry.js";

require = arg1;
const dependencyMap = arg6;
function getPromisePolyfill() {
  return require("00886__.js");
}

export const polyfillPromise = function polyfillPromise() {
  if (TurboModuleRegistry.ReactNativeLibraries.Utilities) {
    closure_0 = tmp(886);
    tmp(883);
    tmp(885);
    const Utilities = tmp(862).ReactNativeLibraries.Utilities;
    Utilities.polyfillGlobal("Promise", () => closure_0);
  } else {
    const debug = tmp(682).debug;
    debug.warn("Could not polyfill Promise. React Native Libraries Utilities not found.");
  }
};
export { getPromisePolyfill };
export const requireRejectionTracking = function requireRejectionTracking() {
  return require("disable");
};
export const checkPromiseAndWarn = function checkPromiseAndWarn() {
  try {
    const tmp8 = getPromisePolyfill();
    if (TurboModuleRegistry.ReactNativeLibraries.Promise !== tmp6) {
      const debug = tmp3(682).debug;
      debug.warn(
        'You appear to have multiple versions of the "promise" package installed. This may cause unexpected behavior like undefined `Promise.allSettled`. Please install the `promise` package manually using the exact version as the React Native package. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.',
      );
    }
    if (tmp8 !== RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.Promise) {
      const debug3 = tmp3(682).debug;
      debug3.warn(
        "Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.",
      );
    } else {
      const debug2 = tmp3(682).debug;
      debug2.log("Unhandled promise rejections will be caught by Sentry.");
    }
  } catch (err) {
    const debug4 = _mod682.debug;
    debug4.warn(
      "Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.",
    );
  }
};
