// discord_app/modules/autocompleter/native/useAutocompleteAnimatedHeightStyles.tsx
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const __initData = {
  code: "function useAutocompleteAnimatedHeightStylesTsx1(){const{withTiming,height,timingStandard,isFrozenSharedValue}=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?'flex':'none'};}",
};
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
  obj = {
    withTiming: require("timing").withTiming,
    height,
    timingStandard: require("timingPresets").timingStandard,
    isFrozenSharedValue: isScreenIndexFrozenSharedValue,
  };
  fn.__closure = obj;
  fn.__workletHash = 3862216441966;
  fn.__initData = __initData;
  return require("ReanimatedRexport").useAnimatedStyle(fn);
}
