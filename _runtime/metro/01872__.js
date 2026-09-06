// === Module 1872: ? ===

// Module 1872
import noopDefault from "noop" /* 19 */;
import useResizeMode from "useResizeMode" /* 1830 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1841 */;
import { Animated } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopDefault;
let closure_3 = Animated.createAnimatedComponent(require("nativeEventEmitter").KeyboardBackgroundView);

export default function _default(children) {
  const enabled = children.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  let obj = useResizeMode;
  obj = { enabled: tmp, children: <closure_3 style={{ opacity: obj.useKeyboardAnimation().progress }}>{arg0.children}</closure_3> };
  return jsx(KeyboardAvoidingView.KeyboardStickyView, { enabled: tmp, children: <closure_3 style={{ opacity: obj.useKeyboardAnimation().progress }}>{arg0.children}</closure_3> });
};