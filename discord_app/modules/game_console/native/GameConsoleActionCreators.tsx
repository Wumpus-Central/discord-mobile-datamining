// === Module 9468: game_console/GameConsoleActionCreators ===

// Module 9468 (game_console/GameConsoleActionCreators)
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 9461 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_4, closure_5, show;

let obj = function _transferToPlaystationWithAlert() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let name = arg0;
    const id = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let intl;
      let intl2;
      let obj7;
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              name = id;
              c6 = 1;
              const obj4 = GameConsoleActionCreators;
              show = obj4.transferToPlayStation(name, id.id, closure_2);
              c7 = 2;
              c8 = 1;
              return { value: show, done: false };
            }
          } else {
            if (1 === tmp4) {
              c6 = 0;
              show = closure_132_1(closure_132_2[2]).show;
              const obj6 = { title: intl.string(closure_132_0(closure_132_2[3]).t.QL1y93), body: intl2.formatToPlainString(closure_132_0(closure_132_2[3]).t["6ZyNH/"], obj7) };
              closure_132_1(closure_132_2[2]);
              intl = closure_132_0(closure_132_2[3]).intl;
              intl2 = closure_132_0(closure_132_2[3]).intl;
              obj7 = { deviceName: name.name };
              show(obj6);
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              c6 = 0;
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp26) {
          closure_5 = tmp26;
          if (0 === c6) {
            c8 = 3;
            throw tmp26;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/game_console/native/GameConsoleActionCreators.tsx");

export const transferToPlaystationWithAlert = function transferToPlaystationWithAlert() {
  return obj(...arguments);
};