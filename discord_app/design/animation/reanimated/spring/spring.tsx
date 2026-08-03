import { CONFIG_NEVER_ANIMATE } from "CONFIG_NEVER_ANIMATE";

function withSpring(value, SUBTLE_SPRING, fn, fn2) {
  let str = fn;
  if (fn === undefined) {
    str = "respect-motion-settings";
  }
  const accessibilityPreferencesSharedValue = require(4196) /* mutable */.accessibilityPreferencesSharedValue;
  if ("animate-always" === str) {
    let tmp7 = SUBTLE_SPRING;
    if (tmp4) {
      let obj = SUBTLE_SPRING;
      if (SUBTLE_SPRING == null) {
        obj = {};
      }
      obj = {};
      const merged = Object.assign(obj);
      obj.reduceMotion = tmp(4054).ReduceMotion.Never;
      tmp7 = obj;
    }
    let tmp5 = tmp7;
  } else {
    tmp5 = CONFIG_NEVER_ANIMATE;
  }
  return require(4054).withSpring(value, tmp5, fn2);
}
withSpring.__closure = { accessibilityPreferencesSharedValue: require("mutable").accessibilityPreferencesSharedValue, CONFIG_NEVER_ANIMATE, ReduceMotion: require("module_4054").ReduceMotion, REAwithSpring: require("module_4054").withSpring };
withSpring.__workletHash = 14783154107972;
withSpring.__initData = { code: "function withSpring_springTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){const{accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE,ReduceMotion,REAwithSpring}=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithSpring(toValue,configForRea,callback);}" };
let obj = { accessibilityPreferencesSharedValue: require("mutable").accessibilityPreferencesSharedValue, CONFIG_NEVER_ANIMATE, ReduceMotion: require("module_4054").ReduceMotion, REAwithSpring: require("module_4054").withSpring };
const result = require("module_4054").fileFinishedImporting("design/animation/reanimated/spring/spring.tsx");

export { withSpring };