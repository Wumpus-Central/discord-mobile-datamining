// === Module 14165: useAutocompleteAnimatedHeightStyles ===

// Module 14165 (useAutocompleteAnimatedHeightStyles)
import _mod1652 from "module_1652" /* 1652 */;
import ScreenIndexFrozen from "ScreenIndexFrozen" /* 5354 */;
import timing_timing from "timing/timing" /* 5400 */;
import timingPresets from "timingPresets" /* 5403 */;
import size from "module_2" /* 2 */;

let closure_2 = { code: "(function useAutocompleteAnimatedHeightStylesTsx1(){let[withTiming,height,timingStandard,isFrozenSharedValue]=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?'flex':'none'};})" };
const result = size.fileFinishedImporting("modules/autocompleter/native/useAutocompleteAnimatedHeightStyles.tsx");

export default function useAutocompleteAnimatedHeightStyles(arg0, arg1) {
  const isScreenIndexFrozenSharedValue = ScreenIndexFrozen.useIsScreenIndexFrozenSharedValue(arg1);
  items = [closure_2, timing_timing.withTiming, arg0, timingPresets.timingStandard, isScreenIndexFrozenSharedValue];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp2, tmp3, tmp4, tmp5, tmp6] = items;
  function useAutocompleteAnimatedHeightStylesTsx1() {
    const obj = { height: _undefined(c1, c2), display: null };
    let str = "flex";
    if (_undefined2.get()) {
      str = "none";
    }
    obj.display = str;
    return obj;
  }
  const items1 = [tmp3, tmp4, tmp5, tmp6];
  useAutocompleteAnimatedHeightStylesTsx1.__closure = items1;
  useAutocompleteAnimatedHeightStylesTsx1.__workletHash = 1718162287415;
  useAutocompleteAnimatedHeightStylesTsx1.__initData = tmp2;
  return _mod1652.useAnimatedStyle(useAutocompleteAnimatedHeightStylesTsx1);
};