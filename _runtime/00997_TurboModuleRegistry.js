// _runtime/00997_TurboModuleRegistry.js
import polyfillObjectProperty from "00123_polyfillObjectProperty.js";
import _mod175 from "00175_finally.js";
import parseErrorStack from "00190_parseErrorStack.js";
import _symbolicateStackTrace from "00998__symbolicateStackTrace.js";
import getDevServer from "00999_getDevServer.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

obj = {
  Devtools: obj,
  Promise: _mod175,
  Utilities: obj,
  ReactNativeVersion: null,
  TurboModuleRegistry: null,
  AppRegistry: null,
  ReactNative: null,
};
obj = {
  parseErrorStack(arg0) {
    const obj = parseErrorStack;
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
    const obj = getDevServer;
    if (obj.default) {
      if (typeof obj.default === "function") {
        let defaultResult = obj.default();
      }
      return defaultResult;
    }
    defaultResult = obj();
  },
};
({ AppRegistry, Platform, TurboModuleRegistry } = get_ActivityIndicator);
obj = {
  polyfillGlobal(arg0, arg1) {
    polyfillObjectProperty.polyfillGlobal(arg0, arg1);
  },
};
const constants = Platform.constants;
let reactNativeVersion;
if (null !== constants) {
  if (undefined !== constants) {
    reactNativeVersion = constants.reactNativeVersion;
  }
}
obj[3] = { version: reactNativeVersion };
obj[4] = TurboModuleRegistry;
obj[5] = AppRegistry;
obj[6] = {
  requireNativeComponent(APNGStickerView, importDefaultResultResult, arg2) {
    return get_ActivityIndicator.requireNativeComponent(APNGStickerView);
  },
};

export const ReactNativeLibraries = obj;
