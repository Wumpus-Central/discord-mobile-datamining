// === Module 1887: ? ===

// Module 1887
import _mod1845 from "module_1845" /* 1845 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1856 */;
import noop from "module_19" /* 19 */;

require = fn;
const Animated = fn(17).Animated;
const jsx = fn(21).jsx;
let closure_3 = Animated.createAnimatedComponent(fn(1641).KeyboardBackgroundView);

export default function _default(children) {
  const enabled = children.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  const obj2 = { enabled: tmp, children: null };
  obj2.children = <closure_3 style={{ opacity: _mod1845.useKeyboardAnimation().progress }}>{children.children}</closure_3>;
  return jsx(KeyboardAvoidingView.KeyboardStickyView, { enabled: tmp, children: null });
};