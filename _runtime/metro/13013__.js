// _runtime/metro/13013__.js
import _mod12925 from "12925__.js";
import _mod12927 from "12927__.js";
import _mod12928 from "12928__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12928.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12927.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12928).GLOBAL_OBJ.console) {
        tmp(12933).fill(tmp(12928).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12927.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12925).triggerHandlers("console", { args: items, level });
            const obj3 = level(12927).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12928).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12925);
          };
        });
        const tmpResult = tmp(12933);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12925.addHandler("console", errorCallback);
  _mod12925.maybeInstrument("console", instrumentConsole);
};
