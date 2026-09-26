// === Module 7169: device/DeviceState ===

// Module 7169 (device/DeviceState)
import LoggerDefault from "Logger" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_5 = async function _getDeviceState() {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          let fallback;
          let obj5 = closure_0;
          if (closure_0 === undefined) {
            obj5 = { fallback: true };
          }
          fallback = obj5.fallback;
          c5 = 1;
          c6 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c4 = 1;
          c5 = 3;
          c6 = 1;
          const obj7 = { value: closure_130_1(closure_130_2[2]).getDeviceStateInfo(), done: false };
          return obj7;
        }
      } else if (2 === tmp8) {
        c4 = 0;
        closure_129_1 = closure_3;
        closure_130_4.warn("Failed to get device state:", closure_129_1);
        if (fallback) {
          const DEFAULT_DEVICE_STATE = closure_130_0(closure_130_2[3]).DEFAULT_DEVICE_STATE;
        }
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp25) {
      closure_3 = tmp25;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp25;
      } else {
        c5 = tmp;
      }
    }
  }
};
const tmp2 = new LoggerDefault("native/DeviceState.tsx");
let closure_4 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/device/native/DeviceState.tsx");

export const logger = tmp2;
export const getDeviceState = function getDeviceState() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};