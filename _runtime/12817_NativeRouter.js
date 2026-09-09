// === Module 12817: NativeRouter ===

// Module 12817 (NativeRouter)
import _modDef4403 from "module_4403" /* 4403 */;
import _mod4406 from "module_4406" /* 4406 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4403.array, initialIndex: _modDef4403.number, getUserConfirmation: _modDef4403.func, keyLength: _modDef4403.number, children: _modDef4403.node };

export default NativeRouter;