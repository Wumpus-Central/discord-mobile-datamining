// === Module 13023: NativeRouter ===

// Module 13023 (NativeRouter)
import _modDef5294 from "module_5294" /* 5294 */;
import _mod5297 from "module_5297" /* 5297 */;
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
NativeRouter.propTypes = { initialEntries: _modDef5294.array, initialIndex: _modDef5294.number, getUserConfirmation: _modDef5294.func, keyLength: _modDef5294.number, children: _modDef5294.node };

export default NativeRouter;