// === Module 13364: ? ===

// Module 13364
import _mod13276 from "module_13276" /* 13276 */;
import _mod13278 from "module_13278" /* 13278 */;
import _mod13279 from "module_13279" /* 13279 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13279.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13278.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13279).GLOBAL_OBJ.console) {
        tmp(13284).fill(tmp(13279).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13278.originalConsoleMethods[level] = arg0;
          return () => {
            items = [...arguments];
            level(13276).triggerHandlers("console", { args: items, level });
            const obj3 = level(13278).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13279).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(13276);
          };
        });
        const tmpResult = tmp(13284);
      }
    });
  }
}

export function addConsoleInstrumentationHandler(errorCallback) {
  _mod13276.addHandler("console", errorCallback);
  _mod13276.maybeInstrument("console", instrumentConsole);
}