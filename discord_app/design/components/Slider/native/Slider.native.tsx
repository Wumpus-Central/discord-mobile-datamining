// discord_app/design/components/Slider/native/Slider.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.SLIDER_TRACK_BACKGROUND };
createCacheKey[4] = { marginRight: ThemesDefault.space.PX_8 };
createCacheKey[5] = { marginLeft: ThemesDefault.space.PX_8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("design/components/Slider/native/Slider.native.tsx");

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
      const result = onValueChange(dependencyMap[5]).triggerHapticFeedback(step(dependencyMap[6]).IMPACT_LIGHT);
      const obj = onValueChange(dependencyMap[5]);
    }
    if (onValueChange != null) {
      tmp5(arg0);
    }
  }, items);
  if (null != startIcon) {
    obj = { style: null, children: null };
    obj[0] = tmp2.startIcon;
    obj[1] = startIcon;
    tmp6 = callback(View, obj);
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
  items1[1] = callback(step(8105), obj);
  let tmp8Result = null;
  if (null != endIcon) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp2.endIcon;
    obj1[1] = endIcon;
    tmp8Result = callback(View, obj1);
  }
  items1[2] = tmp8Result;
  obj[1] = items1;
  return callback(View, obj);
};