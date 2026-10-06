// _runtime/06251_react-native.js
import react_native from "00017_react-native.js";

const Platform = react_native.Platform;
const StateMachineEvent = {
  NATIVE_BEGIN: "nativeBegin",
  NATIVE_START: "nativeStart",
  FINALIZE: "finalize",
  LONG_PRESS_TOUCHES_DOWN: "longPressTouchesDown",
  CANCEL: "cancel",
};

export { StateMachineEvent };
export const getStatesConfig = function getStatesConfig(callback, callback2, isScreenReaderEnabled) {
  let items1;
  let obj;
  const tmp = isScreenReaderEnabled;
  if (tmp) {
    const items = [{ eventName: obj.NATIVE_BEGIN, callback }, ,];
    const obj2 = { eventName: obj.NATIVE_BEGIN, callback };
    const obj3 = { eventName: obj.LONG_PRESS_TOUCHES_DOWN, optional: true };
    items[1] = obj3;
    const obj4 = { eventName: obj.FINALIZE, callback: callback2 };
    items[2] = obj4;
    items1 = items;
  } else {
    obj = { eventName: obj.NATIVE_BEGIN };
    items1 = [obj, ,];
    const obj5 = { eventName: obj.LONG_PRESS_TOUCHES_DOWN, callback };
    items1[1] = obj5;
    const obj6 = { eventName: obj.FINALIZE, callback: callback2 };
    items1[2] = obj6;
  }
  return items1;
};
