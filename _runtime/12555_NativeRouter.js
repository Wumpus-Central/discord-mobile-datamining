// === Module 12555: NativeRouter ===

// Module 12555 (NativeRouter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef4707 from "module_4707" /* 4707 */;
import MemoryRouter2 from "MemoryRouter" /* 4710 */;
import react from "react" /* 19 */;

class NativeRouter {
  constructor(arg0) {
    const MemoryRouter = MemoryRouter2.MemoryRouter;
    const merged = Object.assign(arg0);
    return <MemoryRouter />;
  }
}
const Alert = react_native.Alert;
const jsx = Fragment.jsx;
NativeRouter.defaultProps = {
  getUserConfirmation(captureScreenshotError, fn2) {
    let closure_0 = fn2;
    const items = [, ];
    const obj = {
      text: "Cancel",
      onPress() {
        return closure_0(false);
      }
    };
    items[0] = obj;
    items[1] = {
      text: "OK",
      onPress() {
        return closure_0(true);
      }
    };
    Alert.alert("Confirm", captureScreenshotError, items);
  }
};
let obj = { initialEntries: _modDef4707.array, initialIndex: _modDef4707.number, getUserConfirmation: _modDef4707.func, keyLength: _modDef4707.number, children: _modDef4707.node };
NativeRouter.propTypes = obj;

export default NativeRouter;