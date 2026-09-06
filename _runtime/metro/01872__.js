// === Module 1872: ? ===

// Module 1872
import _mod1830 from "module_1830" /* 1830 */;
import KeyboardAvoidingView from "KeyboardAvoidingView" /* 1841 */;
import noop from "module_19" /* 19 */;

require = fn;
const Animated = fn(17).Animated;
const jsx = fn(21).jsx;
let closure_3 = Animated.createAnimatedComponent(fn(1626).KeyboardBackgroundView);

export default function _default(children) {
  const enabled = children.enabled;
  let tmp = undefined === enabled;
  if (!tmp) {
    tmp = enabled;
  }
  let obj = { enabled: tmp, children: null };
  obj = { style: { opacity: obj.useKeyboardAnimation().progress }, children: children.children };
  obj.children = <closure_3 style={{ opacity: obj.useKeyboardAnimation().progress }}>{arg0.children}</closure_3>;
  return jsx(KeyboardAvoidingView.KeyboardStickyView, { style: { opacity: obj.useKeyboardAnimation().progress }, children: children.children });
};