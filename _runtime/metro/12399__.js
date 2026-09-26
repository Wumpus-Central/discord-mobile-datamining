// _runtime/metro/12399__.js
import _mod12311 from "12311__.js";
import _mod12313 from "12313__.js";
import _mod12314 from "12314__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12314.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12313.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12314).GLOBAL_OBJ.console) {
        tmp(12319).fill(tmp(12314).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12313.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12311).triggerHandlers("console", { args: items, level });
            const obj3 = level(12313).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12314).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12311);
          };
        });
        const tmpResult = tmp(12319);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12311.addHandler("console", errorCallback);
  _mod12311.maybeInstrument("console", instrumentConsole);
};
