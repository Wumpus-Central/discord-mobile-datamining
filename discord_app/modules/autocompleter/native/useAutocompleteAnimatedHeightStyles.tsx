// === Module 11504: useAutocompleteAnimatedHeightStyles ===

// Module 11504 (useAutocompleteAnimatedHeightStyles)
let closure_2 = { code: "function useAutocompleteAnimatedHeightStylesTsx1(){const{withTiming,height,timingStandard,isFrozenSharedValue}=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?'flex':'none'};}" };
const result = require("CONFIG_NEVER_ANIMATE_TIMING").fileFinishedImporting("modules/autocompleter/native/useAutocompleteAnimatedHeightStyles.tsx");

export default function useAutocompleteAnimatedHeightStyles(height) {
  const _require = height;
  let obj = _require(isScreenIndexFrozenSharedValue[0]);
  isScreenIndexFrozenSharedValue = obj.useIsScreenIndexFrozenSharedValue(arg1);
  const fn = function s() {
    const obj = { height: null, display: null };
    obj[0] = height(isScreenIndexFrozenSharedValue[2]).withTiming(height, height(isScreenIndexFrozenSharedValue[3]).timingStandard);
    let str = "flex";
    if (isScreenIndexFrozenSharedValue.get()) {
      str = "none";
    }
    obj[1] = str;
    return obj;
  };
  obj = { withTiming: _require(isScreenIndexFrozenSharedValue[2]).withTiming, height, timingStandard: _require(isScreenIndexFrozenSharedValue[3]).timingStandard, isFrozenSharedValue: isScreenIndexFrozenSharedValue };
  fn.__closure = obj;
  fn.__workletHash = 3862216441966;
  fn.__initData = closure_2;
  return _require(isScreenIndexFrozenSharedValue[1]).useAnimatedStyle(fn);
};