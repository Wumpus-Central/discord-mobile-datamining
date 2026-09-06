// === Module 14178: Slider ===

// Module 14178 (Slider)
import nativeDefault from "native" /* 576 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4529 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: { flex: 1, flexDirection: "row", alignItems: "center" }, slider: { flex: 1 }, minimumTrackTintColor: null, maximumTrackTintColor: null, startIcon: null, endIcon: null };
createStyles = { backgroundColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
createStyles.minimumTrackTintColor = createStyles;
createStyles.maximumTrackTintColor = { backgroundColor: nativeDefault.colors.SLIDER_TRACK_BACKGROUND };
let obj1 = { backgroundColor: nativeDefault.colors.SLIDER_TRACK_BACKGROUND };
createStyles.startIcon = { marginRight: nativeDefault.space.PX_8 };
const obj2 = { marginRight: nativeDefault.space.PX_8 };
createStyles.endIcon = { marginLeft: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(createStyles);
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
    obj = { style: tmp2.startIcon, children: startIcon };
    tmp6 = closure_5(View, obj);
  }
  const items1 = [tmp6, , ];
  obj = {};
  const merged1 = Object.assign(merged);
  const items2 = [tmp2.slider, step.style];
  obj.style = items2;
  obj.step = step;
  obj.onValueChange = callback;
  obj.minimumTrackTintColor = tmp2.minimumTrackTintColor.backgroundColor;
  obj.maximumTrackTintColor = tmp2.maximumTrackTintColor.backgroundColor;
  obj.tapToSeek = true;
  items1[1] = closure_5(step(8278), obj);
  let tmp8Result = null;
  if (null != endIcon) {
    const obj1 = { style: tmp2.endIcon, children: endIcon };
    tmp8Result = closure_5(View, obj1);
  }
  items1[2] = tmp8Result;
  obj.children = items1;
  return closure_6(View, obj);
};