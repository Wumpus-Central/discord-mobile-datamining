// _runtime/metro/12953__.js
import _mod12865 from "12865__.js";
import _mod12867 from "12867__.js";
import _mod12868 from "12868__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12868.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12867.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12868).GLOBAL_OBJ.console) {
        tmp(12873).fill(tmp(12868).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12867.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12865).triggerHandlers("console", { args: items, level });
            const obj3 = level(12867).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12868).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12865);
          };
        });
        const tmpResult = tmp(12873);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12865.addHandler("console", errorCallback);
  _mod12865.maybeInstrument("console", instrumentConsole);
};
