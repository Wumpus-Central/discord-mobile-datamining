// _runtime/metro/12651__.js
import _mod12563 from "12563__.js";
import _mod12565 from "12565__.js";
import _mod12566 from "12566__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12566.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12565.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12566).GLOBAL_OBJ.console) {
        tmp(12571).fill(tmp(12566).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12565.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12563).triggerHandlers("console", { args: items, level });
            const obj3 = level(12565).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12566).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12563);
          };
        });
        const tmpResult = tmp(12571);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12563.addHandler("console", errorCallback);
  _mod12563.maybeInstrument("console", instrumentConsole);
};
