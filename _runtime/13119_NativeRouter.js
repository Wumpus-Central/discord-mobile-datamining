// === Module 13119: NativeRouter ===

// Module 13119 (NativeRouter)
import _modDef5347 from "module_5347" /* 5347 */;
import _mod5350 from "module_5350" /* 5350 */;
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
NativeRouter.propTypes = { initialEntries: _modDef5347.array, initialIndex: _modDef5347.number, getUserConfirmation: _modDef5347.func, keyLength: _modDef5347.number, children: _modDef5347.node };

export default NativeRouter;