// === Module 11714: NativeRouter ===

// Module 11714 (NativeRouter)
import _modDef5008 from "module_5008" /* 5008 */;
import _mod5011 from "module_5011" /* 5011 */;
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
NativeRouter.propTypes = { initialEntries: _modDef5008.array, initialIndex: _modDef5008.number, getUserConfirmation: _modDef5008.func, keyLength: _modDef5008.number, children: _modDef5008.node };

export default NativeRouter;