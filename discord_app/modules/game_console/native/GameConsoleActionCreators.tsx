// discord_app/modules/game_console/native/GameConsoleActionCreators.tsx
import GameConsoleActionCreators from "../GameConsoleActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_4 = async function _transferToPlaystationWithAlert(arg0, arg1, arg2) {
  closure_0 = arg0;
  let id = arg1;
  closure_2 = arg2;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    closure_4 = tmp3;
    closure_3 = tmp5;
    closure_131_0 = id;
    await GameConsoleActionCreators.transferToPlayStation(closure_0, id.id, closure_2);
    if (1 === tmp8) {
      c6 = 0;
      const obj2 = { title: null, body: null };
      const intl = closure_132_0(closure_132_2[3]).intl;
      obj2.title = intl.string(closure_132_0(closure_132_2[3]).t.QL1y93);
      const intl2 = closure_132_0(closure_132_2[3]).intl;
      obj2.body = intl2.formatToPlainString(closure_132_0(closure_132_2[3]).t["6ZyNH/"], {
        deviceName: closure_131_0.name,
      });
      closure_132_1(closure_132_2[2]).show(obj2);
      c8 = 3;
      closure_132_1(closure_132_2[2]);
    } else if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c6 = 0;
    }
    return value;
  })();
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/native/GameConsoleActionCreators.tsx");

export const transferToPlaystationWithAlert = function transferToPlaystationWithAlert() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
