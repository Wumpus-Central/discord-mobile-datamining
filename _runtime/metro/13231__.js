// _runtime/metro/13231__.js
import _mod13143 from "13143__.js";
import _mod13145 from "13145__.js";
import _mod13146 from "13146__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13146.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13145.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13146).GLOBAL_OBJ.console) {
        tmp(13151).fill(tmp(13146).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13145.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(13143).triggerHandlers("console", { args: items, level });
            const obj3 = level(13145).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13146).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(13143);
          };
        });
        const tmpResult = tmp(13151);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod13143.addHandler("console", errorCallback);
  _mod13143.maybeInstrument("console", instrumentConsole);
};
