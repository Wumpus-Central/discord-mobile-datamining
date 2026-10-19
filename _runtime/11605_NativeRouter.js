// === Module 11605: NativeRouter ===

// Module 11605 (NativeRouter)
import _modDef4979 from "module_4979" /* 4979 */;
import _mod4982 from "module_4982" /* 4982 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4979.array, initialIndex: _modDef4979.number, getUserConfirmation: _modDef4979.func, keyLength: _modDef4979.number, children: _modDef4979.node };

export default NativeRouter;