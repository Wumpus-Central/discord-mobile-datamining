// === Module 12472: ? ===

// Module 12472
import _mod12384 from "module_12384" /* 12384 */;
import _mod12386 from "module_12386" /* 12386 */;
import _mod12387 from "module_12387" /* 12387 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12387.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12386.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12387).GLOBAL_OBJ.console) {
        tmp(12392).fill(tmp(12387).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12386.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12384).triggerHandlers("console", { args: items, level });
            const obj3 = level(12386).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12387).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12384);
          };
        });
        const tmpResult = tmp(12392);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12384.addHandler("console", errorCallback);
  _mod12384.maybeInstrument("console", instrumentConsole);
};