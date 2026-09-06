// === Module 6759: StateMachineEvent ===

// Module 6759 (StateMachineEvent)
import _mod17 from "module_17" /* 17 */;

const Platform = _mod17.Platform;
const StateMachineEvent = { NATIVE_BEGIN: "nativeBegin", NATIVE_START: "nativeStart", FINALIZE: "finalize", LONG_PRESS_TOUCHES_DOWN: "longPressTouchesDown", CANCEL: "cancel" };

export { StateMachineEvent };
export const getStatesConfig = function getStatesConfig(callback, callback2, isScreenReaderEnabled) {
  if (isScreenReaderEnabled) {
    let obj = { eventName: null, callback: null };
    obj.eventName = obj.NATIVE_BEGIN;
    obj.callback = callback;
    const items = [obj, , ];
    obj = { eventName: null, optional: true };
    obj.eventName = obj.LONG_PRESS_TOUCHES_DOWN;
    items[1] = obj;
    const obj1 = { eventName: obj.FINALIZE, callback: callback2 };
    items[2] = obj1;
    let items1 = items;
  } else {
    obj = { eventName: null };
    obj.eventName = obj.NATIVE_BEGIN;
    items1 = [obj, , ];
    const obj2 = { eventName: obj.LONG_PRESS_TOUCHES_DOWN, callback };
    items1[1] = obj2;
    const obj3 = { eventName: obj.FINALIZE, callback: callback2 };
    items1[2] = obj3;
  }
  return items1;
};