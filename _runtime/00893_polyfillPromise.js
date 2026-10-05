// _runtime/00893_polyfillPromise.js
import RN_GLOBAL_OBJ from "00692_RN_GLOBAL_OBJ.js";
import _mod693 from "metro/00693__.js";
import ReactNativeLibraries from "00873_ReactNativeLibraries.js";
import _mod894 from "metro/00894__.js";
import _mod896 from "metro/00896__.js";

const require = globalThis.__r;

function getPromisePolyfill() {
  return require("metro/00897__.js");
}

export const polyfillPromise = function polyfillPromise() {
  if (ReactNativeLibraries.ReactNativeLibraries.Utilities) {
    let closure_0 = require("metro/00897__.js");
    _mod894;
    _mod896;
    const Utilities = ReactNativeLibraries.ReactNativeLibraries.Utilities;
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
    const _Promise = ReactNativeLibraries.ReactNativeLibraries.Promise;
    const tmp5 = require("metro/00897__.js");
    const tmp7 = getPromisePolyfill();
    if (_Promise !== tmp5) {
      const debug = _mod693.debug;
      debug.warn(
        'You appear to have multiple versions of the "promise" package installed. This may cause unexpected behavior like undefined `Promise.allSettled`. Please install the `promise` package manually using the exact version as the React Native package. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.',
      );
    }
    if (tmp7 !== RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.Promise) {
      const debug3 = _mod693.debug;
      debug3.warn(
        "Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.",
      );
    } else {
      const debug2 = _mod693.debug;
      debug2.log("Unhandled promise rejections will be caught by Sentry.");
    }
  } catch (err) {
    const debug4 = _mod693.debug;
    debug4.warn(
      "Unhandled promise rejections will not be caught by Sentry. See https://docs.sentry.io/platforms/react-native/troubleshooting/ for more details.",
    );
  }
};
