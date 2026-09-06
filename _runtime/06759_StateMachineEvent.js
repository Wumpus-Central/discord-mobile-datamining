// _runtime/06759_StateMachineEvent.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

const Platform = get_ActivityIndicator.Platform;
let obj = {
  NATIVE_BEGIN: "nativeBegin",
  NATIVE_START: "nativeStart",
  FINALIZE: "finalize",
  LONG_PRESS_TOUCHES_DOWN: "longPressTouchesDown",
  CANCEL: "cancel",
};

export const StateMachineEvent = obj;
export const getStatesConfig = function getStatesConfig(closure_28, closure_29, isScreenReaderEnabled) {
  if (isScreenReaderEnabled) {
    obj = { eventName: null, callback: null };
    obj[0] = obj.NATIVE_BEGIN;
    obj[1] = closure_28;
    const items = [obj, ,];
    obj = { eventName: null, optional: true };
    obj[0] = obj.LONG_PRESS_TOUCHES_DOWN;
    items[1] = obj;
    obj1 = { eventName: null, callback: null };
    obj1[0] = obj.FINALIZE;
    obj1[1] = closure_29;
    items[2] = obj1;
    let items1 = items;
  } else {
    obj = { eventName: null };
    obj[0] = obj.NATIVE_BEGIN;
    items1 = [obj, ,];
    const obj2 = { eventName: null, callback: null };
    obj2[0] = obj.LONG_PRESS_TOUCHES_DOWN;
    obj2[1] = closure_28;
    items1[1] = obj2;
    const obj3 = { eventName: null, callback: null };
    obj3[0] = obj.FINALIZE;
    obj3[1] = closure_29;
    items1[2] = obj3;
  }
  return items1;
};
