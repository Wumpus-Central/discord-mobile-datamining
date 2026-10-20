// _runtime/metro/12509__.js
import _mod12421 from "12421__.js";
import _mod12423 from "12423__.js";
import _mod12424 from "12424__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12424.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12423.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12424).GLOBAL_OBJ.console) {
        tmp(12429).fill(tmp(12424).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12423.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12421).triggerHandlers("console", { args: items, level });
            const obj3 = level(12423).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12424).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12421);
          };
        });
        const tmpResult = tmp(12429);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12421.addHandler("console", errorCallback);
  _mod12421.maybeInstrument("console", instrumentConsole);
};
