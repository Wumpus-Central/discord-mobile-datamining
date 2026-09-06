// discord_app/modules/media_viewer/native/useEntranceAnimation.tsx
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function setUseEntranceAnimationState(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => obj.setState(closure_0));
}
let obj = { duration: 300, easing: fn(1178).STANDARD_EASING };
const module_560 = fn(560);
obj = module_560.create(() => ({ isComplete: false }));
let closure_7 = {
  code: "function useEntranceAnimationTsx1(){const{runOnJS,setUseEntranceAnimationState}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});}",
};
let closure_8 = {
  code: "function useEntranceAnimationTsx2(){const{runOnJS,setUseEntranceAnimationState,incrementLoads}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});runOnJS(incrementLoads)();}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useEntranceAnimation.tsx");

export const useEntranceAnimationState = obj;
export const useEntranceAnimation = function useEntranceAnimation(entranceAnimationDriver) {
  [tmp2, dependencyMap] = incrementLoads(noop.useState(0), 2);
  incrementLoads = noop.useCallback(() => {
    dependencyMap((arg0) => arg0 + 1);
  }, []);
  const items = [entranceAnimationDriver];
  const items1 = [incrementLoads, entranceAnimationDriver];
  const handleLoadStart = noop.useCallback(() => {
    obj = ReactBatchUpdates;
    obj.batchUpdates(() => state.setState({ isComplete: false }));
    const fn = function t() {
      entranceAnimationDriver(dependencyMap[6]).runOnJS(closure_1_6)({ isComplete: true });
    };
    obj = { runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState };
    fn.__closure = obj;
    fn.__workletHash = 7427534745615;
    fn.__initData = __initData;
    const result = entranceAnimationDriver.set(timing.withTiming(1, obj, "respect-motion-settings", fn));
  }, items);
  const handleError = noop.useCallback(() => {
    obj = entranceAnimationDriver;
    if (1 !== entranceAnimationDriver.get()) {
      ReactBatchUpdates.batchUpdates(() => state.setState({ isComplete: false }));
      const obj3 = timing;
      const fn = function t() {
        closure_0(4296).runOnJS(setUseEntranceAnimationState)({ isComplete: true });
        obj = closure_0(4296);
        closure_0(4296).runOnJS(incrementLoads)();
      };
      obj = { runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState, incrementLoads };
      fn.__closure = obj;
      fn.__workletHash = 9904090637386;
      fn.__initData = __initData2;
      const result = obj.set(obj3.withTiming(1, obj, "respect-motion-settings", fn));
    } else {
      incrementLoads();
    }
  }, items1);
  return { loads, handleLoadStart, handleError, handleLoad: handleError };
};
