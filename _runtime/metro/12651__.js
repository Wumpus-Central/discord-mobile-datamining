// === Module 12651: ? ===

// Module 12651
import _mod12563 from "module_12563" /* 12563 */;
import _mod12565 from "module_12565" /* 12565 */;
import _mod12566 from "module_12566" /* 12566 */;

function instrumentConsole() {
  if ("console" in _mod12566.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12565.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = closure_0(closure_1[3]);
        tmpResult.fill(closure_0(closure_1[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12565.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            const obj = { args: items, level };
            const obj2 = level(closure_2_1[0]);
            obj2.triggerHandlers("console", obj);
            const obj3 = level(closure_2_1[2]).originalConsoleMethods[level];
            if (obj3) {
              obj3.apply(level(closure_2_1[1]).GLOBAL_OBJ.console, items);
            }
          };
        });
      }
    });
  }
}

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  const obj = _mod12563;
  obj.addHandler("console", errorCallback);
  const obj2 = _mod12563;
  obj2.maybeInstrument("console", instrumentConsole);
};