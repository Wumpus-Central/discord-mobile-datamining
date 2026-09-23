// _runtime/metro/13222__.js
import _mod13134 from "13134__.js";
import _mod13136 from "13136__.js";
import _mod13137 from "13137__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13137.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13136.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13137).GLOBAL_OBJ.console) {
        tmp(13142).fill(tmp(13137).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13136.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(13134).triggerHandlers("console", { args: items, level });
            const obj3 = level(13136).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13137).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(13134);
          };
        });
        const tmpResult = tmp(13142);
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  _mod13134.addHandler("console", errorCallback);
  _mod13134.maybeInstrument("console", instrumentConsole);
};
