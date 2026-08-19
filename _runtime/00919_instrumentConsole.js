// _runtime/00919_instrumentConsole.js
import _mod821 from "metro/00821__.js";
import consoleSandbox from "00824_consoleSandbox.js";
import addHandler from "00850_addHandler.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod821.GLOBAL_OBJ) {
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
            if (obj3 != null) {
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
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(arg0) {
  addHandler.addHandler("console", arg0);
  addHandler.maybeInstrument("console", instrumentConsole);
};