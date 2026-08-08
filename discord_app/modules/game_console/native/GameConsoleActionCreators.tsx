// discord_app/modules/game_console/native/GameConsoleActionCreators.tsx
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
      let closure_4 = tmp3;
      let asyncGeneratorStep = tmp5;
      const lib = lib2;
      let c6 = 1;
      yield lib(10878).transferToPlayStation(lib, lib2.id, dependencyMap);
      if (1 === tmp8) {
        c6 = 0;
        const obj1 = lib2(4642);
        const obj2 = { title: null, body: null };
        const intl = lib(1236).intl;
        obj2[0] = intl.string(lib(1236).t.QL1y93);
        const intl2 = lib(1236).intl;
        const obj3 = { deviceName: null };
        obj3[0] = lib.name;
        obj2[1] = intl2.formatToPlainString(lib(1236).t["6ZyNH/"], obj3);
        obj1.show(obj2);
        let c8 = 3;
      } else if (arg0 === 1) {
        c8 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c6 = 0;
      }
      c6 = 0;
      return arg1;
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