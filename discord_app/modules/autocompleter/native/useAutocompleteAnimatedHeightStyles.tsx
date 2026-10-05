// discord_app/modules/autocompleter/native/useAutocompleteAnimatedHeightStyles.tsx
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../design/animation/reanimated/timing/timingPresets.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const __initData = {
  code: 'function useAutocompleteAnimatedHeightStylesTsx1(){const{withTiming,height,timingStandard,isFrozenSharedValue}=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?"flex":"none"};}',
};
const __initData2 = {
  code: "function useAutocompleteAnimatedHeightStylesTsx2(){const{withTiming,height,timingStandard,isFrozenSharedValue}=this.__closure;return{height:withTiming(height,timingStandard),display:!isFrozenSharedValue.get()?'flex':'none'};}",
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (height, arg1) => {
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
      fn.__closure = {
        withTiming: require("timing").withTiming,
        height,
        timingStandard: require("timingPresets").timingStandard,
        isFrozenSharedValue: isScreenIndexFrozenSharedValue,
      };
      fn.__workletHash = 13204746043694;
      fn.__initData = __initData;
      ({
        withTiming: require("timing").withTiming,
        height,
        timingStandard: require("timingPresets").timingStandard,
        isFrozenSharedValue: isScreenIndexFrozenSharedValue,
      });
      return obj2.useAnimatedStyle(fn);
    }
  : (height, arg1) => {
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
      fn.__closure = {
        withTiming: require("timing").withTiming,
        height,
        timingStandard: require("timingPresets").timingStandard,
        isFrozenSharedValue: isScreenIndexFrozenSharedValue,
      };
      fn.__workletHash = 15515033758605;
      fn.__initData = __initData2;
      ({
        withTiming: require("timing").withTiming,
        height,
        timingStandard: require("timingPresets").timingStandard,
        isFrozenSharedValue: isScreenIndexFrozenSharedValue,
      });
      return obj2.useAnimatedStyle(fn);
    };
const result = size.fileFinishedImporting("modules/autocompleter/native/useAutocompleteAnimatedHeightStyles.tsx");

export default tmp2;
