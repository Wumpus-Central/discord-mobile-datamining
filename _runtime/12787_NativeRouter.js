// _runtime/12787_NativeRouter.js
import _modDef4389 from "metro/04389__.js";
import _mod4392 from "metro/04392__.js";
import noop from "metro/00019__.js";

require = fn;
class NativeRouter {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(global);
    return jsx(closure_0(closure_1[3]).MemoryRouter, obj);
  }
}
const Alert = fn(17).Alert;
const jsx = fn(21).jsx;
NativeRouter.defaultProps = {
  getUserConfirmation(captureScreenshotError, fn2) {
    closure_0 = fn2;
    const items = [
      {
        text: "Cancel",
        onPress() {
          return closure_0(false);
        },
      },
      {
        text: "OK",
        onPress() {
          return closure_0(true);
        },
      },
    ];
    Alert.alert("Confirm", captureScreenshotError, items);
  },
};
NativeRouter.propTypes = {
  initialEntries: _modDef4389.array,
  initialIndex: _modDef4389.number,
  getUserConfirmation: _modDef4389.func,
  keyLength: _modDef4389.number,
  children: _modDef4389.node,
};

export default NativeRouter;
