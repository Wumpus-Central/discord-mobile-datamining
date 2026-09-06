// === Module 12393: useAutocompleteAnimatedHeightStyles ===

// Module 12393 (useAutocompleteAnimatedHeightStyles)
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import size from "module_2" /* 2 */;

const __initData = { code: "function useAutocompleteAnimatedHeightStylesTsx1(){const{withTiming,height,timingStandard,isFrozenSharedValue}=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?'flex':'none'};}" };
const result = size.fileFinishedImporting("modules/autocompleter/native/useAutocompleteAnimatedHeightStyles.tsx");

export default function useAutocompleteAnimatedHeightStyles(height, arg1) {
  _require = height;
  let obj = require("ScreenIndexFrozen");
  isScreenIndexFrozenSharedValue = obj.useIsScreenIndexFrozenSharedValue(arg1);
  const fn = function s() {
    const obj = { height: timing.withTiming(closure_0, timingPresets.timingStandard), display: null };
    let str = "flex";
    if (isScreenIndexFrozenSharedValue.get()) {
      str = "none";
    }
    obj.display = str;
    return obj;
  };
  obj = { withTiming: require("timing").withTiming, height, timingStandard: require("timingPresets").timingStandard, isFrozenSharedValue: isScreenIndexFrozenSharedValue };
  fn.__closure = obj;
  fn.__workletHash = 3862216441966;
  fn.__initData = __initData;
  return require("ReanimatedRexport").useAnimatedStyle(fn);
};