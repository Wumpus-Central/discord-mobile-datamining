// === Module 5763: spring/spring ===

// Module 5763 (spring/spring)
import _mod1652 from "module_1652" /* 1652 */;
import ReanimatedConstants from "ReanimatedConstants" /* 5373 */;
import reanimated_AccessibilityPreferencesSharedValue from "reanimated/AccessibilityPreferencesSharedValue" /* 5374 */;
import size from "module_2" /* 2 */;

const items = [{ code: "(function withSpring_springTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){let[accessibilityPreferencesSharedValue,CONFIG_NEVER_ANIMATE,ReduceMotion,REAwithSpring]=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;const configForRea=!animate?CONFIG_NEVER_ANIMATE:shouldAnimate==='animate-always'?{...(config!==null&&config!==void 0?config:{}),reduceMotion:ReduceMotion.Never}:config;return REAwithSpring(toValue,configForRea,callback);})" }, reanimated_AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, ReanimatedConstants.CONFIG_NEVER_ANIMATE, _mod1652.ReduceMotion, _mod1652.withSpring];
let c0;
let c1;
let c2;
let c3;
[tmp2, tmp3, tmp4, tmp5, tmp6] = items;
function withSpring(_undefined2, Reanimated3DefaultSpringConfig, arg2) {
  let str = arg2;
  if (arg2 === undefined) {
    str = "respect-motion-settings";
  }
  if ("animate-always" === str) {
    let tmp5 = Reanimated3DefaultSpringConfig;
    if (tmp2) {
      let obj = Reanimated3DefaultSpringConfig;
      if (Reanimated3DefaultSpringConfig == null) {
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
  return _undefined2(_undefined2, tmp3, BalanceCounterTsx1);
}
const items1 = [tmp3, tmp4, tmp5, tmp6];
withSpring.__closure = items1;
withSpring.__workletHash = 7534957405213;
withSpring.__initData = tmp2;
const result = size.fileFinishedImporting("design/animation/reanimated/spring/spring.tsx");

export { withSpring };