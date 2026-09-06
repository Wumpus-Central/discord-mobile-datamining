// _runtime/01058_sentryTraceGesture.js
import _mod682 from "metro/00682__.js";
import DEFAULT from "01020_DEFAULT.js";
import SPAN_ORIGIN_AUTO_INTERACTION from "01023_SPAN_ORIGIN_AUTO_INTERACTION.js";
import userInteractionIntegration from "01030_userInteractionIntegration.js";

require = arg1;
const dependencyMap = arg6;
function addGestureBreadcrumb(message, event) {
  event = event.event;
  let obj = { message, level: "info", type: user, category: gesture };
  if (event) {
    obj = { gesture: tmp };
    const _Object = Object;
    const keys = Object.keys(closure_6);
    for (const item10018 of keys) {
      let tmp8 = closure_6[item10018];
      let tmp9 = tmp8;
      if (tmp8 in event) {
        obj[tmp9] = event[tmp9];
      }
      continue;
    }
    obj.data = obj;
  }
  _mod682.addBreadcrumb(obj);
  const debug = _mod682.debug;
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

export const DEFAULT_BREADCRUMB_CATEGORY = "gesture";
export const DEFAULT_BREADCRUMB_TYPE = "user";
export const GESTURE_POSTFIX_LENGTH = 14;
export const ACTION_GESTURE_FALLBACK = "gesture";
export const sentryTraceGesture = function sentryTraceGesture(elementId, handlers) {
  _require = elementId;
  if (handlers) {
    if (handlers.handlers) {
      if (elementId) {
        if (handlers.handlerName.length > 14) {
          let formatted = handlers.handlerName.substring(0, handlers.handlerName.length - 14).toLowerCase();
          const str5 = handlers.handlerName.substring(0, handlers.handlerName.length - 14);
        } else {
          formatted = gesture;
        }
        const onBegin = handlers.handlers.onBegin;
        handlers.handlers.onBegin = (event) => {
          let obj = { elementId, op: "" + DEFAULT.UI_ACTION + "." + formatted };
          const result = obj.startUserInteractionSpan(obj);
          if (result) {
            const attr = result.setAttribute(
              _mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
              SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_INTERACTION,
            );
          }
          obj = { event, name: formatted };
          addGestureBreadcrumb("Gesture " + elementId + " begin.", obj);
          if (onBegin) {
            onBegin(event);
          }
        };
        const onEnd = handlers.handlers.onEnd;
        handlers.handlers.onEnd = (event) => {
          addGestureBreadcrumb("Gesture " + closure_0 + " end.", { event, name: formatted });
          if (onEnd) {
            tmp2(event);
          }
        };
        return handlers;
      } else {
        const debug3 = require("metro/00682__.js").debug;
        debug3.warn("[GestureTracing] Can not wrap gesture without name.");
        return handlers;
      }
    } else {
      const debug2 = require("metro/00682__.js").debug;
      debug2.warn(
        "[GestureTracing] Can not wrap gesture without handlers. If you want to wrap a gesture composition wrap individual gestures.",
      );
      return handlers;
    }
  } else {
    const debug = require("metro/00682__.js").debug;
    debug.warn("[GestureTracing] Gesture can not be undefined");
    return handlers;
  }
};
