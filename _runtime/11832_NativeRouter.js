// === Module 11832: NativeRouter ===

// Module 11832 (NativeRouter)
import _modDef5044 from "module_5044" /* 5044 */;
import _mod5047 from "module_5047" /* 5047 */;
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
NativeRouter.propTypes = { initialEntries: _modDef5044.array, initialIndex: _modDef5044.number, getUserConfirmation: _modDef5044.func, keyLength: _modDef5044.number, children: _modDef5044.node };

export default NativeRouter;