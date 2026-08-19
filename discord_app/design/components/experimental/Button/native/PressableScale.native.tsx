// === Module 8816: PressableScale ===

// Module 8816 (PressableScale)
import _mod4115 from "module_4115" /* 4115 */;
import styleProperties from "styleProperties" /* 4750 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;
import importDefaultResult from "module_4115" /* 4115 */;

require = fn;
let closure_2 = ["style"];
let closure_5 = importDefaultResult.createAnimatedComponent(require("get ActivityIndicator").Pressable);
const forwardRefResult = importAllResult.forwardRef((scaleAmountInPx, ref) => {
  let num = scaleAmountInPx.scaleAmountInPx;
  if (num === undefined) {
    num = 8;
  }
  ({ onPressIn, onPressOut } = scaleAmountInPx);
  const merged = Object.assign(scaleAmountInPx, Object.create(null));
  let obj = _mod4115;
  const sharedValue = obj.useSharedValue(0);
  const buttonPressAnimationProps = styleProperties.useButtonPressAnimationProps(sharedValue, num, scaleAmountInPx.onLayout, onPressIn, onPressOut);
  obj = {};
  const merged1 = Object.assign(callback(buttonPressAnimationProps, closure_2));
  const merged2 = Object.assign(merged);
  obj.ref = ref;
  obj.accessibilityRole = "button";
  const items = [buttonPressAnimationProps.style, scaleAmountInPx.style];
  obj.style = items;
  return <closure_5 />;
});
const result = require("obj132").fileFinishedImporting("design/components/experimental/Button/native/PressableScale.native.tsx");

export const PressableScale = forwardRefResult;