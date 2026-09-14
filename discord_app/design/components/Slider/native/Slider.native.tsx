// discord_app/design/components/Slider/native/Slider.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import HapticUtils from "../../../../modules/haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../../modules/haptics/HapticFeedbackTypes.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  container: { flex: 1, flexDirection: "row", alignItems: "center" },
  slider: { flex: 1 },
  minimumTrackTintColor: { backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED },
  maximumTrackTintColor: null,
  startIcon: null,
  endIcon: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
obj2.maximumTrackTintColor = { backgroundColor: nativeDefault.colors.SLIDER_TRACK_BACKGROUND };
let obj4 = { backgroundColor: nativeDefault.colors.SLIDER_TRACK_BACKGROUND };
obj2.startIcon = { marginRight: nativeDefault.space.PX_8 };
const obj5 = { marginRight: nativeDefault.space.PX_8 };
obj2.endIcon = { marginLeft: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Slider/native/Slider.native.tsx");

export const Slider = function Slider(step) {
  ({ startIcon, endIcon, onValueChange } = step);
  step = step.step;
  const merged = Object.assign(step, Object.assign({ startIcon: 0, endIcon: 0, style: 0, onValueChange: 0, step: 0 }));
  const tmp2 = closure_7();
  const items = [step, onValueChange];
  let obj = { style: tmp2.container, children: null };
  let tmp6 = null;
  const callback = noop.useCallback((arg0) => {
    if (null != step) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    }
    if (onValueChange != null) {
      tmp5(arg0);
    }
  }, items);
  if (null != startIcon) {
    const obj2 = { style: tmp2.startIcon, children: startIcon };
    tmp6 = closure_5(View, obj2);
  }
  const items1 = [tmp6, ,];
  const obj3 = {};
  const merged1 = Object.assign(merged);
  const items2 = [tmp2.slider, step.style];
  obj3.style = items2;
  obj3.step = step;
  obj3.onValueChange = callback;
  obj3.minimumTrackTintColor = tmp2.minimumTrackTintColor.backgroundColor;
  obj3.maximumTrackTintColor = tmp2.maximumTrackTintColor.backgroundColor;
  obj3.tapToSeek = true;
  items1[1] = closure_5(step(8396), obj3);
  let tmp8Result = null;
  if (null != endIcon) {
    const obj4 = { style: tmp2.endIcon, children: endIcon };
    tmp8Result = closure_5(View, obj4);
  }
  items1[2] = tmp8Result;
  obj.children = items1;
  return closure_6(View, obj);
};
