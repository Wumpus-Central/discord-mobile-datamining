// === Module 12105: useAutocompleteAnimatedHeightStyles ===

// Module 12105 (useAutocompleteAnimatedHeightStyles)
import timing from "timing" /* 5093 */;
import timingPresets from "timingPresets" /* 5096 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const __initData = { code: "function useAutocompleteAnimatedHeightStylesTsx1(){const{withTiming,height,timingStandard,isFrozenSharedValue}=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?\"flex\":\"none\"};}" };
const __initData2 = { code: "function useAutocompleteAnimatedHeightStylesTsx2(){const{withTiming,height,timingStandard,isFrozenSharedValue}=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?'flex':'none'};}" };
const result = size.fileFinishedImporting("modules/autocompleter/native/useAutocompleteAnimatedHeightStyles.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAutocompleteAnimatedHeightStyles(height, arg1) {
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
  fn.__workletHash = 13204746043694;
  fn.__initData = __initData;
  return obj2.useAnimatedStyle(fn);
}) : (function useAutocompleteAnimatedHeightStyles(height, arg1) {
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
  fn.__workletHash = 15515033758605;
  fn.__initData = __initData2;
  return obj2.useAnimatedStyle(fn);
});