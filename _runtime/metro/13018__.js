// _runtime/metro/13018__.js
import _mod12930 from "12930__.js";
import _mod12932 from "12932__.js";
import _mod12933 from "12933__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12933.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12932.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12933).GLOBAL_OBJ.console) {
        tmp(12938).fill(tmp(12933).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12932.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12930).triggerHandlers("console", { args: items, level });
            const obj3 = level(12932).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12933).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12930);
          };
        });
        const tmpResult = tmp(12938);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12930.addHandler("console", errorCallback);
  _mod12930.maybeInstrument("console", instrumentConsole);
};
