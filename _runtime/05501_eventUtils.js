// _runtime/05501_eventUtils.js
import tagMessage from "05432_tagMessage.js";

require = arg1;
const dependencyMap = arg6;
let items = [{ code: "(function isNativeEvent_Pnpm_eventUtilsTs1(event){return'nativeEvent'in event;})" }];
[tmp2] = items;
function isNativeEvent(arg0) {
  return "nativeEvent" in arg0;
}
isNativeEvent.__workletHash = 15362178657057;
isNativeEvent.__initData = tmp2;
let items1 = [
  {
    code: "(function maybeExtractNativeEvent_Pnpm_eventUtilsTs2(event){let[isNativeEvent]=this.__closure;return isNativeEvent(event)?event.nativeEvent:event;})",
  },
  isNativeEvent,
];
let closure_129_0;
[tmp3, tmp4] = items1;
function maybeExtractNativeEvent(nativeEvent) {
  if (require(nativeEvent)) {
    nativeEvent = nativeEvent.nativeEvent;
  }
  return nativeEvent;
}
const items2 = [tmp4];
maybeExtractNativeEvent.__closure = items2;
maybeExtractNativeEvent.__workletHash = 8565768686798;
maybeExtractNativeEvent.__initData = tmp3;
const items3 = [
  {
    code: "(function flattenAndFilterEvent_Pnpm_eventUtilsTs3(event){return{handlerTag:event.handlerTag,...event.handlerData};})",
  },
];
[tmp5] = items3;
function flattenAndFilterEvent(handlerTag) {
  const merged = Object.assign(handlerTag.handlerData);
  return { handlerTag: handlerTag.handlerTag };
}
flattenAndFilterEvent.__workletHash = 8588179721731;
flattenAndFilterEvent.__initData = tmp5;
const items4 = [
  {
    code: "(function isEventForHandlerWithTag_Pnpm_eventUtilsTs4(handlerTag,event){return event.handlerTag===handlerTag;})",
  },
];
[tmp6] = items4;
function isEventForHandlerWithTag(arg0, handlerTag) {
  return handlerTag.handlerTag === arg0;
}
isEventForHandlerWithTag.__workletHash = 1815779633289;
isEventForHandlerWithTag.__initData = tmp6;
const items5 = [
  {
    code: "(function isNativeAnimatedEvent_Pnpm_eventUtilsTs5(callback){return!!callback&&'_argMapping'in callback;})",
  },
];
[tmp7] = items5;
function isNativeAnimatedEvent(onUpdate) {
  let tmp = onUpdate;
  if (tmp) {
    tmp = "_argMapping" in onUpdate;
  }
  return tmp;
}
isNativeAnimatedEvent.__workletHash = 15793996954617;
isNativeAnimatedEvent.__initData = tmp7;
const items6 = [
  {
    code: "(function getChangeEventCalculator_Pnpm_eventUtilsTs7(diffCalculator){let[_worklet_2411660050288_init_data]=this.__closure;return function getChangeEventCalculator_Pnpm_eventUtilsTs7([_worklet_2411660050288_init_data,diffCalculator]){const pnpm_eventUtilsTs6=function(current,previous){const currentEventData=current.handlerData;if(currentEventData===undefined){return current;}const previousEventData=previous?previous.handlerData:null;const changePayload=diffCalculator(currentEventData,previousEventData);current.handlerData={...currentEventData,...changePayload};return current;};pnpm_eventUtilsTs6.__closure=[diffCalculator];pnpm_eventUtilsTs6.__workletHash=2411660050288;pnpm_eventUtilsTs6.__initData=_worklet_2411660050288_init_data;return pnpm_eventUtilsTs6;}([_worklet_2411660050288_init_data,diffCalculator]);})",
  },
  {
    code: "(function pnpm_eventUtilsTs6(current,previous){let[diffCalculator]=this.__closure;const currentEventData=current.handlerData;if(currentEventData===undefined){return current;}const previousEventData=previous?previous.handlerData:null;const changePayload=diffCalculator(currentEventData,previousEventData);current.handlerData={...currentEventData,...changePayload};return current;})",
  },
];
let closure_130_0;
[tmp8, tmp9] = items6;
function getChangeEventCalculator(diffCalculator) {
  items = [require, diffCalculator];
  [tmp, tmp2] = items;
  function pnpm_eventUtilsTs6(handlerData, handlerData2) {
    handlerData = handlerData.handlerData;
    if (undefined === handlerData) {
      return handlerData;
    } else {
      let handlerData1 = null;
      if (handlerData2) {
        handlerData1 = handlerData2.handlerData;
      }
      const tmp4 = require(handlerData, handlerData1);
      const obj = {};
      const merged = Object.assign(handlerData);
      const merged1 = Object.assign(tmp4);
      handlerData.handlerData = obj;
      return handlerData;
    }
  }
  const items1 = [tmp2];
  pnpm_eventUtilsTs6.__closure = items1;
  pnpm_eventUtilsTs6.__workletHash = 2411660050288;
  pnpm_eventUtilsTs6.__initData = tmp;
  return pnpm_eventUtilsTs6;
}
const items7 = [tmp9];
getChangeEventCalculator.__closure = items7;
getChangeEventCalculator.__workletHash = 7026427133577;
getChangeEventCalculator.__initData = tmp8;
const items8 = [{ code: "(function isTouchEvent_Pnpm_eventUtilsTs8(event){return'allTouches'in event;})" }];
[tmp10] = items8;
function isTouchEvent(arg0) {
  return "allTouches" in arg0;
}
isTouchEvent.__workletHash = 8934495008819;
isTouchEvent.__initData = tmp10;
const items9 = [
  {
    code: "(function isStateChangeEvent_Pnpm_eventUtilsTs9(event){return'oldState'in event&&event.oldState!==undefined;})",
  },
];
[tmp11] = items9;
function isStateChangeEvent(oldState) {
  let tmp = "oldState" in oldState;
  if (tmp) {
    tmp = undefined !== oldState.oldState;
  }
  return tmp;
}
isStateChangeEvent.__workletHash = 5274026388461;
isStateChangeEvent.__initData = tmp11;

export { maybeExtractNativeEvent };
export { flattenAndFilterEvent };
export { isEventForHandlerWithTag };
export { isNativeAnimatedEvent };
export function checkMappingForChangeProperties(arg0) {
  const iter = arg0._argMapping[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (nextResult) {
      if ("nativeEvent" in tmp2) {
        if ("handlerData" in tmp2.nativeEvent) {
          for (const key10023 in tmp2.nativeEvent.handlerData) {
            if (!key10023.startsWith("change")) {
              continue;
            } else {
              let tmp6 = globalThis;
              let _Error = Error;
              let obj = tagMessage;
              let _HermesInternal = HermesInternal;
              let str = " is not available when using Animated.Event.";
              let str2 = "";
              let tmp10 = new.target;
              let tmp11 = new.target;
              let error = new Error(obj.tagMessage("" + key10023 + " is not available when using Animated.Event."));
              throw error;
            }
          }
        }
      }
    }
    continue;
  }
}
export function shouldHandleTouchEvents(onTouchesDown) {
  return (
    onTouchesDown.onTouchesDown ||
    onTouchesDown.onTouchesMove ||
    onTouchesDown.onTouchesUp ||
    onTouchesDown.onTouchesCancel
  );
}
export { getChangeEventCalculator };
export { isTouchEvent };
export { isStateChangeEvent };
