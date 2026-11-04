// _runtime/05519_eventHandler.js
import _mod5433 from "metro/05433__.js";
import TouchEventType from "05435_TouchEventType.js";
import CallbackType from "05449_CallbackType.js";
import resolveInternalConfigProps from "05499_resolveInternalConfigProps.js";
import eventUtils from "05501_eventUtils.js";

const items = [
  {
    code: "(function handleStateChangeEvent_Pnpm_eventHandlerTs1(eventWithData,callbacks,context,fillInDefaultValues){let[flattenAndFilterEvent,State,runCallback,CallbackType]=this.__closure;const{oldState:oldState,state:state}=eventWithData;const event=flattenAndFilterEvent(eventWithData);if(oldState===State.UNDETERMINED&&state===State.BEGAN){runCallback(CallbackType.BEGAN,callbacks,event);}else if((oldState===State.BEGAN||oldState===State.UNDETERMINED)&&state===State.ACTIVE){fillInDefaultValues===null||fillInDefaultValues===void 0||fillInDefaultValues(event);runCallback(CallbackType.START,callbacks,event);}else if(oldState!==state&&(state===State.END||state===State.FAILED||state===State.CANCELLED)){const canceled=state===State.FAILED||state===State.CANCELLED;const endEvent={...event,canceled:canceled};if(oldState===State.ACTIVE){fillInDefaultValues===null||fillInDefaultValues===void 0||fillInDefaultValues(endEvent);runCallback(CallbackType.END,callbacks,endEvent);}runCallback(CallbackType.FINALIZE,callbacks,endEvent);if(context){context.lastUpdateEvent=undefined;}}})",
  },
  resolveInternalConfigProps.flattenAndFilterEvent,
  _mod5433.State,
  resolveInternalConfigProps.runCallback,
  CallbackType.CallbackType,
];
let c0;
let c1;
let c2;
let c3;
[tmp2, tmp3, tmp4, tmp5, tmp6] = items;
function handleStateChangeEvent(arg0, arg1, arg2, fn) {
  ({ oldState, state } = arg0);
  const tmp = _undefined(arg0);
  if (oldState === _undefined2.UNDETERMINED) {
    if (state === _undefined2.BEGAN) {
      _undefined3(_undefined4.BEGAN, arg1, tmp);
    }
  }
  if (oldState === _undefined2.BEGAN) {
    if (state === _undefined2.ACTIVE) {
      if (fn != null) {
        fn(tmp);
      }
      _undefined3(_undefined4.START, arg1, tmp);
    }
  }
  if (oldState !== state) {
    const obj = {};
    const merged = Object.assign(tmp);
    obj.canceled = state === _undefined2.FAILED || state === _undefined2.CANCELLED;
    if (oldState === _undefined2.ACTIVE) {
      if (fn != null) {
        fn(obj);
      }
      _undefined3(_undefined4.END, arg1, obj);
    }
    _undefined3(_undefined4.FINALIZE, arg1, obj);
    if (arg2) {
      arg2.lastUpdateEvent = undefined;
    }
    const tmp8 = state === _undefined2.FAILED || state === _undefined2.CANCELLED;
  }
}
const items1 = [tmp3, tmp4, tmp5, tmp6];
handleStateChangeEvent.__closure = items1;
handleStateChangeEvent.__workletHash = 9978570480356;
handleStateChangeEvent.__initData = tmp2;
const items2 = [
  {
    code: "(function handleUpdateEvent_Pnpm_eventHandlerTs2(eventWithData,handlers,changeEventCalculator,context){let[flattenAndFilterEvent,runCallback,CallbackType]=this.__closure;const eventWithChanges=changeEventCalculator?changeEventCalculator(eventWithData,context?context.lastUpdateEvent:undefined):eventWithData;const event=flattenAndFilterEvent(eventWithChanges);runCallback(CallbackType.UPDATE,handlers,event);if(context){context.lastUpdateEvent=eventWithData;}})",
  },
  resolveInternalConfigProps.flattenAndFilterEvent,
  resolveInternalConfigProps.runCallback,
  CallbackType.CallbackType,
];
let closure_129_0;
let closure_129_1;
let closure_129_2;
[tmp7, tmp8, tmp9, tmp10] = items2;
function handleUpdateEvent(lastUpdateEvent, arg1, fn, lastUpdateEvent2) {
  let tmp = lastUpdateEvent;
  if (fn) {
    lastUpdateEvent = undefined;
    if (lastUpdateEvent2) {
      lastUpdateEvent = lastUpdateEvent2.lastUpdateEvent;
    }
    tmp = fn(lastUpdateEvent, lastUpdateEvent);
  }
  _undefined2(_undefined3.UPDATE, arg1, _undefined(tmp));
  if (lastUpdateEvent2) {
    lastUpdateEvent2.lastUpdateEvent = lastUpdateEvent;
  }
}
const items3 = [tmp8, tmp9, tmp10];
handleUpdateEvent.__closure = items3;
handleUpdateEvent.__workletHash = 8347724557322;
handleUpdateEvent.__initData = tmp7;
const items4 = [
  {
    code: "(function handleTouchEvent_Pnpm_eventHandlerTs3(event,handlers){let[TouchEventType,runCallback,touchEventTypeToCallbackType]=this.__closure;if(event.eventType!==TouchEventType.UNDETERMINED){runCallback(touchEventTypeToCallbackType(event.eventType),handlers,event);}})",
  },
  TouchEventType.TouchEventType,
  resolveInternalConfigProps.runCallback,
  resolveInternalConfigProps.touchEventTypeToCallbackType,
];
let closure_130_0;
let closure_130_1;
let closure_130_2;
[tmp11, tmp12, tmp13, tmp14] = items4;
function handleTouchEvent(eventType, arg1) {
  if (eventType.eventType !== _undefined.UNDETERMINED) {
    _undefined2(_undefined3(eventType.eventType), arg1, eventType);
  }
}
const items5 = [tmp12, tmp13, tmp14];
handleTouchEvent.__closure = items5;
handleTouchEvent.__workletHash = 5177559056645;
handleTouchEvent.__initData = tmp11;
const items6 = [
  {
    code: "(function eventHandler_Pnpm_eventHandlerTs4(handlerTag,sourceEvent,handlers,changeEventCalculator,jsContext,dispatchesAnimatedEvents,fillInDefaultValues){let[maybeExtractNativeEvent,isEventForHandlerWithTag,isStateChangeEvent,handleStateChangeEvent,isTouchEvent,handleTouchEvent,handleUpdateEvent]=this.__closure;const eventWithData=maybeExtractNativeEvent(sourceEvent);if(!isEventForHandlerWithTag(handlerTag,eventWithData)){return;}if(isStateChangeEvent(eventWithData)){handleStateChangeEvent(eventWithData,handlers,jsContext,fillInDefaultValues);return;}if(isTouchEvent(eventWithData)){handleTouchEvent(eventWithData,handlers);return;}if(eventWithData.handlerData===undefined){return;}if(!dispatchesAnimatedEvents){handleUpdateEvent(eventWithData,handlers,changeEventCalculator,jsContext);}})",
  },
  resolveInternalConfigProps.maybeExtractNativeEvent,
  resolveInternalConfigProps.isEventForHandlerWithTag,
  eventUtils.isStateChangeEvent,
  handleStateChangeEvent,
  eventUtils.isTouchEvent,
  handleTouchEvent,
  handleUpdateEvent,
];
let closure_131_0;
let closure_131_1;
let closure_131_2;
let closure_131_3;
let closure_131_4;
let closure_131_5;
let closure_131_6;
[tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items6;
function eventHandler(arg0, arg1, constructResult, arg3, arg4, arg5, arg6) {
  const tmp = _undefined(arg1);
  if (_undefined2(arg0, tmp)) {
    if (_undefined3(tmp)) {
      _undefined4(tmp, constructResult, arg4, arg6);
    } else if (React4(tmp)) {
      hasOwnProperty(tmp, constructResult);
    } else if (undefined !== tmp.handlerData) {
      if (!arg5) {
        timestampProducer(tmp, constructResult, arg3, arg4);
      }
    }
  }
}
const items7 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22];
eventHandler.__closure = items7;
eventHandler.__workletHash = 15212308347969;
eventHandler.__initData = tmp15;

export { handleUpdateEvent };
export { handleTouchEvent };
export { eventHandler };
