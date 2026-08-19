// _runtime/07824_instrumentConsole.js
import addHandler from "07736_addHandler.js";
import consoleSandbox from "07738_consoleSandbox.js";
import getGlobalSingleton from "07739_getGlobalSingleton.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in getGlobalSingleton.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = consoleSandbox.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item, index) => {
      const callback = item;
      if (item in callback(table[1]).GLOBAL_OBJ.console) {
        tmp(table[3]).fill(tmp(table[1]).GLOBAL_OBJ.console, item, (arg0) => {
          item(closure_1_1[2]).originalConsoleMethods[item] = arg0;
          return () => {
            const items = [...arguments];
            item(closure_1_1[0]).triggerHandlers("console", { args: items, level: closure_0 });
            const obj3 = item(closure_1_1[2]).originalConsoleMethods[closure_0];
            if (obj3) {
              obj3.apply(item(closure_1_1[1]).GLOBAL_OBJ.console, items);
            }
            const obj2 = item(closure_1_1[0]);
          };
        });
        const tmpResult = tmp(table[3]);
      }
    });
  }
}
arg5.addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  addHandler.addHandler("console", arg0);
  addHandler.maybeInstrument("console", instrumentConsole);
};