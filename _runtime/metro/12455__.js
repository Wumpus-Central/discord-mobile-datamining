// === Module 12455: ? ===

// Module 12455
import _mod12367 from "module_12367" /* 12367 */;
import _mod12369 from "module_12369" /* 12369 */;
import _mod12370 from "module_12370" /* 12370 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12370.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12369.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12370).GLOBAL_OBJ.console) {
        tmp(12375).fill(tmp(12370).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12369.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12367).triggerHandlers("console", { args: items, level });
            const obj3 = level(12369).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12370).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12367);
          };
        });
        const tmpResult = tmp(12375);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12367.addHandler("console", errorCallback);
  _mod12367.maybeInstrument("console", instrumentConsole);
};