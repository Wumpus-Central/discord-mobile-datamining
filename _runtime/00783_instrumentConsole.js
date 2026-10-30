// _runtime/00783_instrumentConsole.js
import _mod685 from "metro/00685__.js";
import consoleSandbox from "00688_consoleSandbox.js";
import _mod714 from "metro/00714__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod685.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = consoleSandbox.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(685).GLOBAL_OBJ.console) {
        tmp(686).fill(tmp(685).GLOBAL_OBJ.console, item, (arg0) => {
          consoleSandbox.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(714).triggerHandlers("console", { args: items, level });
            const obj3 = level(688).originalConsoleMethods[level];
            if (obj3 != null) {
              obj3.apply(level(685).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(714);
          };
        });
        const tmpResult = tmp(686);
      }
    });
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function addConsoleInstrumentationHandler(errorCallback) {
  _mod714.addHandler("console", errorCallback);
  _mod714.maybeInstrument("console", instrumentConsole);
}
