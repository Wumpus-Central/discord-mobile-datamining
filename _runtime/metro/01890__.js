// _runtime/metro/01890__.js
import noopDefault from "../00019_noop.js";
import useResizeMode from "../01848_useResizeMode.js";
import KeyboardAvoidingView from "../01859_KeyboardAvoidingView.js";
import { Animated } from "../00017_get_ActivityIndicator.js";
import { jsx } from "../react/00021_jsxProd.js";

require = fn;
noopDefault;
let closure_3 = Animated.createAnimatedComponent(require("nativeEventEmitter").KeyboardBackgroundView);

export default function _default(children) {
  const enabled = children.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  let obj = useResizeMode;
  obj = { enabled: tmp, children: <closure_3 style={{ opacity: obj.useKeyboardAnimation().progress }}>{children.children}</closure_3> };
  return jsx(KeyboardAvoidingView.KeyboardStickyView, { enabled: tmp, children: <closure_3 style={{ opacity: obj.useKeyboardAnimation().progress }}>{children.children}</closure_3> });
};