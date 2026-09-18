// _runtime/06952_StateMachineEvent.js
import _mod17 from "metro/00017__.js";

const Platform = _mod17.Platform;
const StateMachineEvent = {
  NATIVE_BEGIN: "nativeBegin",
  NATIVE_START: "nativeStart",
  FINALIZE: "finalize",
  LONG_PRESS_TOUCHES_DOWN: "longPressTouchesDown",
  CANCEL: "cancel",
};

export { StateMachineEvent };
export const getStatesConfig = function getStatesConfig(callback, callback2, isScreenReaderEnabled) {
  if (isScreenReaderEnabled) {
    const obj2 = { eventName: obj.NATIVE_BEGIN, callback };
    const items = [obj2, ,];
    const obj3 = { eventName: obj.LONG_PRESS_TOUCHES_DOWN, optional: true };
    items[1] = obj3;
    const obj4 = { eventName: obj.FINALIZE, callback: callback2 };
    items[2] = obj4;
    let items1 = items;
  } else {
    obj = { eventName: null };
    obj.eventName = obj.NATIVE_BEGIN;
    items1 = [obj, ,];
    const obj5 = { eventName: obj.LONG_PRESS_TOUCHES_DOWN, callback };
    items1[1] = obj5;
    const obj6 = { eventName: obj.FINALIZE, callback: callback2 };
    items1[2] = obj6;
  }
  return items1;
};
