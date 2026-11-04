// === Module 13359: ? ===

// Module 13359
import _mod13271 from "module_13271" /* 13271 */;
import _mod13273 from "module_13273" /* 13273 */;
import _mod13274 from "module_13274" /* 13274 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13274.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13273.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13274).GLOBAL_OBJ.console) {
        tmp(13279).fill(tmp(13274).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13273.originalConsoleMethods[level] = arg0;
          return () => {
            items = [...arguments];
            level(13271).triggerHandlers("console", { args: items, level });
            const obj3 = level(13273).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13274).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(13271);
          };
        });
        const tmpResult = tmp(13279);
      }
    });
  }
}

export function addConsoleInstrumentationHandler(errorCallback) {
  _mod13271.addHandler("console", errorCallback);
  _mod13271.maybeInstrument("console", instrumentConsole);
}