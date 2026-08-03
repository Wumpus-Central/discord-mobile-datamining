// === Module 14062: getRecapOrbCountFromPullProgress ===

// Module 14062 (getRecapOrbCountFromPullProgress)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
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
let closure_5 = { code: "function useBountiesRecapOrbCountTsx2(){const{enabled,recapRevealHeight,getRevealProgress,scrollY,lastBountyScrollOffset,RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS,getRecapOrbCountFromPullProgress,targetOrbAmount}=this.__closure;if(!enabled||recapRevealHeight<=0){return{count:0,revealed:false};}const pullProgress=getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight)/RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS;if(pullProgress<=0.1){return{count:0,revealed:false};}return{count:getRecapOrbCountFromPullProgress(pullProgress,targetOrbAmount),revealed:true};}" };
let closure_6 = { code: "function useBountiesRecapOrbCountTsx3({count:count,revealed:revealed}){const{runOnJS,resetDisplayCount,setDisplayCountMonotonic}=this.__closure;if(!revealed){runOnJS(resetDisplayCount)();return;}runOnJS(setDisplayCountMonotonic)(count);}" };
let result = require("module_4054").fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesRecapOrbCount.tsx");

export { getRecapOrbCountFromPullProgress };
export const useBountiesRecapOrbCount = function useBountiesRecapOrbCount(scrollY) {
  let c5;
  let tmp2;
  scrollY = scrollY.scrollY;
  const lastBountyScrollOffset = scrollY.lastBountyScrollOffset;
  const recapRevealHeight = scrollY.recapRevealHeight;
  const targetOrbAmount = scrollY.targetOrbAmount;
  const enabled = scrollY.enabled;
  c5 = undefined;
  let callback;
  let callback1;
  [tmp2, c5] = recapRevealHeight(targetOrbAmount.useState(0), 2);
  callback = targetOrbAmount.useCallback((arg0) => {
    let closure_0 = arg0;
    _undefined((arg0) => {
      let tmp = arg0;
      if (closure_0 > arg0) {
        tmp = closure_0;
      }
      return tmp;
    });
  }, []);
  callback1 = targetOrbAmount.useCallback(() => {
    _undefined(0);
  }, []);
  let obj = scrollY(lastBountyScrollOffset[2]);
  const fn = function b() {
    if (enabled) {
      if (recapRevealHeight > 0) {
        const result = scrollY(lastBountyScrollOffset[3]).getRevealProgress(scrollY.get(), lastBountyScrollOffset, tmp) / 0.95;
        if (result <= 0.1) {
          let obj = { count: 0, revealed: false };
        } else {
          if (typeof enabled !== "fileFinishedImporting") {
            HermesBuiltin.throwTypeError();
          }
          let num2 = 0;
          if (targetOrbAmount > 0) {
            const _Number = Number;
            num2 = 0;
            if (Number.isFinite(tmp9)) {
              const _Math = Math;
              const _Math2 = Math;
              const _Math3 = Math;
              num2 = Math.round(Math.min(1, Math.max(0, result)) * tmp9);
            }
          }
          obj = { count: null, revealed: true };
          obj[0] = num2;
        }
        return obj;
      }
    }
    return { count: 0, revealed: false };
  };
  obj = { enabled, recapRevealHeight, getRevealProgress: scrollY(lastBountyScrollOffset[3]).getRevealProgress, scrollY, lastBountyScrollOffset, RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS: 0.95, getRecapOrbCountFromPullProgress: enabled, targetOrbAmount };
  fn.__closure = obj;
  fn.__workletHash = 2855285055570;
  fn.__initData = c5;
  const fn2 = function p(arg0) {
    let count;
    let revealed;
    ({ count, revealed } = arg0);
    const runOnJS = scrollY(lastBountyScrollOffset[2]).runOnJS;
    if (revealed) {
      runOnJS(callback)(count);
    } else {
      runOnJS(callback1)();
    }
  };
  obj = { runOnJS: scrollY(lastBountyScrollOffset[2]).runOnJS, resetDisplayCount: callback1, setDisplayCountMonotonic: callback };
  fn2.__closure = obj;
  fn2.__workletHash = 12006414940221;
  fn2.__initData = callback;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  return tmp2;
};