// === Module 1879: ? ===

// Module 1879
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import KeyboardControllerNative from "KeyboardControllerNative" /* 1633 */;
import _mod1837 from "module_1837" /* 1837 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1848 */;
import react from "react" /* 19 */;

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
};