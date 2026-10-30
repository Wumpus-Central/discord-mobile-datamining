// _runtime/00862_TurboModuleRegistry.js
import polyfillObjectProperty from "00123_polyfillObjectProperty.js";
import valuePromise from "00175_valuePromise.js";
import _mod190 from "metro/00190__.js";
import _symbolicateStackTrace from "00863__symbolicateStackTrace.js";
import _mod864 from "metro/00864__.js";
import get_ActivityIndicator from "metro/00017__.js";

let obj = {
  Devtools: {
    parseErrorStack(arg0) {
      const obj = _mod190;
      if (obj.default) {
        if (typeof obj.default === "function") {
          let defaultResult = obj.default(arg0);
        }
        return defaultResult;
      }
      defaultResult = obj(arg0);
    },
    symbolicateStackTrace(arg0, arg1) {
      const obj = _symbolicateStackTrace;
      if (obj.default) {
        if (typeof obj.default === "function") {
          let defaultResult = obj.default(arg0, arg1);
        }
        return defaultResult;
      }
      defaultResult = obj(arg0, arg1);
    },
    getDevServer() {
      const obj = _mod864;
      if (obj.default) {
        if (typeof obj.default === "function") {
          let defaultResult = obj.default();
        }
        return defaultResult;
      }
      defaultResult = obj();
    },
  },
  Promise: valuePromise,
  Utilities: {
    polyfillGlobal(arg0, arg1) {
      polyfillObjectProperty.polyfillGlobal(arg0, arg1);
    },
  },
  ReactNativeVersion: null,
  TurboModuleRegistry: null,
  AppRegistry: null,
  ReactNative: null,
};
({ AppRegistry, Platform, TurboModuleRegistry } = get_ActivityIndicator);
const constants = Platform.constants;
let reactNativeVersion;
if (null !== constants) {
  if (undefined !== constants) {
    reactNativeVersion = constants.reactNativeVersion;
  }
}
obj.ReactNativeVersion = { version: reactNativeVersion };
obj.TurboModuleRegistry = TurboModuleRegistry;
obj.AppRegistry = AppRegistry;
obj.ReactNative = {
  requireNativeComponent(APNGStickerView) {
    return get_ActivityIndicator.requireNativeComponent(APNGStickerView);
  },
};

export const ReactNativeLibraries = obj;
