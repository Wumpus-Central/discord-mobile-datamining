// === Module 13360: ? ===

// Module 13360
import _mod13272 from "module_13272" /* 13272 */;
import _mod13274 from "module_13274" /* 13274 */;
import _mod13275 from "module_13275" /* 13275 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13275.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13274.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13275).GLOBAL_OBJ.console) {
        tmp(13280).fill(tmp(13275).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13274.originalConsoleMethods[level] = arg0;
          return () => {
            items = [...arguments];
            level(13272).triggerHandlers("console", { args: items, level });
            const obj3 = level(13274).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13275).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(13272);
          };
        });
        const tmpResult = tmp(13280);
      }
    });
  }
}

export function addConsoleInstrumentationHandler(errorCallback) {
  _mod13272.addHandler("console", errorCallback);
  _mod13272.maybeInstrument("console", instrumentConsole);
}