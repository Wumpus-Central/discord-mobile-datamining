// === Module 12733: useAutocompleteAnimatedHeightStyles ===

// Module 12733 (useAutocompleteAnimatedHeightStyles)
import timing from "timing" /* 4828 */;
import timingPresets from "timingPresets" /* 4831 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const __initData = { code: "function useAutocompleteAnimatedHeightStylesTsx1(){const{withTiming,height,timingStandard,isFrozenSharedValue}=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?'flex':'none'};}" };
const result = size.fileFinishedImporting("modules/autocompleter/native/useAutocompleteAnimatedHeightStyles.tsx");

export default function useAutocompleteAnimatedHeightStyles(height, arg1) {
  _require = height;
  isScreenIndexFrozenSharedValue = require("ScreenIndexFrozen").useIsScreenIndexFrozenSharedValue(arg1);
  let obj = require("ScreenIndexFrozen");
  const fn = function s() {
    const obj = { height: timing.withTiming(closure_0, timingPresets.timingStandard), display: null };
    let str = "flex";
    if (isScreenIndexFrozenSharedValue.get()) {
      str = "none";
    }
    obj.display = str;
    return obj;
  };
  const obj2 = require("ReanimatedRexport");
  fn.__closure = { withTiming: require("timing").withTiming, height, timingStandard: require("timingPresets").timingStandard, isFrozenSharedValue: isScreenIndexFrozenSharedValue };
  fn.__workletHash = 3862216441966;
  fn.__initData = __initData;
  return obj2.useAnimatedStyle(fn);
};