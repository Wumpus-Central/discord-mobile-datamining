// _runtime/metro/12666__.js
import _mod12578 from "12578__.js";
import _mod12580 from "12580__.js";
import _mod12581 from "12581__.js";

function instrumentConsole() {
  if ("console" in _mod12581.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = _mod12580.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = closure_0(closure_1[3]);
        tmpResult.fill(closure_0(closure_1[1]).GLOBAL_OBJ.console, item, (arg0) => {
          _mod12580.originalConsoleMethods[level] = arg0;
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
  const obj = _mod12578;
  obj.addHandler("console", errorCallback);
  const obj2 = _mod12578;
  obj2.maybeInstrument("console", instrumentConsole);
};
