// === Module 12600: ? ===

// Module 12600
import _mod12512 from "module_12512" /* 12512 */;
import _mod12514 from "module_12514" /* 12514 */;
import _mod12515 from "module_12515" /* 12515 */;

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