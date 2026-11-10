// === Module 13378: ? ===

// Module 13378
import _mod13290 from "module_13290" /* 13290 */;
import _mod13292 from "module_13292" /* 13292 */;
import _mod13293 from "module_13293" /* 13293 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13293.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13292.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13293).GLOBAL_OBJ.console) {
        tmp(13298).fill(tmp(13293).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13292.originalConsoleMethods[level] = arg0;
          return () => {
            items = [...arguments];
            level(13290).triggerHandlers("console", { args: items, level });
            const obj3 = level(13292).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13293).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(13290);
          };
        });
        const tmpResult = tmp(13298);
      }
    });
  }
}

export function addConsoleInstrumentationHandler(errorCallback) {
  _mod13290.addHandler("console", errorCallback);
  _mod13290.maybeInstrument("console", instrumentConsole);
}