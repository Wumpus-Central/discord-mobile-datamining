// discord_app/design/animation/reanimated/timing/timing.tsx
import set from "set" /* 2 */;
import _mod4115 from "module_4115" /* 4115 */;
import CONFIG_NEVER_ANIMATE from "CONFIG_NEVER_ANIMATE" /* 4665 */;
import mutable from "mutable" /* 4666 */;

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
      obj.reduceMotion = tmp(4115).ReduceMotion.Never;
      tmp7 = obj;
    }
    let tmp5 = tmp7;
  } else {
    tmp5 = CONFIG_NEVER_ANIMATE_TIMING;
  }
  return _mod4115.withTiming(value, tmp5, fn2);
}
withTiming.__closure = { accessibilityPreferencesSharedValue: mutable.accessibilityPreferencesSharedValue, CONFIG_NEVER_ANIMATE_TIMING, ReduceMotion: _mod4115.ReduceMotion, REAwithTiming: _mod4115.withTiming };
withTiming.__workletHash = 6710776253444;
withTiming.__initData = { code: "function withTiming_timingTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){const{accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE_TIMING,ReduceMotion,REAwithTiming}=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE_TIMING:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithTiming(toValue,configForRea,callback);}" };
let obj = { accessibilityPreferencesSharedValue: mutable.accessibilityPreferencesSharedValue, CONFIG_NEVER_ANIMATE_TIMING, ReduceMotion: _mod4115.ReduceMotion, REAwithTiming: _mod4115.withTiming };
const result = set.fileFinishedImporting("design/animation/reanimated/timing/timing.tsx");

export { withTiming };