// === Module 11253: ? ===

// Module 11253
import _mod11165 from "module_11165" /* 11165 */;
import _mod11167 from "module_11167" /* 11167 */;
import _mod11168 from "module_11168" /* 11168 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod11168.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod11167.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(11168).GLOBAL_OBJ.console) {
        tmp(11173).fill(tmp(11168).GLOBAL_OBJ.console, item, (arg0) => {
          _mod11167.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(11165).triggerHandlers("console", { args: items, level });
            const obj3 = level(11167).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(11168).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(11165);
          };
        });
        const tmpResult = tmp(11173);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod11165.addHandler("console", errorCallback);
  _mod11165.maybeInstrument("console", instrumentConsole);
};