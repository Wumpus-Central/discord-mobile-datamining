// === Module 13029: NativeRouter ===

// Module 13029 (NativeRouter)
import _modDef4551 from "module_4551" /* 4551 */;
import _mod4554 from "module_4554" /* 4554 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4551.array, initialIndex: _modDef4551.number, getUserConfirmation: _modDef4551.func, keyLength: _modDef4551.number, children: _modDef4551.node };

export default NativeRouter;