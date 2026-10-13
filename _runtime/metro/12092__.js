// === Module 12092: ? ===

// Module 12092
import _mod12004 from "module_12004" /* 12004 */;
import _mod12006 from "module_12006" /* 12006 */;
import _mod12007 from "module_12007" /* 12007 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12007.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12006.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12007).GLOBAL_OBJ.console) {
        tmp(12012).fill(tmp(12007).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12006.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12004).triggerHandlers("console", { args: items, level });
            const obj3 = level(12006).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12007).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12004);
          };
        });
        const tmpResult = tmp(12012);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12004.addHandler("console", errorCallback);
  _mod12004.maybeInstrument("console", instrumentConsole);
};