// _runtime/metro/12128__.js
import _mod12040 from "12040__.js";
import _mod12042 from "12042__.js";
import _mod12043 from "12043__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12043.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12042.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12043).GLOBAL_OBJ.console) {
        tmp(12048).fill(tmp(12043).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12042.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12040).triggerHandlers("console", { args: items, level });
            const obj3 = level(12042).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12043).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12040);
          };
        });
        const tmpResult = tmp(12048);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12040.addHandler("console", errorCallback);
  _mod12040.maybeInstrument("console", instrumentConsole);
};
