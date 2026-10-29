// _runtime/metro/01892__.js
import _mod1850 from "01850__.js";
import KeyboardAvoidingView from "../01861_KeyboardAvoidingView.js";
import noop from "00019__.js";

require = fn;
const Animated = fn(17).Animated;
const jsx = fn(21).jsx;
let closure_3 = Animated.createAnimatedComponent(fn(1646).KeyboardBackgroundView);

export default function _default(children) {
  const enabled = children.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  const obj2 = { enabled: tmp, children: null };
  obj2.children = (
    <closure_3 style={{ opacity: _mod1850.useKeyboardAnimation().progress }}>{children.children}</closure_3>
  );
  return jsx(KeyboardAvoidingView.KeyboardStickyView, { enabled: tmp, children: null });
}
