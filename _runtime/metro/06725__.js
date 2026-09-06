// _runtime/metro/06725__.js
import tagMessage from "../06660_tagMessage.js";

require = arg1;
const dependencyMap = arg6;
function isNativeEvent(arg0) {
  return "nativeEvent" in arg0;
}
isNativeEvent.__closure = {};
isNativeEvent.__workletHash = 15502708650016;
isNativeEvent.__initData = { code: "function isNativeEvent_Pnpm_eventUtilsTs1(event){return'nativeEvent'in event;}" };
function maybeExtractNativeEvent(nativeEvent) {
  if (typeof isNativeEvent === "function") {
    if ("nativeEvent" in nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
    }
    return nativeEvent;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
maybeExtractNativeEvent.__closure = { isNativeEvent };
maybeExtractNativeEvent.__workletHash = 9418753326359;
maybeExtractNativeEvent.__initData = {
  code: "function maybeExtractNativeEvent_Pnpm_eventUtilsTs2(event){const{isNativeEvent}=this.__closure;return isNativeEvent(event)?event.nativeEvent:event;}",
};
function flattenAndFilterEvent(handlerTag) {
  const merged = Object.assign(handlerTag.handlerData);
  return { handlerTag: handlerTag.handlerTag };
}
flattenAndFilterEvent.__closure = {};
flattenAndFilterEvent.__workletHash = 12741778497058;
flattenAndFilterEvent.__initData = {
  code: "function flattenAndFilterEvent_Pnpm_eventUtilsTs3(event){return{handlerTag:event.handlerTag,...event.handlerData};}",
};
function isEventForHandlerWithTag(arg0, handlerTag) {
  return handlerTag.handlerTag === arg0;
}
isEventForHandlerWithTag.__closure = {};
isEventForHandlerWithTag.__workletHash = 11134871115176;
isEventForHandlerWithTag.__initData = {
  code: "function isEventForHandlerWithTag_Pnpm_eventUtilsTs4(handlerTag,event){return event.handlerTag===handlerTag;}",
};
function isNativeAnimatedEvent(onUpdate) {
  let tmp = onUpdate;
  if (tmp) {
    tmp = "_argMapping" in onUpdate;
  }
  return tmp;
}
isNativeAnimatedEvent.__closure = {};
isNativeAnimatedEvent.__workletHash = 3439774750008;
isNativeAnimatedEvent.__initData = {
  code: "function isNativeAnimatedEvent_Pnpm_eventUtilsTs5(callback){return!!callback&&'_argMapping'in callback;}",
};
const __initData = {
  code: "function pnpm_eventUtilsTs7(current,previous){const{diffCalculator}=this.__closure;const currentEventData=current.handlerData;const previousEventData=previous?previous.handlerData:null;const changePayload=diffCalculator(currentEventData,previousEventData);current.handlerData={...currentEventData,...changePayload};return current;}",
};
function getChangeEventCalculator(diffCalculator) {
  const fn = function t(handlerData, handlerData2) {
    handlerData = null;
    if (handlerData2) {
      handlerData = handlerData2.handlerData;
    }
    const merged = Object.assign(handlerData);
    const merged1 = Object.assign(diffCalculator(handlerData, handlerData));
    handlerData.handlerData = {};
    return handlerData;
  };
  fn.__closure = { diffCalculator };
  fn.__workletHash = 10887773943786;
  fn.__initData = __initData;
  return fn;
}
getChangeEventCalculator.__closure = {};
getChangeEventCalculator.__workletHash = 1165584403675;
getChangeEventCalculator.__initData = {
  code: "function getChangeEventCalculator_Pnpm_eventUtilsTs6(diffCalculator){return function(current,previous){'worklet';const currentEventData=current.handlerData;const previousEventData=previous?previous.handlerData:null;const changePayload=diffCalculator(currentEventData,previousEventData);current.handlerData={...currentEventData,...changePayload};return current;};}",
};
function isTouchEvent(result) {
  return "allTouches" in result;
}
isTouchEvent.__closure = {};
isTouchEvent.__workletHash = 14798108877298;
isTouchEvent.__initData = { code: "function isTouchEvent_Pnpm_eventUtilsTs8(event){return'allTouches'in event;}" };
function isStateChangeEvent(oldState) {
  let tmp = "oldState" in oldState;
  if (tmp) {
    tmp = undefined !== oldState.oldState;
  }
  return tmp;
}
isStateChangeEvent.__closure = {};
isStateChangeEvent.__workletHash = 7295971713196;
isStateChangeEvent.__initData = {
  code: "function isStateChangeEvent_Pnpm_eventUtilsTs9(event){return'oldState'in event&&event.oldState!==undefined;}",
};

export { maybeExtractNativeEvent };
export { flattenAndFilterEvent };
export { isEventForHandlerWithTag };
export { isNativeAnimatedEvent };
export const checkMappingForChangeProperties = function checkMappingForChangeProperties(arg0) {
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
};
export const shouldHandleTouchEvents = function shouldHandleTouchEvents(onTouchesDown) {
  return (
    onTouchesDown.onTouchesDown ||
    onTouchesDown.onTouchesMove ||
    onTouchesDown.onTouchesUp ||
    onTouchesDown.onTouchesCancel
  );
};
export { getChangeEventCalculator };
export { isTouchEvent };
export { isStateChangeEvent };
