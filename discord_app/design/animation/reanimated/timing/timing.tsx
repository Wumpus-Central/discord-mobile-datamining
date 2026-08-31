// discord_app/design/animation/reanimated/timing/timing.tsx
import set from "../../../../../_runtime/00002_set.js";
import _mod4187 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import CONFIG_NEVER_ANIMATE from "../ReanimatedConstants.tsx";
import mutable from "../AccessibilityPreferencesSharedValue.native.tsx";

const CONFIG_NEVER_ANIMATE_TIMING = CONFIG_NEVER_ANIMATE.CONFIG_NEVER_ANIMATE_TIMING;
function withTiming(value, timingStandard, fn, fn2) {
  let str = fn;
  if (fn === undefined) {
    str = "respect-motion-settings";
  }
  const accessibilityPreferencesSharedValue = mutable.accessibilityPreferencesSharedValue;
  if ("animate-always" === str) {
    let tmp7 = timingStandard;
    if (tmp4) {
      let obj = timingStandard;
      if (timingStandard == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      obj.reduceMotion = tmp(4187).ReduceMotion.Never;
      tmp7 = obj;
    }
    let tmp5 = tmp7;
  } else {
    tmp5 = CONFIG_NEVER_ANIMATE_TIMING;
  }
  return _mod4187.withTiming(value, tmp5, fn2);
}
withTiming.__closure = { accessibilityPreferencesSharedValue: mutable.accessibilityPreferencesSharedValue, CONFIG_NEVER_ANIMATE_TIMING, ReduceMotion: _mod4187.ReduceMotion, REAwithTiming: _mod4187.withTiming };
withTiming.__workletHash = 6710776253444;
withTiming.__initData = { code: "function withTiming_timingTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){const{accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE_TIMING,ReduceMotion,REAwithTiming}=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE_TIMING:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithTiming(toValue,configForRea,callback);}" };
let obj = { accessibilityPreferencesSharedValue: mutable.accessibilityPreferencesSharedValue, CONFIG_NEVER_ANIMATE_TIMING, ReduceMotion: _mod4187.ReduceMotion, REAwithTiming: _mod4187.withTiming };
const result = set.fileFinishedImporting("design/animation/reanimated/timing/timing.tsx");

export { withTiming };