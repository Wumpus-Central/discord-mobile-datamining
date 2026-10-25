// === Module 12664: ? ===

// Module 12664
import _mod12576 from "module_12576" /* 12576 */;
import _mod12578 from "module_12578" /* 12578 */;
import _mod12579 from "module_12579" /* 12579 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12579.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12578.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12579).GLOBAL_OBJ.console) {
        tmp(12584).fill(tmp(12579).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12578.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12576).triggerHandlers("console", { args: items, level });
            const obj3 = level(12578).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12579).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12576);
          };
        });
        const tmpResult = tmp(12584);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12576.addHandler("console", errorCallback);
  _mod12576.maybeInstrument("console", instrumentConsole);
};