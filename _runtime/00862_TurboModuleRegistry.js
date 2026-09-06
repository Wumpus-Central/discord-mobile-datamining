// === Module 862: TurboModuleRegistry ===

// Module 862 (TurboModuleRegistry)
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;
import _mod175 from "finally" /* 175 */;
import parseErrorStack from "parseErrorStack" /* 190 */;
import _symbolicateStackTrace from "_symbolicateStackTrace" /* 863 */;
import getDevServer from "getDevServer" /* 864 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

obj = { Devtools: obj, Promise: _mod175, Utilities: obj, ReactNativeVersion: null, TurboModuleRegistry: null, AppRegistry: null, ReactNative: null };
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
  }
};
({ AppRegistry, Platform, TurboModuleRegistry } = get_ActivityIndicator);
obj = {
  polyfillGlobal(arg0, arg1) {
    polyfillObjectProperty.polyfillGlobal(arg0, arg1);
  }
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
  }
};

export const ReactNativeLibraries = obj;