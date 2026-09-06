// _runtime/metro/06658__.js
import _mod17 from "00017__.js";
import handlerIDToTag from "../06659_handlerIDToTag.js";

function onGestureHandlerEvent(handlerTag) {
  let obj = handlerIDToTag;
  const findHandlerResult = obj.findHandler(handlerTag.handlerTag);
  if (findHandlerResult) {
    if (null != handlerTag.oldState) {
      if (handlerTag.oldState === tmp(6661).State.UNDETERMINED) {
        if (handlerTag.state === tmp(6661).State.BEGAN) {
          const handlers11 = findHandlerResult.handlers;
          const onBegin = handlers11.onBegin;
          if (onBegin != null) {
            onBegin(handlerTag);
          }
        }
      }
      if (handlerTag.oldState === tmp(6661).State.BEGAN) {
        if (handlerTag.state === tmp(6661).State.ACTIVE) {
          const handlers6 = findHandlerResult.handlers;
          const onStart = handlers6.onStart;
          if (onStart != null) {
            onStart(handlerTag);
          }
          closure_6[findHandlerResult.handlers.handlerTag] = handlerTag;
        }
      }
      if (handlerTag.oldState !== handlerTag.state) {
        if (handlerTag.state === tmp(6661).State.END) {
          if (handlerTag.oldState === tmp(6661).State.ACTIVE) {
            const handlers9 = findHandlerResult.handlers;
            const onEnd2 = handlers9.onEnd;
            if (onEnd2 != null) {
              onEnd2(handlerTag, true);
            }
          }
          const handlers10 = findHandlerResult.handlers;
          const onFinalize2 = handlers10.onFinalize;
          if (onFinalize2 != null) {
            onFinalize2(handlerTag, true);
          }
          closure_6[findHandlerResult.handlers.handlerTag] = undefined;
        }
      }
      let tmp18 = handlerTag.state !== tmp(6661).State.FAILED;
      if (tmp18) {
        tmp18 = handlerTag.state !== tmp(6661).State.CANCELLED;
      }
      if (!tmp18) {
        tmp18 = handlerTag.oldState === handlerTag.state;
      }
      if (!tmp18) {
        if (handlerTag.oldState === tmp(6661).State.ACTIVE) {
          const handlers7 = findHandlerResult.handlers;
          const onEnd = handlers7.onEnd;
          if (onEnd != null) {
            onEnd(handlerTag, false);
          }
        }
        const handlers8 = findHandlerResult.handlers;
        const onFinalize = handlers8.onFinalize;
        if (onFinalize != null) {
          onFinalize(handlerTag, false);
        }
        map.delete(handlerTag.handlerTag);
        closure_6[findHandlerResult.handlers.handlerTag] = undefined;
      }
    } else if (null != handlerTag.eventType) {
      if (!map.has(handlerTag.handlerTag)) {
        const GestureStateManager = tmp(6662).GestureStateManager;
        const result = obj5.set(handlerTag.handlerTag, GestureStateManager.create(handlerTag.handlerTag));
      }
      value = obj5.get(handlerTag.handlerTag);
      const eventType = handlerTag.eventType;
      if (tmp(6663).TouchEventType.TOUCHES_DOWN === eventType) {
        const handlers5 = findHandlerResult.handlers;
        if (handlers5 != null) {
          const onTouchesDown = handlers5.onTouchesDown;
          if (onTouchesDown != null) {
            onTouchesDown(handlerTag, value);
          }
        }
      } else if (tmp(6663).TouchEventType.TOUCHES_MOVE === eventType) {
        const handlers4 = findHandlerResult.handlers;
        if (handlers4 != null) {
          const onTouchesMove = handlers4.onTouchesMove;
          if (onTouchesMove != null) {
            onTouchesMove(handlerTag, value);
          }
        }
      } else if (tmp(6663).TouchEventType.TOUCHES_UP === eventType) {
        const handlers3 = findHandlerResult.handlers;
        if (handlers3 != null) {
          const onTouchesUp = handlers3.onTouchesUp;
          if (onTouchesUp != null) {
            onTouchesUp(handlerTag, value);
          }
        }
      } else if (tmp(6663).TouchEventType.TOUCHES_CANCEL === eventType) {
        const handlers13 = findHandlerResult.handlers;
        if (handlers13 != null) {
          const onTouchesCancelled = handlers13.onTouchesCancelled;
          if (onTouchesCancelled != null) {
            onTouchesCancelled(handlerTag, value);
          }
        }
      }
    } else {
      const handlers12 = findHandlerResult.handlers;
      const onUpdate = handlers12.onUpdate;
      if (onUpdate != null) {
        onUpdate(handlerTag);
      }
      if (tmp9) {
        const handlers = findHandlerResult.handlers;
        const onChange = handlers.onChange;
        if (onChange != null) {
          const handlers2 = findHandlerResult.handlers;
          const changeEventCalculator = handlers2.changeEventCalculator;
          let result1;
          if (changeEventCalculator != null) {
            result1 = changeEventCalculator(handlerTag, closure_6[findHandlerResult.handlers.handlerTag]);
          }
          onChange(result1);
        }
        closure_6[findHandlerResult.handlers.handlerTag] = handlerTag;
      }
      tmp9 = findHandlerResult.handlers.onChange && findHandlerResult.handlers.changeEventCalculator;
    }
  } else {
    const result2 = tmp(6659).findOldGestureHandler(handlerTag.handlerTag);
    if (result2) {
      obj = { nativeEvent: handlerTag };
      if (null != handlerTag.oldState) {
        result2.onGestureStateChange(obj);
      } else {
        result2.onGestureEvent(obj);
      }
    }
    const tmpResult = tmp(6659);
  }
}
const DeviceEventEmitter = _mod17.DeviceEventEmitter;
let closure_3 = null;
let closure_4 = null;
const map = new Map();
let closure_6 = [];

export { onGestureHandlerEvent };
export const startListening = function startListening() {
  if (closure_3) {
    closure_3.remove();
    closure_3 = null;
  }
  if (closure_4) {
    closure_4.remove();
    closure_4 = null;
  }
  closure_3 = DeviceEventEmitter.addListener("onGestureHandlerEvent", onGestureHandlerEvent);
  closure_4 = DeviceEventEmitter.addListener("onGestureHandlerStateChange", onGestureHandlerEvent);
};
export const stopListening = function stopListening() {
  if (closure_3) {
    closure_3.remove();
    closure_3 = null;
  }
  if (closure_4) {
    closure_4.remove();
    closure_4 = null;
  }
};
