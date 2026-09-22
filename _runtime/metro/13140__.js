// === Module 13140: ? ===

// Module 13140
import _mod13052 from "module_13052" /* 13052 */;
import _mod13054 from "module_13054" /* 13054 */;
import _mod13055 from "module_13055" /* 13055 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13055.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13054.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13055).GLOBAL_OBJ.console) {
        tmp(13060).fill(tmp(13055).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13054.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(13052).triggerHandlers("console", { args: items, level });
            const obj3 = level(13054).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13055).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(13052);
          };
        });
        const tmpResult = tmp(13060);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod13052.addHandler("console", errorCallback);
  _mod13052.maybeInstrument("console", instrumentConsole);
};