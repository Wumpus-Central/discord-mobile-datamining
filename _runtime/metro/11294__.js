// === Module 11294: ? ===

// Module 11294
import _mod11206 from "module_11206" /* 11206 */;
import _mod11208 from "module_11208" /* 11208 */;
import _mod11209 from "module_11209" /* 11209 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod11209.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod11208.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(11209).GLOBAL_OBJ.console) {
        tmp(11214).fill(tmp(11209).GLOBAL_OBJ.console, item, (arg0) => {
          _mod11208.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(11206).triggerHandlers("console", { args: items, level });
            const obj3 = level(11208).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(11209).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(11206);
          };
        });
        const tmpResult = tmp(11214);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod11206.addHandler("console", errorCallback);
  _mod11206.maybeInstrument("console", instrumentConsole);
};