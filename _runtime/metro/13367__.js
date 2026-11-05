// === Module 13367: ? ===

// Module 13367
import _mod13279 from "module_13279" /* 13279 */;
import _mod13281 from "module_13281" /* 13281 */;
import _mod13282 from "module_13282" /* 13282 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13282.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13281.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13282).GLOBAL_OBJ.console) {
        tmp(13287).fill(tmp(13282).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13281.originalConsoleMethods[level] = arg0;
          return () => {
            items = [...arguments];
            level(13279).triggerHandlers("console", { args: items, level });
            const obj3 = level(13281).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13282).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(13279);
          };
        });
        const tmpResult = tmp(13287);
      }
    });
  }
}

export function addConsoleInstrumentationHandler(errorCallback) {
  _mod13279.addHandler("console", errorCallback);
  _mod13279.maybeInstrument("console", instrumentConsole);
}