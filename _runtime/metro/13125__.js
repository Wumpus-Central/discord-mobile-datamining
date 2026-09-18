// _runtime/metro/13125__.js
import _mod13037 from "13037__.js";
import _mod13039 from "13039__.js";
import _mod13040 from "13040__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13040.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13039.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13040).GLOBAL_OBJ.console) {
        tmp(13045).fill(tmp(13040).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13039.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(13037).triggerHandlers("console", { args: items, level });
            const obj3 = level(13039).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13040).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(13037);
          };
        });
        const tmpResult = tmp(13045);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod13037.addHandler("console", errorCallback);
  _mod13037.maybeInstrument("console", instrumentConsole);
};
