// discord_app/modules/quests/native/BountiesModal/useBountiesRecapOrbCount.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import useBountiesRecapScroll from "useBountiesRecapScroll.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
getRecapOrbCountFromPullProgress.__initData = {
  code: "function getRecapOrbCountFromPullProgress_useBountiesRecapOrbCountTsx1(progress,targetOrbAmount){if(targetOrbAmount<=0||!Number.isFinite(targetOrbAmount)){return 0;}const clampedProgress=Math.min(1,Math.max(0,progress));return Math.round(clampedProgress*targetOrbAmount);}",
};
let closure_6 = {
  code: "function useBountiesRecapOrbCountTsx2(){const{enabled,recapRevealHeight,getRevealProgress,scrollY,lastBountyScrollOffset,RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS,getRecapOrbCountFromPullProgress,targetOrbAmount}=this.__closure;if(!enabled||recapRevealHeight<=0){return{count:0,revealed:false};}const pullProgress=getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight)/RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS;if(pullProgress<=0.1){return{count:0,revealed:false};}return{count:getRecapOrbCountFromPullProgress(pullProgress,targetOrbAmount),revealed:true};}",
};
let closure_7 = {
  code: "function useBountiesRecapOrbCountTsx3(t1){const{runOnJS,resetDisplayCount,setDisplayCountMonotonic}=this.__closure;const{count:count_0,revealed:revealed}=t1;if(!revealed){runOnJS(resetDisplayCount)();return;}runOnJS(setDisplayCountMonotonic)(count_0);}",
};
const __initData = {
  code: "function useBountiesRecapOrbCountTsx4(){const{enabled,recapRevealHeight,getRevealProgress,scrollY,lastBountyScrollOffset,RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS,getRecapOrbCountFromPullProgress,targetOrbAmount}=this.__closure;if(!enabled||recapRevealHeight<=0){return{count:0,revealed:false};}const pullProgress=getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight)/RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS;if(pullProgress<=0.1){return{count:0,revealed:false};}return{count:getRecapOrbCountFromPullProgress(pullProgress,targetOrbAmount),revealed:true};}",
};
const __initData2 = {
  code: "function useBountiesRecapOrbCountTsx5({count:count_0,revealed:revealed}){const{runOnJS,resetDisplayCount,setDisplayCountMonotonic}=this.__closure;if(!revealed){runOnJS(resetDisplayCount)();return;}runOnJS(setDisplayCountMonotonic)(count_0);}",
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (scrollY) => {
      let closure_5;
      scrollY = scrollY.scrollY;
      const lastBountyScrollOffset = scrollY.lastBountyScrollOffset;
      const recapRevealHeight = scrollY.recapRevealHeight;
      const targetOrbAmount = scrollY.targetOrbAmount;
      const enabled = scrollY.enabled;
      let tmp = recapRevealHeight(targetOrbAmount.useState(0), 2);
      getRecapOrbCountFromPullProgress = tmp[1];
      function setDisplayCountMonotonic(arg0) {
        let closure_0 = arg0;
        let tmp = closure_5((arg0) => {
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
      const first = tmp[0];
      const tmp3 = scrollY(lastBountyScrollOffset[3]);
      class R {
        constructor() {
          if (enabled) {
            if (recapRevealHeight > 0) {
              let obj;
              const obj2 = useBountiesRecapScroll;
              const result = obj2.getRevealProgress(scrollY.get(), lastBountyScrollOffset, tmp2) / c4;
              if (result <= 0.1) {
                obj = { count: 0, revealed: false };
              } else if (typeof getRecapOrbCountFromPullProgress === "function") {
                let num2 = 0;
                if (targetOrbAmount > 0) {
                  const _Number = Number;
                  num2 = 0;
                  if (Number.isFinite(targetOrbAmount)) {
                    const _Math = Math;
                    const _Math2 = Math;
                    const _Math3 = Math;
                    num2 = Math.round(Math.min(1, Math.max(0, result)) * targetOrbAmount);
                  }
                }
                obj = { count: num2, revealed: true };
              } else {
                throw new TypeError("Trying to call a non-function");
              }
              return obj;
            }
          }
          return { count: 0, revealed: false };
        }
      }
      let obj = {
        enabled,
        recapRevealHeight,
        getRevealProgress: scrollY(lastBountyScrollOffset[4]).getRevealProgress,
        scrollY,
        lastBountyScrollOffset,
        RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS: enabled,
        getRecapOrbCountFromPullProgress,
        targetOrbAmount,
      };
      const useAnimatedReaction = tmp3.useAnimatedReaction;
      R.__closure = obj;
      R.__workletHash = 2855285055570;
      R.__initData = setDisplayCountMonotonic;
      const fn = function _(arg0) {
        let count;
        let revealed;
        ({ count, revealed } = arg0);
        const runOnJS = ReanimatedRexport.runOnJS;
        ReanimatedRexport;
        if (revealed) {
          runOnJS(setDisplayCountMonotonic)(count);
        } else {
          runOnJS(resetDisplayCount)();
        }
      };
      let obj2 = { runOnJS: scrollY(lastBountyScrollOffset[3]).runOnJS, resetDisplayCount, setDisplayCountMonotonic };
      fn.__closure = obj2;
      fn.__workletHash = 11866742563582;
      fn.__initData = resetDisplayCount;
      const animatedReaction = useAnimatedReaction(R, fn);
      return first;
    }
  : (scrollY) => {
      let _undefined;
      let c5;
      let tmp2;
      scrollY = scrollY.scrollY;
      const lastBountyScrollOffset = scrollY.lastBountyScrollOffset;
      const recapRevealHeight = scrollY.recapRevealHeight;
      const targetOrbAmount = scrollY.targetOrbAmount;
      const enabled = scrollY.enabled;
      getRecapOrbCountFromPullProgress = undefined;
      let tmp = recapRevealHeight(targetOrbAmount.useState(0), 2);
      [tmp2, c5] = tmp;
      const setDisplayCountMonotonic = targetOrbAmount.useCallback((arg0) => {
        let closure_0 = arg0;
        let tmp = _undefined((arg0) => {
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
      const fn = function f() {
        if (enabled) {
          if (recapRevealHeight > 0) {
            let obj;
            const obj2 = useBountiesRecapScroll;
            const result = obj2.getRevealProgress(scrollY.get(), lastBountyScrollOffset, tmp2) / c4;
            if (result <= 0.1) {
              obj = { count: 0, revealed: false };
            } else if (typeof getRecapOrbCountFromPullProgress === "function") {
              let num2 = 0;
              if (targetOrbAmount > 0) {
                const _Number = Number;
                num2 = 0;
                if (Number.isFinite(targetOrbAmount)) {
                  const _Math = Math;
                  const _Math2 = Math;
                  const _Math3 = Math;
                  num2 = Math.round(Math.min(1, Math.max(0, result)) * targetOrbAmount);
                }
              }
              obj = { count: num2, revealed: true };
            } else {
              throw new TypeError("Trying to call a non-function");
            }
            return obj;
          }
        }
        return { count: 0, revealed: false };
      };
      const tmp5 = scrollY(lastBountyScrollOffset[3]);
      let obj = {
        enabled,
        recapRevealHeight,
        getRevealProgress: scrollY(lastBountyScrollOffset[4]).getRevealProgress,
        scrollY,
        lastBountyScrollOffset,
        RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS: enabled,
        getRecapOrbCountFromPullProgress,
        targetOrbAmount,
      };
      const useAnimatedReaction = tmp5.useAnimatedReaction;
      fn.__closure = obj;
      fn.__workletHash = 4646852023252;
      fn.__initData = __initData;
      const fn2 = function v(arg0) {
        let count;
        let revealed;
        ({ count, revealed } = arg0);
        const runOnJS = ReanimatedRexport.runOnJS;
        ReanimatedRexport;
        if (revealed) {
          runOnJS(callback)(count);
        } else {
          runOnJS(callback1)();
        }
      };
      let obj2 = {
        runOnJS: scrollY(lastBountyScrollOffset[3]).runOnJS,
        resetDisplayCount: callback1,
        setDisplayCountMonotonic,
      };
      fn2.__closure = obj2;
      fn2.__workletHash = 14883339167099;
      fn2.__initData = __initData2;
      const animatedReaction = useAnimatedReaction(fn, fn2);
      return tmp2;
    };
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesRecapOrbCount.tsx");

export { getRecapOrbCountFromPullProgress };
export const useBountiesRecapOrbCount = tmp2;
