// _runtime/metro/12667__.js
import _mod12579 from "12579__.js";
import _mod12581 from "12581__.js";
import _mod12582 from "12582__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12582.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12581.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12582).GLOBAL_OBJ.console) {
        tmp(12587).fill(tmp(12582).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12581.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12579).triggerHandlers("console", { args: items, level });
            const obj3 = level(12581).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12582).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12579);
          };
        });
        const tmpResult = tmp(12587);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12579.addHandler("console", errorCallback);
  _mod12579.maybeInstrument("console", instrumentConsole);
};
