// _runtime/metro/12883__.js
import _mod12795 from "12795__.js";
import _mod12797 from "12797__.js";
import _mod12798 from "12798__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12798.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12797.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12798).GLOBAL_OBJ.console) {
        tmp(12803).fill(tmp(12798).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12797.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12795).triggerHandlers("console", { args: items, level });
            const obj3 = level(12797).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12798).GLOBAL_OBJ.console, items);
            }
          };
        });
        const tmpResult = tmp(12803);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  _mod12795.addHandler("console", arg0);
  _mod12795.maybeInstrument("console", instrumentConsole);
};
