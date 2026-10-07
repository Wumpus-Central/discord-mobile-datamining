// === Module 12804: useEntranceAnimation ===

// Module 12804 (useEntranceAnimation)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1259 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function setUseEntranceAnimationState(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => obj5.setState(closure_0));
}
let obj = { duration: 300, easing: fn(1188).STANDARD_EASING };
const module_570 = fn(570);
const obj5 = module_570.create(() => ({ isComplete: false }));
let closure_7 = { code: "function useEntranceAnimationTsx1(){const{runOnJS,setUseEntranceAnimationState}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});}" };
const __initData = { code: "function useEntranceAnimationTsx2(){const{runOnJS,setUseEntranceAnimationState,incrementLoads}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});runOnJS(incrementLoads)();}" };
let closure_9 = { code: "function useEntranceAnimationTsx3(){const{runOnJS,setUseEntranceAnimationState}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});}" };
let closure_10 = { code: "function useEntranceAnimationTsx4(){const{runOnJS,setUseEntranceAnimationState,incrementLoads}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});runOnJS(incrementLoads)();}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useEntranceAnimation.tsx");

export const useEntranceAnimationState = obj5;
export const useEntranceAnimation = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(9);
  obj = require("c");
  [tmp3, dependencyMap] = incrementLoads(noop.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function l() {
      dependencyMap((arg0) => arg0 + 1);
    };
    cResult[0] = fn;
    incrementLoads = fn;
  } else {
    incrementLoads = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn2 = function p() {
      obj = ReactBatchUpdates;
      obj.batchUpdates(() => state.setState({ isComplete: false }));
      const fn = function t() {
        closure_1_0(dependencyMap[8]).runOnJS(closure_1_6)({ isComplete: true });
      };
      const obj2 = timing;
      fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState };
      fn.__workletHash = 7427534745615;
      fn.__initData = __initData;
      const result = closure_0.set(obj2.withTiming(1, obj, "respect-motion-settings", fn));
    };
    cResult[1] = arg0;
    cResult[2] = fn2;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    class J {
      constructor() {
        obj = closure_0;
        if (1 !== closure_0.get()) {
          tmp3 = closure_0;
          tmp4 = closure_1;
          obj2 = closure_0(closure_1[4]);
          batchUpdatesResult = obj2.batchUpdates(() => state.setState({ isComplete: false }));
          obj3 = closure_0(closure_1[7]);
          tmp6 = closure_4;
          fn = function t() {
            closure_0(4618).runOnJS(setUseEntranceAnimationState)({ isComplete: true });
            obj = closure_0(4618);
            closure_0(4618).runOnJS(incrementLoads)();
          };
          obj1 = { runOnJS: null, setUseEntranceAnimationState: null, incrementLoads: null };
          obj1.runOnJS = closure_0(closure_1[8]).runOnJS;
          tmp7 = setUseEntranceAnimationState;
          obj1.setUseEntranceAnimationState = setUseEntranceAnimationState;
          tmp8 = closure_2;
          obj1.incrementLoads = closure_2;
          fn.__closure = obj1;
          num = 9904090637386;
          fn.__workletHash = 9904090637386;
          tmp9 = closure_8;
          fn.__initData = closure_8;
          str = "respect-motion-settings";
          tmp10 = obj3;
          num2 = 1;
          tmp11 = fn;
          result = obj.set(obj3.withTiming(1, closure_4, "respect-motion-settings", fn));
        } else {
          tmp = closure_2;
          tmp2 = closure_2();
        }
        return;
      }
    }
    cResult[3] = arg0;
    cResult[4] = J;
  } else {
    class J {
      constructor() {
        obj = closure_0;
        if (1 !== closure_0.get()) {
          tmp3 = closure_0;
          tmp4 = closure_1;
          obj2 = closure_0(closure_1[4]);
          batchUpdatesResult = obj2.batchUpdates(() => state.setState({ isComplete: false }));
          obj3 = closure_0(closure_1[7]);
          tmp6 = closure_4;
          fn = function t() {
            closure_0(4618).runOnJS(setUseEntranceAnimationState)({ isComplete: true });
            obj = closure_0(4618);
            closure_0(4618).runOnJS(incrementLoads)();
          };
          obj1 = { runOnJS: null, setUseEntranceAnimationState: null, incrementLoads: null };
          obj1.runOnJS = closure_0(closure_1[8]).runOnJS;
          tmp7 = setUseEntranceAnimationState;
          obj1.setUseEntranceAnimationState = setUseEntranceAnimationState;
          tmp8 = closure_2;
          obj1.incrementLoads = closure_2;
          fn.__closure = obj1;
          num = 9904090637386;
          fn.__workletHash = 9904090637386;
          tmp9 = closure_8;
          fn.__initData = closure_8;
          str = "respect-motion-settings";
          tmp10 = obj3;
          num2 = 1;
          tmp11 = fn;
          result = obj.set(obj3.withTiming(1, closure_4, "respect-motion-settings", fn));
        } else {
          tmp = closure_2;
          tmp2 = closure_2();
        }
        return;
      }
    }
  }
  if (cResult[5] === J) {
    class J {
      constructor() {
        obj = closure_0;
        if (1 !== closure_0.get()) {
          tmp3 = closure_0;
          tmp4 = closure_1;
          obj2 = closure_0(closure_1[4]);
          batchUpdatesResult = obj2.batchUpdates(() => state.setState({ isComplete: false }));
          obj3 = closure_0(closure_1[7]);
          tmp6 = closure_4;
          fn = function t() {
            closure_0(4618).runOnJS(setUseEntranceAnimationState)({ isComplete: true });
            obj = closure_0(4618);
            closure_0(4618).runOnJS(incrementLoads)();
          };
          obj1 = { runOnJS: null, setUseEntranceAnimationState: null, incrementLoads: null };
          obj1.runOnJS = closure_0(closure_1[8]).runOnJS;
          tmp7 = setUseEntranceAnimationState;
          obj1.setUseEntranceAnimationState = setUseEntranceAnimationState;
          tmp8 = closure_2;
          obj1.incrementLoads = closure_2;
          fn.__closure = obj1;
          num = 9904090637386;
          fn.__workletHash = 9904090637386;
          tmp9 = closure_8;
          fn.__initData = closure_8;
          str = "respect-motion-settings";
          tmp10 = obj3;
          num2 = 1;
          tmp11 = fn;
          result = obj.set(obj3.withTiming(1, closure_4, "respect-motion-settings", fn));
        } else {
          tmp = closure_2;
          tmp2 = closure_2();
        }
        return;
      }
    }
  }
  cResult[5] = J;
  cResult[6] = tmp3;
  cResult[7] = tmp5;
  cResult[8] = { loads: tmp3, handleLoadStart: tmp5, handleError: J, handleLoad: J };
  let obj2 = { loads: tmp3, handleLoadStart: tmp5, handleError: J, handleLoad: J };
  const tmp2 = incrementLoads(noop.useState(0), 2);
}) : ((arg0) => {
  closure_0 = arg0;
  [tmp2, dependencyMap] = incrementLoads(noop.useState(0), 2);
  incrementLoads = noop.useCallback(() => {
    dependencyMap((arg0) => arg0 + 1);
  }, []);
  const items = [arg0];
  const items1 = [incrementLoads, arg0];
  const handleLoadStart = noop.useCallback(() => {
    obj = ReactBatchUpdates;
    obj.batchUpdates(() => state.setState({ isComplete: false }));
    const fn = function t() {
      closure_1_0(dependencyMap[8]).runOnJS(closure_1_6)({ isComplete: true });
    };
    const obj2 = timing;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState };
    fn.__workletHash = 6216271233933;
    fn.__initData = __initData;
    const result = closure_0.set(obj2.withTiming(1, obj, "respect-motion-settings", fn));
  }, items);
  const handleError = noop.useCallback(() => {
    if (1 !== closure_0.get()) {
      ReactBatchUpdates.batchUpdates(() => state.setState({ isComplete: false }));
      const obj3 = timing;
      const fn = function t() {
        closure_0(4618).runOnJS(setUseEntranceAnimationState)({ isComplete: true });
        obj = closure_0(4618);
        closure_0(4618).runOnJS(incrementLoads)();
      };
      const obj4 = { runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState, incrementLoads };
      fn.__closure = obj4;
      fn.__workletHash = 5072314086348;
      fn.__initData = __initData2;
      const result = closure_0.set(obj3.withTiming(1, closure_0, "respect-motion-settings", fn));
    } else {
      incrementLoads();
    }
  }, items1);
  return { loads, handleLoadStart, handleError, handleLoad: handleError };
});