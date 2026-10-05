// === Module 14818: useVisibilityTransition ===

// Module 14818 (useVisibilityTransition)
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let react = react_mod;
let closure_4 = { code: "function useVisibilityTransitionTsx1(){const{withTiming,visibility,visible,entranceTiming,exitTiming,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visibility,visible?entranceTiming:exitTiming,\"respect-motion-settings\",function(){\"worklet\";runOnJS(animationCallbackJSThread)();})};}" };
let closure_5 = { code: "function useVisibilityTransitionTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
const __initData = { code: "function useVisibilityTransitionTsx3(){const{withTiming,visibility,visible,entranceTiming,exitTiming,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visibility,visible?entranceTiming:exitTiming,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}" };
let closure_7 = { code: "function useVisibilityTransitionTsx4(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  let closure_3;
  let entranceTiming;
  let obj = visible(entranceTiming[3]);
  const cResult = obj.c(3);
  visible = visible.visible;
  entranceTiming = visible.entranceTiming;
  const exitTiming = visible.exitTiming;
  let tmp4 = exitTiming(react.useState(false), 2);
  react = tmp6;
  const first = tmp4[0];
  const tmp7 = exitTiming(react.useState(visible), 2);
  if (tmp7[0] !== visible) {
    tmp7[1](visible);
    if (!visible) {
      tmp4[1](true);
    }
  }
  function animationCallbackJSThread() {
    closure_3(false);
  }
  let num = 0;
  if (visible) {
    num = 1;
  }
  let fn = function w() {
    let fn;
    let tmp4;
    let obj = timing;
    const obj2 = { opacity: obj.withTiming(num, tmp4, "respect-motion-settings", fn) };
    fn = function n() {
      const obj = visible(entranceTiming[4]);
      obj.runOnJS(animationCallbackJSThread)();
    };
    tmp4 = visible ? entranceTiming : exitTiming;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, animationCallbackJSThread };
    fn.__workletHash = 11904317879470;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, animationCallbackJSThread });
    return obj2;
  };
  const tmpResult = visible(entranceTiming[4]);
  let obj2 = { withTiming: tmp(tmp2[5]).withTiming, visibility: num, visible, entranceTiming, exitTiming, runOnJS: tmp(tmp2[4]).runOnJS, animationCallbackJSThread };
  fn.__closure = obj2;
  fn.__workletHash = 15161321814882;
  fn.__initData = animationCallbackJSThread;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    let tmp12;
    if (cResult[1] === (visible || first)) {
      tmp12 = cResult[2];
    }
    return tmp12;
  }
  const obj3 = { opacityStyle: animatedStyle, shouldRender: tmp11 };
  cResult[0] = animatedStyle;
  cResult[1] = visible || first;
  cResult[2] = obj3;
  tmp12 = obj3;
}) : ((visible) => {
  let closure_3;
  let fn;
  let obj3;
  visible = visible.visible;
  const entranceTiming = visible.entranceTiming;
  const exitTiming = visible.exitTiming;
  react = undefined;
  let animationCallbackJSThread;
  let num;
  let obj = react;
  const tmp = exitTiming(react.useState(false), 2);
  react = tmp3;
  const first = tmp[0];
  let tmp4 = exitTiming(react.useState(visible), 2);
  if (tmp4[0] !== visible) {
    tmp4[1](visible);
    if (!visible) {
      tmp[1](true);
    }
  }
  animationCallbackJSThread = obj.useCallback(() => {
    closure_3(false);
  }, []);
  num = 0;
  if (visible) {
    num = 1;
  }
  let obj2 = { opacityStyle: obj3.useAnimatedStyle(fn), shouldRender: visible };
  obj3 = visible(entranceTiming[4]);
  fn = function k() {
    let fn;
    let tmp4;
    let obj = timing;
    const obj2 = { opacity: obj.withTiming(num, tmp4, "respect-motion-settings", fn) };
    fn = function n() {
      const obj = visible(entranceTiming[4]);
      obj.runOnJS(animationCallbackJSThread)();
    };
    tmp4 = visible ? entranceTiming : exitTiming;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, animationCallbackJSThread };
    fn.__workletHash = 1398088040;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, animationCallbackJSThread });
    return obj2;
  };
  fn.__closure = { withTiming: visible(entranceTiming[5]).withTiming, visibility: num, visible, entranceTiming, exitTiming, runOnJS: visible(entranceTiming[4]).runOnJS, animationCallbackJSThread };
  fn.__workletHash = 2811685925792;
  fn.__initData = __initData;
  ({ withTiming: visible(entranceTiming[5]).withTiming, visibility: num, visible, entranceTiming, exitTiming, runOnJS: visible(entranceTiming[4]).runOnJS, animationCallbackJSThread });
  if (!visible) {
    visible = first;
  }
  return obj2;
});
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useVisibilityTransition.tsx");

export const useVisibilityTransition = tmp2;