// === Module 873: ReactNativeLibraries ===

// Module 873 (ReactNativeLibraries)
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 123 */;
import _mod175 from "module_175" /* 175 */;
import parseErrorStack2 from "parseErrorStack" /* 190 */;
import symbolicateStackTrace2 from "symbolicateStackTrace" /* 874 */;
import getDevServer2 from "getDevServer" /* 875 */;
import react_native from "react-native" /* 17 */;

let AppRegistry;
let Platform;
let TurboModuleRegistry;
let reactNativeVersion;
let obj = {
  Devtools: {
    parseErrorStack(arg0) {
      const obj = parseErrorStack2;
      if (obj.default) {
        let defaultResult;
        if (typeof obj.default === "function") {
          defaultResult = obj.default(arg0);
        }
        return defaultResult;
      }
      defaultResult = obj(arg0);
    },
    symbolicateStackTrace(arg0, arg1) {
      const obj = symbolicateStackTrace2;
      if (obj.default) {
        let defaultResult;
        if (typeof obj.default === "function") {
          defaultResult = obj.default(arg0, arg1);
        }
        return defaultResult;
      }
      defaultResult = obj(arg0, arg1);
    },
    getDevServer() {
      const obj = getDevServer2;
      if (obj.default) {
        let defaultResult;
        if (typeof obj.default === "function") {
          defaultResult = obj.default();
        }
        return defaultResult;
      }
      defaultResult = obj();
    }
  },
  Promise: _mod175,
  Utilities: {
    polyfillGlobal(arg0, arg1) {
      defineLazyObjectProperty.polyfillGlobal(arg0, arg1);
    }
  },
  ReactNativeVersion: { version: reactNativeVersion },
  TurboModuleRegistry,
  AppRegistry,
  ReactNative: {
    requireNativeComponent(APNGStickerView) {
      return react_native.requireNativeComponent(APNGStickerView);
    }
  }
};
({ AppRegistry, Platform, TurboModuleRegistry } = react_native);
const constants = Platform.constants;
reactNativeVersion = undefined;
if (null !== constants) {
  if (undefined !== constants) {
    reactNativeVersion = constants.reactNativeVersion;
  }
}

export const ReactNativeLibraries = obj;