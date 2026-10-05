// _runtime/metro/00795__.js
import _mod697 from "00697__.js";
import CONSOLE_LEVELS2 from "../00700_CONSOLE_LEVELS.js";
import _mod726 from "00726__.js";

function instrumentConsole() {
  if ("console" in _mod697.GLOBAL_OBJ) {
    const CONSOLE_LEVELS = CONSOLE_LEVELS2.CONSOLE_LEVELS;
    const item = CONSOLE_LEVELS.forEach((item) => {
      let closure_0 = item;
      if (item in closure_0(closure_1[1]).GLOBAL_OBJ.console) {
        const tmpResult = closure_0(closure_1[3]);
        tmpResult.fill(closure_0(closure_1[1]).GLOBAL_OBJ.console, item, (arg0) => {
          CONSOLE_LEVELS2.originalConsoleMethods[level] = arg0;
          return () => {
            const items = [...arguments];
            const obj = { args: items, level };
            const obj2 = level(closure_2_1[0]);
            obj2.triggerHandlers("console", obj);
            const obj3 = level(closure_2_1[2]).originalConsoleMethods[level];
            if (obj3 != null) {
              obj3.apply(level(closure_2_1[1]).GLOBAL_OBJ.console, items);
            }
          };
        });
      }
    });
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const addConsoleInstrumentationHandler = function addConsoleInstrumentationHandler(errorCallback) {
  const obj = _mod726;
  obj.addHandler("console", errorCallback);
  const obj2 = _mod726;
  obj2.maybeInstrument("console", instrumentConsole);
};
