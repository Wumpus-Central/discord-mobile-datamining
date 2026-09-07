// === Module 12887: ? ===

// Module 12887
import _mod12799 from "module_12799" /* 12799 */;
import _mod12801 from "module_12801" /* 12801 */;
import _mod12802 from "module_12802" /* 12802 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12802.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12801.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12802).GLOBAL_OBJ.console) {
        tmp(12807).fill(tmp(12802).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12801.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12799).triggerHandlers("console", { args: items, level });
            const obj3 = level(12801).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12802).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12799);
          };
        });
        const tmpResult = tmp(12807);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12799.addHandler("console", errorCallback);
  _mod12799.maybeInstrument("console", instrumentConsole);
};