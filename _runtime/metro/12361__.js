// _runtime/metro/12361__.js
import _mod12273 from "12273__.js";
import _mod12275 from "12275__.js";
import _mod12276 from "12276__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12276.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12275.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12276).GLOBAL_OBJ.console) {
        tmp(12281).fill(tmp(12276).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12275.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12273).triggerHandlers("console", { args: items, level });
            const obj3 = level(12275).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12276).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12273);
          };
        });
        const tmpResult = tmp(12281);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12273.addHandler("console", errorCallback);
  _mod12273.maybeInstrument("console", instrumentConsole);
};
