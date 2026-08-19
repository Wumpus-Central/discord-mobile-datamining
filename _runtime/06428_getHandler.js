// _runtime/06428_getHandler.js
import tagMessage from "06382_tagMessage.js";
import _mod6385 from "metro/06385__.js";
import _isNativeReflectConstruct from "06398__isNativeReflectConstruct.js";

require = fn;
const dependencyMap = arg6;
function getHandler(arg0, onBegin) {
  if (_isNativeReflectConstruct.CALLBACK_TYPE.BEGAN === arg0) {
    return onBegin.onBegin;
  } else if (_isNativeReflectConstruct.CALLBACK_TYPE.START === arg0) {
    return onBegin.onStart;
  } else if (_isNativeReflectConstruct.CALLBACK_TYPE.UPDATE === arg0) {
    return onBegin.onUpdate;
  } else if (_isNativeReflectConstruct.CALLBACK_TYPE.CHANGE === arg0) {
    return onBegin.onChange;
  } else if (_isNativeReflectConstruct.CALLBACK_TYPE.END === arg0) {
    return onBegin.onEnd;
  } else if (_isNativeReflectConstruct.CALLBACK_TYPE.FINALIZE === arg0) {
    return onBegin.onFinalize;
  } else if (_isNativeReflectConstruct.CALLBACK_TYPE.TOUCHES_DOWN === arg0) {
    return onBegin.onTouchesDown;
  } else if (_isNativeReflectConstruct.CALLBACK_TYPE.TOUCHES_MOVE === arg0) {
    return onBegin.onTouchesMove;
  } else if (_isNativeReflectConstruct.CALLBACK_TYPE.TOUCHES_UP === arg0) {
    return onBegin.onTouchesUp;
  } else if (_isNativeReflectConstruct.CALLBACK_TYPE.TOUCHES_CANCEL === arg0) {
    return onBegin.onTouchesCancelled;
  }
}
let obj = { CALLBACK_TYPE: require("_isNativeReflectConstruct").CALLBACK_TYPE };
getHandler.__closure = obj;
getHandler.__workletHash = 611602598219;
getHandler.__initData = { code: "function getHandler_Pnpm_useAnimatedGestureTs1(type,gesture){const{CALLBACK_TYPE}=this.__closure;switch(type){case CALLBACK_TYPE.BEGAN:return gesture.onBegin;case CALLBACK_TYPE.START:return gesture.onStart;case CALLBACK_TYPE.UPDATE:return gesture.onUpdate;case CALLBACK_TYPE.CHANGE:return gesture.onChange;case CALLBACK_TYPE.END:return gesture.onEnd;case CALLBACK_TYPE.FINALIZE:return gesture.onFinalize;case CALLBACK_TYPE.TOUCHES_DOWN:return gesture.onTouchesDown;case CALLBACK_TYPE.TOUCHES_MOVE:return gesture.onTouchesMove;case CALLBACK_TYPE.TOUCHES_UP:return gesture.onTouchesUp;case CALLBACK_TYPE.TOUCHES_CANCEL:return gesture.onTouchesCancelled;}}" };
function touchEventTypeToCallbackType(arg0) {
  if (_mod6385.TouchEventType.TOUCHES_DOWN === arg0) {
    return _isNativeReflectConstruct.CALLBACK_TYPE.TOUCHES_DOWN;
  } else if (_mod6385.TouchEventType.TOUCHES_MOVE === arg0) {
    return _isNativeReflectConstruct.CALLBACK_TYPE.TOUCHES_MOVE;
  } else if (_mod6385.TouchEventType.TOUCHES_UP === arg0) {
    return _isNativeReflectConstruct.CALLBACK_TYPE.TOUCHES_UP;
  } else if (_mod6385.TouchEventType.TOUCHES_CANCEL === arg0) {
    return _isNativeReflectConstruct.CALLBACK_TYPE.TOUCHES_CANCEL;
  } else {
    return _isNativeReflectConstruct.CALLBACK_TYPE.UNDEFINED;
  }
}
obj = { TouchEventType: require("metro/06385__.js").TouchEventType, CALLBACK_TYPE: require("_isNativeReflectConstruct").CALLBACK_TYPE };
touchEventTypeToCallbackType.__closure = obj;
touchEventTypeToCallbackType.__workletHash = 12322546845125;
touchEventTypeToCallbackType.__initData = { code: "function touchEventTypeToCallbackType_Pnpm_useAnimatedGestureTs2(eventType){const{TouchEventType,CALLBACK_TYPE}=this.__closure;switch(eventType){case TouchEventType.TOUCHES_DOWN:return CALLBACK_TYPE.TOUCHES_DOWN;case TouchEventType.TOUCHES_MOVE:return CALLBACK_TYPE.TOUCHES_MOVE;case TouchEventType.TOUCHES_UP:return CALLBACK_TYPE.TOUCHES_UP;case TouchEventType.TOUCHES_CANCEL:return CALLBACK_TYPE.TOUCHES_CANCEL;}return CALLBACK_TYPE.UNDEFINED;}" };
function runWorklet(END, arg1, result, items) {
  const substr = [...arguments].slice();
  const tmp2 = getHandler(END, arg1);
  if (arg1.isWorklet[END]) {
    if (tmp2 != null) {
      items = [result];
      HermesBuiltin.arraySpread(substr, 1);
      HermesBuiltin.apply(items, undefined);
    }
  } else if (tmp2) {
    const _console = console;
    console.warn(tagMessage.tagMessage("Animated gesture callback must be a worklet"));
  }
}
obj = { getHandler, tagMessage: require("tagMessage").tagMessage };
runWorklet.__closure = obj;
runWorklet.__workletHash = 6506685255530;
runWorklet.__initData = { code: "function runWorklet_Pnpm_useAnimatedGestureTs3(type,gesture,event,...args){const{getHandler,tagMessage}=this.__closure;const handler=getHandler(type,gesture);if(gesture.isWorklet[type]){handler===null||handler===void 0||handler(event,...args);}else if(handler){console.warn(tagMessage('Animated gesture callback must be a worklet'));}}" };
function isStateChangeEvent(oldState) {
  return null != oldState.oldState;
}
isStateChangeEvent.__closure = {};
isStateChangeEvent.__workletHash = 8201524245094;
isStateChangeEvent.__initData = { code: "function isStateChangeEvent_Pnpm_useAnimatedGestureTs4(event){return event.oldState!=null;}" };
function isTouchEvent(eventType) {
  return null != eventType.eventType;
}
isTouchEvent.__closure = {};
isTouchEvent.__workletHash = 6575076970903;
isTouchEvent.__initData = { code: "function isTouchEvent_Pnpm_useAnimatedGestureTs5(event){return event.eventType!=null;}" };
let closure_7 = { code: "function pnpm_useAnimatedGestureTs6(event){const{sharedHandlersCallbacks,isStateChangeEvent,State,runWorklet,CALLBACK_TYPE,lastUpdateEvent,isTouchEvent,stateControllers,GestureStateManager,TouchEventType,touchEventTypeToCallbackType}=this.__closure;const currentCallback=sharedHandlersCallbacks.value;if(!currentCallback){return;}for(let i=0;i<currentCallback.length;i++){const gesture=currentCallback[i];if(event.handlerTag!==gesture.handlerTag){continue;}if(isStateChangeEvent(event)){if(event.oldState===State.UNDETERMINED&&event.state===State.BEGAN){runWorklet(CALLBACK_TYPE.BEGAN,gesture,event);}else if((event.oldState===State.BEGAN||event.oldState===State.UNDETERMINED)&&event.state===State.ACTIVE){runWorklet(CALLBACK_TYPE.START,gesture,event);lastUpdateEvent.value[gesture.handlerTag]=undefined;}else if(event.oldState!==event.state&&event.state===State.END){if(event.oldState===State.ACTIVE){runWorklet(CALLBACK_TYPE.END,gesture,event,true);}runWorklet(CALLBACK_TYPE.FINALIZE,gesture,event,true);}else if((event.state===State.FAILED||event.state===State.CANCELLED)&&event.state!==event.oldState){if(event.oldState===State.ACTIVE){runWorklet(CALLBACK_TYPE.END,gesture,event,false);}runWorklet(CALLBACK_TYPE.FINALIZE,gesture,event,false);}}else if(isTouchEvent(event)){if(!stateControllers[i]||stateControllers[i].handlerTag!==event.handlerTag){stateControllers[i]=GestureStateManager.create(event.handlerTag);}if(event.eventType!==TouchEventType.UNDETERMINED){runWorklet(touchEventTypeToCallbackType(event.eventType),gesture,event,stateControllers[i]);}}else{runWorklet(CALLBACK_TYPE.UPDATE,gesture,event);if(gesture.onChange&&gesture.changeEventCalculator){var _gesture$changeEventC;runWorklet(CALLBACK_TYPE.CHANGE,gesture,(_gesture$changeEventC=gesture.changeEventCalculator)===null||_gesture$changeEventC===void 0?void 0:_gesture$changeEventC.call(gesture,event,lastUpdateEvent.value[gesture.handlerTag]));lastUpdateEvent.value[gesture.handlerTag]=event;}}}}" };
arg5.useAnimatedGesture = function useAnimatedGesture(current2, needsToReattachResult) {
  if (sharedValue(sharedValue1[3]).Reanimated) {
    const Reanimated = tmp(tmp2[3]).Reanimated;
    sharedValue = Reanimated.useSharedValue(null);
    const Reanimated2 = tmp(tmp2[3]).Reanimated;
    sharedValue1 = Reanimated2.useSharedValue([]);
    const items = [];
    const fn = function s(handlerTag) {
      const value = sharedValue.value;
      if (value) {
        for (let num = 0; num < value.length; num = num + 1) {
          let tmp2 = value[num];
          if (handlerTag.handlerTag === tmp2.handlerTag) {
            if (typeof isStateChangeEvent !== "function") {
              let throwTypeErrorResult = HermesBuiltin.throwTypeError();
            }
            if (null != handlerTag.oldState) {
              if (handlerTag.oldState === sharedValue(sharedValue1[4]).State.UNDETERMINED) {
                if (handlerTag.state === sharedValue(sharedValue1[4]).State.BEGAN) {
                  let tmp38 = runWorklet(sharedValue(sharedValue1[0]).CALLBACK_TYPE.BEGAN, tmp2, handlerTag);
                }
              }
              if (handlerTag.oldState === sharedValue(sharedValue1[4]).State.BEGAN) {
                if (handlerTag.state === sharedValue(sharedValue1[4]).State.ACTIVE) {
                  let tmp18 = runWorklet(sharedValue(sharedValue1[0]).CALLBACK_TYPE.START, tmp2, handlerTag);
                  sharedValue1.value[tmp2.handlerTag] = undefined;
                }
              }
              if (handlerTag.oldState !== handlerTag.state) {
                if (handlerTag.state === sharedValue(sharedValue1[4]).State.END) {
                  if (handlerTag.oldState === sharedValue(sharedValue1[4]).State.ACTIVE) {
                    let flag3 = true;
                    let tmp32 = runWorklet(sharedValue(sharedValue1[0]).CALLBACK_TYPE.END, tmp2, handlerTag, true);
                  }
                  let flag4 = true;
                  let tmp36 = runWorklet(sharedValue(sharedValue1[0]).CALLBACK_TYPE.FINALIZE, tmp2, handlerTag, true);
                }
              }
              let tmp20 = handlerTag.state !== sharedValue(sharedValue1[4]).State.FAILED;
              if (tmp20) {
                tmp20 = handlerTag.state !== sharedValue(sharedValue1[4]).State.CANCELLED;
              }
              if (!tmp20) {
                tmp20 = handlerTag.state === handlerTag.oldState;
              }
              if (!tmp20) {
                if (handlerTag.oldState === sharedValue(sharedValue1[4]).State.ACTIVE) {
                  let flag = false;
                  let tmp24 = runWorklet(sharedValue(sharedValue1[0]).CALLBACK_TYPE.END, tmp2, handlerTag, false);
                }
                let flag2 = false;
                let tmp28 = runWorklet(sharedValue(sharedValue1[0]).CALLBACK_TYPE.FINALIZE, tmp2, handlerTag, false);
              }
            } else {
              if (typeof isTouchEvent !== "function") {
                let throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
              }
              if (null != handlerTag.eventType) {
                let tmp10 = items[num] && items[num].handlerTag === handlerTag.handlerTag;
                if (!tmp10) {
                  let GestureStateManager = sharedValue(sharedValue1[5]).GestureStateManager;
                  items[num] = GestureStateManager.create(handlerTag.handlerTag);
                }
                if (handlerTag.eventType !== sharedValue(sharedValue1[1]).TouchEventType.UNDETERMINED) {
                  let tmp51 = runWorklet(touchEventTypeToCallbackType(handlerTag.eventType), tmp2, handlerTag, items[num]);
                }
              } else {
                let tmp46 = runWorklet(sharedValue(sharedValue1[0]).CALLBACK_TYPE.UPDATE, tmp2, handlerTag);
                let tmp4 = tmp2.onChange && tmp2.changeEventCalculator;
                if (tmp4) {
                  let changeEventCalculator = tmp2.changeEventCalculator;
                  let result;
                  if (changeEventCalculator != null) {
                    result = changeEventCalculator(handlerTag, sharedValue1.value[tmp2.handlerTag]);
                  }
                  let tmp43Result = runWorklet(sharedValue(sharedValue1[0]).CALLBACK_TYPE.CHANGE, tmp2, result);
                  sharedValue1.value[tmp2.handlerTag] = handlerTag;
                }
              }
            }
          }
        }
      }
    };
    const obj = { sharedHandlersCallbacks: null, isStateChangeEvent: null, State: null, runWorklet: null, CALLBACK_TYPE: null, lastUpdateEvent: null, isTouchEvent: null, stateControllers: null, GestureStateManager: null, TouchEventType: null, touchEventTypeToCallbackType: null };
    obj[0] = sharedValue;
    obj[1] = isStateChangeEvent;
    obj[2] = tmp(tmp2[4]).State;
    obj[3] = runWorklet;
    obj[4] = tmp(tmp2[0]).CALLBACK_TYPE;
    obj[5] = sharedValue1;
    obj[6] = isTouchEvent;
    obj[7] = items;
    obj[8] = tmp(tmp2[5]).GestureStateManager;
    obj[9] = tmp(tmp2[1]).TouchEventType;
    obj[10] = touchEventTypeToCallbackType;
    fn.__closure = obj;
    fn.__workletHash = 11751547526080;
    fn.__initData = closure_7;
    const Reanimated3 = tmp(tmp2[3]).Reanimated;
    current2.animatedEventHandler = Reanimated3.useEvent(fn, ["onGestureHandlerStateChange", "onGestureHandlerEvent"], needsToReattachResult);
    current2.animatedHandlers = sharedValue;
  }
};