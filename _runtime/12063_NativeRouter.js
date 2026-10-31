// === Module 12063: NativeRouter ===

// Module 12063 (NativeRouter)
import _modDef5053 from "module_5053" /* 5053 */;
import _mod5056 from "module_5056" /* 5056 */;
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
    const items = [
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
NativeRouter.propTypes = { initialEntries: _modDef5053.array, initialIndex: _modDef5053.number, getUserConfirmation: _modDef5053.func, keyLength: _modDef5053.number, children: _modDef5053.node };

export default NativeRouter;