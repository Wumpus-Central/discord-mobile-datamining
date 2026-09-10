// === Module 12953: ? ===

// Module 12953
import _mod12865 from "module_12865" /* 12865 */;
import _mod12867 from "module_12867" /* 12867 */;
import _mod12868 from "module_12868" /* 12868 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12868.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12867.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12868).GLOBAL_OBJ.console) {
        tmp(12873).fill(tmp(12868).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12867.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12865).triggerHandlers("console", { args: items, level });
            const obj3 = level(12867).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12868).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12865);
          };
        });
        const tmpResult = tmp(12873);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12865.addHandler("console", errorCallback);
  _mod12865.maybeInstrument("console", instrumentConsole);
};