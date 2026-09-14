// === Module 15099: useVisibilityTransition ===

// Module 15099 (useVisibilityTransition)
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;
import timing from "timing" /* 4637 */;
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
  const tmp = exitTiming(noop.useState(false), 2);
  noop = tmp2;
  const tmp3 = exitTiming(noop.useState(visible), 2);
  if (tmp3[0] !== visible) {
    tmp3[1](visible);
    if (!visible) {
      tmp2(true);
    }
  }
  __initData = noop.useCallback(() => {
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
      visible(entranceTiming[2]).runOnJS(callback)();
    };
    const obj = timing;
    const tmp4 = visible ? entranceTiming : exitTiming;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, animationCallbackJSThread };
    fn.__workletHash = 11904317879470;
    fn.__initData = __initData;
    obj2.opacity = obj.withTiming(num, tmp4, "respect-motion-settings", fn);
    return obj2;
  };
  const obj3 = visible(entranceTiming[2]);
  fn.__closure = { withTiming: visible(entranceTiming[3]).withTiming, visibility: num, visible, entranceTiming, exitTiming, runOnJS: visible(entranceTiming[2]).runOnJS, animationCallbackJSThread: __initData };
  fn.__workletHash = 12648900540770;
  fn.__initData = __initData;
  obj2.opacityStyle = obj3.useAnimatedStyle(fn);
  if (!visible) {
    visible = tmp[0];
  }
  obj2.shouldRender = visible;
  return obj2;
};