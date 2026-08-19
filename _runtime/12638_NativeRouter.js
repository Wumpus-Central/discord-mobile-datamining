// _runtime/12638_NativeRouter.js
import noopDefault from "00019_noop.js";
import emptyFunctionDefault from "04205_emptyFunction.js";
import _extends from "metro/04208__extends.js";
import { Alert } from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

require = fn;
class NativeRouter {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(global);
    return jsx(require("_extends").MemoryRouter, obj);
  }
}
noopDefault;
NativeRouter.defaultProps = {
  getUserConfirmation(captureScreenshotError, fn2) {
    closure_0 = fn2;
    const items = [
      {
        text: "Cancel",
        onPress() {
          return callback(false);
        }
      },
      {
        text: "OK",
        onPress() {
          return callback(true);
        }
      }
    ];
    Alert.alert("Confirm", captureScreenshotError, items);
  }
};
NativeRouter.propTypes = { initialEntries: emptyFunctionDefault.array, initialIndex: emptyFunctionDefault.number, getUserConfirmation: emptyFunctionDefault.func, keyLength: emptyFunctionDefault.number, children: emptyFunctionDefault.node };

export default NativeRouter;