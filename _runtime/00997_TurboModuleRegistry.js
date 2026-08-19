// _runtime/00997_TurboModuleRegistry.js
import polyfillObjectProperty from "00123_polyfillObjectProperty.js";
import _mod175 from "00175_finally.js";
import parseErrorStack from "00190_parseErrorStack.js";
import _symbolicateStackTrace from "00998__symbolicateStackTrace.js";
import getDevServer from "00999_getDevServer.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

({ AppRegistry, Platform, TurboModuleRegistry } = get_ActivityIndicator);
let obj = {
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