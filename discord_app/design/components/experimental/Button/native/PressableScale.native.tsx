// === Module 8002: PressableScale ===

// Module 8002 (PressableScale)
import _mod1655 from "module_1655" /* 1655 */;
import ButtonHooks from "ButtonHooks" /* 5943 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const module_1655 = _mod1655;

require = fn;
let closure_2 = ["style"];
const jsx = fn(21).jsx;
let closure_5 = module_1655.createAnimatedComponent(fn(17).Pressable);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/PressableScale.native.tsx");

export function PressableScale(scaleAmountInPx) {
  let num = scaleAmountInPx.scaleAmountInPx;
  if (num === undefined) {
    num = 8;
  }
  ({ onPressIn, onPressOut, ref } = scaleAmountInPx);
  const merged = Object.assign(scaleAmountInPx, Object.assign({ style: 0, scaleAmountInPx: 0, onLayout: 0, onPressIn: 0, onPressOut: 0, ref: 0 }));
  const sharedValue = _mod1655.useSharedValue(0);
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