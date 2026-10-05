// discord_app/modules/device/native/DeviceState.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let c5, c6, closure_3;

let obj = function _getDeviceState() {
  obj = _asyncToGenerator(async () => {
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let fallback;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            fallback = undefined;
            let obj5 = closure_0;
            if (closure_0 === undefined) {
              obj5 = { fallback: true };
            }
            fallback = obj5.fallback;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else {
          let DEFAULT_DEVICE_STATE;
          if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              c4 = 1;
              const obj4 = closure_130_1(closure_130_2[2]);
              DEFAULT_DEVICE_STATE = obj4.getDeviceStateInfo();
              c5 = 3;
              c6 = 1;
              const obj7 = { value: DEFAULT_DEVICE_STATE, done: false };
              return obj7;
            }
          } else if (2 === c5) {
            c4 = 0;
            let closure_1 = closure_3;
            DEFAULT_DEVICE_STATE = closure_130_4.warn("Failed to get device state:", closure_1);
            const tmp11 = fallback;
            if (tmp11) {
              DEFAULT_DEVICE_STATE = closure_130_0(closure_130_2[3]).DEFAULT_DEVICE_STATE;
            } else {
              DEFAULT_DEVICE_STATE = closure_1;
            }
            c6 = 3;
            const obj8 = { value: DEFAULT_DEVICE_STATE, done: true };
            return obj8;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
      } catch (tmp19) {
        closure_3 = tmp19;
        if (0 === c4) {
          c6 = 3;
          throw tmp19;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const tmp2 = new LoggerDefault("native/DeviceState.tsx");
let closure_4 = tmp2;
const result = size.fileFinishedImporting("modules/device/native/DeviceState.tsx");

export const logger = tmp2;
export const getDeviceState = function getDeviceState() {
  return obj(...arguments);
};
