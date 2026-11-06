// _runtime/metro/13341__.js
import _mod13253 from "13253__.js";
import _mod13255 from "13255__.js";
import _mod13256 from "13256__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentConsole() {
  if ("console" in _mod13256.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod13255.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      closure_0 = item;
      if (item in closure_0(13256).GLOBAL_OBJ.console) {
        tmp(13261).fill(tmp(13256).GLOBAL_OBJ.console, item, (arg0) => {
          _mod13255.originalConsoleMethods[level] = arg0;
          return () => {
            items = [...arguments];
            level(13253).triggerHandlers("console", { args: items, level });
            const obj3 = level(13255).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(13256).GLOBAL_OBJ.console, items);
            }
            const obj = { args: items, level };
            const obj2 = level(13253);
          };
        });
        const tmpResult = tmp(13261);
      }
    });
  }
}

export function addConsoleInstrumentationHandler(errorCallback) {
  _mod13253.addHandler("console", errorCallback);
  _mod13253.maybeInstrument("console", instrumentConsole);
}
