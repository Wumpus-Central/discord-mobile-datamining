// discord_app/design/components/experimental/Button/native/PressableScale.native.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import { jsx } from "jsxProd";
import importAllResult from "noop";
import importDefaultResult from "module_4146";

const require = arg1;
let closure_2 = ["style"];
let closure_5 = require("module_4146").createAnimatedComponent(require("get ActivityIndicator").Pressable);
const forwardRefResult = importAllResult.forwardRef((scaleAmountInPx, ref) => {
  let onPressIn;
  let onPressOut;
  let num = scaleAmountInPx.scaleAmountInPx;
  if (num === undefined) {
    num = 8;
  }
  ({ onPressIn, onPressOut } = scaleAmountInPx);
  const merged = Object.assign(scaleAmountInPx, Object.create(null));
  let obj = require(4146);
  const sharedValue = obj.useSharedValue(0);
  const buttonPressAnimationProps = require(4700) /* styleProperties */.useButtonPressAnimationProps(sharedValue, num, scaleAmountInPx.onLayout, onPressIn, onPressOut);
  obj = {};
  const merged1 = Object.assign(callback(buttonPressAnimationProps, closure_2));
  const merged2 = Object.assign(merged);
  obj.ref = ref;
  obj.accessibilityRole = "button";
  const items = [buttonPressAnimationProps.style, scaleAmountInPx.style];
  obj.style = items;
  return <closure_5 />;
});
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/experimental/Button/native/PressableScale.native.tsx");

export const PressableScale = forwardRefResult;