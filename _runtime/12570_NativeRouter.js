// _runtime/12570_NativeRouter.js
import react_native from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";
import _modDef4713 from "metro/04713__.js";
import MemoryRouter2 from "04716_MemoryRouter.js";
import react from "00019_react.js";

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
    const items = [,];
    const obj = {
      text: "Cancel",
      onPress() {
        return closure_0(false);
      },
    };
    items[0] = obj;
    items[1] = {
      text: "OK",
      onPress() {
        return closure_0(true);
      },
    };
    Alert.alert("Confirm", captureScreenshotError, items);
  },
};
let obj = {
  initialEntries: _modDef4713.array,
  initialIndex: _modDef4713.number,
  getUserConfirmation: _modDef4713.func,
  keyLength: _modDef4713.number,
  children: _modDef4713.node,
};
NativeRouter.propTypes = obj;

export default NativeRouter;
