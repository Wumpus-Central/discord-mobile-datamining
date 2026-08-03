// === Module 9220: _beginConsoleTransfer ===

// Module 9220 (_beginConsoleTransfer)
import TransferFooter from "TransferFooter";
import set from "disconnectRemote";

const require = arg1;
function _beginConsoleTransfer() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c5 = 2;
          if (0 === set) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let TransferFooter = tmp5;
              let closure_2 = tmp2;
              closure_2 = undefined;
              TransferFooter = undefined;
              if (set.has(callback)) {
                set = 1;
                c5 = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = lib(outer1_2[2]).fetchDevices(tmp44);
                return obj1;
              } else {
                callback(outer1_2[8])(tmp43);
              }
              tmp43 = lib;
              tmp44 = callback;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_2 = arg1;
              if (1 !== closure_2.length) {
                let obj3 = callback(closure_2[4]);
                const _HermesInternal = HermesInternal;
                obj3 = { channel: null, platform: null, impressionName: null };
                obj3[0] = lib;
                obj3[1] = callback;
                const combined = "GameConsoleDeviceListActionSheet" + lib.id;
                obj3[2] = lib(closure_2[7]).ImpressionNames.GAME_CONSOLE_DEVICE_LIST;
                c5 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = obj3.openLazy(lib(closure_2[6])(closure_2[5], closure_2.paths), combined, obj3);
                return obj4;
              } else {
                TransferFooter = closure_2[0];
                obj1 = lib(closure_2[3]);
                set = 2;
                c5 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = obj1.transferToPlaystationWithAlert(callback, TransferFooter, lib);
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp35) {
          c5 = tmp;
          throw tmp35;
        }
      }
    })();
  });
  const _beginConsoleTransfer = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const items = [, ];
({ PLAYSTATION: arr[0], PLAYSTATION_STAGING: arr[1] } = require("ME").PlatformTypes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/game_console/native/beginConsoleTransfer.tsx");

export const beginConsoleTransfer = function beginConsoleTransfer(channel, type) {
  const self = this;
  const apply = _beginConsoleTransfer.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};