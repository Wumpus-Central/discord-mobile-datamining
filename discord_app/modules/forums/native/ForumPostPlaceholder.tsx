// discord_app/modules/forums/native/ForumPostPlaceholder.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let c4 = importAllResult;
let obj = { postPlaceholder: null };
obj = { height: 2 * require("Themes").space.PX_64, marginBottom: require("Themes").space.PX_12 };
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
let c8 = 0.55;
let closure_9 = { code: "function ForumPostPlaceholderTsx1(){const{reducedMotion,ROW_OPACITY_END,withDelay,INITIAL_DELAY_MS,withRepeat,withSequence,withTiming,timingConfig}=this.__closure;if(reducedMotion){return{opacity:ROW_OPACITY_END};}return{opacity:withDelay(INITIAL_DELAY_MS,withRepeat(withSequence(withTiming(ROW_OPACITY_END,timingConfig),withTiming(1,timingConfig)),-1,true))};}" };
const memoResult = importAllResult.memo(() => {
  let obj = stateFromStores(589);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const timingConfig = callback(importAllResult.useState(() => {
    let obj = { timingConfig: null };
    obj = { duration: 1000 + 500 * Math.random(), easing: null };
    const Easing = stateFromStores(4083).Easing;
    obj[1] = Easing.inOut(stateFromStores(4083).Easing.sin);
    obj[0] = obj;
    return obj;
  }), 1)[0].timingConfig;
  let obj1 = stateFromStores(4083);
  const fn = function _() {
    const obj = { opacity: null };
    if (stateFromStores) {
      obj[0] = outer1_8;
      let tmp6 = obj;
    } else {
      const obj2 = stateFromStores(outer1_2[7]);
      const obj3 = stateFromStores(outer1_2[7]);
      const obj4 = stateFromStores(outer1_2[7]);
      const obj5 = stateFromStores(outer1_2[8]);
      const withTimingResult = stateFromStores(outer1_2[8]).withTiming(outer1_8, timingConfig);
      obj[0] = obj2.withDelay(1000, obj3.withRepeat(obj4.withSequence(withTimingResult, stateFromStores(outer1_2[8]).withTiming(1, timingConfig)), -1, true));
      tmp6 = obj;
      const obj6 = stateFromStores(outer1_2[8]);
    }
    return tmp6;
  };
  obj = { reducedMotion: stateFromStores, ROW_OPACITY_END: c8, withDelay: stateFromStores(4083).withDelay, INITIAL_DELAY_MS: 1000, withRepeat: stateFromStores(4083).withRepeat, withSequence: stateFromStores(4083).withSequence, withTiming: stateFromStores(4343).withTiming, timingConfig };
  fn.__closure = obj;
  fn.__workletHash = 9488742940898;
  fn.__initData = closure_9;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: animatedStyle, pointerEvents: "none", children: null };
  obj1 = { variant: "secondary", style: callback2().postPlaceholder };
  obj[2] = jsx(stateFromStores(5437).Card, { variant: "secondary", style: callback2().postPlaceholder });
  return jsx(timingConfig(4083).View, { style: animatedStyle, pointerEvents: "none", children: null });
});
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/forums/native/ForumPostPlaceholder.tsx");

export default memoResult;