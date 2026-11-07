// === Module 17235: useVisibilityTransition ===

// Module 17235 (useVisibilityTransition)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5370 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = { code: "(function useVisibilityTransitionTsx1(){let[scheduleOnRN,animationCallbackJSThread]=this.__closure;scheduleOnRN(animationCallbackJSThread);})" };
let closure_5 = { code: "(function useVisibilityTransitionTsx2(){let[withTiming,visibility,visible,entranceTiming,exitTiming,_worklet_12104567542037_init_data,scheduleOnRN,animationCallbackJSThread]=this.__closure;return{opacity:withTiming(visibility,visible?entranceTiming:exitTiming,'respect-motion-settings',function useVisibilityTransitionTsx1Factory([_worklet_12104567542037_init_data,scheduleOnRN,animationCallbackJSThread]){const useVisibilityTransitionTsx1=function(){scheduleOnRN(animationCallbackJSThread);};useVisibilityTransitionTsx1.__closure=[scheduleOnRN,animationCallbackJSThread];useVisibilityTransitionTsx1.__workletHash=12104567542037;useVisibilityTransitionTsx1.__initData=_worklet_12104567542037_init_data;return useVisibilityTransitionTsx1;}([_worklet_12104567542037_init_data,scheduleOnRN,animationCallbackJSThread]))};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useVisibilityTransition.tsx");

export function useVisibilityTransition(visible) {
  visible = visible.visible;
  ({ entranceTiming, exitTiming } = visible);
  const tmp = _slicedToArray(noop.useState(false), 2);
  c0 = tmp2;
  const tmp3 = _slicedToArray(noop.useState(visible), 2);
  if (tmp3[0] !== visible) {
    tmp3[1](visible);
    if (!visible) {
      tmp2(true);
    }
  }
  let num = 0;
  const callback = noop.useCallback(() => {
    _undefined(false);
  }, []);
  if (visible) {
    num = 1;
  }
  items = [closure_5, timing_timing.withTiming, num, visible, entranceTiming, exitTiming, closure_4, _mod1705.scheduleOnRN, callback];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  function useVisibilityTransitionTsx2() {
    items = [c5, c6, c7];
    [tmp3, tmp4, tmp5] = items;
    const obj = { opacity: null };
    function useVisibilityTransitionTsx1() {
      _undefined(closure_1_1);
    }
    const items1 = [tmp4, tmp5];
    useVisibilityTransitionTsx1.__closure = items1;
    useVisibilityTransitionTsx1.__workletHash = 12104567542037;
    useVisibilityTransitionTsx1.__initData = tmp3;
    obj.opacity = _undefined(c1, c2 ? c3 : c4, "respect-motion-settings", useVisibilityTransitionTsx1);
    return obj;
  }
  let items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  useVisibilityTransitionTsx2.__closure = items1;
  useVisibilityTransitionTsx2.__workletHash = 9776140762994;
  useVisibilityTransitionTsx2.__initData = tmp7;
  const obj3 = { opacityStyle: _mod1652.useAnimatedStyle(useVisibilityTransitionTsx2), shouldRender: null };
  if (!visible) {
    visible = tmp[0];
  }
  obj3.shouldRender = visible;
  return obj3;
}