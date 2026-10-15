// === Module 11492: NativeRouter ===

// Module 11492 (NativeRouter)
import _modDef5003 from "module_5003" /* 5003 */;
import _mod5006 from "module_5006" /* 5006 */;
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
NativeRouter.propTypes = { initialEntries: _modDef5003.array, initialIndex: _modDef5003.number, getUserConfirmation: _modDef5003.func, keyLength: _modDef5003.number, children: _modDef5003.node };

export default NativeRouter;