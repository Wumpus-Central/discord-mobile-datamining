// === Module 13276: ? ===

// Module 13276
import _mod13188 from "module_13188" /* 13188 */;
import _mod13190 from "module_13190" /* 13190 */;
import _mod13191 from "module_13191" /* 13191 */;

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13191.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13190.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13191).GLOBAL_OBJ.console) {
        tmp(13196).fill(tmp(13191).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13190.originalConsoleMethods[level] = arg0;
          return () => {
            items = [...arguments];
            level(13188).triggerHandlers("console", { args: items, level });
            const obj3 = level(13190).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13191).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(13188);
          };
        });
        const tmpResult = tmp(13196);
      }
    });
  }
}

export function addConsoleInstrumentationHandler(errorCallback) {
  _mod13188.addHandler("console", errorCallback);
  _mod13188.maybeInstrument("console", instrumentConsole);
}