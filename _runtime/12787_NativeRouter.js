// === Module 12787: NativeRouter ===

// Module 12787 (NativeRouter)
import _modDef4389 from "module_4389" /* 4389 */;
import _mod4392 from "module_4392" /* 4392 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4389.array, initialIndex: _modDef4389.number, getUserConfirmation: _modDef4389.func, keyLength: _modDef4389.number, children: _modDef4389.node };

export default NativeRouter;