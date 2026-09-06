// === Module 15008: useVisibilityTransition ===

// Module 15008 (useVisibilityTransition)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = { code: "function useVisibilityTransitionTsx1(){const{withTiming,visibility,visible,entranceTiming,exitTiming,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visibility,visible?entranceTiming:exitTiming,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}" };
let closure_5 = { code: "function useVisibilityTransitionTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useVisibilityTransition.tsx");

export const useVisibilityTransition = function useVisibilityTransition(visible) {
  visible = visible.visible;
  const entranceTiming = visible.entranceTiming;
  const exitTiming = visible.exitTiming;
  noop = undefined;
  __initData = undefined;
  let num;
  let obj = noop;
  const tmp = exitTiming(noop.useState(false), 2);
  noop = tmp2;
  const tmp3 = exitTiming(noop.useState(visible), 2);
  if (tmp3[0] !== visible) {
    tmp3[1](visible);
    if (!visible) {
      tmp2(true);
    }
  }
  __initData = obj.useCallback(() => {
    closure_3(false);
  }, []);
  num = 0;
  if (visible) {
    num = 1;
  }
  obj = { opacityStyle: null, shouldRender: null };
  let fn = function k() {
    let obj = { opacity: null };
    const fn = function n() {
      visible(entranceTiming[2]).runOnJS(callback)();
    };
    obj = { runOnJS: ReanimatedRexport.runOnJS, animationCallbackJSThread };
    fn.__closure = obj;
    fn.__workletHash = 11904317879470;
    fn.__initData = __initData;
    obj.opacity = obj.withTiming(num, visible ? entranceTiming : exitTiming, "respect-motion-settings", fn);
    return obj;
  };
  obj = { withTiming: visible(entranceTiming[3]).withTiming, visibility: num, visible, entranceTiming, exitTiming, runOnJS: visible(entranceTiming[2]).runOnJS, animationCallbackJSThread: __initData };
  fn.__closure = obj;
  fn.__workletHash = 12648900540770;
  fn.__initData = __initData;
  obj.opacityStyle = visible(entranceTiming[2]).useAnimatedStyle(fn);
  if (!visible) {
    visible = tmp[0];
  }
  obj.shouldRender = visible;
  return obj;
};