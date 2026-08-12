// discord_app/modules/device/native/DeviceState.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { NativeModules } from "get ActivityIndicator";

const require = arg1;
function _getDeviceState() {
  const self = this;
  const tmp = callback(() => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*() {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let asyncGeneratorStep = tmp3;
              let table = tmp5;
              let fallback;
              let obj1 = fallback;
              if (fallback === undefined) {
                obj1 = { fallback: true };
              }
              fallback = obj1.fallback;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              let logger = 1;
              MediaManager = MediaManager.MediaManager;
              c5 = 3;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = MediaManager.getDeviceStateInfo();
              return obj3;
            }
          } else if (2 === tmp8) {
            logger = 0;
            table = MediaManager;
            logger.warn("Failed to get device state:", table);
            if (fallback) {
              const DEFAULT_DEVICE_STATE = fallback(table[3]).DEFAULT_DEVICE_STATE;
            }
            c6 = 3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            logger = 0;
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            logger = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp24) {
          MediaManager = tmp24;
          if (tmp4 === logger) {
            c6 = tmp2;
            throw tmp24;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _getDeviceState = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const tmp2 = new require("ThermalState")("native/DeviceState.tsx");
let c4 = tmp2;
const result = require("timestamp").fileFinishedImporting("modules/device/native/DeviceState.tsx");

export const logger = tmp2;
export const getDeviceState = function getDeviceState(arg0) {
  const self = this;
  const apply = _getDeviceState.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};