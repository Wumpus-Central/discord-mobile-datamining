// === Module 13821: Slider ===

// Module 13821 (Slider)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { flex: 1, flexDirection: "row", alignItems: "center" }, slider: { flex: 1 }, minimumTrackTintColor: null, maximumTrackTintColor: null, startIcon: null, endIcon: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.SLIDER_TRACK_BACKGROUND };
let obj1 = { backgroundColor: ThemesDefault.colors.SLIDER_TRACK_BACKGROUND };
createCacheKey[4] = { marginRight: ThemesDefault.space.PX_8 };
const obj2 = { marginRight: ThemesDefault.space.PX_8 };
createCacheKey[5] = { marginLeft: ThemesDefault.space.PX_8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj3 = { marginLeft: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting("design/components/Slider/native/Slider.native.tsx");

export const Slider = function Slider(step) {
  ({ startIcon, endIcon, onValueChange } = step);
  step = step.step;
  const merged = Object.assign(step, Object.create(null));
  const tmp2 = callback2();
  const items = [step, onValueChange];
  let obj = { style: tmp2.container, children: null };
  let tmp6 = null;
  const callback = React.useCallback((arg0) => {
    if (null != step) {
      const result = onValueChange(closure_1_2[5]).triggerHapticFeedback(step(closure_1_2[6]).IMPACT_LIGHT);
      const obj = onValueChange(closure_1_2[5]);
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
  items1[1] = callback(step(8381), obj);
  let tmp8Result = null;
  if (null != endIcon) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp2.endIcon;
    obj1[1] = endIcon;
    tmp8Result = callback(tmp5, obj1);
  }
  items1[2] = tmp8Result;
  obj[1] = items1;
  return closure_6(View, obj);
};