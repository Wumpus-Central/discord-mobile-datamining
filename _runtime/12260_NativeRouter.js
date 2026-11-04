// === Module 12260: NativeRouter ===

// Module 12260 (NativeRouter)
import _modDef5180 from "module_5180" /* 5180 */;
import _mod5183 from "module_5183" /* 5183 */;
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
NativeRouter.propTypes = { initialEntries: _modDef5180.array, initialIndex: _modDef5180.number, getUserConfirmation: _modDef5180.func, keyLength: _modDef5180.number, children: _modDef5180.node };

export default NativeRouter;