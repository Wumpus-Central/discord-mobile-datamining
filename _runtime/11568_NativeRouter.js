// === Module 11568: NativeRouter ===

// Module 11568 (NativeRouter)
import _modDef5042 from "module_5042" /* 5042 */;
import _mod5045 from "module_5045" /* 5045 */;
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
NativeRouter.propTypes = { initialEntries: _modDef5042.array, initialIndex: _modDef5042.number, getUserConfirmation: _modDef5042.func, keyLength: _modDef5042.number, children: _modDef5042.node };

export default NativeRouter;