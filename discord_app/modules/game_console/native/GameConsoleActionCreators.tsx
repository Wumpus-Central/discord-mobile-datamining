// discord_app/modules/game_console/native/GameConsoleActionCreators.tsx
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = arg1;
function _transferToPlaystationWithAlert() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      closure_4 = tmp3;
      closure_3 = tmp5;
      const lib = lib2;
      c6 = 1;
      yield lib(9884).transferToPlayStation(lib, lib2.id, dependencyMap);
      if (1 === tmp8) {
        c6 = 0;
        obj1 = lib2(4832);
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
      return arg1;
    })();
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/game_console/native/GameConsoleActionCreators.tsx");

export const transferToPlaystationWithAlert = function transferToPlaystationWithAlert(closure_1, closure_3, c1) {
  const self = this;
  const apply = _transferToPlaystationWithAlert.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};