// _runtime/11714_NativeRouter.js
import _modDef5008 from "metro/05008__.js";
import _mod5011 from "metro/05011__.js";
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
  initialEntries: _modDef5008.array,
  initialIndex: _modDef5008.number,
  getUserConfirmation: _modDef5008.func,
  keyLength: _modDef5008.number,
  children: _modDef5008.node,
};

export default NativeRouter;
