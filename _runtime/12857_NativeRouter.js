// === Module 12857: NativeRouter ===

// Module 12857 (NativeRouter)
import _modDef4434 from "module_4434" /* 4434 */;
import _mod4437 from "module_4437" /* 4437 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4434.array, initialIndex: _modDef4434.number, getUserConfirmation: _modDef4434.func, keyLength: _modDef4434.number, children: _modDef4434.node };

export default NativeRouter;