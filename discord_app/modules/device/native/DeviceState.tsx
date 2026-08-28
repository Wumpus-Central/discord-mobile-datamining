// === Module 7442: _getDeviceState ===

// Module 7442 (_getDeviceState)
import timestampDefault from "timestamp" /* 3 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;

const require = arg1;
function _getDeviceState() {
  const self = this;
  const tmp = callback(() => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
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
              closure_2 = tmp3;
              let table = tmp5;
              let fallback;
              obj1 = fallback;
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
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const tmp2 = new timestampDefault("native/DeviceState.tsx");
let closure_4 = tmp2;
const result = require("set").fileFinishedImporting("modules/device/native/DeviceState.tsx");

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