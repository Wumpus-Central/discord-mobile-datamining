// _runtime/05703_getHandler.js
import tagMessage from "05657_tagMessage.js";
import _mod5660 from "metro/05660__.js";
import _isNativeReflectConstruct from "05673__isNativeReflectConstruct.js";

require = arg1;
const dependencyMap = arg6;
function getHandler(arg0, onBegin) {
  if (_isNativeReflectConstruct.CALLBACK_TYPE.BEGAN === arg0) {
    return onBegin.onBegin;
  } else if (tmp(5673).CALLBACK_TYPE.START === arg0) {
    return onBegin.onStart;
  } else if (tmp(5673).CALLBACK_TYPE.UPDATE === arg0) {
    return onBegin.onUpdate;
  } else if (tmp(5673).CALLBACK_TYPE.CHANGE === arg0) {
    return onBegin.onChange;
  } else if (tmp(5673).CALLBACK_TYPE.END === arg0) {
    return onBegin.onEnd;
  } else if (tmp(5673).CALLBACK_TYPE.FINALIZE === arg0) {
    return onBegin.onFinalize;
  } else if (tmp(5673).CALLBACK_TYPE.TOUCHES_DOWN === arg0) {
    return onBegin.onTouchesDown;
  } else if (tmp(5673).CALLBACK_TYPE.TOUCHES_MOVE === arg0) {
    return onBegin.onTouchesMove;
  } else if (tmp(5673).CALLBACK_TYPE.TOUCHES_UP === arg0) {
    return onBegin.onTouchesUp;
  } else if (tmp(5673).CALLBACK_TYPE.TOUCHES_CANCEL === arg0) {
    return onBegin.onTouchesCancelled;
  }
}
let obj = { CALLBACK_TYPE: require("_isNativeReflectConstruct").CALLBACK_TYPE };
getHandler.__closure = obj;
getHandler.__workletHash = 611602598219;
getHandler.__initData = { code: "function getHandler_Pnpm_useAnimatedGestureTs1(type,gesture){const{CALLBACK_TYPE}=this.__closure;switch(type){case CALLBACK_TYPE.BEGAN:return gesture.onBegin;case CALLBACK_TYPE.START:return gesture.onStart;case CALLBACK_TYPE.UPDATE:return gesture.onUpdate;case CALLBACK_TYPE.CHANGE:return gesture.onChange;case CALLBACK_TYPE.END:return gesture.onEnd;case CALLBACK_TYPE.FINALIZE:return gesture.onFinalize;case CALLBACK_TYPE.TOUCHES_DOWN:return gesture.onTouchesDown;case CALLBACK_TYPE.TOUCHES_MOVE:return gesture.onTouchesMove;case CALLBACK_TYPE.TOUCHES_UP:return gesture.onTouchesUp;case CALLBACK_TYPE.TOUCHES_CANCEL:return gesture.onTouchesCancelled;}}" };
function touchEventTypeToCallbackType(arg0) {
  if (_mod5660.TouchEventType.TOUCHES_DOWN === arg0) {
    return tmp(5673).CALLBACK_TYPE.TOUCHES_DOWN;
  } else if (tmp(5660).TouchEventType.TOUCHES_MOVE === arg0) {
    return tmp(5673).CALLBACK_TYPE.TOUCHES_MOVE;
  } else if (tmp(5660).TouchEventType.TOUCHES_UP === arg0) {
    return tmp(5673).CALLBACK_TYPE.TOUCHES_UP;
  } else if (tmp(5660).TouchEventType.TOUCHES_CANCEL === arg0) {
    return tmp(5673).CALLBACK_TYPE.TOUCHES_CANCEL;
  } else {
    return tmp(5673).CALLBACK_TYPE.UNDEFINED;
  }
}
obj = { TouchEventType: require("metro/05660__.js").TouchEventType, CALLBACK_TYPE: require("_isNativeReflectConstruct").CALLBACK_TYPE };
touchEventTypeToCallbackType.__closure = obj;
touchEventTypeToCallbackType.__workletHash = 12322546845125;
touchEventTypeToCallbackType.__initData = { code: "function touchEventTypeToCallbackType_Pnpm_useAnimatedGestureTs2(eventType){const{TouchEventType,CALLBACK_TYPE}=this.__closure;switch(eventType){case TouchEventType.TOUCHES_DOWN:return CALLBACK_TYPE.TOUCHES_DOWN;case TouchEventType.TOUCHES_MOVE:return CALLBACK_TYPE.TOUCHES_MOVE;case TouchEventType.TOUCHES_UP:return CALLBACK_TYPE.TOUCHES_UP;case TouchEventType.TOUCHES_CANCEL:return CALLBACK_TYPE.TOUCHES_CANCEL;}return CALLBACK_TYPE.UNDEFINED;}" };
function runWorklet(arg0, arg1, arg2) {
  const substr = [...arguments].slice();
  const tmp2 = getHandler(arg0, arg1);
  if (arg1.isWorklet[arg0]) {
    if (tmp2 != null) {
      const items = [arg2];
      HermesBuiltin.arraySpread(substr, 1);
      HermesBuiltin.apply(items, undefined);
    }
  } else if (tmp2) {
    const _console = console;
    console.warn(tagMessage.tagMessage("Animated gesture callback must be a worklet"));
    const obj = tagMessage;
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
          let tmp3 = num;
          if (handlerTag.handlerTag === tmp2.handlerTag) {
            let tmp39 = closure_1_5;
            if (typeof closure_1_5 !== "function") {
              let str = "Trying to call a non-function";
              let throwTypeErrorResult = HermesBuiltin.throwTypeError();
            }
            if (null != handlerTag.oldState) {
              let tmp15 = sharedValue;
              let tmp16 = sharedValue1;
              if (handlerTag.oldState === sharedValue(sharedValue1[4]).State.UNDETERMINED) {
                if (handlerTag.state === tmp15(tmp16[4]).State.BEGAN) {
                  let tmp37 = closure_1_4;
                  let tmp38 = closure_1_4(tmp15(tmp16[0]).CALLBACK_TYPE.BEGAN, tmp2, handlerTag);
                }
              }
              if (handlerTag.oldState === tmp15(tmp16[4]).State.BEGAN) {
                if (handlerTag.state === tmp15(tmp16[4]).State.ACTIVE) {
                  let tmp17 = closure_1_4;
                  let tmp18 = closure_1_4(tmp15(tmp16[0]).CALLBACK_TYPE.START, tmp2, handlerTag);
                  let tmp19 = sharedValue1;
                  sharedValue1.value[tmp2.handlerTag] = undefined;
                }
              }
              if (handlerTag.oldState !== handlerTag.state) {
                if (handlerTag.state === tmp15(tmp16[4]).State.END) {
                  if (handlerTag.oldState === tmp15(tmp16[4]).State.ACTIVE) {
                    let tmp29 = closure_1_4;
                    let tmp30 = tmp2;
                    let tmp31 = handlerTag;
                    let flag3 = true;
                    let tmp32 = closure_1_4(tmp15(tmp16[0]).CALLBACK_TYPE.END, tmp2, handlerTag, true);
                  }
                  let tmp33 = closure_1_4;
                  let tmp34 = tmp2;
                  let tmp35 = handlerTag;
                  let flag4 = true;
                  let tmp36 = closure_1_4(tmp15(tmp16[0]).CALLBACK_TYPE.FINALIZE, tmp2, handlerTag, true);
                }
              }
              let tmp20 = handlerTag.state !== tmp15(tmp16[4]).State.FAILED;
              if (tmp20) {
                tmp20 = handlerTag.state !== tmp15(tmp16[4]).State.CANCELLED;
              }
              if (!tmp20) {
                tmp20 = handlerTag.state === handlerTag.oldState;
              }
              if (!tmp20) {
                if (handlerTag.oldState === tmp15(tmp16[4]).State.ACTIVE) {
                  let tmp21 = closure_1_4;
                  let tmp22 = tmp2;
                  let tmp23 = handlerTag;
                  let flag = false;
                  let tmp24 = closure_1_4(tmp15(tmp16[0]).CALLBACK_TYPE.END, tmp2, handlerTag, false);
                }
                let tmp25 = closure_1_4;
                let tmp26 = tmp2;
                let tmp27 = handlerTag;
                let flag2 = false;
                let tmp28 = closure_1_4(tmp15(tmp16[0]).CALLBACK_TYPE.FINALIZE, tmp2, handlerTag, false);
              }
            } else {
              let tmp41 = closure_1_6;
              if (typeof closure_1_6 !== "function") {
                let str2 = "Trying to call a non-function";
                let throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
              }
              if (null != handlerTag.eventType) {
                let tmp9 = items;
                let tmp10 = items[num] && tmp9[num].handlerTag === handlerTag.handlerTag;
                if (!tmp10) {
                  let tmp11 = sharedValue;
                  let tmp12 = sharedValue1;
                  let GestureStateManager = sharedValue(sharedValue1[5]).GestureStateManager;
                  tmp9[num] = GestureStateManager.create(handlerTag.handlerTag);
                }
                let tmp13 = sharedValue;
                let tmp14 = sharedValue1;
                if (handlerTag.eventType !== sharedValue(sharedValue1[1]).TouchEventType.UNDETERMINED) {
                  let tmp47 = closure_1_4;
                  let tmp48 = closure_1_3;
                  let tmp49 = tmp2;
                  let tmp50 = handlerTag;
                  let tmp51 = closure_1_4(closure_1_3(handlerTag.eventType), tmp2, handlerTag, tmp9[num]);
                }
              } else {
                let tmp43 = closure_1_4;
                let tmp44 = sharedValue;
                let tmp45 = sharedValue1;
                let tmp46 = closure_1_4(sharedValue(sharedValue1[0]).CALLBACK_TYPE.UPDATE, tmp2, handlerTag);
                let tmp4 = tmp2.onChange && tmp2.changeEventCalculator;
                if (tmp4) {
                  let changeEventCalculator = tmp2.changeEventCalculator;
                  let result;
                  if (changeEventCalculator != null) {
                    let tmp6 = sharedValue1;
                    result = changeEventCalculator(handlerTag, sharedValue1.value[tmp2.handlerTag]);
                  }
                  let tmp43Result = tmp43(tmp44(tmp45[0]).CALLBACK_TYPE.CHANGE, tmp2, result);
                  let tmp8 = sharedValue1;
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