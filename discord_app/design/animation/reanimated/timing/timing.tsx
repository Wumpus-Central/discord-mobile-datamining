// discord_app/design/animation/reanimated/timing/timing.tsx
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import ReanimatedConstants from "../ReanimatedConstants.tsx";
import reanimated_AccessibilityPreferencesSharedValue from "../AccessibilityPreferencesSharedValue.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const items = [
  {
    code: "(function withTiming_timingTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){let[accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE_TIMING,ReduceMotion,REAwithTiming]=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE_TIMING:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithTiming(toValue,configForRea,callback);})",
  },
  reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue,
  ReanimatedConstants.CONFIG_NEVER_ANIMATE_TIMING,
  _mod1652.ReduceMotion,
  _mod1652.withTiming,
];
let c0;
let c1;
let c2;
let c3;
[tmp2, tmp3, tmp4, tmp5, tmp6] = items;
function withTiming(c0, timingStandard, arg2) {
  let str = arg2;
  if (arg2 === undefined) {
    str = "respect-motion-settings";
  }
  if ("animate-always" === str) {
    let tmp5 = timingStandard;
    if (tmp2) {
      let obj = timingStandard;
      if (timingStandard == null) {
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
  return _undefined2(c0, tmp3, ChatInputActionButtonTransitionItemTsx1);
}
const items1 = [tmp3, tmp4, tmp5, tmp6];
withTiming.__closure = items1;
withTiming.__workletHash = 8505479360605;
withTiming.__initData = tmp2;
const result = size.fileFinishedImporting("design/animation/reanimated/timing/timing.tsx");

export { withTiming };
