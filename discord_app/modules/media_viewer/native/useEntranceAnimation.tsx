// discord_app/modules/media_viewer/native/useEntranceAnimation.tsx
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import _mod1705 from "../../../../_runtime/metro/01705__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function setUseEntranceAnimationState(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => obj4.setState(closure_0));
}
let obj = { duration: 300, easing: fn(1187).STANDARD_EASING };
const module_560 = fn(560);
const obj4 = module_560.create(() => ({ isComplete: false }));
let closure_7 = {
  code: "(function useEntranceAnimationTsx1(){let[scheduleOnRN,setUseEntranceAnimationState]=this.__closure;scheduleOnRN(setUseEntranceAnimationState,{isComplete:true});})",
};
let closure_8 = {
  code: "(function useEntranceAnimationTsx2(){let[scheduleOnRN,setUseEntranceAnimationState,incrementLoads]=this.__closure;scheduleOnRN(setUseEntranceAnimationState,{isComplete:true});scheduleOnRN(incrementLoads);})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useEntranceAnimation.tsx");

export const useEntranceAnimationState = obj4;
export function useEntranceAnimation(entranceAnimationDriver) {
  [tmp2, dependencyMap] = callback(noop.useState(0), 2);
  callback = noop.useCallback(() => {
    dependencyMap((arg0) => arg0 + 1);
  }, []);
  items = [entranceAnimationDriver];
  let items1 = [callback, entranceAnimationDriver];
  const handleLoadStart = noop.useCallback(() => {
    obj = ReactBatchUpdates;
    obj.batchUpdates(() => state.setState({ isComplete: false }));
    items = [closure_7, _mod1705.scheduleOnRN, setUseEntranceAnimationState];
    c0 = undefined;
    c1 = undefined;
    [tmp4, tmp5, tmp6] = items;
    function useEntranceAnimationTsx1() {
      _undefined(c1, { isComplete: true });
    }
    const items1 = [tmp5, tmp6];
    useEntranceAnimationTsx1.__closure = items1;
    useEntranceAnimationTsx1.__workletHash = 16107047177659;
    useEntranceAnimationTsx1.__initData = tmp4;
    const result = entranceAnimationDriver.set(
      timing_timing.withTiming(1, obj, "respect-motion-settings", useEntranceAnimationTsx1),
    );
  }, items);
  const handleError = noop.useCallback(() => {
    if (1 !== entranceAnimationDriver.get()) {
      ReactBatchUpdates.batchUpdates(() => state.setState({ isComplete: false }));
      const obj3 = timing_timing;
      items = [closure_8, _mod1705.scheduleOnRN, setUseEntranceAnimationState, callback];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      [tmp11, tmp12, tmp13, tmp14] = items;
      function useEntranceAnimationTsx2() {
        _undefined(c1, { isComplete: true });
        _undefined(c2);
      }
      const items1 = [tmp12, tmp13, tmp14];
      useEntranceAnimationTsx2.__closure = items1;
      useEntranceAnimationTsx2.__workletHash = 8615314949238;
      useEntranceAnimationTsx2.__initData = tmp11;
      const result = entranceAnimationDriver.set(
        obj3.withTiming(1, entranceAnimationDriver, "respect-motion-settings", useEntranceAnimationTsx2),
      );
    } else {
      callback();
    }
  }, items1);
  return { loads, handleLoadStart, handleError, handleLoad: handleError };
}
