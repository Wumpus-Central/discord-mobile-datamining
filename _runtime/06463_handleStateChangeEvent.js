// === Module 6463: handleStateChangeEvent ===

// Module 6463 (handleStateChangeEvent)
import _mod6383 from "module_6383" /* 6383 */;
import _mod6385 from "module_6385" /* 6385 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 6398 */;
import isGestureEnabled from "isGestureEnabled" /* 6445 */;
import isNativeEvent from "isNativeEvent" /* 6447 */;

require = fn;
const dependencyMap = arg6;
function handleStateChangeEvent(result, arg1, lastUpdateEvent, fn) {
  ({ oldState, state } = result);
  let obj = isGestureEnabled;
  result = obj.flattenAndFilterEvent(result);
  if (oldState === _mod6383.State.UNDETERMINED) {
    if (state === _mod6383.State.BEGAN) {
      let tmpResult = isGestureEnabled;
      tmpResult.runCallback(_isNativeReflectConstruct.CALLBACK_TYPE.BEGAN, arg1, result);
    }
  }
  if (oldState === _mod6383.State.BEGAN) {
    if (state === _mod6383.State.ACTIVE) {
      if (fn != null) {
        fn(result);
      }
      tmpResult = isGestureEnabled;
      tmpResult.runCallback(_isNativeReflectConstruct.CALLBACK_TYPE.START, arg1, result);
    }
  }
  if (oldState !== state) {
    obj = {};
    const merged = Object.assign(result);
    obj.canceled = state === _mod6383.State.FAILED || state === _mod6383.State.CANCELLED;
    if (oldState === _mod6383.State.ACTIVE) {
      if (fn != null) {
        fn(obj);
      }
      isGestureEnabled.runCallback(_isNativeReflectConstruct.CALLBACK_TYPE.END, arg1, obj);
      const tmpResult1 = isGestureEnabled;
    }
    isGestureEnabled.runCallback(_isNativeReflectConstruct.CALLBACK_TYPE.FINALIZE, arg1, obj);
    if (lastUpdateEvent) {
      lastUpdateEvent.lastUpdateEvent = undefined;
    }
    const tmpResult2 = isGestureEnabled;
  }
}
let obj = { flattenAndFilterEvent: require("isGestureEnabled").flattenAndFilterEvent, State: require("module_6383").State, runCallback: require("isGestureEnabled").runCallback, CALLBACK_TYPE: require("_isNativeReflectConstruct").CALLBACK_TYPE };
handleStateChangeEvent.__closure = obj;
handleStateChangeEvent.__workletHash = 2533223590466;
handleStateChangeEvent.__initData = { code: "function handleStateChangeEvent_Pnpm_eventHandlerTs1(eventWithData,callbacks,context,fillInDefaultValues){const{flattenAndFilterEvent,State,runCallback,CALLBACK_TYPE}=this.__closure;const{oldState:oldState,state:state}=eventWithData;const event=flattenAndFilterEvent(eventWithData);if(oldState===State.UNDETERMINED&&state===State.BEGAN){runCallback(CALLBACK_TYPE.BEGAN,callbacks,event);}else if((oldState===State.BEGAN||oldState===State.UNDETERMINED)&&state===State.ACTIVE){fillInDefaultValues===null||fillInDefaultValues===void 0||fillInDefaultValues(event);runCallback(CALLBACK_TYPE.START,callbacks,event);}else if(oldState!==state&&(state===State.END||state===State.FAILED||state===State.CANCELLED)){const canceled=state===State.FAILED||state===State.CANCELLED;const endEvent={...event,canceled:canceled};if(oldState===State.ACTIVE){fillInDefaultValues===null||fillInDefaultValues===void 0||fillInDefaultValues(endEvent);runCallback(CALLBACK_TYPE.END,callbacks,endEvent);}runCallback(CALLBACK_TYPE.FINALIZE,callbacks,endEvent);if(context){context.lastUpdateEvent=undefined;}}}" };
function handleUpdateEvent(lastUpdateEvent, arg1, fn, lastUpdateEvent2) {
  let tmp = lastUpdateEvent;
  if (fn) {
    lastUpdateEvent = undefined;
    if (lastUpdateEvent2) {
      lastUpdateEvent = lastUpdateEvent2.lastUpdateEvent;
    }
    tmp = fn(lastUpdateEvent, lastUpdateEvent);
  }
  const result = isGestureEnabled.flattenAndFilterEvent(tmp);
  isGestureEnabled.runCallback(_isNativeReflectConstruct.CALLBACK_TYPE.UPDATE, arg1, result);
  if (lastUpdateEvent2) {
    lastUpdateEvent2.lastUpdateEvent = lastUpdateEvent;
  }
}
obj = { flattenAndFilterEvent: require("isGestureEnabled").flattenAndFilterEvent, runCallback: require("isGestureEnabled").runCallback, CALLBACK_TYPE: require("_isNativeReflectConstruct").CALLBACK_TYPE };
handleUpdateEvent.__closure = obj;
handleUpdateEvent.__workletHash = 13503118278355;
handleUpdateEvent.__initData = { code: "function handleUpdateEvent_Pnpm_eventHandlerTs2(eventWithData,handlers,changeEventCalculator,context){const{flattenAndFilterEvent,runCallback,CALLBACK_TYPE}=this.__closure;const eventWithChanges=changeEventCalculator?changeEventCalculator(eventWithData,context?context.lastUpdateEvent:undefined):eventWithData;const event=flattenAndFilterEvent(eventWithChanges);runCallback(CALLBACK_TYPE.UPDATE,handlers,event);if(context){context.lastUpdateEvent=eventWithData;}}" };
function handleTouchEvent(eventType) {
  if (eventType.eventType !== _mod6385.TouchEventType.UNDETERMINED) {
    const tmpResult = isGestureEnabled;
    tmpResult.runCallback(tmpResult.touchEventTypeToCallbackType(eventType.eventType), arg1, eventType);
  }
}
obj = { TouchEventType: require("module_6385").TouchEventType, runCallback: require("isGestureEnabled").runCallback, touchEventTypeToCallbackType: require("isGestureEnabled").touchEventTypeToCallbackType };
handleTouchEvent.__closure = obj;
handleTouchEvent.__workletHash = 15920153828060;
handleTouchEvent.__initData = { code: "function handleTouchEvent_Pnpm_eventHandlerTs3(event,handlers){const{TouchEventType,runCallback,touchEventTypeToCallbackType}=this.__closure;if(event.eventType!==TouchEventType.UNDETERMINED){runCallback(touchEventTypeToCallbackType(event.eventType),handlers,event);}}" };
function eventHandler(arg0, nativeEvent, arg2, fn, lastUpdateEvent, arg5, fn) {
  const result = isGestureEnabled.maybeExtractNativeEvent(nativeEvent);
  if (obj2.isEventForHandlerWithTag(arg0, result)) {
    let tmpResult = isNativeEvent;
    if (tmpResult.isStateChangeEvent(result)) {
      handleStateChangeEvent(result, arg2, lastUpdateEvent, fn);
    } else {
      tmpResult = isNativeEvent;
      if (tmpResult.isTouchEvent(result)) {
        if (typeof handleTouchEvent !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (result.eventType !== _mod6385.TouchEventType.UNDETERMINED) {
          const tmpResult1 = isGestureEnabled;
          tmpResult1.runCallback(isGestureEnabled.touchEventTypeToCallbackType(result.eventType), arg2, result);
          const tmpResult2 = isGestureEnabled;
        }
      } else if (!arg5) {
        if (typeof handleUpdateEvent !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let tmp9 = result;
        if (fn) {
          lastUpdateEvent = undefined;
          if (lastUpdateEvent) {
            lastUpdateEvent = lastUpdateEvent.lastUpdateEvent;
          }
          tmp9 = fn(result, lastUpdateEvent);
        }
        const result1 = isGestureEnabled.flattenAndFilterEvent(tmp9);
        const tmpResult3 = isGestureEnabled;
        isGestureEnabled.runCallback(_isNativeReflectConstruct.CALLBACK_TYPE.UPDATE, arg2, result1);
        if (lastUpdateEvent) {
          lastUpdateEvent.lastUpdateEvent = result;
        }
        const tmpResult4 = isGestureEnabled;
      }
    }
  }
  obj2 = isGestureEnabled;
}
eventHandler.__closure = { maybeExtractNativeEvent: require("isGestureEnabled").maybeExtractNativeEvent, isEventForHandlerWithTag: require("isGestureEnabled").isEventForHandlerWithTag, isStateChangeEvent: require("isNativeEvent").isStateChangeEvent, handleStateChangeEvent, isTouchEvent: require("isNativeEvent").isTouchEvent, handleTouchEvent, handleUpdateEvent };
eventHandler.__workletHash = 218531583134;
eventHandler.__initData = { code: "function eventHandler_Pnpm_eventHandlerTs4(handlerTag,sourceEvent,handlers,changeEventCalculator,jsContext,dispatchesAnimatedEvents,fillInDefaultValues){const{maybeExtractNativeEvent,isEventForHandlerWithTag,isStateChangeEvent,handleStateChangeEvent,isTouchEvent,handleTouchEvent,handleUpdateEvent}=this.__closure;const eventWithData=maybeExtractNativeEvent(sourceEvent);if(!isEventForHandlerWithTag(handlerTag,eventWithData)){return;}if(isStateChangeEvent(eventWithData)){handleStateChangeEvent(eventWithData,handlers,jsContext,fillInDefaultValues);return;}if(isTouchEvent(eventWithData)){handleTouchEvent(eventWithData,handlers);return;}if(!dispatchesAnimatedEvents){handleUpdateEvent(eventWithData,handlers,changeEventCalculator,jsContext);}}" };
arg5.handleUpdateEvent = handleUpdateEvent;
arg5.handleTouchEvent = handleTouchEvent;
arg5.eventHandler = eventHandler;