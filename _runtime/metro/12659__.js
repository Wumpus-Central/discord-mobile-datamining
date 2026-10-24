// _runtime/metro/12659__.js
import _mod12571 from "12571__.js";
import _mod12573 from "12573__.js";
import _mod12574 from "12574__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12574.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12573.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12574).GLOBAL_OBJ.console) {
        tmp(12579).fill(tmp(12574).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12573.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12571).triggerHandlers("console", { args: items, level });
            const obj3 = level(12573).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12574).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12571);
          };
        });
        const tmpResult = tmp(12579);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12571.addHandler("console", errorCallback);
  _mod12571.maybeInstrument("console", instrumentConsole);
};
