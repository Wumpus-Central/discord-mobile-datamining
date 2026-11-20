// === Module 13621: NativeRouter ===

// Module 13621 (NativeRouter)
import _modDef4835 from "module_4835" /* 4835 */;
import _mod4838 from "module_4838" /* 4838 */;
import noop from "module_19" /* 19 */;

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
        }
      },
      {
        text: "OK",
        onPress() {
          return closure_0(true);
        }
      }
    ];
    Alert.alert("Confirm", captureScreenshotError, items);
  }
};
NativeRouter.propTypes = { initialEntries: _modDef4835.array, initialIndex: _modDef4835.number, getUserConfirmation: _modDef4835.func, keyLength: _modDef4835.number, children: _modDef4835.node };

export default NativeRouter;