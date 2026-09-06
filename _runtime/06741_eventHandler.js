// _runtime/06741_eventHandler.js
import _mod6661 from "metro/06661__.js";
import TouchEventType from "06663_TouchEventType.js";
import _mod6676 from "metro/06676__.js";
import DEFAULT_PROPS_TRANSFORMER from "06723_DEFAULT_PROPS_TRANSFORMER.js";

require = fn;
const dependencyMap = arg6;
function handleStateChangeEvent(result, arg1, lastUpdateEvent, fn) {
  ({ oldState, state } = result);
  let obj = DEFAULT_PROPS_TRANSFORMER;
  result = obj.flattenAndFilterEvent(result);
  if (oldState === _mod6661.State.UNDETERMINED) {
    if (state === tmp(6661).State.BEGAN) {
      let tmpResult = tmp(6723);
      tmpResult.runCallback(tmp(6676).CALLBACK_TYPE.BEGAN, arg1, result);
    }
  }
  if (oldState === _mod6661.State.BEGAN) {
    if (state === tmp(6661).State.ACTIVE) {
      if (fn != null) {
        fn(result);
      }
      tmpResult = tmp(6723);
      tmpResult.runCallback(tmp(6676).CALLBACK_TYPE.START, arg1, result);
    }
  }
  if (oldState !== state) {
    obj = {};
    const merged = Object.assign(result);
    obj.canceled = state === tmp(6661).State.FAILED || state === tmp(6661).State.CANCELLED;
    if (oldState === tmp(6661).State.ACTIVE) {
      if (fn != null) {
        fn(obj);
      }
      tmp(6723).runCallback(tmp(6676).CALLBACK_TYPE.END, arg1, obj);
      const tmpResult1 = tmp(6723);
    }
    const tmp7 = state === tmp(6661).State.FAILED || state === tmp(6661).State.CANCELLED;
    tmp(6723).runCallback(tmp(6676).CALLBACK_TYPE.FINALIZE, arg1, obj);
    if (lastUpdateEvent) {
      lastUpdateEvent.lastUpdateEvent = undefined;
    }
    const tmpResult2 = tmp(6723);
  }
}
let obj = {
  flattenAndFilterEvent: fn(6723).flattenAndFilterEvent,
  State: fn(6661).State,
  runCallback: fn(6723).runCallback,
  CALLBACK_TYPE: fn(6676).CALLBACK_TYPE,
};
handleStateChangeEvent.__closure = obj;
handleStateChangeEvent.__workletHash = 2533223590466;
handleStateChangeEvent.__initData = {
  code: "function handleStateChangeEvent_Pnpm_eventHandlerTs1(eventWithData,callbacks,context,fillInDefaultValues){const{flattenAndFilterEvent,State,runCallback,CALLBACK_TYPE}=this.__closure;const{oldState:oldState,state:state}=eventWithData;const event=flattenAndFilterEvent(eventWithData);if(oldState===State.UNDETERMINED&&state===State.BEGAN){runCallback(CALLBACK_TYPE.BEGAN,callbacks,event);}else if((oldState===State.BEGAN||oldState===State.UNDETERMINED)&&state===State.ACTIVE){fillInDefaultValues===null||fillInDefaultValues===void 0||fillInDefaultValues(event);runCallback(CALLBACK_TYPE.START,callbacks,event);}else if(oldState!==state&&(state===State.END||state===State.FAILED||state===State.CANCELLED)){const canceled=state===State.FAILED||state===State.CANCELLED;const endEvent={...event,canceled:canceled};if(oldState===State.ACTIVE){fillInDefaultValues===null||fillInDefaultValues===void 0||fillInDefaultValues(endEvent);runCallback(CALLBACK_TYPE.END,callbacks,endEvent);}runCallback(CALLBACK_TYPE.FINALIZE,callbacks,endEvent);if(context){context.lastUpdateEvent=undefined;}}}",
};
function handleUpdateEvent(lastUpdateEvent, arg1, fn, lastUpdateEvent2) {
  let tmp = lastUpdateEvent;
  if (fn) {
    lastUpdateEvent = undefined;
    if (lastUpdateEvent2) {
      lastUpdateEvent = lastUpdateEvent2.lastUpdateEvent;
    }
    tmp = fn(lastUpdateEvent, lastUpdateEvent);
  }
  const result = DEFAULT_PROPS_TRANSFORMER.flattenAndFilterEvent(tmp);
  DEFAULT_PROPS_TRANSFORMER.runCallback(_mod6676.CALLBACK_TYPE.UPDATE, arg1, result);
  if (lastUpdateEvent2) {
    lastUpdateEvent2.lastUpdateEvent = lastUpdateEvent;
  }
}
obj = {
  flattenAndFilterEvent: fn(6723).flattenAndFilterEvent,
  runCallback: fn(6723).runCallback,
  CALLBACK_TYPE: fn(6676).CALLBACK_TYPE,
};
handleUpdateEvent.__closure = obj;
handleUpdateEvent.__workletHash = 13503118278355;
handleUpdateEvent.__initData = {
  code: "function handleUpdateEvent_Pnpm_eventHandlerTs2(eventWithData,handlers,changeEventCalculator,context){const{flattenAndFilterEvent,runCallback,CALLBACK_TYPE}=this.__closure;const eventWithChanges=changeEventCalculator?changeEventCalculator(eventWithData,context?context.lastUpdateEvent:undefined):eventWithData;const event=flattenAndFilterEvent(eventWithChanges);runCallback(CALLBACK_TYPE.UPDATE,handlers,event);if(context){context.lastUpdateEvent=eventWithData;}}",
};
function handleTouchEvent(eventType, arg1) {
  if (eventType.eventType !== TouchEventType.TouchEventType.UNDETERMINED) {
    tmp(6723);
    const tmpResult = tmp(6723);
    tmpResult.runCallback(tmpResult.touchEventTypeToCallbackType(eventType.eventType), arg1, eventType);
  }
}
obj = {
  TouchEventType: fn(6663).TouchEventType,
  runCallback: fn(6723).runCallback,
  touchEventTypeToCallbackType: fn(6723).touchEventTypeToCallbackType,
};
handleTouchEvent.__closure = obj;
handleTouchEvent.__workletHash = 15920153828060;
handleTouchEvent.__initData = {
  code: "function handleTouchEvent_Pnpm_eventHandlerTs3(event,handlers){const{TouchEventType,runCallback,touchEventTypeToCallbackType}=this.__closure;if(event.eventType!==TouchEventType.UNDETERMINED){runCallback(touchEventTypeToCallbackType(event.eventType),handlers,event);}}",
};
function eventHandler(arg0, nativeEvent, arg2, fn, lastUpdateEvent, arg5, fn) {
  const result = DEFAULT_PROPS_TRANSFORMER.maybeExtractNativeEvent(nativeEvent);
  if (obj2.isEventForHandlerWithTag(arg0, result)) {
    let tmpResult = tmp(6725);
    if (tmpResult.isStateChangeEvent(result)) {
      handleStateChangeEvent(result, arg2, lastUpdateEvent, fn);
    } else {
      tmpResult = tmp(6725);
      if (tmpResult.isTouchEvent(result)) {
        if (typeof handleTouchEvent === "function") {
          if (result.eventType !== tmp(6663).TouchEventType.UNDETERMINED) {
            const tmpResult1 = tmp(6723);
            tmpResult1.runCallback(tmp(6723).touchEventTypeToCallbackType(result.eventType), arg2, result);
            const tmpResult2 = tmp(6723);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (!arg5) {
        if (typeof handleUpdateEvent === "function") {
          let tmp9 = result;
          if (fn) {
            lastUpdateEvent = undefined;
            if (lastUpdateEvent) {
              lastUpdateEvent = lastUpdateEvent.lastUpdateEvent;
            }
            tmp9 = fn(result, lastUpdateEvent);
          }
          const result1 = tmp(6723).flattenAndFilterEvent(tmp9);
          const tmpResult3 = tmp(6723);
          tmp(6723).runCallback(tmp(6676).CALLBACK_TYPE.UPDATE, arg2, result1);
          if (lastUpdateEvent) {
            lastUpdateEvent.lastUpdateEvent = result;
          }
          const tmpResult4 = tmp(6723);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }
}
eventHandler.__closure = {
  maybeExtractNativeEvent: fn(6723).maybeExtractNativeEvent,
  isEventForHandlerWithTag: fn(6723).isEventForHandlerWithTag,
  isStateChangeEvent: fn(6725).isStateChangeEvent,
  handleStateChangeEvent,
  isTouchEvent: fn(6725).isTouchEvent,
  handleTouchEvent,
  handleUpdateEvent,
};
eventHandler.__workletHash = 218531583134;
eventHandler.__initData = {
  code: "function eventHandler_Pnpm_eventHandlerTs4(handlerTag,sourceEvent,handlers,changeEventCalculator,jsContext,dispatchesAnimatedEvents,fillInDefaultValues){const{maybeExtractNativeEvent,isEventForHandlerWithTag,isStateChangeEvent,handleStateChangeEvent,isTouchEvent,handleTouchEvent,handleUpdateEvent}=this.__closure;const eventWithData=maybeExtractNativeEvent(sourceEvent);if(!isEventForHandlerWithTag(handlerTag,eventWithData)){return;}if(isStateChangeEvent(eventWithData)){handleStateChangeEvent(eventWithData,handlers,jsContext,fillInDefaultValues);return;}if(isTouchEvent(eventWithData)){handleTouchEvent(eventWithData,handlers);return;}if(!dispatchesAnimatedEvents){handleUpdateEvent(eventWithData,handlers,changeEventCalculator,jsContext);}}",
};

export { handleUpdateEvent };
export { handleTouchEvent };
export { eventHandler };
