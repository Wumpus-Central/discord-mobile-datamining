// _runtime/01193_addGestureBreadcrumb.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";

require = arg1;
const dependencyMap = arg6;
function addGestureBreadcrumb(message, event) {
  event = event.event;
  let obj = { message, level: "info", type: user, category: gesture };
  if (event) {
    obj = { gesture: null };
    obj[0] = tmp;
    const _Object = Object;
    const keys = Object.keys(table);
    for (const item10018 of keys) {
      let tmp7 = table;
      let tmp8 = table[item10018];
      let tmp9 = tmp8;
      if (tmp8 in event) {
        let tmp10 = tmp8;
        obj[tmp9] = event[tmp9];
      }
      continue;
    }
    obj.data = obj;
  }
  registerSpanErrorInstrumentation.addBreadcrumb(obj);
  const debug = registerSpanErrorInstrumentation.debug;
  debug.log("[GestureTracing] " + obj.message);
}
let gesture = "gesture";
const user = "user";
gesture = "gesture";
let closure_6 = {
  NUMBER_OF_POINTERS: "numberOfPointers",
  NUMBER_OF_TOUCHES: "numberOfTouches",
  FORCE: "force",
  FORCE_CHANGE: "forceChange",
  ROTATION: "rotation",
  ROTATION_CHANGE: "rotationChange",
  SCALE: "scale",
  SCALE_CHANGE: "scaleChange",
  DURATION: "duration",
  VELOCITY: "velocity",
  VELOCITY_X: "velocityX",
  VELOCITY_Y: "velocityY",
};
arg5.DEFAULT_BREADCRUMB_CATEGORY = "gesture";
arg5.DEFAULT_BREADCRUMB_TYPE = "user";
arg5.GESTURE_POSTFIX_LENGTH = 14;
arg5.ACTION_GESTURE_FALLBACK = "gesture";
arg5.sentryTraceGesture = function sentryTraceGesture(arg0, handlers) {
  const _require = arg0;
  if (handlers) {
    if (handlers.handlers) {
      if (arg0) {
        if (handlers.handlerName.length > 14) {
          let formatted = handlers.handlerName.substring(0, handlers.handlerName.length - 14).toLowerCase();
          const str4 = handlers.handlerName;
          const str5 = handlers.handlerName.substring(0, handlers.handlerName.length - 14);
        } else {
          formatted = gesture;
        }
        const onBegin = handlers.handlers.onBegin;
        handlers.handlers.onBegin = (event) => {
          let obj = callback(formatted[1]);
          obj = { elementId: callback, op: "" + callback(formatted[2]).UI_ACTION + "." + formatted };
          const result = obj.startUserInteractionSpan(obj);
          if (result) {
            const attr = result.setAttribute(
              tmp(tmp2[0]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
              tmp(tmp2[3]).SPAN_ORIGIN_AUTO_INTERACTION,
            );
          }
          obj = { event, name: formatted };
          closure_1_5("Gesture " + callback + " begin.", obj);
          if (onBegin) {
            onBegin(event);
          }
        };
        const onEnd = handlers.handlers.onEnd;
        handlers.handlers.onEnd = (event) => {
          closure_1_5("Gesture " + closure_0 + " end.", { event, name: formatted });
          if (onEnd) {
            tmp2(event);
          }
        };
        return handlers;
      } else {
        const debug3 = _require(formatted[0]).debug;
        debug3.warn("[GestureTracing] Can not wrap gesture without name.");
        return handlers;
      }
    } else {
      const debug2 = _require(formatted[0]).debug;
      debug2.warn(
        "[GestureTracing] Can not wrap gesture without handlers. If you want to wrap a gesture composition wrap individual gestures.",
      );
      return handlers;
    }
  } else {
    const debug = _require(formatted[0]).debug;
    debug.warn("[GestureTracing] Gesture can not be undefined");
    return handlers;
  }
};
