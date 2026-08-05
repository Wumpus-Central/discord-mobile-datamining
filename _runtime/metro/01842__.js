import { useResizeMode } from "../01800_useResizeMode.js";
import { KeyboardAvoidingView } from "../01811_KeyboardAvoidingView.js";
// _runtime/metro/01842__.js
import "noop";
import { Animated } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = Animated.createAnimatedComponent(require("nativeEventEmitter").KeyboardBackgroundView);

export default function _default(children) {
  const enabled = children.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  let obj = useResizeMode /* useResizeMode */;
  obj = { enabled: tmp, children: null };
  obj[1] = <closure_3 style={{ opacity: obj.useKeyboardAnimation().progress }}>{arg0.children}</closure_3>;
  return jsx(KeyboardAvoidingView /* KeyboardAvoidingView */.KeyboardStickyView, { enabled: tmp, children: null });
};