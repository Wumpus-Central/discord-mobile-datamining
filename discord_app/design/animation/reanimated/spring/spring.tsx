// discord_app/design/animation/reanimated/spring/spring.tsx
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import ReanimatedConstants from "../ReanimatedConstants.tsx";
import reanimated_AccessibilityPreferencesSharedValue from "../AccessibilityPreferencesSharedValue.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const CONFIG_NEVER_ANIMATE = ReanimatedConstants.CONFIG_NEVER_ANIMATE;
function withSpring(targetHeight, CHANNEL_SPRING_CONFIG, arg2) {
  let tmp5;
  let str = arg2;
  if (arg2 === undefined) {
    str = "respect-motion-settings";
  }
  const accessibilityPreferencesSharedValue =
    reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue;
  if ("animate-always" === str) {
    let tmp7 = CHANNEL_SPRING_CONFIG;
    if ("animate-always" === str) {
      let obj = CHANNEL_SPRING_CONFIG;
      if (CHANNEL_SPRING_CONFIG == null) {
        obj = {};
      }
      const obj2 = { reduceMotion: ReanimatedRexport.ReduceMotion.Never };
      const merged = Object.assign(obj);
      tmp7 = obj2;
    }
    tmp5 = tmp7;
  } else {
    tmp5 = CONFIG_NEVER_ANIMATE;
  }
  const tmpResult = ReanimatedRexport;
  return tmpResult.withSpring(targetHeight, tmp5, fn);
}
let obj = {
  accessibilityPreferencesSharedValue:
    reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue,
  CONFIG_NEVER_ANIMATE,
  ReduceMotion: ReanimatedRexport.ReduceMotion,
  REAwithSpring: ReanimatedRexport.withSpring,
};
withSpring.__closure = obj;
withSpring.__workletHash = 14783154107972;
withSpring.__initData = {
  code: "function withSpring_springTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){const{accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE,ReduceMotion,REAwithSpring}=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithSpring(toValue,configForRea,callback);}",
};
const result = size.fileFinishedImporting("design/animation/reanimated/spring/spring.tsx");

export { withSpring };
