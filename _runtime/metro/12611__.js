// === Module 12611: ? ===

// Module 12611
import _mod12523 from "module_12523" /* 12523 */;
import _mod12525 from "module_12525" /* 12525 */;
import _mod12526 from "module_12526" /* 12526 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12526.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12525.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12526).GLOBAL_OBJ.console) {
        tmp(12531).fill(tmp(12526).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12525.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12523).triggerHandlers("console", { args: items, level });
            const obj3 = level(12525).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12526).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12523);
          };
        });
        const tmpResult = tmp(12531);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12523.addHandler("console", errorCallback);
  _mod12523.maybeInstrument("console", instrumentConsole);
};