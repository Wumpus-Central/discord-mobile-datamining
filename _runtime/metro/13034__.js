// _runtime/metro/13034__.js
import _mod12946 from "12946__.js";
import _mod12948 from "12948__.js";
import _mod12949 from "12949__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12949.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12948.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12949).GLOBAL_OBJ.console) {
        tmp(12954).fill(tmp(12949).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12948.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12946).triggerHandlers("console", { args: items, level });
            const obj3 = level(12948).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12949).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12946);
          };
        });
        const tmpResult = tmp(12954);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12946.addHandler("console", errorCallback);
  _mod12946.maybeInstrument("console", instrumentConsole);
};
