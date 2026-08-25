// === Module 11053: NativeRouter ===

// Module 11053 (NativeRouter)
import noopDefault from "noop" /* 19 */;
import emptyFunctionDefault from "emptyFunction" /* 4210 */;
import _extends from "_extends" /* 4213 */;
import { Alert } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
class NativeRouter {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(global);
    return jsx(require("_extends").MemoryRouter, obj);
  }
}
noopDefault;
NativeRouter.defaultProps = {
  getUserConfirmation(arg0, arg1) {
    closure_0 = arg1;
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
    Alert.alert("Confirm", arg0, items);
  }
};
NativeRouter.propTypes = { initialEntries: emptyFunctionDefault.array, initialIndex: emptyFunctionDefault.number, getUserConfirmation: emptyFunctionDefault.func, keyLength: emptyFunctionDefault.number, children: emptyFunctionDefault.node };

export default NativeRouter;