// discord_app/design/animation/reanimated/spring/spring.tsx
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import ReanimatedConstants from "../ReanimatedConstants.tsx";
import reanimated_AccessibilityPreferencesSharedValue from "../AccessibilityPreferencesSharedValue.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const CONFIG_NEVER_ANIMATE = ReanimatedConstants.CONFIG_NEVER_ANIMATE;
function withSpring(value, SUBTLE_SPRING, fn, fn2) {
  let str = fn;
  if (fn === undefined) {
    str = "respect-motion-settings";
  }
  const accessibilityPreferencesSharedValue =
    reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
  if ("animate-always" === str) {
    let tmp7 = SUBTLE_SPRING;
    if (tmp4) {
      let obj = SUBTLE_SPRING;
      if (SUBTLE_SPRING == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      obj.reduceMotion = tmp(4296).ReduceMotion.Never;
      tmp7 = obj;
    }
    let tmp5 = tmp7;
  } else {
    tmp5 = CONFIG_NEVER_ANIMATE;
  }
  return ReanimatedRexport.withSpring(value, tmp5, fn2);
}
withSpring.__closure = {
  accessibilityPreferencesSharedValue:
    reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue,
  CONFIG_NEVER_ANIMATE,
  ReduceMotion: ReanimatedRexport.ReduceMotion,
  REAwithSpring: ReanimatedRexport.withSpring,
};
withSpring.__workletHash = 14783154107972;
withSpring.__initData = {
  code: "function withSpring_springTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){const{accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE,ReduceMotion,REAwithSpring}=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithSpring(toValue,configForRea,callback);}",
};
const result = size.fileFinishedImporting("design/animation/reanimated/spring/spring.tsx");

export { withSpring };
