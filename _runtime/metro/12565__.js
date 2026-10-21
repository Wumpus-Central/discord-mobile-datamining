// === Module 12565: ? ===

// Module 12565
import _mod12477 from "module_12477" /* 12477 */;
import _mod12479 from "module_12479" /* 12479 */;
import _mod12480 from "module_12480" /* 12480 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12480.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12479.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12480).GLOBAL_OBJ.console) {
        tmp(12485).fill(tmp(12480).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12479.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12477).triggerHandlers("console", { args: items, level });
            const obj3 = level(12479).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12480).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12477);
          };
        });
        const tmpResult = tmp(12485);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12477.addHandler("console", errorCallback);
  _mod12477.maybeInstrument("console", instrumentConsole);
};