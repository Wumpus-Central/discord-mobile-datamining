// === Module 5548: timing/timing ===

// Module 5548 (timing/timing)
import _mod1655 from "module_1655" /* 1655 */;
import ReanimatedConstants from "ReanimatedConstants" /* 5549 */;
import reanimated_AccessibilityPreferencesSharedValue from "reanimated/AccessibilityPreferencesSharedValue" /* 5550 */;
import size from "module_2" /* 2 */;

const items = [{ code: "(function withTiming_timingTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){let[accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE_TIMING,ReduceMotion,REAwithTiming]=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE_TIMING:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithTiming(toValue,configForRea,callback);})" }, reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, ReanimatedConstants.CONFIG_NEVER_ANIMATE_TIMING, _mod1655.ReduceMotion, _mod1655.withTiming];
let c0;
let c1;
let c2;
let c3;
[tmp2, tmp3, tmp4, tmp5, tmp6] = items;
function withTiming(c0, timingSlow, arg2) {
  let str = arg2;
  if (arg2 === undefined) {
    str = "respect-motion-settings";
  }
  if ("animate-always" === str) {
    let tmp5 = timingSlow;
    if (tmp2) {
      let obj = timingSlow;
      if (timingSlow == null) {
        obj = {};
      }
      const obj2 = {};
      const merged = Object.assign(obj);
      obj2.reduceMotion = _undefined.Never;
      tmp5 = obj2;
    }
    let tmp3 = tmp5;
  } else {
    tmp3 = c1;
  }
  return _undefined2(c0, tmp3, BadgeUnlockAnimationTsx5);
}
const items1 = [tmp3, tmp4, tmp5, tmp6];
withTiming.__closure = items1;
withTiming.__workletHash = 8505479360605;
withTiming.__initData = tmp2;
const result = size.fileFinishedImporting("design/animation/reanimated/timing/timing.tsx");

export { withTiming };