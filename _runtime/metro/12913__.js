// _runtime/metro/12913__.js
import _mod12825 from "12825__.js";
import _mod12827 from "12827__.js";
import _mod12828 from "12828__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12828.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12827.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12828).GLOBAL_OBJ.console) {
        tmp(12833).fill(tmp(12828).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12827.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12825).triggerHandlers("console", { args: items, level });
            const obj3 = level(12827).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12828).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12825);
          };
        });
        const tmpResult = tmp(12833);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12825.addHandler("console", errorCallback);
  _mod12825.maybeInstrument("console", instrumentConsole);
};
