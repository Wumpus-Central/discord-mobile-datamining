// _runtime/14365_NativeRouter.js
import _modDef5351 from "metro/05351__.js";
import _mod5354 from "metro/05354__.js";
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
    items = [
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
  initialEntries: _modDef5351.array,
  initialIndex: _modDef5351.number,
  getUserConfirmation: _modDef5351.func,
  keyLength: _modDef5351.number,
  children: _modDef5351.node,
};

export default NativeRouter;
