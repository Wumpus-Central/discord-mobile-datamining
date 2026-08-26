// === Module 5670: getHandler ===

// Module 5670 (getHandler)
import noop from "noop" /* 19 */;
import _mod5607 from "module_5607" /* 5607 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 5620 */;

const useMemo = noop.useMemo;
function getHandler(arg0, onBegin) {
  if (_isNativeReflectConstruct.CALLBACK_TYPE.BEGAN === arg0) {
    return onBegin.onBegin;
  } else if (tmp(5620).CALLBACK_TYPE.START === arg0) {
    return onBegin.onActivate;
  } else if (tmp(5620).CALLBACK_TYPE.UPDATE === arg0) {
    return onBegin.onUpdate;
  } else if (tmp(5620).CALLBACK_TYPE.END === arg0) {
    return onBegin.onDeactivate;
  } else if (tmp(5620).CALLBACK_TYPE.FINALIZE === arg0) {
    return onBegin.onFinalize;
  } else if (tmp(5620).CALLBACK_TYPE.TOUCHES_DOWN === arg0) {
    return onBegin.onTouchesDown;
  } else if (tmp(5620).CALLBACK_TYPE.TOUCHES_MOVE === arg0) {
    return onBegin.onTouchesMove;
  } else if (tmp(5620).CALLBACK_TYPE.TOUCHES_UP === arg0) {
    return onBegin.onTouchesUp;
  } else if (tmp(5620).CALLBACK_TYPE.TOUCHES_CANCEL === arg0) {
    return onBegin.onTouchesCancel;
  }
}
let obj = { CALLBACK_TYPE: _isNativeReflectConstruct.CALLBACK_TYPE };
getHandler.__closure = obj;
getHandler.__workletHash = 8647314057396;
getHandler.__initData = { code: "function getHandler_Pnpm_eventHandlersUtilsTs1(type,callbacks){const{CALLBACK_TYPE}=this.__closure;switch(type){case CALLBACK_TYPE.BEGAN:return callbacks.onBegin;case CALLBACK_TYPE.START:return callbacks.onActivate;case CALLBACK_TYPE.UPDATE:return callbacks.onUpdate;case CALLBACK_TYPE.END:return callbacks.onDeactivate;case CALLBACK_TYPE.FINALIZE:return callbacks.onFinalize;case CALLBACK_TYPE.TOUCHES_DOWN:return callbacks.onTouchesDown;case CALLBACK_TYPE.TOUCHES_MOVE:return callbacks.onTouchesMove;case CALLBACK_TYPE.TOUCHES_UP:return callbacks.onTouchesUp;case CALLBACK_TYPE.TOUCHES_CANCEL:return callbacks.onTouchesCancel;}}" };
function touchEventTypeToCallbackType(arg0) {
  if (_mod5607.TouchEventType.TOUCHES_DOWN === arg0) {
    return tmp(5620).CALLBACK_TYPE.TOUCHES_DOWN;
  } else if (tmp(5607).TouchEventType.TOUCHES_MOVE === arg0) {
    return tmp(5620).CALLBACK_TYPE.TOUCHES_MOVE;
  } else if (tmp(5607).TouchEventType.TOUCHES_UP === arg0) {
    return tmp(5620).CALLBACK_TYPE.TOUCHES_UP;
  } else if (tmp(5607).TouchEventType.TOUCHES_CANCEL === arg0) {
    return tmp(5620).CALLBACK_TYPE.TOUCHES_CANCEL;
  } else {
    return tmp(5620).CALLBACK_TYPE.UNDEFINED;
  }
}
obj = { TouchEventType: _mod5607.TouchEventType, CALLBACK_TYPE: _isNativeReflectConstruct.CALLBACK_TYPE };
touchEventTypeToCallbackType.__closure = obj;
touchEventTypeToCallbackType.__workletHash = 2066229974382;
touchEventTypeToCallbackType.__initData = { code: "function touchEventTypeToCallbackType_Pnpm_eventHandlersUtilsTs2(eventType){const{TouchEventType,CALLBACK_TYPE}=this.__closure;switch(eventType){case TouchEventType.TOUCHES_DOWN:return CALLBACK_TYPE.TOUCHES_DOWN;case TouchEventType.TOUCHES_MOVE:return CALLBACK_TYPE.TOUCHES_MOVE;case TouchEventType.TOUCHES_UP:return CALLBACK_TYPE.TOUCHES_UP;case TouchEventType.TOUCHES_CANCEL:return CALLBACK_TYPE.TOUCHES_CANCEL;}return CALLBACK_TYPE.UNDEFINED;}" };
function runCallback(arg0, arg1, arg2) {
  const tmp = getHandler(arg0, arg1);
  if (tmp) {
    tmp(arg2);
  }
}
runCallback.__closure = { getHandler };
runCallback.__workletHash = 9892811129293;
runCallback.__initData = { code: "function runCallback_Pnpm_eventHandlersUtilsTs3(type,callbacks,event){const{getHandler}=this.__closure;const handler=getHandler(type,callbacks);if(!handler){return;}handler(event);}" };

export const useMemoizedGestureCallbacks = function useMemoizedGestureCallbacks(disableReanimated) {
  closure_0 = disableReanimated;
  const items = [, , , , , , , , ];
  ({ onActivate: arr[0], onBegin: arr[1], onDeactivate: arr[2], onFinalize: arr[3], onTouchesCancel: arr[4], onTouchesDown: arr[5], onTouchesMove: arr[6], onTouchesUp: arr[7], onUpdate: arr[8] } = disableReanimated);
  return useMemo(() => {
    const obj = {};
    if (disableReanimated.onBegin) {
      obj.onBegin = tmp.onBegin;
    }
    if (disableReanimated.onActivate) {
      obj.onActivate = tmp.onActivate;
    }
    if (disableReanimated.onDeactivate) {
      obj.onDeactivate = tmp.onDeactivate;
    }
    if (disableReanimated.onFinalize) {
      obj.onFinalize = tmp.onFinalize;
    }
    if (disableReanimated.onUpdate) {
      obj.onUpdate = tmp.onUpdate;
    }
    if (disableReanimated.onTouchesDown) {
      obj.onTouchesDown = tmp.onTouchesDown;
    }
    if (disableReanimated.onTouchesMove) {
      obj.onTouchesMove = tmp.onTouchesMove;
    }
    if (disableReanimated.onTouchesUp) {
      obj.onTouchesUp = tmp.onTouchesUp;
    }
    if (disableReanimated.onTouchesCancel) {
      obj.onTouchesCancel = tmp.onTouchesCancel;
    }
    return obj;
  }, items);
};
export { touchEventTypeToCallbackType };
export { runCallback };