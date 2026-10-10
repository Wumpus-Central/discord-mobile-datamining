// _runtime/11198_NativeRouter.js
import _modDef4947 from "metro/04947__.js";
import _mod4950 from "metro/04950__.js";
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
  initialEntries: _modDef4947.array,
  initialIndex: _modDef4947.number,
  getUserConfirmation: _modDef4947.func,
  keyLength: _modDef4947.number,
  children: _modDef4947.node,
};

export default NativeRouter;
