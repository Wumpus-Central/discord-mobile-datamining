// === Module 12666: ? ===

// Module 12666
import _mod12578 from "module_12578" /* 12578 */;
import _mod12580 from "module_12580" /* 12580 */;
import _mod12581 from "module_12581" /* 12581 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12581.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12580.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12581).GLOBAL_OBJ.console) {
        tmp(12586).fill(tmp(12581).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12580.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12578).triggerHandlers("console", { args: items, level });
            const obj3 = level(12580).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12581).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12578);
          };
        });
        const tmpResult = tmp(12586);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12578.addHandler("console", errorCallback);
  _mod12578.maybeInstrument("console", instrumentConsole);
};