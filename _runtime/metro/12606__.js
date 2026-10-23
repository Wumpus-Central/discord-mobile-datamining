// _runtime/metro/12606__.js
import _mod12518 from "12518__.js";
import _mod12520 from "12520__.js";
import _mod12521 from "12521__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12521.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12520.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12521).GLOBAL_OBJ.console) {
        tmp(12526).fill(tmp(12521).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12520.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12518).triggerHandlers("console", { args: items, level });
            const obj3 = level(12520).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12521).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12518);
          };
        });
        const tmpResult = tmp(12526);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12518.addHandler("console", errorCallback);
  _mod12518.maybeInstrument("console", instrumentConsole);
};
