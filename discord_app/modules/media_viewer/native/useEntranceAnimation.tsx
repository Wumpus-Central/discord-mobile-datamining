// === Module 13069: setUseEntranceAnimationState ===

// Module 13069 (setUseEntranceAnimationState)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import keys from "keys" /* 641 */;

const require = arg1;
function setUseEntranceAnimationState(arg0) {
  const _require = arg0;
  _require(702).batchUpdates(() => closure_1_5.setState(closure_0));
}
let obj = { duration: 300, easing: require("Button").STANDARD_EASING };
obj = keys.create(() => ({ isComplete: false }));
let closure_7 = { code: "function useEntranceAnimationTsx1(){const{runOnJS,setUseEntranceAnimationState}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});}" };
let closure_8 = { code: "function useEntranceAnimationTsx2(){const{runOnJS,setUseEntranceAnimationState,incrementLoads}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});runOnJS(incrementLoads)();}" };
let result = require("set").fileFinishedImporting("modules/media_viewer/native/useEntranceAnimation.tsx");

export const useEntranceAnimationState = obj;
export const useEntranceAnimation = function useEntranceAnimation(entranceAnimationDriver) {
  closure_0 = entranceAnimationDriver;
  [tmp2, dependencyMap] = callback(React.useState(0), 2);
  callback = React.useCallback(() => {
    callback((arg0) => arg0 + 1);
  }, []);
  const items = [entranceAnimationDriver];
  const items1 = [callback, entranceAnimationDriver];
  const handleLoadStart = React.useCallback(() => {
    obj = entranceAnimationDriver(closure_1_1[4]);
    obj.batchUpdates(() => state.setState({ isComplete: false }));
    const fn = function t() {
      callback(table[6]).runOnJS(closure_6)({ isComplete: true });
    };
    obj = { runOnJS: entranceAnimationDriver(closure_1_1[6]).runOnJS, setUseEntranceAnimationState: closure_1_6 };
    fn.__closure = obj;
    fn.__workletHash = 7427534745615;
    fn.__initData = closure_1_7;
    const result = entranceAnimationDriver.set(entranceAnimationDriver(closure_1_1[5]).withTiming(1, closure_1_4, "respect-motion-settings", fn));
  }, items);
  const handleError = React.useCallback(() => {
    obj = entranceAnimationDriver;
    if (1 !== entranceAnimationDriver.get()) {
      entranceAnimationDriver(closure_1_1[4]).batchUpdates(() => state.setState({ isComplete: false }));
      const obj3 = entranceAnimationDriver(closure_1_1[5]);
      const fn = function t() {
        closure_1_0(closure_1_1[6]).runOnJS(closure_1_6)({ isComplete: true });
        obj = closure_1_0(closure_1_1[6]);
        closure_1_0(closure_1_1[6]).runOnJS(closure_2)();
      };
      obj = { runOnJS: null, setUseEntranceAnimationState: null, incrementLoads: null };
      obj[0] = entranceAnimationDriver(closure_1_1[6]).runOnJS;
      obj[1] = closure_1_6;
      obj[2] = callback;
      fn.__closure = obj;
      fn.__workletHash = 9904090637386;
      fn.__initData = closure_1_8;
      const result = obj.set(obj3.withTiming(1, closure_1_4, "respect-motion-settings", fn));
      const obj2 = entranceAnimationDriver(closure_1_1[4]);
    } else {
      callback();
    }
  }, items1);
  return { loads, handleLoadStart, handleError, handleLoad: handleError };
};