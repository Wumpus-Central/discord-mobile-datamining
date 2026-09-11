// === Module 12880: NativeRouter ===

// Module 12880 (NativeRouter)
import _modDef4436 from "module_4436" /* 4436 */;
import _mod4439 from "module_4439" /* 4439 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4436.array, initialIndex: _modDef4436.number, getUserConfirmation: _modDef4436.func, keyLength: _modDef4436.number, children: _modDef4436.node };

export default NativeRouter;