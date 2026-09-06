// === Module 9447: beginConsoleTransfer ===

// Module 9447 (beginConsoleTransfer)
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 9448 */;
import transferToXboxDefault from "transferToXbox" /* 9460 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _beginConsoleTransfer(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          if (set.has(closure_1)) {
            c4 = 1;
            c5 = 1;
            let obj1 = { value: GameConsoleActionCreators.fetchDevices(tmp43), done: false };
            return obj1;
          } else {
            transferToXboxDefault(tmp42);
          }
          tmp42 = closure_0;
          tmp43 = closure_1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_130_2 = value;
          if (1 !== closure_130_2.length) {
            let obj3 = closure_131_1(closure_131_2[4]);
            const _HermesInternal = HermesInternal;
            obj3 = { channel: closure_130_0, platform: closure_130_1, impressionName: null };
            const combined = "GameConsoleDeviceListActionSheet" + closure_130_0.id;
            obj3.impressionName = closure_131_0(closure_131_2[7]).ImpressionNames.GAME_CONSOLE_DEVICE_LIST;
            c5 = 3;
            const obj4 = { value: obj3.openLazy(closure_131_0(closure_131_2[6])(closure_131_2[5], closure_131_2.paths), combined, obj3), done: true };
            return obj4;
          } else {
            closure_130_3 = closure_130_2[0];
            obj1 = closure_131_0(closure_131_2[3]);
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj1.transferToPlaystationWithAlert(closure_130_1, closure_130_3, closure_130_0), done: false };
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        obj = { value, done: true };
        return obj;
      }
      c5 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp35) {
      c5 = tmp;
      throw tmp35;
    }
  }
};
const items = [, ];
({ PLAYSTATION: arr[0], PLAYSTATION_STAGING: arr[1] } = fn(1074).PlatformTypes);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/native/beginConsoleTransfer.tsx");

export const beginConsoleTransfer = function beginConsoleTransfer() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};