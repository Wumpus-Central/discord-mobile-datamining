// _runtime/12549_NativeRouter.js
import noopDefault from "00019_noop.js";
import emptyFunctionDefault from "04307_emptyFunction.js";
import _extends from "metro/04310__extends.js";
import { Alert } from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

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
        },
      },
      {
        text: "OK",
        onPress() {
          return callback(true);
        },
      },
    ];
    Alert.alert("Confirm", arg0, items);
  },
};
NativeRouter.propTypes = {
  initialEntries: emptyFunctionDefault.array,
  initialIndex: emptyFunctionDefault.number,
  getUserConfirmation: emptyFunctionDefault.func,
  keyLength: emptyFunctionDefault.number,
  children: emptyFunctionDefault.node,
};

export default NativeRouter;
