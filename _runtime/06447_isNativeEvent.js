// === Module 6447: isNativeEvent ===

// Module 6447 (isNativeEvent)
import tagMessage from "tagMessage" /* 6382 */;

require = arg1;
const dependencyMap = arg6;
function isNativeEvent(arg0) {
  return "nativeEvent" in arg0;
}
isNativeEvent.__closure = {};
isNativeEvent.__workletHash = 15502708650016;
isNativeEvent.__initData = { code: "function isNativeEvent_Pnpm_eventUtilsTs1(event){return'nativeEvent'in event;}" };
function maybeExtractNativeEvent(nativeEvent) {
  if (typeof isNativeEvent !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if ("nativeEvent" in nativeEvent) {
    nativeEvent = nativeEvent.nativeEvent;
  }
  return nativeEvent;
}
maybeExtractNativeEvent.__closure = { isNativeEvent };
maybeExtractNativeEvent.__workletHash = 9418753326359;
maybeExtractNativeEvent.__initData = { code: "function maybeExtractNativeEvent_Pnpm_eventUtilsTs2(event){const{isNativeEvent}=this.__closure;return isNativeEvent(event)?event.nativeEvent:event;}" };
function flattenAndFilterEvent(handlerTag) {
  const merged = Object.assign(handlerTag.handlerData);
  return { handlerTag: handlerTag.handlerTag };
}
flattenAndFilterEvent.__closure = {};
flattenAndFilterEvent.__workletHash = 12741778497058;
flattenAndFilterEvent.__initData = { code: "function flattenAndFilterEvent_Pnpm_eventUtilsTs3(event){return{handlerTag:event.handlerTag,...event.handlerData};}" };
function isEventForHandlerWithTag(arg0, result) {
  return result.handlerTag === arg0;
}
isEventForHandlerWithTag.__closure = {};
isEventForHandlerWithTag.__workletHash = 11134871115176;
isEventForHandlerWithTag.__initData = { code: "function isEventForHandlerWithTag_Pnpm_eventUtilsTs4(handlerTag,event){return event.handlerTag===handlerTag;}" };
function isNativeAnimatedEvent(onUpdate) {
  let tmp = onUpdate;
  if (tmp) {
    tmp = "_argMapping" in onUpdate;
  }
  return tmp;
}
isNativeAnimatedEvent.__closure = {};
isNativeAnimatedEvent.__workletHash = 3439774750008;
isNativeAnimatedEvent.__initData = { code: "function isNativeAnimatedEvent_Pnpm_eventUtilsTs5(callback){return!!callback&&'_argMapping'in callback;}" };
let closure_3 = { code: "function pnpm_eventUtilsTs7(current,previous){const{diffCalculator}=this.__closure;const currentEventData=current.handlerData;const previousEventData=previous?previous.handlerData:null;const changePayload=diffCalculator(currentEventData,previousEventData);current.handlerData={...currentEventData,...changePayload};return current;}" };
function getChangeEventCalculator(diffCalculator) {
  closure_0 = diffCalculator;
  const fn = function t(handlerData, handlerData2) {
    handlerData = handlerData.handlerData;
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
  fn.__initData = closure_3;
  return fn;
}
getChangeEventCalculator.__closure = {};
getChangeEventCalculator.__workletHash = 1165584403675;
getChangeEventCalculator.__initData = { code: "function getChangeEventCalculator_Pnpm_eventUtilsTs6(diffCalculator){return function(current,previous){'worklet';const currentEventData=current.handlerData;const previousEventData=previous?previous.handlerData:null;const changePayload=diffCalculator(currentEventData,previousEventData);current.handlerData={...currentEventData,...changePayload};return current;};}" };
function isTouchEvent(arg0) {
  return "allTouches" in arg0;
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
isStateChangeEvent.__initData = { code: "function isStateChangeEvent_Pnpm_eventUtilsTs9(event){return'oldState'in event&&event.oldState!==undefined;}" };
arg5.maybeExtractNativeEvent = maybeExtractNativeEvent;
arg5.flattenAndFilterEvent = flattenAndFilterEvent;
arg5.isEventForHandlerWithTag = isEventForHandlerWithTag;
arg5.isNativeAnimatedEvent = isNativeAnimatedEvent;
arg5.checkMappingForChangeProperties = function checkMappingForChangeProperties(arg0) {
  const iter = arg0._argMapping[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (nextResult) {
      let tmp3 = nextResult;
      if ("nativeEvent" in tmp2) {
        let tmp4 = nextResult;
        if ("handlerData" in tmp2.nativeEvent) {
          let tmp5 = nextResult;
          for (const key10023 in tmp2.nativeEvent.handlerData) {
            let tmp14 = key10023;
            let tmp15 = key10023;
            if (!key10023.startsWith("change")) {
              continue;
            } else {
              let tmp6 = globalThis;
              let _Error = Error;
              let tmp7 = require;
              let tmp8 = dependencyMap;
              let obj = tagMessage;
              let tmp9 = tmp14;
              let _HermesInternal = HermesInternal;
              let str = " is not available when using Animated.Event.";
              let str2 = "";
              let tmp10 = new.target;
              let tmp11 = new.target;
              error = new Error(obj.tagMessage("" + tmp15 + " is not available when using Animated.Event."));
              let tmp13 = error;
              throw error;
            }
          }
        }
      }
    }
    continue;
  }
};
arg5.shouldHandleTouchEvents = function shouldHandleTouchEvents(onTouchesDown) {
  return onTouchesDown.onTouchesDown || onTouchesDown.onTouchesMove || onTouchesDown.onTouchesUp || onTouchesDown.onTouchesCancel;
};
arg5.getChangeEventCalculator = getChangeEventCalculator;
arg5.isTouchEvent = isTouchEvent;
arg5.isStateChangeEvent = isStateChangeEvent;