// === Module 15270: useBountiesRecapOrbCount ===

// Module 15270 (useBountiesRecapOrbCount)
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import useBountiesRecapScroll from "useBountiesRecapScroll" /* 15269 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let c4 = 0.95;
function getRecapOrbCountFromPullProgress(arg0, arg1) {
  if (arg1 > 0) {
    const _Number = Number;
    if (Number.isFinite(arg1)) {
      const _Math = Math;
      const _Math2 = Math;
      const _Math3 = Math;
      return Math.round(Math.min(1, Math.max(0, arg0)) * arg1);
    }
  }
  return 0;
}
getRecapOrbCountFromPullProgress.__closure = {};
getRecapOrbCountFromPullProgress.__workletHash = 14295638108053;
getRecapOrbCountFromPullProgress.__initData = { code: "function getRecapOrbCountFromPullProgress_useBountiesRecapOrbCountTsx1(progress,targetOrbAmount){if(targetOrbAmount<=0||!Number.isFinite(targetOrbAmount)){return 0;}const clampedProgress=Math.min(1,Math.max(0,progress));return Math.round(clampedProgress*targetOrbAmount);}" };
let closure_6 = { code: "function useBountiesRecapOrbCountTsx2(){const{enabled,recapRevealHeight,getRevealProgress,scrollY,lastBountyScrollOffset,RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS,getRecapOrbCountFromPullProgress,targetOrbAmount}=this.__closure;if(!enabled||recapRevealHeight<=0){return{count:0,revealed:false};}const pullProgress=getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight)/RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS;if(pullProgress<=0.1){return{count:0,revealed:false};}return{count:getRecapOrbCountFromPullProgress(pullProgress,targetOrbAmount),revealed:true};}" };
let closure_7 = { code: "function useBountiesRecapOrbCountTsx3(t1){const{runOnJS,resetDisplayCount,setDisplayCountMonotonic}=this.__closure;const{count:count_0,revealed:revealed}=t1;if(!revealed){runOnJS(resetDisplayCount)();return;}runOnJS(setDisplayCountMonotonic)(count_0);}" };
const __initData = { code: "function useBountiesRecapOrbCountTsx4(){const{enabled,recapRevealHeight,getRevealProgress,scrollY,lastBountyScrollOffset,RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS,getRecapOrbCountFromPullProgress,targetOrbAmount}=this.__closure;if(!enabled||recapRevealHeight<=0){return{count:0,revealed:false};}const pullProgress=getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight)/RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS;if(pullProgress<=0.1){return{count:0,revealed:false};}return{count:getRecapOrbCountFromPullProgress(pullProgress,targetOrbAmount),revealed:true};}" };
const __initData2 = { code: "function useBountiesRecapOrbCountTsx5({count:count_0,revealed:revealed}){const{runOnJS,resetDisplayCount,setDisplayCountMonotonic}=this.__closure;if(!revealed){runOnJS(resetDisplayCount)();return;}runOnJS(setDisplayCountMonotonic)(count_0);}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesRecapOrbCount.tsx");

export { getRecapOrbCountFromPullProgress };
export const useBountiesRecapOrbCount = ReactCompilerGating.isReactCompilerEnabled() ? (function useBountiesRecapOrbCount(scrollY) {
  scrollY = scrollY.scrollY;
  const lastBountyScrollOffset = scrollY.lastBountyScrollOffset;
  const recapRevealHeight = scrollY.recapRevealHeight;
  const targetOrbAmount = scrollY.targetOrbAmount;
  const enabled = scrollY.enabled;
  let tmp = recapRevealHeight(targetOrbAmount.useState(0), 2);
  getRecapOrbCountFromPullProgress = tmp[1];
  function setDisplayCountMonotonic(arg0) {
    closure_0 = arg0;
    closure_5((arg0) => {
      let tmp = arg0;
      if (closure_0 > arg0) {
        tmp = closure_0;
      }
      return tmp;
    });
  }
  function resetDisplayCount() {
    closure_5(0);
  }
  class R {
    constructor() {
      if (enabled) {
        num = 0;
        if (recapRevealHeight > 0) {
          tmp3 = closure_0;
          tmp4 = closure_1;
          obj2 = closure_0(closure_1[4]);
          tmp5 = scrollY;
          tmp6 = lastBountyScrollOffset;
          tmp7 = c4;
          result = obj2.getRevealProgress(scrollY.get(), lastBountyScrollOffset, tmp) / c4;
          num4 = 0.1;
          if (result <= 0.1) {
            obj = { count: 0, revealed: false };
          } else {
            tmp9 = getRecapOrbCountFromPullProgress;
            tmp10 = targetOrbAmount;
            if (typeof getRecapOrbCountFromPullProgress === "function") {
              num2 = 0;
              if (tmp10 > 0) {
                tmp2 = globalThis;
                _Number = Number;
                num2 = 0;
                if (Number.isFinite(tmp10)) {
                  _Math = Math;
                  _Math2 = Math;
                  num3 = 1;
                  _Math3 = Math;
                  num2 = Math.round(Math.min(1, Math.max(0, result)) * tmp10);
                }
              }
              obj = { count: null, revealed: true };
              obj.count = num2;
            } else {
              str = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
          return obj;
        }
      }
      return { count: 0, revealed: false };
    }
  }
  let obj = scrollY(lastBountyScrollOffset[3]);
  R.__closure = { enabled, recapRevealHeight, getRevealProgress: scrollY(lastBountyScrollOffset[4]).getRevealProgress, scrollY, lastBountyScrollOffset, RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS: enabled, getRecapOrbCountFromPullProgress, targetOrbAmount };
  R.__workletHash = 2855285055570;
  R.__initData = setDisplayCountMonotonic;
  const fn = function _(arg0) {
    ({ count, revealed } = arg0);
    const runOnJS = ReanimatedRexport.runOnJS;
    if (revealed) {
      runOnJS(setDisplayCountMonotonic)(count);
    } else {
      runOnJS(resetDisplayCount)();
    }
  };
  const obj2 = { enabled, recapRevealHeight, getRevealProgress: scrollY(lastBountyScrollOffset[4]).getRevealProgress, scrollY, lastBountyScrollOffset, RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS: enabled, getRecapOrbCountFromPullProgress, targetOrbAmount };
  fn.__closure = { runOnJS: scrollY(lastBountyScrollOffset[3]).runOnJS, resetDisplayCount, setDisplayCountMonotonic };
  fn.__workletHash = 11866742563582;
  fn.__initData = resetDisplayCount;
  const animatedReaction = obj.useAnimatedReaction(R, fn);
  return tmp[0];
}) : (function useBountiesRecapOrbCount(scrollY) {
  scrollY = scrollY.scrollY;
  const lastBountyScrollOffset = scrollY.lastBountyScrollOffset;
  const recapRevealHeight = scrollY.recapRevealHeight;
  const targetOrbAmount = scrollY.targetOrbAmount;
  const enabled = scrollY.enabled;
  getRecapOrbCountFromPullProgress = undefined;
  [tmp2, c5] = recapRevealHeight(targetOrbAmount.useState(0), 2);
  const setDisplayCountMonotonic = targetOrbAmount.useCallback((arg0) => {
    closure_0 = arg0;
    _undefined((arg0) => {
      let tmp = arg0;
      if (closure_0 > arg0) {
        tmp = closure_0;
      }
      return tmp;
    });
  }, []);
  const callback1 = targetOrbAmount.useCallback(() => {
    _undefined(0);
  }, []);
  let tmp = recapRevealHeight(targetOrbAmount.useState(0), 2);
  class C {
    constructor() {
      if (enabled) {
        num = 0;
        if (recapRevealHeight > 0) {
          tmp3 = closure_0;
          tmp4 = closure_1;
          obj2 = closure_0(closure_1[4]);
          tmp5 = scrollY;
          tmp6 = lastBountyScrollOffset;
          tmp7 = c4;
          result = obj2.getRevealProgress(scrollY.get(), lastBountyScrollOffset, tmp) / c4;
          num4 = 0.1;
          if (result <= 0.1) {
            obj = { count: 0, revealed: false };
          } else {
            tmp9 = getRecapOrbCountFromPullProgress;
            tmp10 = targetOrbAmount;
            if (typeof getRecapOrbCountFromPullProgress === "function") {
              num2 = 0;
              if (tmp10 > 0) {
                tmp2 = globalThis;
                _Number = Number;
                num2 = 0;
                if (Number.isFinite(tmp10)) {
                  _Math = Math;
                  _Math2 = Math;
                  num3 = 1;
                  _Math3 = Math;
                  num2 = Math.round(Math.min(1, Math.max(0, result)) * tmp10);
                }
              }
              obj = { count: null, revealed: true };
              obj.count = num2;
            } else {
              str = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
          return obj;
        }
      }
      return { count: 0, revealed: false };
    }
  }
  let obj = scrollY(lastBountyScrollOffset[3]);
  C.__closure = { enabled, recapRevealHeight, getRevealProgress: scrollY(lastBountyScrollOffset[4]).getRevealProgress, scrollY, lastBountyScrollOffset, RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS: enabled, getRecapOrbCountFromPullProgress, targetOrbAmount };
  C.__workletHash = 4646852023252;
  C.__initData = __initData;
  const fn = function v(arg0) {
    ({ count, revealed } = arg0);
    const runOnJS = ReanimatedRexport.runOnJS;
    if (revealed) {
      runOnJS(callback)(count);
    } else {
      runOnJS(callback1)();
    }
  };
  const obj2 = { enabled, recapRevealHeight, getRevealProgress: scrollY(lastBountyScrollOffset[4]).getRevealProgress, scrollY, lastBountyScrollOffset, RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS: enabled, getRecapOrbCountFromPullProgress, targetOrbAmount };
  fn.__closure = { runOnJS: scrollY(lastBountyScrollOffset[3]).runOnJS, resetDisplayCount: callback1, setDisplayCountMonotonic };
  fn.__workletHash = 14883339167099;
  fn.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(C, fn);
  return tmp2;
});