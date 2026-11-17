// === Module 9896: ? ===

// Module 9896
import _mod9808 from "module_9808" /* 9808 */;
import _mod9810 from "module_9810" /* 9810 */;
import _mod9811 from "module_9811" /* 9811 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod9811.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod9810.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(9811).GLOBAL_OBJ.console) {
        tmp(9816).fill(tmp(9811).GLOBAL_OBJ.console, item, (arg0) => {
          _mod9810.originalConsoleMethods[level] = arg0;
          return () => {
            items = [...arguments];
            level(9808).triggerHandlers("console", { args: items, level });
            const obj3 = level(9810).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(9811).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(9808);
          };
        });
        const tmpResult = tmp(9816);
      }
    });
  }
}

export function addConsoleInstrumentationHandler(errorCallback) {
  _mod9808.addHandler("console", errorCallback);
  _mod9808.maybeInstrument("console", instrumentConsole);
}