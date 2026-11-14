// _runtime/metro/09883__.js
import _mod9795 from "09795__.js";
import _mod9797 from "09797__.js";
import _mod9798 from "09798__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod9798.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod9797.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(9798).GLOBAL_OBJ.console) {
        tmp(9803).fill(tmp(9798).GLOBAL_OBJ.console, item, (arg0) => {
          _mod9797.originalConsoleMethods[level] = arg0;
          return () => {
            items = [...arguments];
            level(9795).triggerHandlers("console", { args: items, level });
            const obj3 = level(9797).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(9798).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(9795);
          };
        });
        const tmpResult = tmp(9803);
      }
    });
  }
}

export function addConsoleInstrumentationHandler(errorCallback) {
  _mod9795.addHandler("console", errorCallback);
  _mod9795.maybeInstrument("console", instrumentConsole);
}
