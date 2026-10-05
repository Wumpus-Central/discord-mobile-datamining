// === Module 6143: ? ===

// Module 6143
import react_native from "react-native" /* 17 */;
import handlerIDToTag from "handlerIDToTag" /* 6144 */;
import State from "State" /* 6146 */;
import GestureStateManager2 from "GestureStateManager" /* 6147 */;
import TouchEventType from "TouchEventType" /* 6148 */;

let set;

function onGestureHandlerEvent(handlerTag) {
  const obj = handlerIDToTag;
  const findHandlerResult = obj.findHandler(handlerTag.handlerTag);
  if (findHandlerResult) {
    if (null != handlerTag.oldState) {
      if (handlerTag.oldState === State.State.UNDETERMINED) {
        if (handlerTag.state === State.State.BEGAN) {
          const handlers11 = findHandlerResult.handlers;
          const onBegin = handlers11.onBegin;
          if (onBegin != null) {
            onBegin(handlerTag);
          }
        }
      }
      if (handlerTag.oldState === State.State.BEGAN) {
        if (handlerTag.state === State.State.ACTIVE) {
          const handlers6 = findHandlerResult.handlers;
          const onStart = handlers6.onStart;
          if (onStart != null) {
            onStart(handlerTag);
          }
          closure_6[findHandlerResult.handlers.handlerTag] = handlerTag;
        }
      }
      if (handlerTag.oldState !== handlerTag.state) {
        if (handlerTag.state === State.State.END) {
          if (handlerTag.oldState === State.State.ACTIVE) {
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
      const tmp18 = handlerTag.state !== State.State.FAILED && handlerTag.state !== State.State.CANCELLED || handlerTag.oldState === handlerTag.state;
      if (!tmp18) {
        if (handlerTag.oldState === State.State.ACTIVE) {
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
        handlerTag = handlerTag.handlerTag;
        set = map.set;
        const GestureStateManager = GestureStateManager2.GestureStateManager;
        const result = set(handlerTag, GestureStateManager.create(handlerTag.handlerTag));
      }
      const value = map.get(handlerTag.handlerTag);
      const eventType = handlerTag.eventType;
      if (TouchEventType.TouchEventType.TOUCHES_DOWN === eventType) {
        const handlers5 = findHandlerResult.handlers;
        if (handlers5 != null) {
          const onTouchesDown = handlers5.onTouchesDown;
          if (onTouchesDown != null) {
            onTouchesDown(handlerTag, value);
          }
        }
      } else if (TouchEventType.TouchEventType.TOUCHES_MOVE === eventType) {
        const handlers4 = findHandlerResult.handlers;
        if (handlers4 != null) {
          const onTouchesMove = handlers4.onTouchesMove;
          if (onTouchesMove != null) {
            onTouchesMove(handlerTag, value);
          }
        }
      } else if (TouchEventType.TouchEventType.TOUCHES_UP === eventType) {
        const handlers3 = findHandlerResult.handlers;
        if (handlers3 != null) {
          const onTouchesUp = handlers3.onTouchesUp;
          if (onTouchesUp != null) {
            onTouchesUp(handlerTag, value);
          }
        }
      } else if (TouchEventType.TouchEventType.TOUCHES_CANCEL === eventType) {
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
      const tmp9 = findHandlerResult.handlers.onChange && findHandlerResult.handlers.changeEventCalculator;
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
    }
  } else {
    const tmpResult = handlerIDToTag;
    const result2 = tmpResult.findOldGestureHandler(handlerTag.handlerTag);
    if (result2) {
      const obj2 = { nativeEvent: handlerTag };
      if (null != handlerTag.oldState) {
        result2.onGestureStateChange(obj2);
      } else {
        result2.onGestureEvent(obj2);
      }
    }
  }
}
const DeviceEventEmitter = react_native.DeviceEventEmitter;
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