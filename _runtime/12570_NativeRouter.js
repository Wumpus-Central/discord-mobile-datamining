// === Module 12570: NativeRouter ===

// Module 12570 (NativeRouter)
import _modDef4713 from "module_4713" /* 4713 */;
import _mod4716 from "module_4716" /* 4716 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4713.array, initialIndex: _modDef4713.number, getUserConfirmation: _modDef4713.func, keyLength: _modDef4713.number, children: _modDef4713.node };

export default NativeRouter;