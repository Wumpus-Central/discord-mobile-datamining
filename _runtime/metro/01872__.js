// _runtime/metro/01872__.js
import noopDefault from "../00019_noop.js";
import useResizeMode from "../01830_useResizeMode.js";
import KeyboardAvoidingView from "../01841_KeyboardAvoidingView.js";
import { Animated } from "../00017_get_ActivityIndicator.js";
import { jsx } from "../react/00021_jsxProd.js";

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
  obj = {
    enabled: tmp,
    children: <closure_3 style={{ opacity: obj.useKeyboardAnimation().progress }}>{arg0.children}</closure_3>,
  };
  return jsx(KeyboardAvoidingView.KeyboardStickyView, {
    enabled: tmp,
    children: <closure_3 style={{ opacity: obj.useKeyboardAnimation().progress }}>{arg0.children}</closure_3>,
  });
}
