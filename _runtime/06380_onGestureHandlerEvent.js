// _runtime/06380_onGestureHandlerEvent.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import map2 from "06381_map.js";
import _mod6383 from "metro/06383__.js";
import t from "06384_t.js";
import _mod6385 from "metro/06385__.js";

function onGestureHandlerEvent(handlerTag) {
  let obj = map2;
  const findHandlerResult = obj.findHandler(handlerTag.handlerTag);
  if (findHandlerResult) {
    if (null != handlerTag.oldState) {
      if (handlerTag.oldState === _mod6383.State.UNDETERMINED) {
        if (handlerTag.state === _mod6383.State.BEGAN) {
          const handlers11 = findHandlerResult.handlers;
          const onBegin = handlers11.onBegin;
          if (onBegin != null) {
            onBegin(handlerTag);
          }
        }
      }
      if (handlerTag.oldState === _mod6383.State.BEGAN) {
        if (handlerTag.state === _mod6383.State.ACTIVE) {
          const handlers6 = findHandlerResult.handlers;
          const onStart = handlers6.onStart;
          if (onStart != null) {
            onStart(handlerTag);
          }
          table[findHandlerResult.handlers.handlerTag] = handlerTag;
        }
      }
      if (handlerTag.oldState !== handlerTag.state) {
        if (handlerTag.state === _mod6383.State.END) {
          if (handlerTag.oldState === _mod6383.State.ACTIVE) {
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
          table[findHandlerResult.handlers.handlerTag] = undefined;
        }
      }
      let tmp18 = handlerTag.state !== _mod6383.State.FAILED;
      if (tmp18) {
        tmp18 = handlerTag.state !== _mod6383.State.CANCELLED;
      }
      if (!tmp18) {
        tmp18 = handlerTag.oldState === handlerTag.state;
      }
      if (!tmp18) {
        if (handlerTag.oldState === _mod6383.State.ACTIVE) {
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
        table[findHandlerResult.handlers.handlerTag] = undefined;
      }
    } else if (null != handlerTag.eventType) {
      if (!map.has(handlerTag.handlerTag)) {
        const GestureStateManager = t.GestureStateManager;
        const result = map.set(handlerTag.handlerTag, GestureStateManager.create(handlerTag.handlerTag));
      }
      const value = map.get(handlerTag.handlerTag);
      const eventType = handlerTag.eventType;
      if (_mod6385.TouchEventType.TOUCHES_DOWN === eventType) {
        const handlers5 = findHandlerResult.handlers;
        if (handlers5 != null) {
          const onTouchesDown = handlers5.onTouchesDown;
          if (onTouchesDown != null) {
            onTouchesDown(handlerTag, value);
          }
        }
      } else if (_mod6385.TouchEventType.TOUCHES_MOVE === eventType) {
        const handlers4 = findHandlerResult.handlers;
        if (handlers4 != null) {
          const onTouchesMove = handlers4.onTouchesMove;
          if (onTouchesMove != null) {
            onTouchesMove(handlerTag, value);
          }
        }
      } else if (_mod6385.TouchEventType.TOUCHES_UP === eventType) {
        const handlers3 = findHandlerResult.handlers;
        if (handlers3 != null) {
          const onTouchesUp = handlers3.onTouchesUp;
          if (onTouchesUp != null) {
            onTouchesUp(handlerTag, value);
          }
        }
      } else if (_mod6385.TouchEventType.TOUCHES_CANCEL === eventType) {
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
            result1 = changeEventCalculator(handlerTag, table[findHandlerResult.handlers.handlerTag]);
          }
          onChange(result1);
        }
        table[findHandlerResult.handlers.handlerTag] = handlerTag;
      }
      tmp9 = findHandlerResult.handlers.onChange && findHandlerResult.handlers.changeEventCalculator;
    }
  } else {
    const result2 = map2.findOldGestureHandler(handlerTag.handlerTag);
    if (result2) {
      obj = { nativeEvent: null };
      obj[0] = handlerTag;
      if (null != handlerTag.oldState) {
        result2.onGestureStateChange(obj);
      } else {
        result2.onGestureEvent(obj);
      }
    }
    const tmpResult = map2;
  }
}
const DeviceEventEmitter = get_ActivityIndicator.DeviceEventEmitter;
let c3 = null;
let c4 = null;
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
  if (c3) {
    c3.remove();
    c3 = null;
  }
  if (c4) {
    c4.remove();
    c4 = null;
  }
};