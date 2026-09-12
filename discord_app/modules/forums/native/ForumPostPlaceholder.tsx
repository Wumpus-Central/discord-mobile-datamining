// === Module 12156: ForumPostPlaceholder ===

// Module 12156 (ForumPostPlaceholder)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;
import timing from "timing" /* 4637 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj = { postPlaceholder: null };
obj = { height: 2 * nativeDefault.space.PX_64, marginBottom: nativeDefault.space.PX_12 };
obj.postPlaceholder = obj;
let closure_7 = createStyles.createStyles(obj);
let c8 = 0.55;
const __initData = { code: "function ForumPostPlaceholderTsx1(){const{reducedMotion,ROW_OPACITY_END,withDelay,INITIAL_DELAY_MS,withRepeat,withSequence,withTiming,timingConfig}=this.__closure;if(reducedMotion){return{opacity:ROW_OPACITY_END};}return{opacity:withDelay(INITIAL_DELAY_MS,withRepeat(withSequence(withTiming(ROW_OPACITY_END,timingConfig),withTiming(1,timingConfig)),-1,true))};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumPostPlaceholder.tsx");

export default noop.memo(() => {
  let obj = stateFromStores(504);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const timingConfig = _slicedToArray(noop.useState(() => {
    let obj = { timingConfig: null };
    obj = { duration: 1000 + 500 * Math.random(), easing: null };
    const Easing = stateFromStores(4373).Easing;
    obj.easing = Easing.inOut(stateFromStores(4373).Easing.sin);
    obj.timingConfig = obj;
    return obj;
  }), 1)[0].timingConfig;
  let obj1 = stateFromStores(4373);
  const fn = function _() {
    const obj = { opacity: null };
    if (stateFromStores) {
      obj.opacity = opacity;
      let tmp6 = obj;
    } else {
      const obj2 = ReanimatedRexport;
      const obj3 = ReanimatedRexport;
      const obj4 = ReanimatedRexport;
      const withTimingResult = timing.withTiming(opacity, timingConfig);
      obj.opacity = obj2.withDelay(1000, obj3.withRepeat(obj4.withSequence(withTimingResult, timing.withTiming(1, timingConfig)), -1, true));
      tmp6 = obj;
    }
    return tmp6;
  };
  obj = { reducedMotion: stateFromStores, ROW_OPACITY_END, withDelay: stateFromStores(4373).withDelay, INITIAL_DELAY_MS: 1000, withRepeat: stateFromStores(4373).withRepeat, withSequence: stateFromStores(4373).withSequence, withTiming: stateFromStores(4637).withTiming, timingConfig };
  fn.__closure = obj;
  fn.__workletHash = 9488742940898;
  fn.__initData = __initData;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: animatedStyle, pointerEvents: "none", children: null };
  obj1 = { variant: "secondary", style: closure_7().postPlaceholder };
  obj.children = jsx(stateFromStores(5688).Card, { variant: "secondary", style: closure_7().postPlaceholder });
  return jsx(timingConfig(4373).View, { style: animatedStyle, pointerEvents: "none", children: null });
});