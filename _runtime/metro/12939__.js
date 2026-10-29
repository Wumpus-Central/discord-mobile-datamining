// === Module 12939: ? ===

// Module 12939
import _mod12851 from "module_12851" /* 12851 */;
import _mod12853 from "module_12853" /* 12853 */;
import _mod12854 from "module_12854" /* 12854 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12854.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12853.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12854).GLOBAL_OBJ.console) {
        tmp(12859).fill(tmp(12854).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12853.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12851).triggerHandlers("console", { args: items, level });
            const obj3 = level(12853).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12854).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12851);
          };
        });
        const tmpResult = tmp(12859);
      }
    });
  }
}

export function addConsoleInstrumentationHandler(errorCallback) {
  _mod12851.addHandler("console", errorCallback);
  _mod12851.maybeInstrument("console", instrumentConsole);
}