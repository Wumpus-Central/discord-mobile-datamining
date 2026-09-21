// _runtime/metro/13136__.js
import _mod13048 from "13048__.js";
import _mod13050 from "13050__.js";
import _mod13051 from "13051__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13051.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13050.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13051).GLOBAL_OBJ.console) {
        tmp(13056).fill(tmp(13051).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13050.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(13048).triggerHandlers("console", { args: items, level });
            const obj3 = level(13050).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13051).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(13048);
          };
        });
        const tmpResult = tmp(13056);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod13048.addHandler("console", errorCallback);
  _mod13048.maybeInstrument("console", instrumentConsole);
};
