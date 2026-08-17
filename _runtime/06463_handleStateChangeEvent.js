// _runtime/06463_handleStateChangeEvent.js
import _mod6383 from "metro/06383__.js";
import _mod6385 from "metro/06385__.js";
import _isNativeReflectConstruct from "06398__isNativeReflectConstruct.js";
import isGestureEnabled from "06445_isGestureEnabled.js";

require = arg1;
const dependencyMap = arg6;
function handleStateChangeEvent(result, arg1, lastUpdateEvent, arg3) {
  ({ oldState, state } = result);
  let obj = isGestureEnabled;
  result = obj.flattenAndFilterEvent(result);
  if (oldState === _mod6383.State.UNDETERMINED) {
    if (state === tmp(6383).State.BEGAN) {
      let tmpResult = tmp(6445);
      tmpResult.runCallback(tmp(6398).CALLBACK_TYPE.BEGAN, arg1, result);
    }
  }
  if (oldState === _mod6383.State.BEGAN) {
    if (state === tmp(6383).State.ACTIVE) {
      if (arg3 != null) {
        arg3(result);
      }
      tmpResult = tmp(6445);
      tmpResult.runCallback(tmp(6398).CALLBACK_TYPE.START, arg1, result);
    }
  }
  if (oldState !== state) {
    obj = {};
    const merged = Object.assign(result);
    obj.canceled = state === tmp(6383).State.FAILED || state === tmp(6383).State.CANCELLED;
    if (oldState === tmp(6383).State.ACTIVE) {
      if (arg3 != null) {
        arg3(obj);
      }
      tmp(6445).runCallback(tmp(6398).CALLBACK_TYPE.END, arg1, obj);
      const tmpResult1 = tmp(6445);
    }
    const tmp7 = state === tmp(6383).State.FAILED || state === tmp(6383).State.CANCELLED;
    tmp(6445).runCallback(tmp(6398).CALLBACK_TYPE.FINALIZE, arg1, obj);
    if (lastUpdateEvent) {
      lastUpdateEvent.lastUpdateEvent = undefined;
    }
    const tmpResult2 = tmp(6445);
  }
}
let obj = { flattenAndFilterEvent: require("isGestureEnabled").flattenAndFilterEvent, State: require("module_6383").State, runCallback: require("isGestureEnabled").runCallback, CALLBACK_TYPE: require("_isNativeReflectConstruct").CALLBACK_TYPE };
handleStateChangeEvent.__closure = obj;
handleStateChangeEvent.__workletHash = 2533223590466;
handleStateChangeEvent.__initData = { code: "function handleStateChangeEvent_Pnpm_eventHandlerTs1(eventWithData,callbacks,context,fillInDefaultValues){const{flattenAndFilterEvent,State,runCallback,CALLBACK_TYPE}=this.__closure;const{oldState:oldState,state:state}=eventWithData;const event=flattenAndFilterEvent(eventWithData);if(oldState===State.UNDETERMINED&&state===State.BEGAN){runCallback(CALLBACK_TYPE.BEGAN,callbacks,event);}else if((oldState===State.BEGAN||oldState===State.UNDETERMINED)&&state===State.ACTIVE){fillInDefaultValues===null||fillInDefaultValues===void 0||fillInDefaultValues(event);runCallback(CALLBACK_TYPE.START,callbacks,event);}else if(oldState!==state&&(state===State.END||state===State.FAILED||state===State.CANCELLED)){const canceled=state===State.FAILED||state===State.CANCELLED;const endEvent={...event,canceled:canceled};if(oldState===State.ACTIVE){fillInDefaultValues===null||fillInDefaultValues===void 0||fillInDefaultValues(endEvent);runCallback(CALLBACK_TYPE.END,callbacks,endEvent);}runCallback(CALLBACK_TYPE.FINALIZE,callbacks,endEvent);if(context){context.lastUpdateEvent=undefined;}}}" };
function handleUpdateEvent(lastUpdateEvent, arg1, arg2, lastUpdateEvent2) {
  let tmp = lastUpdateEvent;
  if (arg2) {
    lastUpdateEvent = undefined;
    if (lastUpdateEvent2) {
      lastUpdateEvent = lastUpdateEvent2.lastUpdateEvent;
    }
    tmp = arg2(lastUpdateEvent, lastUpdateEvent);
  }
  const result = isGestureEnabled.flattenAndFilterEvent(tmp);
  const obj = isGestureEnabled;
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
    let tmpResult = tmp(6445);
    tmpResult = tmp(6445);
    tmpResult.runCallback(tmpResult.touchEventTypeToCallbackType(eventType.eventType), arg1, eventType);
  }
}
obj = { TouchEventType: require("module_6385").TouchEventType, runCallback: require("isGestureEnabled").runCallback, touchEventTypeToCallbackType: require("isGestureEnabled").touchEventTypeToCallbackType };
handleTouchEvent.__closure = obj;
handleTouchEvent.__workletHash = 15920153828060;
handleTouchEvent.__initData = { code: "function handleTouchEvent_Pnpm_eventHandlerTs3(event,handlers){const{TouchEventType,runCallback,touchEventTypeToCallbackType}=this.__closure;if(event.eventType!==TouchEventType.UNDETERMINED){runCallback(touchEventTypeToCallbackType(event.eventType),handlers,event);}}" };
function eventHandler(arg0, nativeEvent, arg2, arg3, lastUpdateEvent) {
  const result = isGestureEnabled.maybeExtractNativeEvent(nativeEvent);
  const obj = isGestureEnabled;
  if (obj2.isEventForHandlerWithTag(arg0, result)) {
    let tmpResult = tmp(6447);
    if (tmpResult.isStateChangeEvent(result)) {
      handleStateChangeEvent(result, arg2, lastUpdateEvent, arg6);
    } else {
      tmpResult = tmp(6447);
      if (tmpResult.isTouchEvent(result)) {
        if (typeof handleTouchEvent !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (result.eventType !== tmp(6385).TouchEventType.UNDETERMINED) {
          const tmpResult1 = tmp(6445);
          tmpResult1.runCallback(tmp(6445).touchEventTypeToCallbackType(result.eventType), arg2, result);
          const tmpResult2 = tmp(6445);
        }
      } else if (!arg5) {
        if (typeof handleUpdateEvent !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let tmp9 = result;
        if (arg3) {
          lastUpdateEvent = undefined;
          if (lastUpdateEvent) {
            lastUpdateEvent = lastUpdateEvent.lastUpdateEvent;
          }
          tmp9 = arg3(result, lastUpdateEvent);
        }
        const result1 = tmp(6445).flattenAndFilterEvent(tmp9);
        const tmpResult3 = tmp(6445);
        tmp(6445).runCallback(tmp(6398).CALLBACK_TYPE.UPDATE, arg2, result1);
        if (lastUpdateEvent) {
          lastUpdateEvent.lastUpdateEvent = result;
        }
        const tmpResult4 = tmp(6445);
      }
    }
  }
}
eventHandler.__closure = { maybeExtractNativeEvent: require("isGestureEnabled").maybeExtractNativeEvent, isEventForHandlerWithTag: require("isGestureEnabled").isEventForHandlerWithTag, isStateChangeEvent: require("isNativeEvent").isStateChangeEvent, handleStateChangeEvent, isTouchEvent: require("isNativeEvent").isTouchEvent, handleTouchEvent, handleUpdateEvent };
eventHandler.__workletHash = 218531583134;
eventHandler.__initData = { code: "function eventHandler_Pnpm_eventHandlerTs4(handlerTag,sourceEvent,handlers,changeEventCalculator,jsContext,dispatchesAnimatedEvents,fillInDefaultValues){const{maybeExtractNativeEvent,isEventForHandlerWithTag,isStateChangeEvent,handleStateChangeEvent,isTouchEvent,handleTouchEvent,handleUpdateEvent}=this.__closure;const eventWithData=maybeExtractNativeEvent(sourceEvent);if(!isEventForHandlerWithTag(handlerTag,eventWithData)){return;}if(isStateChangeEvent(eventWithData)){handleStateChangeEvent(eventWithData,handlers,jsContext,fillInDefaultValues);return;}if(isTouchEvent(eventWithData)){handleTouchEvent(eventWithData,handlers);return;}if(!dispatchesAnimatedEvents){handleUpdateEvent(eventWithData,handlers,changeEventCalculator,jsContext);}}" };
arg5.handleUpdateEvent = handleUpdateEvent;
arg5.handleTouchEvent = handleTouchEvent;
arg5.eventHandler = eventHandler;