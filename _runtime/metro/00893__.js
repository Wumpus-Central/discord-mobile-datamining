// === Module 893: ? ===

// Module 893
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 692 */;
import _mod693 from "module_693" /* 693 */;
import TurboModuleRegistry from "TurboModuleRegistry" /* 873 */;
import done from "done" /* 894 */;
import _mod896 from "module_896" /* 896 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
function getPromisePolyfill() {
  return require("module_897");
}

export const polyfillPromise = function polyfillPromise() {
  if (TurboModuleRegistry.ReactNativeLibraries.Utilities) {
    closure_0 = require("module_897");
    done;
    _mod896;
    const Utilities = TurboModuleRegistry.ReactNativeLibraries.Utilities;
    Utilities.polyfillGlobal("Promise", () => closure_0);
  } else {
    const debug = _mod693.debug;
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
      const debug = _mod693.debug;
      debug.warn("You appear to have multiple versions of the \"promise\" package installed. This may cause unexpected behavior like undefined `Promise.allSettled`. Please install the `promise` package manually using the exact version as the React Native package. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
    }
    if (tmp8 !== RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.Promise) {
      const debug3 = _mod693.debug;
      debug3.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
    } else {
      const debug2 = _mod693.debug;
      debug2.log("Unhandled promise rejections will be caught by Sentry.");
    }
    tmp6 = require("module_897");
  } catch (err) {
    const debug4 = _mod693.debug;
    debug4.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
  }
};