// _runtime/metro/13012__.js
import _mod12924 from "12924__.js";
import _mod12926 from "12926__.js";
import _mod12927 from "12927__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12927.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12926.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12927).GLOBAL_OBJ.console) {
        tmp(12932).fill(tmp(12927).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12926.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12924).triggerHandlers("console", { args: items, level });
            const obj3 = level(12926).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12927).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12924);
          };
        });
        const tmpResult = tmp(12932);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12924.addHandler("console", errorCallback);
  _mod12924.maybeInstrument("console", instrumentConsole);
};
