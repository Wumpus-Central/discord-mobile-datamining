// === Module 882: ? ===

// Module 882
import _mod176 from "finally" /* 176 */;
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 680 */;
import _mod681 from "module_681" /* 681 */;
import TurboModuleRegistry from "TurboModuleRegistry" /* 862 */;
import done from "done" /* 883 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
function getPromisePolyfill() {
  return require("module_178");
}

export function polyfillPromise() {
  if (TurboModuleRegistry.ReactNativeLibraries.Utilities) {
    closure_0 = require("module_178");
    done;
    _mod176;
    const Utilities = TurboModuleRegistry.ReactNativeLibraries.Utilities;
    Utilities.polyfillGlobal("Promise", () => closure_0);
  } else {
    const debug = _mod681.debug;
    debug.warn("Could not polyfill Promise. React Native Libraries Utilities not found.");
  }
}
export { getPromisePolyfill };
export function requireRejectionTracking() {
  return require("disable");
}
export function checkPromiseAndWarn() {
  try {
    const tmp8 = getPromisePolyfill();
    if (TurboModuleRegistry.ReactNativeLibraries.Promise !== tmp6) {
      const debug = _mod681.debug;
      debug.warn("You appear to have multiple versions of the \"promise\" package installed. This may cause unexpected behavior like undefined `Promise.allSettled`. Please install the `promise` package manually using the exact version as the React Native package. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
    }
    if (tmp8 !== RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.Promise) {
      const debug3 = _mod681.debug;
      debug3.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
    } else {
      const debug2 = _mod681.debug;
      debug2.log("Unhandled promise rejections will be caught by Sentry.");
    }
    tmp6 = require("module_178");
  } catch (err) {
    const debug4 = _mod681.debug;
    debug4.warn("Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.");
  }
}