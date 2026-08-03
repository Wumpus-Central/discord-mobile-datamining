// === Module 997: TurboModuleRegistry ===

// Module 997 (TurboModuleRegistry)
import get_ActivityIndicator from "get ActivityIndicator";

let AppRegistry;
let Platform;
let TurboModuleRegistry;
obj = { Devtools: obj, Promise: require("finally"), Utilities: obj, ReactNativeVersion: null, TurboModuleRegistry: null, AppRegistry: null, ReactNative: null };
obj = {
  parseErrorStack(arg0) {
    const obj = require(190) /* parseErrorStack */;
    if (obj.default) {
      if (typeof obj.default === "fileFinishedImporting") {
        let defaultResult = obj.default(arg0);
      }
      return defaultResult;
    }
    defaultResult = obj(arg0);
  },
  symbolicateStackTrace(arg0, arg1) {
    const obj = require(998) /* _symbolicateStackTrace */;
    if (obj.default) {
      if (typeof obj.default === "fileFinishedImporting") {
        let defaultResult = obj.default(arg0, arg1);
      }
      return defaultResult;
    }
    defaultResult = obj(arg0, arg1);
  },
  getDevServer() {
    const obj = require(999) /* getDevServer */;
    if (obj.default) {
      if (typeof obj.default === "fileFinishedImporting") {
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
    require(123) /* polyfillObjectProperty */.polyfillGlobal(arg0, arg1);
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
    return require(17) /* get ActivityIndicator */.requireNativeComponent(APNGStickerView);
  }
};

export const ReactNativeLibraries = obj;