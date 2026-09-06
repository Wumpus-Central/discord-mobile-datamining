// === Module 4561: timing ===

// Module 4561 (timing)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import ReanimatedConstants from "ReanimatedConstants" /* 4562 */;
import reanimated_AccessibilityPreferencesSharedValue from "reanimated/AccessibilityPreferencesSharedValue" /* 4563 */;
import size from "module_2" /* 2 */;

const CONFIG_NEVER_ANIMATE_TIMING = ReanimatedConstants.CONFIG_NEVER_ANIMATE_TIMING;
function withTiming(value, timingStandard, fn, fn2) {
  let str = fn;
  if (fn === undefined) {
    str = "respect-motion-settings";
  }
  const accessibilityPreferencesSharedValue = reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
  if ("animate-always" === str) {
    let tmp7 = timingStandard;
    if (tmp4) {
      let obj = timingStandard;
      if (timingStandard == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      obj.reduceMotion = tmp(4296).ReduceMotion.Never;
      tmp7 = obj;
    }
    let tmp5 = tmp7;
  } else {
    tmp5 = CONFIG_NEVER_ANIMATE_TIMING;
  }
  return ReanimatedRexport.withTiming(value, tmp5, fn2);
}
withTiming.__closure = { accessibilityPreferencesSharedValue: reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, CONFIG_NEVER_ANIMATE_TIMING, ReduceMotion: ReanimatedRexport.ReduceMotion, REAwithTiming: ReanimatedRexport.withTiming };
withTiming.__workletHash = 6710776253444;
withTiming.__initData = { code: "function withTiming_timingTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){const{accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE_TIMING,ReduceMotion,REAwithTiming}=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE_TIMING:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithTiming(toValue,configForRea,callback);}" };
const result = size.fileFinishedImporting("design/animation/reanimated/timing/timing.tsx");

export { withTiming };