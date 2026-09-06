// discord_app/design/components/experimental/Button/native/PressableScale.native.tsx
import ReanimatedRexport2 from "../../../../../modules/reanimated/ReanimatedRexport.tsx";
import ButtonHooks from "../../../Button/native/ButtonHooks.native.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
let closure_2 = ["style"];
const jsx = fn(21).jsx;
let closure_5 = ReanimatedRexport.createAnimatedComponent(fn(17).Pressable);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/PressableScale.native.tsx");

export const PressableScale = noop.forwardRef((scaleAmountInPx, ref) => {
  let num = scaleAmountInPx.scaleAmountInPx;
  if (num === undefined) {
    num = 8;
  }
  ({ onPressIn, onPressOut } = scaleAmountInPx);
  const merged = Object.assign(
    scaleAmountInPx,
    Object.assign({ style: 0, scaleAmountInPx: 0, onLayout: 0, onPressIn: 0, onPressOut: 0 }),
  );
  let obj = ReanimatedRexport2;
  const sharedValue = obj.useSharedValue(0);
  const buttonPressAnimationProps = ButtonHooks.useButtonPressAnimationProps(
    sharedValue,
    num,
    scaleAmountInPx.onLayout,
    onPressIn,
    onPressOut,
  );
  obj = {};
  const merged1 = Object.assign(_objectWithoutProperties(buttonPressAnimationProps, closure_2));
  const merged2 = Object.assign(merged);
  obj.ref = ref;
  obj.accessibilityRole = "button";
  const items = [buttonPressAnimationProps.style, scaleAmountInPx.style];
  obj.style = items;
  return <closure_5 />;
});
