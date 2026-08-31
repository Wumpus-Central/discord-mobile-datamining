// === Module 11566: ? ===

// Module 11566
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4440 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
let c4 = importAllResult;
let obj = { postPlaceholder: null };
obj = { height: 2 * ThemesDefault.space.PX_64, marginBottom: ThemesDefault.space.PX_12 };
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
let c8 = 0.55;
let closure_9 = { code: "function ForumPostPlaceholderTsx1(){const{reducedMotion,ROW_OPACITY_END,withDelay,INITIAL_DELAY_MS,withRepeat,withSequence,withTiming,timingConfig}=this.__closure;if(reducedMotion){return{opacity:ROW_OPACITY_END};}return{opacity:withDelay(INITIAL_DELAY_MS,withRepeat(withSequence(withTiming(ROW_OPACITY_END,timingConfig),withTiming(1,timingConfig)),-1,true))};}" };
const memoResult = importAllResult.memo(() => {
  let obj = stateFromStores(589);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const timingConfig = callback(importAllResult.useState(() => {
    let obj = { timingConfig: null };
    obj = { duration: 1000 + 500 * Math.random(), easing: null };
    const Easing = stateFromStores(4187).Easing;
    obj[1] = Easing.inOut(stateFromStores(4187).Easing.sin);
    obj[0] = obj;
    return obj;
  }), 1)[0].timingConfig;
  obj1 = stateFromStores(4187);
  const fn = function _() {
    const obj = { opacity: null };
    if (stateFromStores) {
      obj[0] = closure_1_8;
      let tmp6 = obj;
    } else {
      const obj2 = stateFromStores(closure_1_2[7]);
      const obj3 = stateFromStores(closure_1_2[7]);
      const obj4 = stateFromStores(closure_1_2[7]);
      const obj5 = stateFromStores(closure_1_2[8]);
      const withTimingResult = stateFromStores(closure_1_2[8]).withTiming(closure_1_8, timingConfig);
      obj[0] = obj2.withDelay(1000, obj3.withRepeat(obj4.withSequence(withTimingResult, stateFromStores(closure_1_2[8]).withTiming(1, timingConfig)), -1, true));
      tmp6 = obj;
      const obj6 = stateFromStores(closure_1_2[8]);
    }
    return tmp6;
  };
  obj = { reducedMotion: stateFromStores, ROW_OPACITY_END: c8, withDelay: stateFromStores(4187).withDelay, INITIAL_DELAY_MS: 1000, withRepeat: stateFromStores(4187).withRepeat, withSequence: stateFromStores(4187).withSequence, withTiming: stateFromStores(4449).withTiming, timingConfig };
  fn.__closure = obj;
  fn.__workletHash = 9488742940898;
  fn.__initData = closure_9;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: animatedStyle, pointerEvents: "none", children: jsx(stateFromStores(5569).Card, obj1) };
  obj1 = { variant: "secondary", style: callback2().postPlaceholder };
  return jsx(timingConfig(4187).View, { style: animatedStyle, pointerEvents: "none", children: jsx(stateFromStores(5569).Card, { variant: "secondary", style: callback2().postPlaceholder }) });
});
const result = require("set").fileFinishedImporting("modules/forums/native/ForumPostPlaceholder.tsx");

export default memoResult;