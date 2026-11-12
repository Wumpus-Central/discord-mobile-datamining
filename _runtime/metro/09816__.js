// === Module 9816: ? ===

// Module 9816
import _mod9728 from "module_9728" /* 9728 */;
import _mod9730 from "module_9730" /* 9730 */;
import _mod9731 from "module_9731" /* 9731 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod9731.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod9730.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(9731).GLOBAL_OBJ.console) {
        tmp(9736).fill(tmp(9731).GLOBAL_OBJ.console, item, (arg0) => {
          _mod9730.originalConsoleMethods[level] = arg0;
          return () => {
            items = [...arguments];
            level(9728).triggerHandlers("console", { args: items, level });
            const obj3 = level(9730).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(9731).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(9728);
          };
        });
        const tmpResult = tmp(9736);
      }
    });
  }
}

export function addConsoleInstrumentationHandler(errorCallback) {
  _mod9728.addHandler("console", errorCallback);
  _mod9728.maybeInstrument("console", instrumentConsole);
}