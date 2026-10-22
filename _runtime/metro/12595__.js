// _runtime/metro/12595__.js
import _mod12507 from "12507__.js";
import _mod12509 from "12509__.js";
import _mod12510 from "12510__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12510.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12509.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12510).GLOBAL_OBJ.console) {
        tmp(12515).fill(tmp(12510).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12509.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12507).triggerHandlers("console", { args: items, level });
            const obj3 = level(12509).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12510).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12507);
          };
        });
        const tmpResult = tmp(12515);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12507.addHandler("console", errorCallback);
  _mod12507.maybeInstrument("console", instrumentConsole);
};
