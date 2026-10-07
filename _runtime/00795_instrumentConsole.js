// _runtime/00795_instrumentConsole.js
import _mod697 from "metro/00697__.js";
import consoleSandbox from "00700_consoleSandbox.js";
import _mod726 from "metro/00726__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod697.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = consoleSandbox.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(697).GLOBAL_OBJ.console) {
        tmp(698).fill(tmp(697).GLOBAL_OBJ.console, item, (arg0) => {
          consoleSandbox.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(726).triggerHandlers("console", { args: items, level });
            const obj3 = level(700).originalConsoleMethods[level];
            if (obj3 != null) {
              obj3.apply(level(697).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(726);
          };
        });
        const tmpResult = tmp(698);
      }
    });
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod726.addHandler("console", errorCallback);
  _mod726.maybeInstrument("console", instrumentConsole);
};
