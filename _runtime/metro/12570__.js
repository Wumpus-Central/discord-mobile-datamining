// === Module 12570: ? ===

// Module 12570
import _mod12482 from "module_12482" /* 12482 */;
import _mod12484 from "module_12484" /* 12484 */;
import _mod12485 from "module_12485" /* 12485 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12485.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12484.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12485).GLOBAL_OBJ.console) {
        tmp(12490).fill(tmp(12485).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12484.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12482).triggerHandlers("console", { args: items, level });
            const obj3 = level(12484).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12485).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12482);
          };
        });
        const tmpResult = tmp(12490);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12482.addHandler("console", errorCallback);
  _mod12482.maybeInstrument("console", instrumentConsole);
};