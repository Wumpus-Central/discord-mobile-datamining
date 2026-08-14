// _runtime/10956_NativeRouter.js
import "noop";
import { Alert } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
class NativeRouter {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(global);
    return jsx(require("_extends").MemoryRouter, obj);
  }
}
NativeRouter.defaultProps = {
  getUserConfirmation(arg0, arg1) {
    let closure_0 = arg1;
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
NativeRouter.propTypes = { initialEntries: require("emptyFunction").array, initialIndex: require("emptyFunction").number, getUserConfirmation: require("emptyFunction").func, keyLength: require("emptyFunction").number, children: require("emptyFunction").node };

export default NativeRouter;