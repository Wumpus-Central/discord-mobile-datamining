// === Module 11268: NativeRouter ===

// Module 11268 (NativeRouter)
import _modDef4949 from "module_4949" /* 4949 */;
import _mod4952 from "module_4952" /* 4952 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4949.array, initialIndex: _modDef4949.number, getUserConfirmation: _modDef4949.func, keyLength: _modDef4949.number, children: _modDef4949.node };

export default NativeRouter;