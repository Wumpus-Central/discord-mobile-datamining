// === Module 2015: ? ===

// Module 2015
import _mod1973 from "module_1973" /* 1973 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1984 */;
import noop from "module_19" /* 19 */;

require = fn;
const Animated = fn(17).Animated;
const jsx = fn(21).jsx;
let closure_3 = Animated.createAnimatedComponent(fn(1642).KeyboardBackgroundView);

export default function _default(children) {
  const enabled = children.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  const obj2 = { enabled: tmp, children: null };
  obj2.children = <closure_3 style={{ opacity: _mod1973.useKeyboardAnimation().progress }}>{children.children}</closure_3>;
  return jsx(KeyboardAvoidingView.KeyboardStickyView, { enabled: tmp, children: null });
};