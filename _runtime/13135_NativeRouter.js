// === Module 13135: NativeRouter ===

// Module 13135 (NativeRouter)
import _modDef4658 from "module_4658" /* 4658 */;
import _mod4661 from "module_4661" /* 4661 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4658.array, initialIndex: _modDef4658.number, getUserConfirmation: _modDef4658.func, keyLength: _modDef4658.number, children: _modDef4658.node };

export default NativeRouter;