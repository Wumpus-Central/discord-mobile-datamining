// _runtime/13669_NativeRouter.js
import _modDef4864 from "metro/04864__.js";
import _mod4867 from "metro/04867__.js";
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
  initialEntries: _modDef4864.array,
  initialIndex: _modDef4864.number,
  getUserConfirmation: _modDef4864.func,
  keyLength: _modDef4864.number,
  children: _modDef4864.node,
};

export default NativeRouter;
