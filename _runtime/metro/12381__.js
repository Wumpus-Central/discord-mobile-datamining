// _runtime/metro/12381__.js
import _mod12293 from "12293__.js";
import _mod12295 from "12295__.js";
import _mod12296 from "12296__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod12296.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12295.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(12296).GLOBAL_OBJ.console) {
        tmp(12301).fill(tmp(12296).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12295.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(12293).triggerHandlers("console", { args: items, level });
            const obj3 = level(12295).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(12296).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(12293);
          };
        });
        const tmpResult = tmp(12301);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod12293.addHandler("console", errorCallback);
  _mod12293.maybeInstrument("console", instrumentConsole);
};
