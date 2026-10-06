// === Module 9460: beginConsoleTransfer ===

// Module 9460 (beginConsoleTransfer)
import Constants from "Constants" /* 1085 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 9461 */;
import transferToXboxDefault from "transferToXbox" /* 9473 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_3, length;

let obj = function _beginConsoleTransfer() {
  obj = _asyncToGenerator(async (channel, platform) => {
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj2;
      let obj7;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              length = undefined;
              closure_3 = undefined;
              if (set.has(platform)) {
                c4 = 1;
                c5 = 1;
                const obj5 = { value: obj7.fetchDevices(platform), done: false };
                obj7 = GameConsoleActionCreators;
                return obj5;
              } else {
                transferToXboxDefault(channel);
              }
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              length = value;
              if (1 !== length.length) {
                const openLazy = closure_131_1(closure_131_2[4]).openLazy;
                const _HermesInternal = HermesInternal;
                closure_131_1(closure_131_2[4]);
                const obj8 = { channel, platform, impressionName: closure_131_0(closure_131_2[7]).ImpressionNames.GAME_CONSOLE_DEVICE_LIST };
                const tmp22 = closure_131_0(closure_131_2[6])(closure_131_2[5], closure_131_2.paths);
                const combined = "GameConsoleDeviceListActionSheet" + channel.id;
                c5 = 3;
                const obj9 = { value: openLazy(tmp22, combined, obj8), done: true };
                return obj9;
              } else {
                closure_3 = length[0];
                c4 = 2;
                c5 = 1;
                const obj10 = { value: obj2.transferToPlaystationWithAlert(platform, closure_3, channel), done: false };
                obj2 = closure_131_0(closure_131_2[3]);
                return obj10;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp35) {
          c5 = 3;
          throw tmp35;
        }
      }
    })();
  });
  return obj(...arguments);
};
const items = [, ];
({ PLAYSTATION: arr[0], PLAYSTATION_STAGING: arr[1] } = Constants.PlatformTypes);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/game_console/native/beginConsoleTransfer.tsx");

export const beginConsoleTransfer = function beginConsoleTransfer() {
  return obj(...arguments);
};