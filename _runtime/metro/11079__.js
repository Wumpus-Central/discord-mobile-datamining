// _runtime/metro/11079__.js
import _mod10991 from "10991__.js";
import _mod10993 from "10993__.js";
import _mod10994 from "10994__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod10994.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod10993.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(10994).GLOBAL_OBJ.console) {
        tmp(10999).fill(tmp(10994).GLOBAL_OBJ.console, item, (arg0) => {
          _mod10993.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(10991).triggerHandlers("console", { args: items, level });
            const obj3 = level(10993).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(10994).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(10991);
          };
        });
        const tmpResult = tmp(10999);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod10991.addHandler("console", errorCallback);
  _mod10991.maybeInstrument("console", instrumentConsole);
};
