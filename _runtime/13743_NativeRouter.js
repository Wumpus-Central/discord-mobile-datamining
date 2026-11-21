// === Module 13743: NativeRouter ===

// Module 13743 (NativeRouter)
import _modDef4954 from "module_4954" /* 4954 */;
import _mod4957 from "module_4957" /* 4957 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4954.array, initialIndex: _modDef4954.number, getUserConfirmation: _modDef4954.func, keyLength: _modDef4954.number, children: _modDef4954.node };

export default NativeRouter;