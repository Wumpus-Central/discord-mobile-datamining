// === Module 10983: NativeRouter ===

// Module 10983 (NativeRouter)
import _modDef4907 from "module_4907" /* 4907 */;
import _mod4910 from "module_4910" /* 4910 */;
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
NativeRouter.propTypes = { initialEntries: _modDef4907.array, initialIndex: _modDef4907.number, getUserConfirmation: _modDef4907.func, keyLength: _modDef4907.number, children: _modDef4907.node };

export default NativeRouter;