// === Module 13040: NativeRouter ===

// Module 13040 (NativeRouter)
import _modDef4585 from "module_4585" /* 4585 */;
import _mod4588 from "module_4588" /* 4588 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4585.array, initialIndex: _modDef4585.number, getUserConfirmation: _modDef4585.func, keyLength: _modDef4585.number, children: _modDef4585.node };

export default NativeRouter;