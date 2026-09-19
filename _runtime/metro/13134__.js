// _runtime/metro/13134__.js
import _mod13046 from "13046__.js";
import _mod13048 from "13048__.js";
import _mod13049 from "13049__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13049.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13048.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13049).GLOBAL_OBJ.console) {
        tmp(13054).fill(tmp(13049).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13048.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(13046).triggerHandlers("console", { args: items, level });
            const obj3 = level(13048).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13049).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(13046);
          };
        });
        const tmpResult = tmp(13054);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod13046.addHandler("console", errorCallback);
  _mod13046.maybeInstrument("console", instrumentConsole);
};
