// === Module 12492: ? ===

// Module 12492
import _mod12404 from "module_12404" /* 12404 */;
import _mod12406 from "module_12406" /* 12406 */;
import _mod12407 from "module_12407" /* 12407 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12407.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12406.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12407).GLOBAL_OBJ.console) {
        tmp(12412).fill(tmp(12407).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12406.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12404).triggerHandlers("console", { args: items, level });
            const obj3 = level(12406).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12407).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12404);
          };
        });
        const tmpResult = tmp(12412);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12404.addHandler("console", errorCallback);
  _mod12404.maybeInstrument("console", instrumentConsole);
};