// discord_app/modules/device/native/DeviceState.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_5 = async function _getDeviceState() {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          let fallback;
          let obj1 = closure_0;
          if (closure_0 === undefined) {
            obj1 = { fallback: true };
          }
          fallback = obj1.fallback;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          c4 = 1;
          const MediaManager = closure_130_3.MediaManager;
          c5 = 3;
          c6 = 1;
          const obj3 = { value: MediaManager.getDeviceStateInfo(), done: false };
          return obj3;
        }
      } else if (2 === tmp8) {
        c4 = 0;
        closure_129_1 = closure_3;
        closure_130_4.warn("Failed to get device state:", closure_129_1);
        if (fallback) {
          const DEFAULT_DEVICE_STATE = closure_130_0(closure_130_1[3]).DEFAULT_DEVICE_STATE;
        }
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp24) {
      closure_3 = tmp24;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp24;
      } else {
        c5 = tmp;
      }
    }
  }
};
const NativeModules = fn(17).NativeModules;
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
