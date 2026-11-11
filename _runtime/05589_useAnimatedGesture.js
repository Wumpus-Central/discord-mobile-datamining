// _runtime/05589_useAnimatedGesture.js
import tagMessage from "05539_tagMessage.js";
import _mod5540 from "metro/05540__.js";
import gestureStateManager from "05541_gestureStateManager.js";
import TouchEventType from "05542_TouchEventType.js";
import CallbackType from "05556_CallbackType.js";
import reanimatedWrapper from "05579_reanimatedWrapper.js";

const require = globalThis.__r;

let items = [
  {
    code: "(function getHandler_Pnpm_useAnimatedGestureTs1(type,gesture){let[CallbackType]=this.__closure;switch(type){case CallbackType.BEGAN:return gesture.onBegin;case CallbackType.START:return gesture.onStart;case CallbackType.UPDATE:return gesture.onUpdate;case CallbackType.CHANGE:return gesture.onChange;case CallbackType.END:return gesture.onEnd;case CallbackType.FINALIZE:return gesture.onFinalize;case CallbackType.TOUCHES_DOWN:return gesture.onTouchesDown;case CallbackType.TOUCHES_MOVE:return gesture.onTouchesMove;case CallbackType.TOUCHES_UP:return gesture.onTouchesUp;case CallbackType.TOUCHES_CANCEL:return gesture.onTouchesCancelled;}})",
  },
  CallbackType.CallbackType,
];
let closure_129_0;
[tmp2, tmp3] = items;
function getHandler(arg0, onBegin) {
  if (require.BEGAN === arg0) {
    return onBegin.onBegin;
  } else if (require.START === arg0) {
    return onBegin.onStart;
  } else if (require.UPDATE === arg0) {
    return onBegin.onUpdate;
  } else if (require.CHANGE === arg0) {
    return onBegin.onChange;
  } else if (require.END === arg0) {
    return onBegin.onEnd;
  } else if (require.FINALIZE === arg0) {
    return onBegin.onFinalize;
  } else if (require.TOUCHES_DOWN === arg0) {
    return onBegin.onTouchesDown;
  } else if (require.TOUCHES_MOVE === arg0) {
    return onBegin.onTouchesMove;
  } else if (require.TOUCHES_UP === arg0) {
    return onBegin.onTouchesUp;
  } else {
    return require.TOUCHES_CANCEL === arg0 ? onBegin.onTouchesCancelled : undefined;
  }
}
let items1 = [tmp3];
getHandler.__closure = items1;
getHandler.__workletHash = 13207499817485;
getHandler.__initData = tmp2;
const items2 = [
  {
    code: "(function touchEventTypeToCallbackType_Pnpm_useAnimatedGestureTs2(eventType){let[TouchEventType,CallbackType]=this.__closure;switch(eventType){case TouchEventType.TOUCHES_DOWN:return CallbackType.TOUCHES_DOWN;case TouchEventType.TOUCHES_MOVE:return CallbackType.TOUCHES_MOVE;case TouchEventType.TOUCHES_UP:return CallbackType.TOUCHES_UP;case TouchEventType.TOUCHES_CANCEL:return CallbackType.TOUCHES_CANCEL;}return CallbackType.UNDEFINED;})",
  },
  TouchEventType.TouchEventType,
  CallbackType.CallbackType,
];
let closure_130_0;
let closure_130_1;
[tmp4, tmp5, tmp6] = items2;
function touchEventTypeToCallbackType(arg0) {
  if (require.TOUCHES_DOWN === arg0) {
    return dependencyMap.TOUCHES_DOWN;
  } else if (require.TOUCHES_MOVE === arg0) {
    return dependencyMap.TOUCHES_MOVE;
  } else if (require.TOUCHES_UP === arg0) {
    return dependencyMap.TOUCHES_UP;
  } else if (require.TOUCHES_CANCEL === arg0) {
    return dependencyMap.TOUCHES_CANCEL;
  } else {
    return dependencyMap.UNDEFINED;
  }
}
const items3 = [tmp5, tmp6];
touchEventTypeToCallbackType.__closure = items3;
touchEventTypeToCallbackType.__workletHash = 16387699537692;
touchEventTypeToCallbackType.__initData = tmp4;
const items4 = [
  {
    code: "(function runWorklet_Pnpm_useAnimatedGestureTs3(type,gesture,event,...args){let[getHandler,tagMessage]=this.__closure;const handler=getHandler(type,gesture);if(gesture.isWorklet[type]){handler===null||handler===void 0||handler(event,...args);}else if(handler){console.warn(tagMessage('Animated gesture callback must be a worklet'));}})",
  },
  getHandler,
  tagMessage.tagMessage,
];
let closure_131_0;
let closure_131_1;
[tmp7, tmp8, tmp9] = items4;
function runWorklet(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
  const tmp2 = require(arg0, arg1);
  if (arg1.isWorklet[arg0]) {
    if (tmp2 != null) {
      items = [arg2];
      HermesBuiltin.arraySpread(substr, 1);
      HermesBuiltin.apply(items, undefined);
    }
  } else if (tmp2) {
    const _console = console;
    console.warn(dependencyMap("Animated gesture callback must be a worklet"));
  }
}
const items5 = [tmp8, tmp9];
runWorklet.__closure = items5;
runWorklet.__workletHash = 10750272614259;
runWorklet.__initData = tmp7;
const items6 = [
  { code: "(function isStateChangeEvent_Pnpm_useAnimatedGestureTs4(event){return event.oldState!=null;})" },
];
[tmp10] = items6;
function isStateChangeEvent(oldState) {
  return null != oldState.oldState;
}
isStateChangeEvent.__workletHash = 5877109924999;
isStateChangeEvent.__initData = tmp10;
const items7 = [{ code: "(function isTouchEvent_Pnpm_useAnimatedGestureTs5(event){return event.eventType!=null;})" }];
[tmp11] = items7;
function isTouchEvent(eventType) {
  return null != eventType.eventType;
}
isTouchEvent.__workletHash = 12487944287542;
isTouchEvent.__initData = tmp11;
let closure_6 = {
  code: "(function pnpm_useAnimatedGestureTs6(event){let[sharedHandlersCallbacks,isStateChangeEvent,State,runWorklet,CallbackType,lastUpdateEvent,isTouchEvent,stateControllers,GestureStateManager,TouchEventType,touchEventTypeToCallbackType]=this.__closure;const currentCallback=sharedHandlersCallbacks.value;if(!currentCallback){return;}for(let i=0;i<currentCallback.length;i++){const gesture=currentCallback[i];if(event.handlerTag!==gesture.handlerTag){continue;}if(isStateChangeEvent(event)){if(event.oldState===State.UNDETERMINED&&event.state===State.BEGAN){runWorklet(CallbackType.BEGAN,gesture,event);}else if((event.oldState===State.BEGAN||event.oldState===State.UNDETERMINED)&&event.state===State.ACTIVE){runWorklet(CallbackType.START,gesture,event);lastUpdateEvent.value[gesture.handlerTag]=undefined;}else if(event.oldState!==event.state&&event.state===State.END){if(event.oldState===State.ACTIVE){runWorklet(CallbackType.END,gesture,event,true);}runWorklet(CallbackType.FINALIZE,gesture,event,true);}else if((event.state===State.FAILED||event.state===State.CANCELLED)&&event.state!==event.oldState){if(event.oldState===State.ACTIVE){runWorklet(CallbackType.END,gesture,event,false);}runWorklet(CallbackType.FINALIZE,gesture,event,false);}}else if(isTouchEvent(event)){if(!stateControllers[i]||stateControllers[i].handlerTag!==event.handlerTag){stateControllers[i]=GestureStateManager.create(event.handlerTag);}if(event.eventType!==TouchEventType.UNDETERMINED){runWorklet(touchEventTypeToCallbackType(event.eventType),gesture,event,stateControllers[i]);}}else{runWorklet(CallbackType.UPDATE,gesture,event);if(gesture.onChange&&gesture.changeEventCalculator){var _gesture$changeEventC;runWorklet(CallbackType.CHANGE,gesture,(_gesture$changeEventC=gesture.changeEventCalculator)===null||_gesture$changeEventC===void 0?void 0:_gesture$changeEventC.call(gesture,event,lastUpdateEvent.value[gesture.handlerTag]));lastUpdateEvent.value[gesture.handlerTag]=event;}}}})",
};

export function useAnimatedGesture(current2, needsToReattachResult) {
  if (reanimatedWrapper.Reanimated) {
    const Reanimated = reanimatedWrapper.Reanimated;
    const sharedValue = Reanimated.useSharedValue(null);
    const Reanimated2 = reanimatedWrapper.Reanimated;
    items = [_undefined7, sharedValue, isStateChangeEvent, , , , , , , , ,];
    const sharedValue1 = Reanimated2.useSharedValue([]);
    items[3] = _mod5540.State;
    items[4] = runWorklet;
    items[5] = CallbackType.CallbackType;
    items[6] = sharedValue1;
    items[7] = isTouchEvent;
    items[8] = [];
    items[9] = gestureStateManager.GestureStateManager;
    items[10] = TouchEventType.TouchEventType;
    items[11] = touchEventTypeToCallbackType;
    c0 = undefined;
    c1 = undefined;
    c2 = undefined;
    c3 = undefined;
    c4 = undefined;
    c5 = undefined;
    c6 = undefined;
    c7 = undefined;
    c8 = undefined;
    c9 = undefined;
    c10 = undefined;
    [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23] = items;
    function pnpm_useAnimatedGestureTs6(handlerTag) {
      value = _undefined.value;
      if (value) {
        for (let num = 0; num < value.length; num = num + 1) {
          let tmp2 = value[num];
          if (handlerTag.handlerTag === tmp2.handlerTag) {
            if (_undefined2(handlerTag)) {
              if (handlerTag.oldState === _undefined3.UNDETERMINED) {
                if (handlerTag.state === _undefined3.BEGAN) {
                  let tmp45 = _undefined4(_undefined5.BEGAN, tmp2, handlerTag);
                }
              }
              if (handlerTag.oldState === _undefined3.BEGAN) {
                if (handlerTag.state === _undefined3.ACTIVE) {
                  let tmp20 = _undefined4(_undefined5.START, tmp2, handlerTag);
                  _undefined6.value[tmp2.handlerTag] = undefined;
                }
              }
              if (handlerTag.oldState !== handlerTag.state) {
                if (handlerTag.state === _undefined3.END) {
                  if (handlerTag.oldState === _undefined3.ACTIVE) {
                    let flag3 = true;
                    let tmp37 = _undefined4(_undefined5.END, tmp2, handlerTag, true);
                  }
                  let flag4 = true;
                  let tmp42 = _undefined4(_undefined5.FINALIZE, tmp2, handlerTag, true);
                }
              }
              let tmp22 =
                (handlerTag.state !== _undefined3.FAILED && handlerTag.state !== _undefined3.CANCELLED) ||
                handlerTag.state === handlerTag.oldState;
              if (!tmp22) {
                if (handlerTag.oldState === _undefined3.ACTIVE) {
                  let flag = false;
                  let tmp27 = _undefined4(_undefined5.END, tmp2, handlerTag, false);
                }
                let flag2 = false;
                let tmp32 = _undefined4(_undefined5.FINALIZE, tmp2, handlerTag, false);
              }
            } else if (_undefined7(handlerTag)) {
              let tmp14 = _undefined8[num] && _undefined8[num].handlerTag === handlerTag.handlerTag;
              if (!tmp14) {
                _undefined8[num] = _undefined9.create(handlerTag.handlerTag);
              }
              if (handlerTag.eventType !== _undefined10.UNDETERMINED) {
                let tmp51 = _undefined4(_undefined11(handlerTag.eventType), tmp2, handlerTag, _undefined8[num]);
              }
            } else {
              let tmp7 = _undefined4(_undefined5.UPDATE, tmp2, handlerTag);
              let tmp8 = tmp2.onChange && tmp2.changeEventCalculator;
              if (tmp8) {
                let changeEventCalculator = tmp2.changeEventCalculator;
                let result;
                if (changeEventCalculator != null) {
                  result = changeEventCalculator(handlerTag, _undefined6.value[tmp2.handlerTag]);
                }
                let tmp5Result = _undefined4(_undefined5.CHANGE, tmp2, result);
                _undefined6.value[tmp2.handlerTag] = handlerTag;
              }
            }
          }
        }
      }
    }
    const items1 = [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23];
    pnpm_useAnimatedGestureTs6.__closure = items1;
    pnpm_useAnimatedGestureTs6.__workletHash = 2837684349286;
    pnpm_useAnimatedGestureTs6.__initData = tmp12;
    const Reanimated3 = reanimatedWrapper.Reanimated;
    current2.animatedEventHandler = Reanimated3.useEvent(
      pnpm_useAnimatedGestureTs6,
      ["onGestureHandlerStateChange", "onGestureHandlerEvent"],
      needsToReattachResult,
    );
    current2.animatedHandlers = sharedValue;
  }
}
