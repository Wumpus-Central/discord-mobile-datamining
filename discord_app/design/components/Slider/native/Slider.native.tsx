// === Module 13240: Slider ===

// Module 13240 (Slider)
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { flex: 1, flexDirection: "row", alignItems: "center" }, slider: { flex: 1 }, minimumTrackTintColor: null, maximumTrackTintColor: null, startIcon: null, endIcon: null };
createCacheKey = { backgroundColor: require("Themes").colors.REDESIGN_INPUT_CONTROL_SELECTED };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: require("Themes").colors.SLIDER_TRACK_BACKGROUND };
let obj1 = { backgroundColor: require("Themes").colors.SLIDER_TRACK_BACKGROUND };
createCacheKey[4] = { marginRight: require("Themes").space.PX_8 };
const obj2 = { marginRight: require("Themes").space.PX_8 };
createCacheKey[5] = { marginLeft: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj3 = { marginLeft: require("Themes").space.PX_8 };
let result = require("jsxProd").fileFinishedImporting("design/components/Slider/native/Slider.native.tsx");

export const Slider = function Slider(step) {
  let endIcon;
  let onValueChange;
  let startIcon;
  ({ startIcon, endIcon, onValueChange } = step);
  step = step.step;
  const merged = Object.assign(step, Object.create(null));
  const tmp2 = createCacheKey();
  const items = [step, onValueChange];
  let obj = { style: tmp2.container, children: null };
  let tmp6 = null;
  const callback = React.useCallback((arg0) => {
    if (null != step) {
      const result = onValueChange(outer1_2[5]).triggerHapticFeedback(step(outer1_2[6]).IMPACT_LIGHT);
      const obj = onValueChange(outer1_2[5]);
    }
    if (onValueChange != null) {
      tmp5(arg0);
    }
  }, items);
  if (null != startIcon) {
    obj = { style: null, children: null };
    obj[0] = tmp2.startIcon;
    obj[1] = startIcon;
    tmp6 = callback(tmp5, obj);
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
  items1[1] = callback(step(7664), obj);
  let tmp8Result = null;
  if (null != endIcon) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp2.endIcon;
    obj1[1] = endIcon;
    tmp8Result = callback(tmp5, obj1);
  }
  items1[2] = tmp8Result;
  obj[1] = items1;
  return closure_6(View, obj);
};