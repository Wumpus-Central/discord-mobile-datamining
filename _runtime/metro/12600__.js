// _runtime/metro/12600__.js
import _mod12512 from "12512__.js";
import _mod12514 from "12514__.js";
import _mod12515 from "12515__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12515.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12514.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12515).GLOBAL_OBJ.console) {
        tmp(12520).fill(tmp(12515).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12514.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12512).triggerHandlers("console", { args: items, level });
            const obj3 = level(12514).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12515).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12512);
          };
        });
        const tmpResult = tmp(12520);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12512.addHandler("console", errorCallback);
  _mod12512.maybeInstrument("console", instrumentConsole);
};
