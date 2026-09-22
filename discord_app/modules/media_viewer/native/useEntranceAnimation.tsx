// === Module 13282: useEntranceAnimation ===

// Module 13282 (useEntranceAnimation)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1248 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4493 */;
import timing from "timing" /* 4758 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function setUseEntranceAnimationState(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => obj4.setState(closure_0));
}
let obj = { duration: 300, easing: fn(1177).STANDARD_EASING };
const module_560 = fn(560);
let obj4 = module_560.create(() => ({ isComplete: false }));
let closure_7 = { code: "function useEntranceAnimationTsx1(){const{runOnJS,setUseEntranceAnimationState}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});}" };
let closure_8 = { code: "function useEntranceAnimationTsx2(){const{runOnJS,setUseEntranceAnimationState,incrementLoads}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});runOnJS(incrementLoads)();}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useEntranceAnimation.tsx");

export const useEntranceAnimationState = obj4;
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
    const obj2 = timing;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState };
    fn.__workletHash = 7427534745615;
    fn.__initData = __initData;
    const result = entranceAnimationDriver.set(obj2.withTiming(1, obj, "respect-motion-settings", fn));
  }, items);
  const handleError = noop.useCallback(() => {
    if (1 !== entranceAnimationDriver.get()) {
      ReactBatchUpdates.batchUpdates(() => state.setState({ isComplete: false }));
      const obj3 = timing;
      const fn = function t() {
        closure_0(4493).runOnJS(setUseEntranceAnimationState)({ isComplete: true });
        obj = closure_0(4493);
        closure_0(4493).runOnJS(incrementLoads)();
      };
      obj4 = { runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState, incrementLoads };
      fn.__closure = obj4;
      fn.__workletHash = 9904090637386;
      fn.__initData = __initData2;
      const result = entranceAnimationDriver.set(obj3.withTiming(1, entranceAnimationDriver, "respect-motion-settings", fn));
    } else {
      incrementLoads();
    }
  }, items1);
  return { loads, handleLoadStart, handleError, handleLoad: handleError };
};