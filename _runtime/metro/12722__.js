// === Module 12722: ? ===

// Module 12722
import _mod12634 from "module_12634" /* 12634 */;
import _mod12636 from "module_12636" /* 12636 */;
import _mod12637 from "module_12637" /* 12637 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12637.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12636.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12637).GLOBAL_OBJ.console) {
        tmp(12642).fill(tmp(12637).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12636.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12634).triggerHandlers("console", { args: items, level });
            const obj3 = level(12636).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12637).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12634);
          };
        });
        const tmpResult = tmp(12642);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12634.addHandler("console", errorCallback);
  _mod12634.maybeInstrument("console", instrumentConsole);
};