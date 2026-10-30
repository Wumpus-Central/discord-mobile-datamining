// _runtime/metro/13090__.js
import _mod13002 from "13002__.js";
import _mod13004 from "13004__.js";
import _mod13005 from "13005__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13005.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13004.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13005).GLOBAL_OBJ.console) {
        tmp(13010).fill(tmp(13005).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13004.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            level(13002).triggerHandlers("console", { args: items, level });
            const obj3 = level(13004).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13005).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(13002);
          };
        });
        const tmpResult = tmp(13010);
      }
    });
  }
}

export function addConsoleInstrumentationHandler(errorCallback) {
  _mod13002.addHandler("console", errorCallback);
  _mod13002.maybeInstrument("console", instrumentConsole);
}
