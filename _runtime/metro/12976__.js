// _runtime/metro/12976__.js
import _mod12888 from "12888__.js";
import _mod12890 from "12890__.js";
import _mod12891 from "12891__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12891.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12890.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12891).GLOBAL_OBJ.console) {
        tmp(12896).fill(tmp(12891).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12890.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12888).triggerHandlers("console", { args: items, level });
            const obj3 = level(12890).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12891).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12888);
          };
        });
        const tmpResult = tmp(12896);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12888.addHandler("console", errorCallback);
  _mod12888.maybeInstrument("console", instrumentConsole);
};
