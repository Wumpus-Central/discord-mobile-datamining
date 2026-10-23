// === Module 12625: ? ===

// Module 12625
import _mod12537 from "module_12537" /* 12537 */;
import _mod12539 from "module_12539" /* 12539 */;
import _mod12540 from "module_12540" /* 12540 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12540.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12539.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12540).GLOBAL_OBJ.console) {
        tmp(12545).fill(tmp(12540).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12539.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12537).triggerHandlers("console", { args: items, level });
            const obj3 = level(12539).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12540).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12537);
          };
        });
        const tmpResult = tmp(12545);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12537.addHandler("console", errorCallback);
  _mod12537.maybeInstrument("console", instrumentConsole);
};