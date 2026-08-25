// === Module 14462: useVisibilityTransition ===

// Module 14462 (useVisibilityTransition)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
let closure_4 = { code: "function useVisibilityTransitionTsx1(){const{withTiming,visibility,visible,entranceTiming,exitTiming,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visibility,visible?entranceTiming:exitTiming,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}" };
let closure_5 = { code: "function useVisibilityTransitionTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/useVisibilityTransition.tsx");

export const useVisibilityTransition = function useVisibilityTransition(visible) {
  visible = visible.visible;
  const entranceTiming = visible.entranceTiming;
  const exitTiming = visible.exitTiming;
  let React;
  let callback;
  let num;
  let obj = React;
  const tmp = exitTiming(React.useState(false), 2);
  React = tmp2;
  const tmp3 = exitTiming(React.useState(visible), 2);
  if (tmp3[0] !== visible) {
    tmp3[1](visible);
    if (!visible) {
      tmp2(true);
    }
  }
  callback = obj.useCallback(() => {
    callback(false);
  }, []);
  num = 0;
  if (visible) {
    num = 1;
  }
  obj = { opacityStyle: null, shouldRender: null };
  let fn = function k() {
    let obj = visible(entranceTiming[3]);
    obj = { opacity: null };
    const fn = function n() {
      closure_1_0(closure_1_1[2]).runOnJS(closure_4)();
    };
    obj = { runOnJS: visible(entranceTiming[2]).runOnJS, animationCallbackJSThread: callback };
    fn.__closure = obj;
    fn.__workletHash = 11904317879470;
    fn.__initData = num;
    obj[0] = obj.withTiming(num, visible ? entranceTiming : exitTiming, "respect-motion-settings", fn);
    return obj;
  };
  obj = { withTiming: visible(entranceTiming[3]).withTiming, visibility: num, visible, entranceTiming, exitTiming, runOnJS: visible(entranceTiming[2]).runOnJS, animationCallbackJSThread: callback };
  fn.__closure = obj;
  fn.__workletHash = 12648900540770;
  fn.__initData = callback;
  obj[0] = visible(entranceTiming[2]).useAnimatedStyle(fn);
  if (!visible) {
    visible = tmp[0];
  }
  obj[1] = visible;
  return obj;
};