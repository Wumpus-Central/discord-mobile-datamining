// === Module 12237: NativeRouter ===

// Module 12237 (NativeRouter)
import _modDef5181 from "module_5181" /* 5181 */;
import _mod5184 from "module_5184" /* 5184 */;
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
NativeRouter.propTypes = { initialEntries: _modDef5181.array, initialIndex: _modDef5181.number, getUserConfirmation: _modDef5181.func, keyLength: _modDef5181.number, children: _modDef5181.node };

export default NativeRouter;