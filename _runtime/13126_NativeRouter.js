// === Module 13126: NativeRouter ===

// Module 13126 (NativeRouter)
import _modDef4656 from "module_4656" /* 4656 */;
import _mod4659 from "module_4659" /* 4659 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4656.array, initialIndex: _modDef4656.number, getUserConfirmation: _modDef4656.func, keyLength: _modDef4656.number, children: _modDef4656.node };

export default NativeRouter;