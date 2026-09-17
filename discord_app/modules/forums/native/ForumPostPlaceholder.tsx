// discord_app/modules/forums/native/ForumPostPlaceholder.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let obj = { postPlaceholder: { height: 2 * nativeDefault.space.PX_64, marginBottom: nativeDefault.space.PX_12 } };
let closure_7 = createStyles.createStyles(obj);
let c8 = 0.55;
const __initData = {
  code: "function ForumPostPlaceholderTsx1(){const{reducedMotion,ROW_OPACITY_END,withDelay,INITIAL_DELAY_MS,withRepeat,withSequence,withTiming,timingConfig}=this.__closure;if(reducedMotion){return{opacity:ROW_OPACITY_END};}return{opacity:withDelay(INITIAL_DELAY_MS,withRepeat(withSequence(withTiming(ROW_OPACITY_END,timingConfig),withTiming(1,timingConfig)),-1,true))};}",
};
let obj3 = { height: 2 * nativeDefault.space.PX_64, marginBottom: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumPostPlaceholder.tsx");

export default noop.memo(() => {
  const tmp = closure_7();
  const items = [AccessibilityStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const timingConfig = _slicedToArray(
    noop.useState(() => {
      const obj = { timingConfig: null };
      const obj2 = { duration: 1000 + 500 * Math.random(), easing: null };
      const Easing = stateFromStores(4376).Easing;
      obj2.easing = Easing.inOut(stateFromStores(4376).Easing.sin);
      obj.timingConfig = obj2;
      return obj;
    }),
    1,
  )[0].timingConfig;
  let obj = stateFromStores(504);
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
      obj.opacity = obj2.withDelay(
        1000,
        obj3.withRepeat(obj4.withSequence(withTimingResult, timing.withTiming(1, timingConfig)), -1, true),
      );
      tmp6 = obj;
    }
    return tmp6;
  };
  let obj2 = stateFromStores(4376);
  fn.__closure = {
    reducedMotion: stateFromStores,
    ROW_OPACITY_END,
    withDelay: stateFromStores(4376).withDelay,
    INITIAL_DELAY_MS: 1000,
    withRepeat: stateFromStores(4376).withRepeat,
    withSequence: stateFromStores(4376).withSequence,
    withTiming: stateFromStores(4641).withTiming,
    timingConfig,
  };
  fn.__workletHash = 9488742940898;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = {
    style: animatedStyle,
    pointerEvents: "none",
    children: jsx(stateFromStores(5695).Card, { variant: "secondary", style: tmp.postPlaceholder }),
  };
  return jsx(timingConfig(4376).View, {
    style: animatedStyle,
    pointerEvents: "none",
    children: jsx(stateFromStores(5695).Card, { variant: "secondary", style: tmp.postPlaceholder }),
  });
});
