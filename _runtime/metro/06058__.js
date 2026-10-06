// _runtime/metro/06058__.js
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";
import _mod6059 from "06059__.js";
import react from "../00019_react.js";

const UIManager = react_native.UIManager;
const jsx = Fragment.jsx;
try {
  let closure_0 = _mod6059.default;
} catch (err) {}
let closure_2 = null != UIManager.getViewManagerConfig("RNCMaskedView");

export const MaskedView = function MaskedView(children) {
  children = children.children;
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  let tmp2 = children;
  if (closure_2) {
    tmp2 = children;
    if (closure_0) {
      const merged1 = Object.assign(merged);
      tmp2 = <tmp3>{children}</tmp3>;
    }
  }
  return tmp2;
};
