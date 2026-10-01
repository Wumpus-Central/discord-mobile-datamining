// === Module 12515: NativeRouter ===

// Module 12515 (NativeRouter)
import _modDef4692 from "module_4692" /* 4692 */;
import _mod4695 from "module_4695" /* 4695 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4692.array, initialIndex: _modDef4692.number, getUserConfirmation: _modDef4692.func, keyLength: _modDef4692.number, children: _modDef4692.node };

export default NativeRouter;