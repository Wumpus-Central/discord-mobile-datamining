// discord_app/design/components/experimental/Button/native/PressableScale.native.tsx
import _mod4296 from "../../../../../modules/reanimated/ReanimatedRexport.tsx";
import styleProperties from "../../../Button/native/ButtonHooks.native.tsx";
import closure_3 from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import importDefaultResult from "../../../../../modules/reanimated/ReanimatedRexport.tsx";

require = arg1;
let closure_2 = ["style"];
let closure_5 = importDefaultResult.createAnimatedComponent(require("get ActivityIndicator").Pressable);
const forwardRefResult = importAllResult.forwardRef((scaleAmountInPx, ref) => {
  let num = scaleAmountInPx.scaleAmountInPx;
  if (num === undefined) {
    num = 8;
  }
  ({ onPressIn, onPressOut } = scaleAmountInPx);
  const merged = Object.assign(scaleAmountInPx, Object.create(null));
  let obj = _mod4296;
  const sharedValue = obj.useSharedValue(0);
  const buttonPressAnimationProps = styleProperties.useButtonPressAnimationProps(
    sharedValue,
    num,
    scaleAmountInPx.onLayout,
    onPressIn,
    onPressOut,
  );
  obj = {};
  const merged1 = Object.assign(callback(buttonPressAnimationProps, closure_2));
  const merged2 = Object.assign(merged);
  obj.ref = ref;
  obj.accessibilityRole = "button";
  const items = [buttonPressAnimationProps.style, scaleAmountInPx.style];
  obj.style = items;
  return <closure_5 />;
});
const result = require("set").fileFinishedImporting(
  "design/components/experimental/Button/native/PressableScale.native.tsx",
);

export const PressableScale = forwardRefResult;
