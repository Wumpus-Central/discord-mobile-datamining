// === Module 12785: useEntranceAnimation ===

// Module 12785 (useEntranceAnimation)
import native from "native" /* 1188 */;
import react_native from "react-native" /* 1259 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

function setUseEntranceAnimationState(arg0) {
  let closure_0;
  _require = arg0;
  obj = require("react-native");
  obj.batchUpdates(() => obj2.setState(closure_0));
}
let obj = { duration: 300, easing: native.STANDARD_EASING };
let obj2 = module_570.create(() => ({ isComplete: false }));
let closure_7 = { code: "function useEntranceAnimationTsx1(){const{runOnJS,setUseEntranceAnimationState}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});}" };
const __initData = { code: "function useEntranceAnimationTsx2(){const{runOnJS,setUseEntranceAnimationState,incrementLoads}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});runOnJS(incrementLoads)();}" };
let closure_9 = { code: "function useEntranceAnimationTsx3(){const{runOnJS,setUseEntranceAnimationState}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});}" };
let closure_10 = { code: "function useEntranceAnimationTsx4(){const{runOnJS,setUseEntranceAnimationState,incrementLoads}=this.__closure;runOnJS(setUseEntranceAnimationState)({isComplete:true});runOnJS(incrementLoads)();}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp3;
  let tmp5;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(9);
  [tmp3, dependencyMap] = incrementLoads(react.useState(0), 2);
  const tmp2 = incrementLoads(react.useState(0), 2);
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
      let state;
      obj = react_native;
      obj.batchUpdates(() => state.setState({ isComplete: false }));
      const fn = function t() {
        obj = closure_1_0(closure_1_1[8]);
        obj.runOnJS(closure_1_6)({ isComplete: true });
      };
      set = closure_0.set;
      obj2 = timing;
      fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState };
      fn.__workletHash = 7427534745615;
      fn.__initData = __initData;
      ({ runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState });
      const result = set(obj2.withTiming(1, obj, "respect-motion-settings", fn));
    };
    cResult[1] = arg0;
    cResult[2] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    class J {
      constructor() {
        let state;
        if (1 !== closure_0.get()) {
          obj = react_native;
          obj.batchUpdates(() => state.setState({ isComplete: false }));
          set = closure_0.set;
          const fn = function t() {
            obj = closure_0(dependencyMap[8]);
            obj.runOnJS(setUseEntranceAnimationState)({ isComplete: true });
            obj2 = closure_0(dependencyMap[8]);
            obj2.runOnJS(incrementLoads)();
          };
          const tmp7 = timing;
          obj2 = { runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState, incrementLoads };
          const withTiming = tmp7.withTiming;
          fn.__closure = obj2;
          fn.__workletHash = 9904090637386;
          fn.__initData = __initData2;
          const result = set(withTiming(1, obj, "respect-motion-settings", fn));
        } else {
          incrementLoads();
        }
      }
    }
    cResult[3] = arg0;
    cResult[4] = J;
  } else {
    class J {
      constructor() {
        let state;
        if (1 !== closure_0.get()) {
          obj = react_native;
          obj.batchUpdates(() => state.setState({ isComplete: false }));
          set = closure_0.set;
          const fn = function t() {
            obj = closure_0(dependencyMap[8]);
            obj.runOnJS(setUseEntranceAnimationState)({ isComplete: true });
            obj2 = closure_0(dependencyMap[8]);
            obj2.runOnJS(incrementLoads)();
          };
          const tmp7 = timing;
          obj2 = { runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState, incrementLoads };
          const withTiming = tmp7.withTiming;
          fn.__closure = obj2;
          fn.__workletHash = 9904090637386;
          fn.__initData = __initData2;
          const result = set(withTiming(1, obj, "respect-motion-settings", fn));
        } else {
          incrementLoads();
        }
      }
    }
  }
  if (cResult[5] === J) {
    class J {
      constructor() {
        let state;
        if (1 !== closure_0.get()) {
          obj = react_native;
          obj.batchUpdates(() => state.setState({ isComplete: false }));
          set = closure_0.set;
          const fn = function t() {
            obj = closure_0(dependencyMap[8]);
            obj.runOnJS(setUseEntranceAnimationState)({ isComplete: true });
            obj2 = closure_0(dependencyMap[8]);
            obj2.runOnJS(incrementLoads)();
          };
          const tmp7 = timing;
          obj2 = { runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState, incrementLoads };
          const withTiming = tmp7.withTiming;
          fn.__closure = obj2;
          fn.__workletHash = 9904090637386;
          fn.__initData = __initData2;
          const result = set(withTiming(1, obj, "respect-motion-settings", fn));
        } else {
          incrementLoads();
        }
      }
    }
  }
  obj2 = { loads: tmp3, handleLoadStart: tmp5, handleError: J, handleLoad: J };
  cResult[5] = J;
  cResult[6] = tmp3;
  cResult[7] = tmp5;
  cResult[8] = obj2;
}) : ((arg0) => {
  let tmp2;
  let closure_0 = arg0;
  [tmp2, dependencyMap] = incrementLoads(react.useState(0), 2);
  const tmp = incrementLoads(react.useState(0), 2);
  incrementLoads = react.useCallback(() => {
    dependencyMap((arg0) => arg0 + 1);
  }, []);
  const items = [arg0];
  const items1 = [incrementLoads, arg0];
  const handleLoadStart = react.useCallback(() => {
    let state;
    obj = react_native;
    obj.batchUpdates(() => state.setState({ isComplete: false }));
    const fn = function t() {
      obj = closure_1_0(closure_1_1[8]);
      obj.runOnJS(closure_1_6)({ isComplete: true });
    };
    set = closure_0.set;
    obj2 = timing;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState };
    fn.__workletHash = 6216271233933;
    fn.__initData = __initData;
    ({ runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState });
    const result = set(obj2.withTiming(1, obj, "respect-motion-settings", fn));
  }, items);
  const handleError = react.useCallback(() => {
    let state;
    if (1 !== closure_0.get()) {
      obj = react_native;
      obj.batchUpdates(() => state.setState({ isComplete: false }));
      set = closure_0.set;
      const fn = function t() {
        obj = closure_0(dependencyMap[8]);
        obj.runOnJS(setUseEntranceAnimationState)({ isComplete: true });
        obj2 = closure_0(dependencyMap[8]);
        obj2.runOnJS(incrementLoads)();
      };
      const tmp7 = timing;
      obj2 = { runOnJS: ReanimatedRexport.runOnJS, setUseEntranceAnimationState, incrementLoads };
      const withTiming = tmp7.withTiming;
      fn.__closure = obj2;
      fn.__workletHash = 5072314086348;
      fn.__initData = __initData2;
      const result = set(withTiming(1, obj, "respect-motion-settings", fn));
    } else {
      incrementLoads();
    }
  }, items1);
  return { loads, handleLoadStart, handleError, handleLoad: handleError };
});
let result = size.fileFinishedImporting("modules/media_viewer/native/useEntranceAnimation.tsx");

export const useEntranceAnimationState = obj2;
export const useEntranceAnimation = tmp3;