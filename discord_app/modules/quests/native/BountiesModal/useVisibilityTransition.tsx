// discord_app/modules/quests/native/BountiesModal/useVisibilityTransition.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";

const require = fn;
let closure_4 = { code: "function useVisibilityTransitionTsx1(){const{withTiming,visibility,visible,entranceTiming,exitTiming,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visibility,visible?entranceTiming:exitTiming,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}" };
let closure_5 = { code: "function useVisibilityTransitionTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
const result = require("obj132").fileFinishedImporting("modules/quests/native/BountiesModal/useVisibilityTransition.tsx");

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
  let fn = function k() {
    visible(entranceTiming[3]);
    const fn = function n() {
      visible(entranceTiming[2]).runOnJS(closure_4)();
    };
    const obj = { runOnJS: visible(entranceTiming[2]).runOnJS, animationCallbackJSThread: callback };
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