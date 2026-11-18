// === Module 13669: NativeRouter ===

// Module 13669 (NativeRouter)
import _modDef4864 from "module_4864" /* 4864 */;
import _mod4867 from "module_4867" /* 4867 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4864.array, initialIndex: _modDef4864.number, getUserConfirmation: _modDef4864.func, keyLength: _modDef4864.number, children: _modDef4864.node };

export default NativeRouter;