// === Module 13026: ? ===

// Module 13026
import _mod12938 from "module_12938" /* 12938 */;
import _mod12940 from "module_12940" /* 12940 */;
import _mod12941 from "module_12941" /* 12941 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12941.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12940.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12941).GLOBAL_OBJ.console) {
        tmp(12946).fill(tmp(12941).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12940.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12938).triggerHandlers("console", { args: items, level });
            const obj3 = level(12940).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12941).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12938);
          };
        });
        const tmpResult = tmp(12946);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12938.addHandler("console", errorCallback);
  _mod12938.maybeInstrument("console", instrumentConsole);
};