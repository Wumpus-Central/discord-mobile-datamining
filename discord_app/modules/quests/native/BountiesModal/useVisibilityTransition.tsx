// === Module 14834: useVisibilityTransition ===

// Module 14834 (useVisibilityTransition)
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = { code: "function useVisibilityTransitionTsx1(){const{withTiming,visibility,visible,entranceTiming,exitTiming,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visibility,visible?entranceTiming:exitTiming,\"respect-motion-settings\",function(){\"worklet\";runOnJS(animationCallbackJSThread)();})};}" };
let closure_5 = { code: "function useVisibilityTransitionTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
const __initData = { code: "function useVisibilityTransitionTsx3(){const{withTiming,visibility,visible,entranceTiming,exitTiming,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visibility,visible?entranceTiming:exitTiming,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}" };
let closure_7 = { code: "function useVisibilityTransitionTsx4(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useVisibilityTransition.tsx");

export const useVisibilityTransition = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  const cResult = visible(entranceTiming[3]).c(3);
  visible = visible.visible;
  entranceTiming = visible.entranceTiming;
  const exitTiming = visible.exitTiming;
  let tmp4 = exitTiming(noop.useState(false), 2);
  noop = tmp5;
  const tmp6 = exitTiming(noop.useState(visible), 2);
  if (tmp6[0] !== visible) {
    tmp6[1](visible);
    if (!visible) {
      tmp5(true);
    }
  }
  function animationCallbackJSThread() {
    closure_3(false);
  }
  let num = 0;
  if (visible) {
    num = 1;
  }
  let obj = visible(entranceTiming[3]);
  let fn = function w() {
    const obj2 = { opacity: null };
    const fn = function n() {
      visible(entranceTiming[4]).runOnJS(animationCallbackJSThread)();
    };
    const obj = timing;
    const tmp4 = visible ? entranceTiming : exitTiming;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, animationCallbackJSThread };
    fn.__workletHash = 11904317879470;
    fn.__initData = __initData;
    obj2.opacity = obj.withTiming(num, tmp4, "respect-motion-settings", fn);
    return obj2;
  };
  const tmpResult = visible(entranceTiming[4]);
  fn.__closure = { withTiming: visible(entranceTiming[5]).withTiming, visibility: num, visible, entranceTiming, exitTiming, runOnJS: visible(entranceTiming[4]).runOnJS, animationCallbackJSThread };
  fn.__workletHash = 15161321814882;
  fn.__initData = animationCallbackJSThread;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  let first = visible;
  if (!visible) {
    first = tmp4[0];
  }
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === first) {
      let tmp11 = cResult[2];
    }
    return tmp11;
  }
  const obj3 = { opacityStyle: animatedStyle, shouldRender: first };
  cResult[0] = animatedStyle;
  cResult[1] = first;
  cResult[2] = obj3;
  tmp11 = obj3;
}) : ((visible) => {
  visible = visible.visible;
  const entranceTiming = visible.entranceTiming;
  const exitTiming = visible.exitTiming;
  noop = undefined;
  let animationCallbackJSThread;
  let num;
  const tmp = exitTiming(noop.useState(false), 2);
  noop = tmp2;
  const tmp3 = exitTiming(noop.useState(visible), 2);
  if (tmp3[0] !== visible) {
    tmp3[1](visible);
    if (!visible) {
      tmp2(true);
    }
  }
  animationCallbackJSThread = noop.useCallback(() => {
    closure_3(false);
  }, []);
  num = 0;
  if (visible) {
    num = 1;
  }
  let obj2 = { opacityStyle: null, shouldRender: null };
  let fn = function k() {
    const obj2 = { opacity: null };
    const fn = function n() {
      visible(entranceTiming[4]).runOnJS(animationCallbackJSThread)();
    };
    const obj = timing;
    const tmp4 = visible ? entranceTiming : exitTiming;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, animationCallbackJSThread };
    fn.__workletHash = 1398088040;
    fn.__initData = __initData;
    obj2.opacity = obj.withTiming(num, tmp4, "respect-motion-settings", fn);
    return obj2;
  };
  const obj3 = visible(entranceTiming[4]);
  fn.__closure = { withTiming: visible(entranceTiming[5]).withTiming, visibility: num, visible, entranceTiming, exitTiming, runOnJS: visible(entranceTiming[4]).runOnJS, animationCallbackJSThread };
  fn.__workletHash = 2811685925792;
  fn.__initData = __initData;
  obj2.opacityStyle = obj3.useAnimatedStyle(fn);
  if (!visible) {
    visible = tmp[0];
  }
  obj2.shouldRender = visible;
  return obj2;
});