// === Module 997: TurboModuleRegistry ===

// Module 997 (TurboModuleRegistry)
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;
import _mod175 from "finally" /* 175 */;
import parseErrorStack from "parseErrorStack" /* 190 */;
import _symbolicateStackTrace from "_symbolicateStackTrace" /* 998 */;
import getDevServer from "getDevServer" /* 999 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

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