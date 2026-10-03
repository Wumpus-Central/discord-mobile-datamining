// === Module 12555: NativeRouter ===

// Module 12555 (NativeRouter)
import _modDef4707 from "module_4707" /* 4707 */;
import _mod4710 from "module_4710" /* 4710 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4707.array, initialIndex: _modDef4707.number, getUserConfirmation: _modDef4707.func, keyLength: _modDef4707.number, children: _modDef4707.node };

export default NativeRouter;