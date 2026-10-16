// _runtime/metro/12384__.js
import _mod12296 from "12296__.js";
import _mod12298 from "12298__.js";
import _mod12299 from "12299__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12299.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12298.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12299).GLOBAL_OBJ.console) {
        tmp(12304).fill(tmp(12299).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12298.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12296).triggerHandlers("console", { args: items, level });
            const obj3 = level(12298).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12299).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12296);
          };
        });
        const tmpResult = tmp(12304);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12296.addHandler("console", errorCallback);
  _mod12296.maybeInstrument("console", instrumentConsole);
};
