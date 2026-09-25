// === Module 12285: NativeRouter ===

// Module 12285 (NativeRouter)
import _modDef4660 from "module_4660" /* 4660 */;
import _mod4663 from "module_4663" /* 4663 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4660.array, initialIndex: _modDef4660.number, getUserConfirmation: _modDef4660.func, keyLength: _modDef4660.number, children: _modDef4660.node };

export default NativeRouter;