// === Module 5497: ? ===

// Module 5497
import _mod19 from "module_19" /* 19 */;
import TouchEventType from "TouchEventType" /* 5434 */;
import _mod5447 from "module_5447" /* 5447 */;

const useMemo = _mod19.useMemo;
let items = [{ code: "(function getHandler_Pnpm_eventHandlersUtilsTs1(type,callbacks){let[CALLBACK_TYPE]=this.__closure;switch(type){case CALLBACK_TYPE.BEGAN:return callbacks.onBegin;case CALLBACK_TYPE.START:return callbacks.onActivate;case CALLBACK_TYPE.UPDATE:return callbacks.onUpdate;case CALLBACK_TYPE.END:return callbacks.onDeactivate;case CALLBACK_TYPE.FINALIZE:return callbacks.onFinalize;case CALLBACK_TYPE.TOUCHES_DOWN:return callbacks.onTouchesDown;case CALLBACK_TYPE.TOUCHES_MOVE:return callbacks.onTouchesMove;case CALLBACK_TYPE.TOUCHES_UP:return callbacks.onTouchesUp;case CALLBACK_TYPE.TOUCHES_CANCEL:return callbacks.onTouchesCancel;}})" }, _mod5447.CALLBACK_TYPE];
let closure_129_0;
[tmp2, tmp3] = items;
function getHandler(arg0, onBegin) {
  if (useMemo.BEGAN === arg0) {
    return onBegin.onBegin;
  } else if (useMemo.START === arg0) {
    return onBegin.onActivate;
  } else if (useMemo.UPDATE === arg0) {
    return onBegin.onUpdate;
  } else if (useMemo.END === arg0) {
    return onBegin.onDeactivate;
  } else if (useMemo.FINALIZE === arg0) {
    return onBegin.onFinalize;
  } else if (useMemo.TOUCHES_DOWN === arg0) {
    return onBegin.onTouchesDown;
  } else if (useMemo.TOUCHES_MOVE === arg0) {
    return onBegin.onTouchesMove;
  } else if (useMemo.TOUCHES_UP === arg0) {
    return onBegin.onTouchesUp;
  } else {
    return useMemo.TOUCHES_CANCEL === arg0 ? onBegin.onTouchesCancel : undefined;
  }
}
const items1 = [tmp3];
getHandler.__closure = items1;
getHandler.__workletHash = 9702016099213;
getHandler.__initData = tmp2;
const items2 = [{ code: "(function touchEventTypeToCallbackType_Pnpm_eventHandlersUtilsTs2(eventType){let[TouchEventType,CALLBACK_TYPE]=this.__closure;switch(eventType){case TouchEventType.TOUCHES_DOWN:return CALLBACK_TYPE.TOUCHES_DOWN;case TouchEventType.TOUCHES_MOVE:return CALLBACK_TYPE.TOUCHES_MOVE;case TouchEventType.TOUCHES_UP:return CALLBACK_TYPE.TOUCHES_UP;case TouchEventType.TOUCHES_CANCEL:return CALLBACK_TYPE.TOUCHES_CANCEL;}return CALLBACK_TYPE.UNDEFINED;})" }, TouchEventType.TouchEventType, _mod5447.CALLBACK_TYPE];
let closure_130_0;
let closure_130_1;
[tmp4, tmp5, tmp6] = items2;
function touchEventTypeToCallbackType(arg0) {
  if (useMemo.TOUCHES_DOWN === arg0) {
    return constants.TOUCHES_DOWN;
  } else if (useMemo.TOUCHES_MOVE === arg0) {
    return constants.TOUCHES_MOVE;
  } else if (useMemo.TOUCHES_UP === arg0) {
    return constants.TOUCHES_UP;
  } else if (useMemo.TOUCHES_CANCEL === arg0) {
    return constants.TOUCHES_CANCEL;
  } else {
    return constants.UNDEFINED;
  }
}
const items3 = [tmp5, tmp6];
touchEventTypeToCallbackType.__closure = items3;
touchEventTypeToCallbackType.__workletHash = 15128901327959;
touchEventTypeToCallbackType.__initData = tmp4;
const items4 = [{ code: "(function runCallback_Pnpm_eventHandlersUtilsTs3(type,callbacks,event){let[getHandler]=this.__closure;const handler=getHandler(type,callbacks);if(!handler){return;}handler(event);})" }, getHandler];
let closure_131_0;
[tmp7, tmp8] = items4;
function runCallback(arg0, arg1, arg2) {
  const tmp = useMemo(arg0, arg1);
  if (tmp) {
    tmp(arg2);
  }
}
const items5 = [tmp8];
runCallback.__closure = items5;
runCallback.__workletHash = 179583064692;
runCallback.__initData = tmp7;

export function useMemoizedGestureCallbacks(disableReanimated) {
  items = [, , , , , , , , ];
  ({ onActivate: arr[0], onBegin: arr[1], onDeactivate: arr[2], onFinalize: arr[3], onTouchesCancel: arr[4], onTouchesDown: arr[5], onTouchesMove: arr[6], onTouchesUp: arr[7], onUpdate: arr[8] } = disableReanimated);
  return useMemo(() => {
    const obj = {};
    if (disableReanimated.onBegin) {
      obj.onBegin = disableReanimated.onBegin;
    }
    if (disableReanimated.onActivate) {
      obj.onActivate = disableReanimated.onActivate;
    }
    if (disableReanimated.onDeactivate) {
      obj.onDeactivate = disableReanimated.onDeactivate;
    }
    if (disableReanimated.onFinalize) {
      obj.onFinalize = disableReanimated.onFinalize;
    }
    if (disableReanimated.onUpdate) {
      obj.onUpdate = disableReanimated.onUpdate;
    }
    if (disableReanimated.onTouchesDown) {
      obj.onTouchesDown = disableReanimated.onTouchesDown;
    }
    if (disableReanimated.onTouchesMove) {
      obj.onTouchesMove = disableReanimated.onTouchesMove;
    }
    if (disableReanimated.onTouchesUp) {
      obj.onTouchesUp = disableReanimated.onTouchesUp;
    }
    if (disableReanimated.onTouchesCancel) {
      obj.onTouchesCancel = disableReanimated.onTouchesCancel;
    }
    return obj;
  }, items);
}
export { touchEventTypeToCallbackType };
export { runCallback };