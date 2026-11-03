// discord_app/modules/quests/native/BountiesModal/useBountiesRecapOrbCount.tsx
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import useBountiesRecapScroll from "useBountiesRecapScroll.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let items = [
  {
    code: "(function getRecapOrbCountFromPullProgress_useBountiesRecapOrbCountTsx1(progress,targetOrbAmount){if(targetOrbAmount<=0||!Number.isFinite(targetOrbAmount)){return 0;}const clampedProgress=Math.min(1,Math.max(0,progress));return Math.round(clampedProgress*targetOrbAmount);})",
  },
];
[tmp2] = items;
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
getRecapOrbCountFromPullProgress.__workletHash = 4845833919284;
getRecapOrbCountFromPullProgress.__initData = tmp2;
let closure_5 = {
  code: "(function useBountiesRecapOrbCountTsx2(){let[enabled,recapRevealHeight,getRevealProgress,scrollY,lastBountyScrollOffset,RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS,getRecapOrbCountFromPullProgress,targetOrbAmount]=this.__closure;if(!enabled||recapRevealHeight<=0){return{count:0,revealed:false};}const pullProgress=getRevealProgress(scrollY.get(),lastBountyScrollOffset,recapRevealHeight)/RECAP_ORB_COUNT_REACHES_TARGET_AT_PROGRESS;if(pullProgress<=0.1){return{count:0,revealed:false};}return{count:getRecapOrbCountFromPullProgress(pullProgress,targetOrbAmount),revealed:true};})",
};
let closure_6 = {
  code: "(function useBountiesRecapOrbCountTsx3({count:count,revealed:revealed}){let[scheduleOnRN,resetDisplayCount,setDisplayCountMonotonic]=this.__closure;if(!revealed){scheduleOnRN(resetDisplayCount);return;}scheduleOnRN(setDisplayCountMonotonic,count);})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/useBountiesRecapOrbCount.tsx");

export { getRecapOrbCountFromPullProgress };
export function useBountiesRecapOrbCount(arg0) {
  ({ scrollY, lastBountyScrollOffset, recapRevealHeight, targetOrbAmount, enabled } = arg0);
  [tmp2, c0] = noop.useState(0);
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    _undefined((arg0) => {
      let tmp = arg0;
      if (closure_0 > arg0) {
        tmp = closure_0;
      }
      return tmp;
    });
  }, []);
  const callback1 = noop.useCallback(() => {
    _undefined(0);
  }, []);
  let tmp = _slicedToArray(noop.useState(0), 2);
  items = [
    closure_5,
    enabled,
    recapRevealHeight,
    useBountiesRecapScroll.getRevealProgress,
    scrollY,
    lastBountyScrollOffset,
    0.95,
    getRecapOrbCountFromPullProgress,
    targetOrbAmount,
  ];
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items;
  function useBountiesRecapOrbCountTsx2() {
    if (c0) {
      if (c1 > 0) {
        const result = _undefined2(_undefined3.get(), c4, tmp) / c5;
        if (result <= 0.1) {
          let obj = { count: 0, revealed: false };
        } else {
          obj = { count: _undefined4(result, c7), revealed: true };
        }
        return obj;
      }
    }
    return { count: 0, revealed: false };
  }
  const items1 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  useBountiesRecapOrbCountTsx2.__closure = items1;
  useBountiesRecapOrbCountTsx2.__workletHash = 758066957163;
  useBountiesRecapOrbCountTsx2.__initData = tmp7;
  const items2 = [_undefined4, _mod1705.scheduleOnRN, callback1, callback];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp16, tmp17, tmp18, tmp19] = items2;
  function useBountiesRecapOrbCountTsx3(revealed) {
    if (revealed.revealed) {
      _undefined(c2, tmp);
    } else {
      _undefined(c1);
    }
  }
  const items3 = [tmp17, tmp18, tmp19];
  useBountiesRecapOrbCountTsx3.__closure = items3;
  useBountiesRecapOrbCountTsx3.__workletHash = 6766118779745;
  useBountiesRecapOrbCountTsx3.__initData = tmp16;
  const animatedReaction = _mod1652.useAnimatedReaction(useBountiesRecapOrbCountTsx2, useBountiesRecapOrbCountTsx3);
  return tmp2;
}
