import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
function _transferToPlaystationWithAlert() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_4 = tmp3;
              let asyncGeneratorStep = tmp5;
              const lib = lib2;
              let c6 = 1;
              c7 = 2;
              c8 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = lib(10773).transferToPlayStation(lib, lib2.id, dependencyMap);
              return obj1;
            }
          } else {
            if (1 === tmp8) {
              c6 = 0;
              obj1 = lib2(4623);
              const obj2 = { title: null, body: null };
              const intl = lib(1236).intl;
              obj2[0] = intl.string(lib(1236).t.QL1y93);
              const intl2 = lib(1236).intl;
              const obj3 = { deviceName: null };
              obj3[0] = lib.name;
              obj2[1] = intl2.formatToPlainString(lib(1236).t["6ZyNH/"], obj3);
              obj1.show(obj2);
              c8 = 3;
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c6 = 0;
            }
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp29) {
          let closure_5 = tmp29;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp29;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  const _transferToPlaystationWithAlert = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/game_console/native/GameConsoleActionCreators.tsx");

export const transferToPlaystationWithAlert = function transferToPlaystationWithAlert(closure_1, asyncGeneratorStep, c1) {
  const self = this;
  const apply = _transferToPlaystationWithAlert.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};