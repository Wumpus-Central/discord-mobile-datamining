// _runtime/06233_eventHandler.js
import State from "06153_State.js";
import TouchEventType from "06155_TouchEventType.js";
import CALLBACK_TYPE from "06168_CALLBACK_TYPE.js";
import maybeExtractNativeEvent from "06215_maybeExtractNativeEvent.js";
import _mod6217 from "metro/06217__.js";

function handleStateChangeEvent(result, arg1, lastUpdateEvent, fn) {
  let oldState;
  let state;
  let tmp7;
  ({ oldState, state } = result);
  const obj = maybeExtractNativeEvent;
  result = obj.flattenAndFilterEvent(result);
  if (oldState === State.State.UNDETERMINED) {
    if (state === State.State.BEGAN) {
      const tmpResult = maybeExtractNativeEvent;
      tmpResult.runCallback(CALLBACK_TYPE.CALLBACK_TYPE.BEGAN, arg1, result);
    }
  }
  if (oldState === State.State.BEGAN) {
    if (state === State.State.ACTIVE) {
      if (fn != null) {
        fn(result);
      }
      const tmpResult4 = maybeExtractNativeEvent;
      tmpResult4.runCallback(CALLBACK_TYPE.CALLBACK_TYPE.START, arg1, result);
    }
  }
  if (oldState !== state) {
    const obj2 = { canceled: tmp7 };
    tmp7 = state === State.State.FAILED || state === State.State.CANCELLED;
    const merged = Object.assign(result);
    if (oldState === State.State.ACTIVE) {
      if (fn != null) {
        fn(obj2);
      }
      const tmpResult5 = maybeExtractNativeEvent;
      tmpResult5.runCallback(CALLBACK_TYPE.CALLBACK_TYPE.END, arg1, obj2);
    }
    const tmpResult6 = maybeExtractNativeEvent;
    tmpResult6.runCallback(CALLBACK_TYPE.CALLBACK_TYPE.FINALIZE, arg1, obj2);
    if (lastUpdateEvent) {
      lastUpdateEvent.lastUpdateEvent = undefined;
    }
  }
}
let obj = {
  flattenAndFilterEvent: maybeExtractNativeEvent.flattenAndFilterEvent,
  State: State.State,
  runCallback: maybeExtractNativeEvent.runCallback,
  CALLBACK_TYPE: CALLBACK_TYPE.CALLBACK_TYPE,
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
  const obj = maybeExtractNativeEvent;
  const result = obj.flattenAndFilterEvent(tmp);
  const obj2 = maybeExtractNativeEvent;
  obj2.runCallback(CALLBACK_TYPE.CALLBACK_TYPE.UPDATE, arg1, result);
  if (lastUpdateEvent2) {
    lastUpdateEvent2.lastUpdateEvent = lastUpdateEvent;
  }
}
let obj2 = {
  flattenAndFilterEvent: maybeExtractNativeEvent.flattenAndFilterEvent,
  runCallback: maybeExtractNativeEvent.runCallback,
  CALLBACK_TYPE: CALLBACK_TYPE.CALLBACK_TYPE,
};
handleUpdateEvent.__closure = obj2;
handleUpdateEvent.__workletHash = 13503118278355;
handleUpdateEvent.__initData = {
  code: "function handleUpdateEvent_Pnpm_eventHandlerTs2(eventWithData,handlers,changeEventCalculator,context){const{flattenAndFilterEvent,runCallback,CALLBACK_TYPE}=this.__closure;const eventWithChanges=changeEventCalculator?changeEventCalculator(eventWithData,context?context.lastUpdateEvent:undefined):eventWithData;const event=flattenAndFilterEvent(eventWithChanges);runCallback(CALLBACK_TYPE.UPDATE,handlers,event);if(context){context.lastUpdateEvent=eventWithData;}}",
};
function handleTouchEvent(eventType, arg1) {
  if (eventType.eventType !== TouchEventType.TouchEventType.UNDETERMINED) {
    const runCallback = maybeExtractNativeEvent.runCallback;
    const tmpResult2 = maybeExtractNativeEvent;
    runCallback(tmpResult2.touchEventTypeToCallbackType(eventType.eventType), arg1, eventType);
  }
}
handleTouchEvent.__closure = {
  TouchEventType: TouchEventType.TouchEventType,
  runCallback: maybeExtractNativeEvent.runCallback,
  touchEventTypeToCallbackType: maybeExtractNativeEvent.touchEventTypeToCallbackType,
};
handleTouchEvent.__workletHash = 15920153828060;
handleTouchEvent.__initData = {
  code: "function handleTouchEvent_Pnpm_eventHandlerTs3(event,handlers){const{TouchEventType,runCallback,touchEventTypeToCallbackType}=this.__closure;if(event.eventType!==TouchEventType.UNDETERMINED){runCallback(touchEventTypeToCallbackType(event.eventType),handlers,event);}}",
};
function eventHandler(current, nativeEvent, arg2, fn, lastUpdateEvent, arg5, fn2) {
  const obj = maybeExtractNativeEvent;
  const result = obj.maybeExtractNativeEvent(nativeEvent);
  const obj2 = maybeExtractNativeEvent;
  if (obj2.isEventForHandlerWithTag(current, result)) {
    const tmpResult = _mod6217;
    if (tmpResult.isStateChangeEvent(result)) {
      handleStateChangeEvent(result, arg2, lastUpdateEvent, fn);
    } else {
      const tmpResult6 = _mod6217;
      if (tmpResult6.isTouchEvent(result)) {
        if (typeof handleTouchEvent === "function") {
          if (result.eventType !== TouchEventType.TouchEventType.UNDETERMINED) {
            const runCallback = maybeExtractNativeEvent.runCallback;
            const tmpResult8 = maybeExtractNativeEvent;
            runCallback(tmpResult8.touchEventTypeToCallbackType(result.eventType), arg2, result);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        const tmp6 = arg5;
        if (!tmp6) {
          if (typeof handleUpdateEvent === "function") {
            let tmp9 = result;
            if (fn) {
              lastUpdateEvent = undefined && lastUpdateEvent.lastUpdateEvent;
              tmp9 = fn(result, lastUpdateEvent);
            }
            const tmpResult9 = maybeExtractNativeEvent;
            const result1 = tmpResult9.flattenAndFilterEvent(tmp9);
            const tmpResult10 = maybeExtractNativeEvent;
            tmpResult10.runCallback(CALLBACK_TYPE.CALLBACK_TYPE.UPDATE, arg2, result1);
            if (lastUpdateEvent) {
              lastUpdateEvent.lastUpdateEvent = result;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
    }
  }
}
({
  TouchEventType: TouchEventType.TouchEventType,
  runCallback: maybeExtractNativeEvent.runCallback,
  touchEventTypeToCallbackType: maybeExtractNativeEvent.touchEventTypeToCallbackType,
});
eventHandler.__closure = {
  maybeExtractNativeEvent: maybeExtractNativeEvent.maybeExtractNativeEvent,
  isEventForHandlerWithTag: maybeExtractNativeEvent.isEventForHandlerWithTag,
  isStateChangeEvent: _mod6217.isStateChangeEvent,
  handleStateChangeEvent,
  isTouchEvent: _mod6217.isTouchEvent,
  handleTouchEvent,
  handleUpdateEvent,
};
eventHandler.__workletHash = 218531583134;
eventHandler.__initData = {
  code: "function eventHandler_Pnpm_eventHandlerTs4(handlerTag,sourceEvent,handlers,changeEventCalculator,jsContext,dispatchesAnimatedEvents,fillInDefaultValues){const{maybeExtractNativeEvent,isEventForHandlerWithTag,isStateChangeEvent,handleStateChangeEvent,isTouchEvent,handleTouchEvent,handleUpdateEvent}=this.__closure;const eventWithData=maybeExtractNativeEvent(sourceEvent);if(!isEventForHandlerWithTag(handlerTag,eventWithData)){return;}if(isStateChangeEvent(eventWithData)){handleStateChangeEvent(eventWithData,handlers,jsContext,fillInDefaultValues);return;}if(isTouchEvent(eventWithData)){handleTouchEvent(eventWithData,handlers);return;}if(!dispatchesAnimatedEvents){handleUpdateEvent(eventWithData,handlers,changeEventCalculator,jsContext);}}",
};
({
  maybeExtractNativeEvent: maybeExtractNativeEvent.maybeExtractNativeEvent,
  isEventForHandlerWithTag: maybeExtractNativeEvent.isEventForHandlerWithTag,
  isStateChangeEvent: _mod6217.isStateChangeEvent,
  handleStateChangeEvent,
  isTouchEvent: _mod6217.isTouchEvent,
  handleTouchEvent,
  handleUpdateEvent,
});

export { handleUpdateEvent };
export { handleTouchEvent };
export { eventHandler };
