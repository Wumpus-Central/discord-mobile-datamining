// === Module 8495: PressableScale ===

// Module 8495 (PressableScale)
import _mod1654 from "module_1654" /* 1654 */;
import ButtonHooks from "ButtonHooks" /* 5648 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const module_1654 = _mod1654;

require = fn;
let closure_2 = ["style"];
const jsx = fn(21).jsx;
let closure_5 = module_1654.createAnimatedComponent(fn(17).Pressable);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/PressableScale.native.tsx");

export function PressableScale(scaleAmountInPx) {
  let num = scaleAmountInPx.scaleAmountInPx;
  if (num === undefined) {
    num = 8;
  }
  ({ onPressIn, onPressOut, ref } = scaleAmountInPx);
  const merged = Object.assign(scaleAmountInPx, Object.assign({ style: 0, scaleAmountInPx: 0, onLayout: 0, onPressIn: 0, onPressOut: 0, ref: 0 }));
  const sharedValue = _mod1654.useSharedValue(0);
  const buttonPressAnimationProps = ButtonHooks.useButtonPressAnimationProps(sharedValue, num, scaleAmountInPx.onLayout, onPressIn, onPressOut);
  const obj3 = {};
  const merged1 = Object.assign(_objectWithoutProperties(buttonPressAnimationProps, closure_2));
  const merged2 = Object.assign(merged);
  obj3.ref = ref;
  obj3.accessibilityRole = "button";
  items = [buttonPressAnimationProps.style, scaleAmountInPx.style];
  obj3.style = items;
  return <closure_5 />;
}