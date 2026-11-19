// === Module 13651: NativeRouter ===

// Module 13651 (NativeRouter)
import _modDef4833 from "module_4833" /* 4833 */;
import _mod4836 from "module_4836" /* 4836 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4833.array, initialIndex: _modDef4833.number, getUserConfirmation: _modDef4833.func, keyLength: _modDef4833.number, children: _modDef4833.node };

export default NativeRouter;