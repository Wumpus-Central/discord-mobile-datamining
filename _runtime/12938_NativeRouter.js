// === Module 12938: NativeRouter ===

// Module 12938 (NativeRouter)
import _modDef4469 from "module_4469" /* 4469 */;
import _mod4472 from "module_4472" /* 4472 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4469.array, initialIndex: _modDef4469.number, getUserConfirmation: _modDef4469.func, keyLength: _modDef4469.number, children: _modDef4469.node };

export default NativeRouter;