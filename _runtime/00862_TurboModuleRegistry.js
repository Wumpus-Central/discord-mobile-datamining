// === Module 862: TurboModuleRegistry ===

// Module 862 (TurboModuleRegistry)
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;
import valuePromise from "valuePromise" /* 175 */;
import _mod190 from "module_190" /* 190 */;
import _symbolicateStackTrace from "_symbolicateStackTrace" /* 863 */;
import _mod864 from "module_864" /* 864 */;
import get_ActivityIndicator from "module_17" /* 17 */;

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
    }
  },
  Promise: valuePromise,
  Utilities: {
    polyfillGlobal(arg0, arg1) {
      polyfillObjectProperty.polyfillGlobal(arg0, arg1);
    }
  },
  ReactNativeVersion: null,
  TurboModuleRegistry: null,
  AppRegistry: null,
  ReactNative: null
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
  }
};

export const ReactNativeLibraries = obj;