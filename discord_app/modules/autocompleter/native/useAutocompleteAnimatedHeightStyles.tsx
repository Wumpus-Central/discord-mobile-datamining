// === Module 12051: useAutocompleteAnimatedHeightStyles ===

// Module 12051 (useAutocompleteAnimatedHeightStyles)
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const __initData = { code: "function useAutocompleteAnimatedHeightStylesTsx1(){const{withTiming,height,timingStandard,isFrozenSharedValue}=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?\"flex\":\"none\"};}" };
const __initData2 = { code: "function useAutocompleteAnimatedHeightStylesTsx2(){const{withTiming,height,timingStandard,isFrozenSharedValue}=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?'flex':'none'};}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((height, arg1) => {
  let isScreenIndexFrozenSharedValue;
  _require = height;
  let obj = require("ScreenIndexFrozen");
  isScreenIndexFrozenSharedValue = obj.useIsScreenIndexFrozenSharedValue(arg1);
  let obj2 = require("ReanimatedRexport");
  const fn = function s() {
    let obj2;
    let str;
    const obj = { height: obj2.withTiming(height, timingPresets.timingStandard), display: str };
    str = "flex";
    obj2 = timing;
    if (isScreenIndexFrozenSharedValue.get()) {
      str = "none";
    }
    return obj;
  };
  fn.__closure = { withTiming: require("timing").withTiming, height, timingStandard: require("timingPresets").timingStandard, isFrozenSharedValue: isScreenIndexFrozenSharedValue };
  fn.__workletHash = 13204746043694;
  fn.__initData = __initData;
  ({ withTiming: require("timing").withTiming, height, timingStandard: require("timingPresets").timingStandard, isFrozenSharedValue: isScreenIndexFrozenSharedValue });
  return obj2.useAnimatedStyle(fn);
}) : ((height, arg1) => {
  let isScreenIndexFrozenSharedValue;
  _require = height;
  let obj = require("ScreenIndexFrozen");
  isScreenIndexFrozenSharedValue = obj.useIsScreenIndexFrozenSharedValue(arg1);
  let obj2 = require("ReanimatedRexport");
  const fn = function s() {
    let obj2;
    let str;
    const obj = { height: obj2.withTiming(height, timingPresets.timingStandard), display: str };
    str = "flex";
    obj2 = timing;
    if (isScreenIndexFrozenSharedValue.get()) {
      str = "none";
    }
    return obj;
  };
  fn.__closure = { withTiming: require("timing").withTiming, height, timingStandard: require("timingPresets").timingStandard, isFrozenSharedValue: isScreenIndexFrozenSharedValue };
  fn.__workletHash = 15515033758605;
  fn.__initData = __initData2;
  ({ withTiming: require("timing").withTiming, height, timingStandard: require("timingPresets").timingStandard, isFrozenSharedValue: isScreenIndexFrozenSharedValue });
  return obj2.useAnimatedStyle(fn);
});
const result = size.fileFinishedImporting("modules/autocompleter/native/useAutocompleteAnimatedHeightStyles.tsx");

export default tmp2;