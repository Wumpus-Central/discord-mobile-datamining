// _runtime/metro/01879__.js
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";
import KeyboardControllerNative from "../01633_KeyboardControllerNative.js";
import _mod1837 from "01837__.js";
import KeyboardAvoidingView from "../01848_KeyboardAvoidingView.js";
import react from "../00019_react.js";

const Animated = react_native.Animated;
const jsx = Fragment.jsx;
let closure_3 = Animated.createAnimatedComponent(KeyboardControllerNative.KeyboardBackgroundView);

export default function _default(enabled) {
  enabled = enabled.enabled;
  let tmp = undefined === enabled;
  const children = enabled.children;
  if (!tmp) {
    tmp = enabled;
  }
  const obj = _mod1837;
  ({ style: { opacity: obj.useKeyboardAnimation().progress }, children });
  const KeyboardStickyView = KeyboardAvoidingView.KeyboardStickyView;
  return <KeyboardStickyView enabled={tmp}>{null}</KeyboardStickyView>;
}
