// === Module 1017: getPromisePolyfill ===

// Module 1017 (getPromisePolyfill)
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 816 */;
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;
import TurboModuleRegistry from "TurboModuleRegistry" /* 997 */;

require = arg1;
const dependencyMap = arg6;
function getPromisePolyfill() {
  return require(1021) /* valuePromise */;
}
arg5.polyfillPromise = function polyfillPromise() {
  if (_require(997).ReactNativeLibraries.Utilities) {
    _require = tmp(1021);
    tmp(1018);
    tmp(1020);
    const Utilities = tmp(997).ReactNativeLibraries.Utilities;
    Utilities.polyfillGlobal("Promise", () => closure_0);
  } else {
    const debug = tmp(817).debug;
    debug.warn("Could not polyfill Promise. React Native Libraries Utilities not found.");
  }
};
arg5.getPromisePolyfill = getPromisePolyfill;
arg5.requireRejectionTracking = function requireRejectionTracking() {
  return require(1022) /* items */;
};
arg5.checkPromiseAndWarn = function checkPromiseAndWarn() {
  try {
    const tmp8 = getPromisePolyfill();
    if (TurboModuleRegistry.ReactNativeLibraries.Promise !== tmp6) {
      const debug = registerSpanErrorInstrumentation.debug;
      debug.warn("You appear to have multiple versions of the \"promise\" package installed. This may cause unexpected behavior like undefined `Promise.allSettled`. Please install the `promise` package manually using the exact version as the React Native package. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
    }
    if (tmp8 !== RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.Promise) {
      const debug3 = registerSpanErrorInstrumentation.debug;
      debug3.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
    } else {
      const debug2 = registerSpanErrorInstrumentation.debug;
      debug2.log("Unhandled promise rejections will be caught by Sentry.");
    }
    tmp6 = require(1021) /* valuePromise */;
  } catch (err) {
    const debug4 = registerSpanErrorInstrumentation.debug;
    debug4.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
  }
};