// _runtime/metro/12675__.js
import _mod12587 from "12587__.js";
import _mod12589 from "12589__.js";
import _mod12590 from "12590__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12590.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12589.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12590).GLOBAL_OBJ.console) {
        tmp(12595).fill(tmp(12590).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12589.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12587).triggerHandlers("console", { args: items, level });
            const obj3 = level(12589).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12590).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12587);
          };
        });
        const tmpResult = tmp(12595);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12587.addHandler("console", errorCallback);
  _mod12587.maybeInstrument("console", instrumentConsole);
};
