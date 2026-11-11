// _runtime/metro/09817__.js
import _mod9729 from "09729__.js";
import _mod9731 from "09731__.js";
import _mod9732 from "09732__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod9732.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod9731.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(9732).GLOBAL_OBJ.console) {
        tmp(9737).fill(tmp(9732).GLOBAL_OBJ.console, item, (arg0) => {
          _mod9731.originalConsoleMethods[level] = arg0;
          return () => {
            items = [...arguments];
            level(9729).triggerHandlers("console", { args: items, level });
            const obj3 = level(9731).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(9732).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(9729);
          };
        });
        const tmpResult = tmp(9737);
      }
    });
  }
}

export function addConsoleInstrumentationHandler(errorCallback) {
  _mod9729.addHandler("console", errorCallback);
  _mod9729.maybeInstrument("console", instrumentConsole);
}
